import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable}  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountItemUnitsService {

  constructor(private http: HttpClient) { }

  getAccountItemUnits() :Observable<any>{
     return this.http.get(environment.apiUrl + "/productUnit/list");
    }
}
