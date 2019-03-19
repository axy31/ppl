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
  @ViewChild(MatSort) sort: MatSort;

  constructor(private api: ApiCallService, private toaster: ToasterService) {
  }

  UserRankDetails() {
    this.api.getuserRankDetails()
      .subscribe(res => {
        this.dataSource.data = res;
        this.dataSource.sort = this.sort;
      }, err => {
        this.toaster.openSnackBar(err, 'Contact Dev', 'warning');
      });
  }

  ngOnInit() {
    this.api.checkIfAdmin();
    this.UserRankDetails();
  }
}
