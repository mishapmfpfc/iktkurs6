import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  productsUrl: string;
  categoriesUrl: string;
  
  public products: Product[];
  public categories: Category[];
  
    constructor(private http: HttpClient) {
  
      this.productsUrl = 'http://services.odata.org/V3/Northwind/Northwind.svc/Products?$format=json';
      this.categoriesUrl = 'http://services.odata.org/V3/Northwind/Northwind.svc/Categories?$format=json';
    }
  
    getProducts(): Observable<Product[]> {
      return this.http.get(this.productsUrl).map(response => response['value']);
    }
  
    getCategories(): Observable<Category[]> {
      return this.http.get(this.categoriesUrl).map(response => response['value']);
    }

}
