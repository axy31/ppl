import { Component, OnInit } from "@angular/core";
import { FormGroup, AbstractControl, FormBuilder, Validators, ValidatorFn } from "@angular/forms";
import { Router } from "@angular/router";
import { teamObject } from 'src/app/objects/teamObject';
import { ApiCallService } from 'src/app/core/api-call.service';
import { playerListObject } from 'src/app/objects/playerListObject';
import { ToasterService } from 'src/app/core/toaster.service';

export class customValidationService {
  static checkLimit(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
        return { 'range': true };
      }
      return null;
    };
  }
}

@Component({
  selector: "app-user-register",
  templateUrl: "./user-register.component.html",
  styleUrls: ["./user-register.component.css"]
})
export class UserRegisterComponent implements OnInit {
  myGroup: FormGroup;
  loading = false;
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

  players: playerListObject[];
  teams: teamObject[];

  constructor(private api: ApiCallService,
    private router: Router, private toaster: ToasterService,
    fb: FormBuilder
    // private _ApplicationServiceService: ApplicationServiceService,
    // toasterService: ToasterService
  ) {
    //this.toasterService = toasterService;
    this.myGroup = fb.group({
      Name: [""],
      UserName: [""],
      MobileNo: ["", [customValidationService.checkLimit(1000000000, 9999999999)]],
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
      }, err => {
        console.log(err);
      });
  }

  async getPlayerList() {
    await this.api.getPlayerList()
      .subscribe(res => {
        this.players = res;
      }, err => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.getTeams();
    this.getPlayerList();

  }

  ngAfterViewInit() {
  }

  async registerUser() {
    console.log(this.myGroup.value);
    this.loading = true;
    await this.api.doRegister(this.myGroup.value)
      .subscribe(res => {
        if (res["status"] === "success") {
          localStorage.setItem("Access", res["Access"]);
          localStorage.setItem("MobileNo", res["MobileNo"]);
          localStorage.setItem("Name", res["Name"]);
          localStorage.setItem("Team", res["Team"]);
          localStorage.setItem("UserName", res["UserName"]);
          this.router.navigateByUrl('/home');
          this.toaster.openSnackBar(res["message"], '', res['status']);
        }
        else {
          this.toaster.openSnackBar(res["message"], '', res['status']);
        }
        this.router.navigateByUrl('/home');
      }, err => {
        this.toaster.openSnackBar(err, 'Contact Dev', 'warning');
        this.loading = false;
      });
    this.loading = false;
  }
}
