import { Component, OnInit } from '@angular/core';
declare var device;

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {

  constructor() { }

  deviceInfo: any;

  ngOnInit() {
    this.deviceInfo = {
        model: device.model,
        platform: device.platform,
        uuid: device.uuid,
        version: device.version,
        manufacturer: device.manufacturer,
        serial: device.serial
    }
  }

}