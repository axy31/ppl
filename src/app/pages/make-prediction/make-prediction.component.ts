import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-make-prediction',
  templateUrl: './make-prediction.component.html',
  styleUrls: ['./make-prediction.component.css']
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
  matches: any;
  Scores: any;
  Wickets: any;
  players: any;
  Boundary: any;

  TotalCards: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myGroup = fb.group({
      'MatchId': [''],
      'Winner': [''],
      'ddlScore': [''],
      'ddlWickets': [''],
      'MaxyRunsPlayer': [''],
      'MaxyWicketsPlayer': [''],
      'MOM': [''],
      'ddlBoundary': [''],
      'Fifties': ['']
    });
    this.MatchId = this.myGroup.controls['MatchId'];
    this.Winner = this.myGroup.controls['Winner'];
    this.ddlScore = this.myGroup.controls['ddlScore'];
    this.ddlWickets = this.myGroup.controls['ddlWickets'];
    this.MaxyRunsPlayer = this.myGroup.controls['MaxyRunsPlayer'];
    this.MaxyWicketsPlayer = this.myGroup.controls['MaxyWicketsPlayer'];
    this.MOM = this.myGroup.controls['MOM'];
    this.ddlBoundary = this.myGroup.controls['ddlBoundary'];
    this.Fifties = this.myGroup.controls['Fifties'];

  }

  ngOnInit() {
  }

}
