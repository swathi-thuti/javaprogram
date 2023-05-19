import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import{StoreInward} from '../models/StoreInward';
import {StoreStorageDetailsDTO} from '../models/StoreStorageDetailsDTO';

//environment.apiUrl is set to 'http://localhost:8082/inv'

@Injectable({
  providedIn: 'root'
})
export class ApiIntegrationService {

  constructor(private http: HttpClient) { }

  getInwardsList():Observable<any>{
     return this.http.get(environment.apiUrl + "/inwardsProducts/list?pageNum=0&pageSize=10&sortByField=createdBy&sortDirection=asc");
  }

  //This is used for viewing store inward list
  getStoreInwardsUIList():Observable<any>{
     //return this.http.get(environment.apiUrl + "/inwards/viewStoreInwardsUIList");
     return this.http.get<StoreInward[]>("/inv/inwards/viewStoreInwardsUIList");
  }

  //This is used for deleting store inward
  deleteStoreInward(storeInwardId: number):Observable<any>{
    return this.http.delete("inv/inwards/deleteById/" + storeInwardId);
  }

  getInwardsById(id: number):Observable<any>{
    return this.http.get(environment.apiUrl + "/inwardsById/" + id);
  }

  createStoreInwards(inwardsFormInput: any):Observable<any>{
     return this.http.post("inv/inwards/create" , inwardsFormInput);
  }

  getStoreInwardsById(id:number):Observable<any>{
     return this.http.get(environment.apiUrl + "/inwards/viewById/" + id);
  }

  updateStoreInwards(id:number, updateInwardsFormInput: any):Observable<any>{
     return this.http.put(`inv/inwards/update/${id}`, updateInwardsFormInput);
  }

}
