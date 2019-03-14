import { Component, OnInit } from "@angular/core";
import { FormGroup, AbstractControl, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ToasterService } from "angular2-toaster";
import { teamObject } from 'src/app/objects/teamObject';
import { ApiCallService } from 'src/app/core/api-call.service';

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
  teams: teamObject[];

  constructor(private api: ApiCallService,
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

  async getTeams() {
    await this.api.getTeams()
      .subscribe(res => {
        this.teams = res;
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.getTeams();

  }

  ngAfterViewInit() {
    (window as any).initialize();
  }

  registerUser() { }
}
