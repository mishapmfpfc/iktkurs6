import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addProduct(product: Product) {
    alert(product.quantity * product.price);
  }

  gotoDetails(product: Product) {
    this.router.navigate(['/product-details/' + product.id]);
  }

}
