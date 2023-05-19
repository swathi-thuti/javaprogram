import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class LoginService {

   constructor(private http: HttpClient) {}

  authenticateUser(loginDetails: any) {
    return this.http.post("inv/account/user/login",
      loginDetails
    );
  }
}
