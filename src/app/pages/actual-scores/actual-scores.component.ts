import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/core/api-call.service';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { ToasterService } from 'src/app/core/toaster.service';
import { Router } from '@angular/router';
import { scoreRangeObject } from 'src/app/objects/scoreRangeObject';
import { wicketRangeObject } from 'src/app/objects/wicketRangeObject';
import { boundaryRangeObject } from 'src/app/objects/boundaryRangeObject';
import { MatchDetailsObject } from 'src/app/objects/MatchDetailsObject';

@Component({
  selector: 'app-actual-scores',
  templateUrl: './actual-scores.component.html',
  styleUrls: ['./actual-scores.component.css']
})
export class ActualScoresComponent implements OnInit {

  myGroup: FormGroup;
  MatchId: AbstractControl;
  TeamAScore: AbstractControl;
  TeamAWicket: AbstractControl;
  TeamBScore: AbstractControl;
  TeamBWicket: AbstractControl;
  MaxRunsPlayer: AbstractControl;
  MaxRunsPlayer1: AbstractControl;
  MaxRunsPlayer2: AbstractControl;
  MaxWicketsPlayer: AbstractControl;
  MaxWicketsPlayer1: AbstractControl;
  MaxWicketsPlayer2: AbstractControl;
  MaxWicketsPlayer3: AbstractControl;
  MaxWicketsPlayer4: AbstractControl;
  MOM: AbstractControl;
  Boundaries: AbstractControl;
  Fifties: AbstractControl;

  teams: any = {};
  Scores: scoreRangeObject[];
  Wickets: wicketRangeObject[];
  players: any;
  Boundary: boundaryRangeObject[];
  matches: MatchDetailsObject[];
  TotalCards: AbstractControl;

  constructor(private api: ApiCallService, fb: FormBuilder, private toaster: ToasterService, private router: Router) {
    this.myGroup = fb.group({
      MatchId: [""],
      TeamAScore: [""],
      TeamAWicket: [""],
      TeamBScore: [""],
      TeamBWicket: [""],
      MaxRunsPlayer: [""],
      MaxRunsPlayer1: [""],
      MaxRunsPlayer2: [""],
      MaxWicketsPlayer: [""],
      MaxWicketsPlayer1: [""],
      MaxWicketsPlayer2: [""],
      MaxWicketsPlayer3: [""],
      MaxWicketsPlayer4: [""],
      MOM: [""],
      Boundaries: [""],
      Fifties: [""]
    });
    this.MatchId = this.myGroup.controls["MatchId"];
    this.TeamAScore = this.myGroup.controls["TeamAScore"];
    this.TeamAWicket = this.myGroup.controls["TeamAWicket"];
    this.TeamBScore = this.myGroup.controls["TeamBScore"];
    this.TeamBWicket = this.myGroup.controls["TeamBWicket"];
    this.MaxRunsPlayer = this.myGroup.controls["MaxRunsPlayer"];
    this.MaxRunsPlayer1 = this.myGroup.controls["MaxRunsPlayer1"];
    this.MaxRunsPlayer2 = this.myGroup.controls["MaxRunsPlayer2"];
    this.MaxWicketsPlayer = this.myGroup.controls["MaxWicketsPlayer"];
    this.MaxWicketsPlayer1 = this.myGroup.controls["MaxWicketsPlayer1"];
    this.MaxWicketsPlayer2 = this.myGroup.controls["MaxWicketsPlayer2"];
    this.MaxWicketsPlayer3 = this.myGroup.controls["MaxWicketsPlayer3"];
    this.MaxWicketsPlayer4 = this.myGroup.controls["MaxWicketsPlayer4"];
    this.MOM = this.myGroup.controls["MOM"];
    this.Boundaries = this.myGroup.controls["Boundaries"];
    this.Fifties = this.myGroup.controls["Fifties"];
    this.teams['TeamA'] = '';
  }

  ngOnInit() {
    this.api.checkIfAdmin();
    this.GetMatchHistory();
  }

  async getPlayersInTeam(object) {
    await this.api.getPlayersInTeam(object)
      .subscribe(res => {
        this.players = res;
      }, err => {
        this.toaster.openSnackBar('Unexpected Error', 'Contact Dev', 'warning');
      });
  }

  GetWinners() {
    this.teams = this.matches.find(item => item.MatchId === this.MatchId.value);
    this.getPlayersInTeam(this.teams);
  }

  async GetMatchHistory() {
    await this.api.GetMatchHistory().subscribe(
      res => {
        this.matches = res;
      },
      err => {
        this.toaster.openSnackBar("Unexpected Error", "Contact Dev", "warning");
      }
    );
  }

  async submitScores() {
    if (!this.api.isLoggedIn) {
      this.toaster.openSnackBar('Please Login First', '', 'error');
      this.router.navigateByUrl('/login');
    }

    var object = this.myGroup.value;
    if (object["MaxRunsPlayer1"] === "")
      object["MaxRunsPlayer1"] = "-1";

    if (object["MaxRunsPlayer2"] === "")
      object["MaxRunsPlayer2"] = "-1";

    if (object["MaxWicketsPlayer1"] === "")
      object["MaxWicketsPlayer1"] = "-1";

    if (object["MaxWicketsPlayer2"] === "")
      object["MaxWicketsPlayer2"] = "-1";

    if (object["MaxWicketsPlayer3"] === "")
      object["MaxWicketsPlayer3"] = "-1";

    if (object["MaxWicketsPlayer4"] === "")
      object["MaxWicketsPlayer4"] = "-1";

    object["TeamA"] = this.teams.TeamA;
    object["TeamB"] = this.teams.TeamB;

    await this.api.submitActualScores(object)
      .subscribe(res => {
        this.toaster.openSnackBar(res["message"], '', res['status']);
      }, err => {
        this.toaster.openSnackBar('Unexpected Error', 'Contact Dev', 'warning');
      });
  }

}
