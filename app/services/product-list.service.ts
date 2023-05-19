import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient,public user:User) { }

  getProductList() :Observable<any>{
  //const token = this.user.token;
  //const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
   //return this.http.get(environment.apiUrl + "/product/list");
   return this.http.get( "inv/product/list");
  }
}
