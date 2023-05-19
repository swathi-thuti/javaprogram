import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ViewUserService } from "../../services/view-user.service";

@Component({
  selector: "app-view-user",
  templateUrl: "./view-user.component.html",
  styleUrls: ["./view-user.component.css"],
})
export class ViewUserComponent {

  userDetails : any;

  constructor(
    private route: ActivatedRoute,
    private viewUserService: ViewUserService
  )
  {
  this.viewUserDetails();
  }

  viewUserDetails() {
    this.viewUserService
      .getUserDetails(this.route.snapshot.params["userId"])
      .subscribe(
        (response) => {
          this.userDetails = response;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
