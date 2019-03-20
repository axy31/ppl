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
  forgetPasswordForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  Username: AbstractControl;
  MobileNo: AbstractControl;

  constructor(
    private api: ApiCallService,
    fb: FormBuilder,
    private route: ActivatedRoute,
    private toaster: ToasterService,
    private router: Router
  ) {
    this.forgetPasswordForm = fb.group({
      Username: [""],
      MobileNo: [""]
    });
    this.Username = this.forgetPasswordForm.controls["Username"];
    this.MobileNo = this.forgetPasswordForm.controls["MobileNo"];
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  async sendPassword() {
    console.log(this.forgetPasswordForm.value);
    this.loading = true;
    await this.api.forgotPassword(this.forgetPasswordForm.value)
      .subscribe(res => {
        this.toaster.openSnackBar(res["message"], '', res['status']);
      }, err => {
        this.toaster.openSnackBar('Unexpected Error', 'Contact Dev', 'warning');
        this.loading = false;
      });
    this.loading = false;
  }
}
