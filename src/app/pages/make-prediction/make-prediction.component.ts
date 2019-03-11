import { Component, OnInit } from "@angular/core";
import { FormGroup, AbstractControl, FormBuilder } from "@angular/forms";
import { ApiCallService } from 'src/app/core/api-call.service';
import { MatchDetailsObject } from 'src/app/objects/MatchDetailsObject';
import { scoreRangeObject } from 'src/app/objects/scoreRangeObject';
import { wicketRangeObject } from 'src/app/objects/wicketRangeObject';
import { boundaryRangeObject } from 'src/app/objects/boundaryRangeObject';

@Component({
  selector: "app-make-prediction",
  templateUrl: "./make-prediction.component.html",
  styleUrls: ["./make-prediction.component.css"]
})
export class MakePredictionComponent implements OnInit {
  responseData: {};
  myGroup: FormGroup;
  MatchId: AbstractControl;
  Winner: AbstractControl;
  ddlScore: AbstractControl;
  ddlWickets: AbstractControl;
  MaxyRunsPlayer: AbstractControl;
  MaxyWicketsPlayer: AbstractControl;
  MOM: AbstractControl;
  ddlBoundary: AbstractControl;
  Fifties: AbstractControl;
  teams: any;
  Scores: scoreRangeObject[];
  Wickets: wicketRangeObject[];
  players: any;
  Boundary: boundaryRangeObject[];
  matches: MatchDetailsObject[];
  TotalCards: AbstractControl;

  constructor(private api: ApiCallService, fb: FormBuilder) {
    this.myGroup = fb.group({
      MatchId: [""],
      Winner: [""],
      ddlScore: [""],
      ddlWickets: [""],
      MaxyRunsPlayer: [""],
      MaxyWicketsPlayer: [""],
      MOM: [""],
      ddlBoundary: [""],
      Fifties: [""]
    });
    this.MatchId = this.myGroup.controls["MatchId"];
    this.Winner = this.myGroup.controls["Winner"];
    this.ddlScore = this.myGroup.controls["ddlScore"];
    this.ddlWickets = this.myGroup.controls["ddlWickets"];
    this.MaxyRunsPlayer = this.myGroup.controls["MaxyRunsPlayer"];
    this.MaxyWicketsPlayer = this.myGroup.controls["MaxyWicketsPlayer"];
    this.MOM = this.myGroup.controls["MOM"];
    this.ddlBoundary = this.myGroup.controls["ddlBoundary"];
    this.Fifties = this.myGroup.controls["Fifties"];
  }


  async getMatchDetails() {
    await this.api.getMatchDetails()
      .subscribe(res => {
        this.matches = res;
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

  async getScoreRange() {
    await this.api.getScoreRange()
      .subscribe(res => {
        this.Scores = res;
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

  async getWicketRange() {
    await this.api.getWicketRange()
      .subscribe(res => {
        this.Wickets = res;
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

  async getPlayersInTeam(object) {
    await this.api.getPlayersInTeam(object)
      .subscribe(res => {
        this.players = res;
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

  async getBoundaryRange() {
    await this.api.getBoundaryRange()
      .subscribe(res => {
        this.Boundary = res;
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

  GetWinners() {
    this.Winner.reset();
    this.teams = this.matches.find(item => item.MatchId === this.MatchId.value);
    this.getPlayersInTeam(this.teams);
  }

  ngOnInit() {
    this.getMatchDetails();
    this.getScoreRange();
    this.getWicketRange();
    this.getBoundaryRange();
  }
}
