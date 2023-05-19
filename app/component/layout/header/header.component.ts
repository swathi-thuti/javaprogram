import { Component } from "@angular/core";
import { CurrentUserDetails } from "./../../../models/currentUserDetails";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  user : any;
  constructor(private currentUserDetails: CurrentUserDetails) {
     this.user = this.currentUserDetails.getCurrentUser();
  }

  logout() {
    this.currentUserDetails.signOut();
  }
}
