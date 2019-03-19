import { Component } from "@angular/core";
import { ApiCallService } from './core/api-call.service';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent {
  title = "ppl";
  constructor(public api: ApiCallService) {
  }
}
