import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import{ProductMaster} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

    createProduct(product: ProductMaster) {
      return this.http.post("/inv/manage/product/create",product);
  }

  getProductList() :Observable<any>{
    return this.http.get<ProductMaster[]>("/inv/manage/product/list");
  }

   getProductById(productId: any): Observable<any>{
      return this.http.get<ProductMaster>( "/inv/manage/product/id/" + productId);
   }

  updateProduct(product: ProductMaster) {
       return this.http.put("/inv/manage/product/update/",product
      );
   }

}
