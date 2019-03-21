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
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  myGroup: FormGroup;
  loading = false;
  Name: AbstractControl;
  UserName: string;
  MobileNo: AbstractControl;
  Winner: AbstractControl;
  OrangeCap: AbstractControl;
  PurpleCap: AbstractControl;
  MVP: AbstractControl;
  responseData: any;
  isDisabled: boolean = true;

  players: playerListObject[];
  teams: teamObject[];

  constructor(private api: ApiCallService, private router: Router, private toaster: ToasterService, fb: FormBuilder) {
    this.UserName = localStorage.getItem('UserName');
    this.myGroup = fb.group({
      Name: [localStorage.getItem('Name')],
      MobileNo: [localStorage.getItem('MobileNo'), [customValidationService.checkLimit(1000000000, 9999999999)]],
      Winner: [localStorage.getItem('Team')],
      OrangeCap: [""],
      PurpleCap: [""],
      MVP: [""]
    });
    this.Name = this.myGroup.controls["Name"];
    this.MobileNo = this.myGroup.controls["MobileNo"];
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
        this.toaster.openSnackBar('Unexpected Error', 'Contact Dev', 'warning');
      });
  }

  async getPlayerList() {
    await this.api.getPlayerList()
      .subscribe(res => {
        this.players = res;
      }, err => {
        this.toaster.openSnackBar('Unexpected Error', 'Contact Dev', 'warning');
      });
  }

  async getProfileDetails() {
    await this.api.getProfileDetails()
      .subscribe(res => {
        this.myGroup.controls["Winner"].setValue(res[res.length - 1]['FinalWinner']);
        this.myGroup.controls["PurpleCap"].setValue(res[res.length - 1]['PurpleCap']);
        this.myGroup.controls["OrangeCap"].setValue(res[res.length - 1]['OrangeCap']);
        this.myGroup.controls["MVP"].setValue(res[res.length - 1]['MVP']);
      }, err => {
        this.toaster.openSnackBar('Unexpected Error', 'Contact Dev', 'warning');
      });
  }

  async openReprediction() {
    await this.api.openReprediction()
      .subscribe(res => {
        if (res['ConfigValue'] === 'No')
          this.isDisabled = true;
        else
          this.isDisabled = false;
      }, err => {
        this.toaster.openSnackBar('Unexpected Error', 'Contact Dev', 'warning');
      });
  }

  ngOnInit() {
    this.getTeams();
    this.getPlayerList();
    this.openReprediction();
    this.getProfileDetails();
  }

  ngAfterViewInit() {
  }

  async updateUser() {
    if (!this.api.isLoggedIn) {
      this.toaster.openSnackBar('Please Login First', '', 'error');
      this.router.navigateByUrl('/login');
    }
    this.loading = true;
    await this.api.doProfileUpdate(this.myGroup.value)
      .subscribe(res => {
        if (res["status"] === "success") {
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
        this.router.navigateByUrl('/home');
      }, err => {
        this.toaster.openSnackBar('Unexpected Error', 'Contact Dev', 'warning');
        this.loading = false;
      });
    this.loading = false;
  }
}
