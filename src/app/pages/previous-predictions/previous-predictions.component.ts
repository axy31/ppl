import { Component, OnInit, ViewChild } from "@angular/core";
import { previousPredictionObject } from "src/app/objects/previousPredictionObject";
import { ApiCallService } from "src/app/core/api-call.service";
import { MatTableDataSource, MatSort } from "@angular/material";
import { ToasterService } from 'src/app/core/toaster.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-previous-predictions",
  templateUrl: "./previous-predictions.component.html",
  styleUrls: ["./previous-predictions.component.css"]
})
export class PreviousPredictionsComponent implements OnInit {
  displayedColumns: string[] = [
    "Match",
    "Scores",
    "Wickets",
    "Winner",
    "RunScorer",
    "WicketTaker",
    "ManOfMatch",
    "Fifties",
    "Boundaries",
    "ModifiedDate",
    "Points"
  ];
  dataSource = new MatTableDataSource<previousPredictionObject>();
  @ViewChild(MatSort) sort: MatSort;

  constructor(private api: ApiCallService, private toaster: ToasterService, private router: Router) { }

  previousPrediction() {
    if (!this.api.isLoggedIn) {
      this.toaster.openSnackBar('Please Login First', '', 'error');
      this.router.navigateByUrl('/login');
    }
    this.api.getPreviousPrediction().subscribe(
      res => {
        this.dataSource.data = res;
        this.dataSource.sort = this.sort;
      },
      err => {
        this.toaster.openSnackBar('Unexpected Error', 'Contact Dev', 'warning');
      }
    );
  }

  ngOnInit() {
    this.api.checkIfAdmin();
    this.previousPrediction();
  }
}
