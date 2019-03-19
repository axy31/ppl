import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AbstractControl } from "@angular/forms";
import { ApiCallService } from 'src/app/core/api-call.service';
import { ToasterService } from 'src/app/core/toaster.service';
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
    private route: ActivatedRoute, private toaster: ToasterService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      Username: [""],
      Password: [""]
    });
    this.Username = this.loginForm.controls["Username"];
    this.Password = this.loginForm.controls["Password"];
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  get f() {
    return this.loginForm.controls;
  }

  async doLogin() {
    this.loading = true;
    await this.api.doLogin(this.loginForm.value)
      .subscribe(res => {
        if (res["status"] === "success") {
          localStorage.setItem("Access", res["Access"]);
          localStorage.setItem("MobileNo", res["MobileNo"]);
          localStorage.setItem("Name", res["Name"]);
          localStorage.setItem("Team", res["Team"]);
          localStorage.setItem("UserName", res["UserName"]);
          this.router.navigateByUrl('/home');
          this.toaster.openSnackBar(res["message"], '', res['status']);
          this.api.checkIfAdmin();
        }
        else {
          this.toaster.openSnackBar(res["message"], '', res['status']);
        }

      }, err => {
        this.toaster.openSnackBar('Unexpected Error', 'Contact Dev', 'warning');
        this.loading = false;
      });
    this.loading = false;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.doLogin();
  }
}
