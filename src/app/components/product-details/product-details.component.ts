import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from '../../models/category.model';
import { LoginService } from '../../services/login.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

product: Product;
id: number;
  constructor(private route: ActivatedRoute, private loginService: LoginService,
    private dataService: DataService,
    private router: Router) {

      if (!this.loginService.isActiveSession()) {
        this.router.navigate(['/']);
      }

  }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      debugger;
      this.id = params['id'];
      this.product = this.getProductByProductId(this.id);
    });


  }

  getProductByProductId(id: number) {
debugger;
    for (const i in this.dataService.products) {
      if (this.dataService.products[i].id == id) {
        return this.dataService.products[i];
      }
    }

  }

}
