import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class EditItemUnitsService {

  constructor(private http: HttpClient,public user:User) { }
   /* getEditItemUnits() :Observable<any>{
   const token =this.user.token;
   const headers =new HttpHeaders().set('Authorization', 'Bearer ' + token);
   return this.http.get(environment.apiUrl + "/accountUnit/update");
   }
 */
    /*  getItemDetails(userId: any): Observable<any> {
         return this.http.get(environment.apiUrl + "/accountUnit/id/" + refId);
     }
 */


   updateDetailsItem(frmUpdUnit: any){
     return this.http.put(environment.apiUrl+"/productUnit/update" , frmUpdUnit);    /* ,updateUnitForm */

   }

   getAccountItemUnitsbyid(id:number)
         {
              // console.log(`${environment.apiUrl}/productUnit/editUnit/${id}`);

             return this.http.get(`${environment.apiUrl}/productUnit/editUnit/${id}`);  /* editAccImUt */
             //return 0;

         }


}
