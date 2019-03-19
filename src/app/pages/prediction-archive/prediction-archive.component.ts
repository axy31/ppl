import { Component, OnInit, ViewChild } from "@angular/core";
import { predictionArchiveObject } from "src/app/objects/predictionArchiveObject";
import { ApiCallService } from "src/app/core/api-call.service";
import { MatTableDataSource, MatSort } from "@angular/material";
import { FormBuilder, FormGroup, AbstractControl } from "@angular/forms";
import { ToasterService } from "src/app/core/toaster.service";

@Component({
  selector: "app-prediction-archive",
  templateUrl: "./prediction-archive.component.html",
  styleUrls: ["./prediction-archive.component.css"]
})
export class PredictionArchiveComponent implements OnInit {
  myGroup: FormGroup;
  MatchId: AbstractControl;
  matches: any[];

  displayedColumns: string[] = [
    "Name",
    "MatchWinner",
    "Score",
    "Wicket",
    "RunScorer",
    "WicketTaker",
    "ManOfMatch",
    "Fifties",
    "Boundaries",
    "ModifiedDate",
    "Points"
  ];
  dataSource = new MatTableDataSource<predictionArchiveObject>();
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private api: ApiCallService,
    private fb: FormBuilder,
    private toaster: ToasterService
  ) {
    this.myGroup = fb.group({
      MatchId: [""]
    });
    this.MatchId = this.myGroup.controls["MatchId"];
  }

  getPredictionArchive() {
    this.api.getPredictionArchive(this.myGroup.value).subscribe(
      res => {
        this.dataSource.data = res;
        this.dataSource.sort = this.sort;
      },
      err => {
        this.toaster.openSnackBar(err, "Contact Dev", "warning");
      }
    );
  }

  ngOnInit() {
    this.GetMatchHistory();
  }

  async GetMatchHistory() {
    await this.api.GetMatchHistory().subscribe(
      res => {
        this.matches = res;
      },
      err => {
        this.toaster.openSnackBar(err, "Contact Dev", "warning");
      }
    );
  }
}
