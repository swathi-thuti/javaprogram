import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { InwardCatType } from '../models/inwardcattype';


@Injectable({
  providedIn: 'root'
})
export class InwardCatTypeService {


  constructor( private http: HttpClient ) { }

    getInwardCategoryList()
    {
     // const token = this.user.token; //set the token
      //const headers = new HttpHeaders().set("Authorization", "Bearer " + token); // set the JWT token in the headers
      return this.http.get<InwardCatType[]>( "/inv/manage/inwcat/list");
    }

     createCategoryVal( categoryForm: any)
      {
          return this.http.post("/inv/manage/inwcat/create", categoryForm);
      }

      getInwardCategorybyId(id:number)
      {
           return this.http.get<InwardCatType>("/inv/manage/inwcat/list/"+id);
      }

      updateCategoryType( updateForm: any ) {
            return this.http.put("/inv/manage/inwcat/update", updateForm);
                  }

      duplicateShortCode( duplicateForm: any, duplicate: any) {
          return this.http.get<InwardCatType>("/inv/manage/inwcat/duplicate/{shortCode}"+ duplicateForm, duplicate);
      }

}


