import { Component, OnInit } from "@angular/core";
import { FormGroup, AbstractControl, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ToasterService } from "angular2-toaster";

@Component({
  selector: "app-user-register",
  templateUrl: "./user-register.component.html",
  styleUrls: ["./user-register.component.css"]
})
export class UserRegisterComponent implements OnInit {
  myGroup: FormGroup;
  toasterService: ToasterService;
  Name: AbstractControl;
  UserName: AbstractControl;
  MobileNo: AbstractControl;
  Password: AbstractControl;
  RePassword: AbstractControl;
  Winner: AbstractControl;
  OrangeCap: AbstractControl;
  PurpleCap: AbstractControl;
  MVP: AbstractControl;
  responseData: any;

  players: any;
  teams: any;

  constructor(
    private router: Router,
    fb: FormBuilder
    // private _ApplicationServiceService: ApplicationServiceService,
    // toasterService: ToasterService
  ) {
    //this.toasterService = toasterService;
    this.myGroup = fb.group({
      Name: [""],
      UserName: [""],
      MobileNo: [""],
      Password: [""],
      RePassword: [""],
      Winner: [""],
      OrangeCap: [""],
      PurpleCap: [""],
      MVP: [""]
    });
    this.Name = this.myGroup.controls["Name"];
    this.UserName = this.myGroup.controls["UserName"];
    this.MobileNo = this.myGroup.controls["MobileNo"];
    this.Password = this.myGroup.controls["Password"];
    this.RePassword = this.myGroup.controls["RePassword"];
    this.Winner = this.myGroup.controls["Winner"];
    this.OrangeCap = this.myGroup.controls["OrangeCap"];
    this.PurpleCap = this.myGroup.controls["PurpleCap"];
    this.MVP = this.myGroup.controls["MVP"];
  }

  ngOnInit() {}

  ngAfterViewInit() {
    (window as any).initialize();
  }

  registerUser() {}
}
