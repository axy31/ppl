import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';



export interface DataStructure {
  Name: string;
  Points: string;
  Rank: string;
  Team: string;
  OrangeCap: string;
  MVP: string;
  PurpleCap: string;
}


const Prediction: DataStructure[] =
  [
    { "Name": "Shubhanshu Raj", "Points": "804", "Team": "CSK", "Rank": "1", "OrangeCap": "Kane Williamson", "PurpleCap": "Andrew Tye", "MVP": "Sunil Narine" },
    { "Name": "Chintan", "Points": "866", "Team": "CSK", "Rank": "1", "OrangeCap": "Kane Williamson", "PurpleCap": "Andrew Tye", "MVP": "Sunil Narine" },
    { "Name": "Jay", "Points": "930", "Team": "CSK", "Rank": "1", "OrangeCap": "Kane Williamson", "PurpleCap": "Andrew Tye", "MVP": "Sunil Narine" },
    { "Name": "Rakesh", "Points": "959", "Team": "CSK", "Rank": "1", "OrangeCap": "Kane Williamson", "PurpleCap": "Andrew Tye", "MVP": "Sunil Narine" },
    { "Name": "Kirankumar", "Points": "1001", "Team": "CSK", "Rank": "1", "OrangeCap": "Kane Williamson", "PurpleCap": "Andrew Tye", "MVP": "Sunil Narine" },
    { "Name": "Rohan Jethwani", "Points": "1018", "Team": "CSK", "Rank": "1", "OrangeCap": "Kane Williamson", "PurpleCap": "Andrew Tye", "MVP": "Sunil Narine" },
    { "Name": "Vrushali", "Points": "1089", "Team": "CSK", "Rank": "1", "OrangeCap": "Kane Williamson", "PurpleCap": "Andrew Tye", "MVP": "Kane Williamson" },
    { "Name": "Ace AM", "Points": "1135", "Team": "CSK", "Rank": "1", "OrangeCap": "Kane Williamson", "PurpleCap": "Andrew Tye", "MVP": "Sunil Narine" },
    { "Name": "Shrikant", "Points": "1167", "Team": "CSK", "Rank": "1", "OrangeCap": "Kane Williamson", "PurpleCap": "Andrew Tye", "MVP": "Sunil Narine" },
    { "Name": "Amit Roymazumder", "Points": "1182", "Team": "SRH", "Rank": "1", "OrangeCap": "Kane Williamson", "PurpleCap": "Andrew Tye", "MVP": "Sunil Narine" },
    { "Name": "Abhijit", "Points": "1184", "Team": "SRH", "Rank": "1", "OrangeCap": "Kane Williamson", "PurpleCap": "Andrew Tye", "MVP": "Sunil Narine" },
    { "Name": "Akshay", "Points": "1285", "Team": "CSK", "Rank": "1", "OrangeCap": "Kane Williamson", "PurpleCap": "Siddarth Kaul", "MVP": "Sunil Narine" },
    { "Name": "Chirag Shah", "Points": "1337", "Team": "SRH", "Rank": "1", "OrangeCap": "Kane Williamson", "PurpleCap": "Andrew Tye", "MVP": "Sunil Narine" },
    { "Name": "Ga Ma", "Points": "1378", "Team": "CSK", "Rank": "1", "OrangeCap": "Kane Williamson", "PurpleCap": "Rashid Khan", "MVP": "Rishabh Pant" },
    { "Name": "Anirudh", "Points": "1385", "Team": "SRH", "Rank": "1", "OrangeCap": "Kane Williamson", "PurpleCap": "Andrew Tye", "MVP": "Sunil Narine" },
    { "Name": "Srishti", "Points": "1412", "Team": "SRH", "Rank": "1", "OrangeCap": "Kane Williamson", "PurpleCap": "Andrew Tye", "MVP": "Sunil Narine" },
    { "Name": "RF", "Points": "1494", "Team": "SRH", "Rank": "1", "OrangeCap": "Kane Williamson", "PurpleCap": "Rashid Khan", "MVP": "Kane Williamson" }
  ]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['Rank', 'Name', 'Team', 'PurpleCap', 'OrangeCap', 'MVP', 'Points'];
  dataSource: MatTableDataSource<DataStructure>;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(Prediction);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
