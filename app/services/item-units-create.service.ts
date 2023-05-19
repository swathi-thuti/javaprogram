import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ItemUnitsCreateService {

  constructor(private http: HttpClient) { }

  createUnitsItem( unitsForm: any)
  {
      return this.http.post(environment.apiUrl+"/productUnit/create", unitsForm);
  }
}
