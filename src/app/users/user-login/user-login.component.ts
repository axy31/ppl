import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AbstractControl } from "@angular/forms";

import { first } from "rxjs/operators";
import { ApiCallService } from 'src/app/core/api-call.service';
@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"]
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  Username: AbstractControl;
  Password: AbstractControl;

  constructor(private api: ApiCallService, fb: FormBuilder,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router // private authenticationService: AuthenticationService,
  ) // private alertService: AlertService
  {
    // redirect to home if already logged in
    //if (this.authenticationService.currentUserValue) {
    // this.router.navigate(["/"]);
    //}

    this.loginForm = fb.group({
      Username: [""],
      Password: [""]
    });
    this.Username = this.loginForm.controls["Username"];
    this.Password = this.loginForm.controls["Password"];
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    // this.authenticationService
    //  .login(this.f.username.value, this.f.password.value)
    // .pipe(first())
    //.subscribe(
    // data => {
    //  this.router.navigate([this.returnUrl]);
    //},
    //error => {
    // this.alertService.error(error);
    //this.loading = false;
    // }
    //);
  }
}
