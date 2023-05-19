import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { AccountUser } from '../models/accountUser';

@Injectable({
  providedIn: "root",
})

export class AccountUserManagementService {
  constructor(private http: HttpClient) {}

  createUser(userDetails: AccountUser, userRole: any) {
    return this.http.post("inv/account/user/create/" + userRole, userDetails);
  }

  getUserDetails(userId: any): Observable<any> {
    return this.http.get<AccountUser>("inv/account/user/id/" + userId, {});
  }

  editUser(userDetails: AccountUser, userRole: any) {
    return this.http.put("/inv/account/user/update/", userDetails);
  }

  getUserList() {
    return this.http.get<AccountUser[]>("/inv/account/user/all");
  }

  deleteUser(userId: any): Observable<any> {
    return this.http.delete("/inv/account/user/delete/", userId);
  }
}
