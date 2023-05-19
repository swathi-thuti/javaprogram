import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AccountUserManagementService } from "src/app/services/account-user-management.service";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"],
})
export class EditUserComponent implements OnInit {
  userForm!: FormGroup;
  roles: any = [];
  userRole: any;
  displayMessage!: { [key: string]: string };
  userDetails: any;

  constructor(
    private fb: FormBuilder,
    private AccountUserService: AccountUserManagementService,
    private router: Router,
    private route:ActivatedRoute
  ) {
    this.getUserDetails();
    this.roles = [
      { name: "Role User", role: "ROLE_USER" },
      { name: "Inventory Admin", role: "INVENTORY_ADMIN" },
      { name: "Inventory User", role: "INVENTORY_USER" },
    ];
  }

  getUserDetails() {
    this.AccountUserService
      .getUserDetails(this.route.snapshot.params["userId"])
      .subscribe(
        (response:any) => {
          this.userDetails = response;
          this.ngOnInit();
        },
        (err:any) => {
          console.log(err);
        }
      );
  }

  ngOnInit(): void {
      this.userForm = this.fb.group({
        referenceId: [this.userDetails?.referenceId,""],
        fullName: [this.userDetails?.fullName, [Validators.required, Validators.minLength(3)]],
        contactEmail: [this.userDetails?.contactEmail, [Validators.required, Validators.email]],
        contactPhone: [this.userDetails?.contactPhone, [Validators.required]],
        loginName: [this.userDetails?.loginName, [Validators.required, Validators.minLength(5)]],
        password: ["", ],
        additionalInfo: [this.userDetails?.additionalInfo, ""],
        role: [this.userDetails?.userRoleEntity.shortCode, Validators.required],
      });
  }


  editUserDetails() {
    if (this.userForm.valid) {
      this.userRole = this.userForm.get("role")?.value;

      this.AccountUserService
        .editUser(this.userForm.value, this.userRole)
        .subscribe({
          next: (res:any) => {
            this.router.navigate(["/users"]);
          },
          error: (err:any) => {
           console.log(err);
          },
        });
    }
  }
}
