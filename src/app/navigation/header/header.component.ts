import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ApiCallService } from 'src/app/core/api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(public api: ApiCallService, private router: Router) { }

  ngOnInit() { }

  logout() {
    localStorage.clear();
    this.api.checkIfAdmin();
    this.router.navigateByUrl('/home');
  }

  public onToggleSidenav = () => {
    this.api.checkIfAdmin();
    this.sidenavToggle.emit();
  };
}
