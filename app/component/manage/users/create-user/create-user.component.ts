import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { Router, ActivatedRoute } from "@angular/router";
import { AccountUserManagementService } from "src/app/services/account-user-management.service";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.css"],
  providers: [MatSnackBar],
})
export class CreateUserComponent implements OnInit {
  userForm!: FormGroup;
  roles: any = [];
  userRole: any;
  displayMessage!: { [key: string]: string };

  constructor(
    private fb: FormBuilder,
    private accountUserService: AccountUserManagementService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.roles = [
      { name: "Role User", role: "ROLE_USER" },
      { name: "Inventory Admin", role: "INVENTORY_ADMIN" },
      { name: "Inventory User", role: "INVENTORY_USER" },
    ];
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      fullName: ["", [Validators.required, Validators.minLength(3)]],
      contactEmail: ["", [Validators.required, Validators.email]],
      contactPhone: ["", [Validators.required]],
      loginName: ["", [Validators.required, Validators.minLength(5)]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      additionalInfo: ["", ""],
      role: ["", Validators.required],
    });
  }

  addUserDetails() {
    const config: MatSnackBarConfig = {
      verticalPosition: "top",
    };
    if (this.userForm.valid) {
      this.userRole = this.userForm.get("role")?.value;
      this.accountUserService.createUser(this.userForm.value, this.userRole)
        .subscribe({
          next: (res:any) => {
            this.snackBar.open("User create success", "Close", {
              ...config,
              duration: 9000,
            });
            this.router.navigate(["/users"]);
          },
          error: (err:any) => {
            this.snackBar.open("Failed to create user", "Close", {
              ...config,
              duration: 9000,
            });
            console.log(err);
          },
        });
    }
  }
}
