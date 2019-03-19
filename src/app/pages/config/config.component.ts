import { Component, OnInit } from "@angular/core";
import { FormGroup, AbstractControl, FormBuilder } from "@angular/forms";
import { ApiCallService } from "src/app/core/api-call.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-config",
  templateUrl: "./config.component.html",
  styleUrls: ["./config.component.css"]
})
export class ConfigComponent implements OnInit {
  responseData: {};
  myGroup: FormGroup;
  daysAhead: AbstractControl;
  OpenReprediction: AbstractControl;

  constructor(
    private api: ApiCallService,
    fb: FormBuilder,
    private router: Router
  ) {
    this.myGroup = fb.group({
      daysAhead: [""],
      OpenReprediction: [""]
    });
    this.daysAhead = this.myGroup.controls["daysAhead"];
    this.OpenReprediction = this.myGroup.controls["OpenReprediction"];
  }
  ngOnInit() {}
}
