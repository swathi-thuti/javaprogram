import { Component } from "@angular/core";
import { Global } from "./models/global";
import { CurrentUserDetails } from "./models/currentUserDetails";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "inv-mgmt";
  jwt: any;

  constructor(protected readonly global: Global, private currentUserDetails:CurrentUserDetails ) {
    this.getMainMenu();
    this.currentUserDetails.getCurrentUser();
  }

  getMainMenu() {
    if (localStorage.getItem("mainMenu") == "yes") {
      this.global.mainMenu = true;
    }
  }
}
