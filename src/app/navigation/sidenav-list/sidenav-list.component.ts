import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiCallService } from 'src/app/core/api-call.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor(public api: ApiCallService) {
  }

  ngOnInit() {
    this.api.checkIfAdmin();
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
