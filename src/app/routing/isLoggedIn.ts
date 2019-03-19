import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToasterService } from '../core/toaster.service';
import { ApiCallService } from '../core/api-call.service';

@Injectable()
export class isLoggedIn implements CanActivate {
    constructor(private api: ApiCallService, private router: Router, private toaster: ToasterService) { }
    canActivate() {
        if (!this.api.isLoggedIn) {
            this.toaster.openSnackBar('Please Log In', '', 'error');
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    }
}