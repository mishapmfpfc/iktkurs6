import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { FormsModule } from '@angular/forms';
import { Category } from '../../models/category.model';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products: Product[];

  constructor(private loginService: LoginService,
    private dataService: DataService,
  private router: Router) {

    if (!this.loginService.isActiveSession()) {
      this.router.navigate(['/']);
    }

  }

  ngOnInit() {

    this.dataService.categories = [];
    this.dataService.getCategories()
    .subscribe(categories => {
      categories.forEach((p) => this.dataService.categories.push(
          new Category(p['CategoryID'], p['CategoryName'])
        )
      );

      this.products = [];
      this.dataService.getProducts()
      .subscribe(products => {
          products.forEach((p) => this.products.push(
            new Product(p['ProductID'], p['ProductName'], this.getCategoryByCategoryId(p['CategoryID']), p['UnitPrice'])
          )
        );

        this.dataService.products = this.products;
      });

    });

    /*
    this.products = [];
    const product1 = new Product(1, 'Proizvod Prvi', new Category(1, 'Kategorija 1'), 12);
    const product2 = new Product(2, 'Proizvod Drugi', new Category(1, 'Kategorija 2'), 10);
    const product3 = new Product(3, 'Proizvod Treci', new Category(1, 'Kategorija 1'), 5);
    const product4 = new Product(4, 'Proizvod Cetvrti', new Category(1, 'Kategorija 3'), 50);

    this.products.push(product1);
    this.products.push(product2);
    this.products.push(product3);
    this.products.push(product4);*/

  }

  getCategoryByCategoryId(id: number) {
    for (const i in this.dataService.categories) {
      if (this.dataService.categories[i].id === id) {
        return this.dataService.categories[i];
      }
    }
  }

}
