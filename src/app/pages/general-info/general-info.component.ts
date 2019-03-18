import { Component, OnInit, Pipe } from '@angular/core';
import { ApiCallService } from 'src/app/core/api-call.service';
import { ToasterService } from 'src/app/core/toaster.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml' })
export class Safe {
  constructor(private sanitizer: DomSanitizer) { }

  transform(style) {
    return this.sanitizer.bypassSecurityTrustHtml(style);
    //return this.sanitizer.bypassSecurityTrustStyle(style);
    // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
  }
}

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {
  public myTemplate: any = "";
  constructor(private api: ApiCallService, private toaster: ToasterService, private http: HttpClient) {
    this.http.get('http://ec2-52-66-210-236.ap-south-1.compute.amazonaws.com/api/test1.html', { responseType: 'text' })
      .subscribe(data => this.myTemplate = data)
  }
  ngOnInit() { }
}

