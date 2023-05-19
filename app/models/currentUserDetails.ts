import { Injectable } from "@angular/core";
import { Global } from "./global";
import { User } from "./user";
import { LoginUser } from "./currentUser";

@Injectable({
  providedIn: "root",
})
export class CurrentUserDetails {
  currUser: any = new LoginUser();
  constructor(private user: User, private global: Global) {}

  updateUserDetails(loginDetails: string) {
    this.setSystemVariables(loginDetails);
  }

  public getCurrentUser(): User | null {
    let loginData: any = localStorage.getItem("jwt");
    if (loginData != null  || loginData != undefined){
    let body = loginData.split(".")[1];
    if (body != null || body != undefined) {
    let payload = window.atob(body);
    this.currUser = JSON.parse(payload);
    this.user.userName = this.currUser.userName;
    this.user.userRole = this.currUser.userRole;
    }
    }
    return this.user ? this.user : null;
  }

  public getToken(): string {
    return "";
    //return (localStorage..getItem("jwt"))? localStorage.getItem("jwt"):"";
  }
  public getMainMenuStatus(): string {
    return "";
    //return localStorage.getItem("mainMenu")?localStorage.getItem("mainMenu"):"";
  }

  private setSystemVariables(loginData: string) {
    let body = loginData.split(".")[1];
    let payload = window.atob(body);
    this.currUser = JSON.parse(payload);
    this.user.userName = this.currUser.userName;
    this.user.userRole = this.currUser.userRole;
    localStorage.setItem("mainMenu", "yes");
    localStorage.setItem("jwt", loginData);
    this.global.mainMenu = true;
  }

  private inValidateSystemVariables() {
    this.user = new LoginUser();
    localStorage.setItem("mainMenu", "");
    localStorage.setItem("jwt", "");
    this.global.mainMenu = false;
  }

  public IsLoginSuccess(): boolean {
    return this.user ? true : false;
  }

  public signOut() {
    this.inValidateSystemVariables();
  }
}
