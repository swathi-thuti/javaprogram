import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../../../services/login.service";
import { Router } from "@angular/router";
import { CurrentUserDetails } from "./../../../models/currentUserDetails";
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginData: any;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    public currentUserDetails: CurrentUserDetails,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    this.loginService.authenticateUser(this.loginForm.value).subscribe({
      next: res => {
        this.loginData = res;
        this.currentUserDetails.updateUserDetails(this.loginData.idToken);
      },
      error: err => {
        console.log(err);
      },
    });
  }
}
