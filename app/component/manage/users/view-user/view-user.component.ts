import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AccountUserManagementService } from "src/app/services/account-user-management.service";

@Component({
  selector: "app-view-user",
  templateUrl: "./view-user.component.html",
  styleUrls: ["./view-user.component.css"],
})
export class ViewUserComponent implements OnInit {
  userDetails: any;

  constructor(
    private route: ActivatedRoute,
    private AccountUserService: AccountUserManagementService
  ) {
  }
  ngOnInit(): void {
    this.viewUserDetails();
  }

  viewUserDetails() {
    this.AccountUserService.getUserDetails(
      this.route.snapshot.params["userId"]
    ).subscribe(
      (response: any) => {
        this.userDetails = response;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
