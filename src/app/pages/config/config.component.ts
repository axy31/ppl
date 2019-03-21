import { Component, OnInit } from "@angular/core";
import { FormGroup, AbstractControl, FormBuilder } from "@angular/forms";
import { ApiCallService } from "src/app/core/api-call.service";
import { Router } from "@angular/router";
import { ToasterService } from 'src/app/core/toaster.service';

@Component({
  selector: "app-config",
  templateUrl: "./config.component.html",
  styleUrls: ["./config.component.css"]
})
export class ConfigComponent implements OnInit {
  myGroup: FormGroup;
  repredictionGroup: FormGroup;
  daysAhead: AbstractControl;
  Reprediction: AbstractControl;

  constructor(private api: ApiCallService, fb: FormBuilder, private toaster: ToasterService) {
    this.myGroup = fb.group({
      daysAhead: [""]
    });

    this.repredictionGroup = fb.group({
      Reprediction: ["No"]
    });

    this.Reprediction = this.repredictionGroup.controls["Reprediction"];
    this.daysAhead = this.myGroup.controls["daysAhead"];
  }

  ngOnInit() { }
  async UpdateConfig() {
    await this.api.UpdateConfig(this.myGroup.value)
      .subscribe(res => {
        this.toaster.openSnackBar(res["message"], '', res['status']);
      }, err => {
        this.toaster.openSnackBar('Unexpected Error', 'Contact Dev', 'warning');
      });
  }

  async OpenReprediction() {
    console.log(this.repredictionGroup.value)
    await this.api.OpenReprediction(this.repredictionGroup.value)
      .subscribe(res => {
        this.toaster.openSnackBar(res["message"], '', res['status']);
      }, err => {
        this.toaster.openSnackBar('Unexpected Error', 'Contact Dev', 'warning');
      });
  }

}
