import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AbstractControl } from "@angular/forms";
import { ApiCallService } from "src/app/core/api-call.service";
import { ToasterService } from "src/app/core/toaster.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"]
})
export class ForgotPasswordComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  Username: AbstractControl;
  mobileNo: AbstractControl;

  constructor(
    private api: ApiCallService,
    fb: FormBuilder,
    private route: ActivatedRoute,
    private toaster: ToasterService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      Username: [""],
      mobileNo: [""]
    });
    this.Username = this.loginForm.controls["Username"];
    this.mobileNo = this.loginForm.controls["mobileNo"];
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
}
