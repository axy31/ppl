import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ApiCallService } from 'src/app/core/api-call.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(public api: ApiCallService) { }

  ngOnInit() { }

  logout() {
    localStorage.clear();
    this.api.checkIfAdmin();
  }

  public onToggleSidenav = () => {
    this.api.checkIfAdmin();
    this.sidenavToggle.emit();
  };
}
