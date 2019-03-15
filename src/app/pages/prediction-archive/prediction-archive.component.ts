import { Component, OnInit, ViewChild } from "@angular/core";
import { predictionArchiveObject } from "src/app/objects/predictionArchiveObject";
import { ApiCallService } from "src/app/core/api-call.service";
import { MatTableDataSource, MatSort } from "@angular/material";

@Component({
  selector: "app-prediction-archive",
  templateUrl: "./prediction-archive.component.html",
  styleUrls: ["./prediction-archive.component.css"]
})
export class PredictionArchiveComponent implements OnInit {
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

  constructor(private api: ApiCallService) {}

  predictionArchieve() {
    this.api.getPredictionArchieve().subscribe(
      res => {
        this.dataSource.data = res;
        this.dataSource.sort = this.sort;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.predictionArchieve();
  }
}
