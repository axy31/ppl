import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { homeObject } from 'src/app/objects/homeObject';
import { ApiCallService } from 'src/app/core/api-call.service';
import { ToasterService } from 'src/app/core/toaster.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['Rank', 'Name', 'Team', 'PurpleCap', 'OrangeCap', 'MVP', 'Points'];
  dataSource = new MatTableDataSource<homeObject>();

  constructor(private api: ApiCallService, private toaster: ToasterService) {
  }

  UserRankDetails() {
    this.api.getuserRankDetails()
      .subscribe(res => {
        for (var count = 1; count < res.length; count++) {          
          if (parseInt(res[count]["Points"]) != parseInt(res[count - 1]["Points"])) {
            
            res[count]["Rank"] = (parseInt(res[count - 1]["Rank"]) + 1).toString();
          }
        }
        this.dataSource.data = res;
      }, err => {
        this.toaster.openSnackBar('Unexpected Error', 'Contact Dev', 'warning');
      });
  }

  ngOnInit() {
    this.api.checkIfAdmin();
    this.UserRankDetails();
  }
}
