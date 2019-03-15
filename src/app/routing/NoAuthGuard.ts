import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of as observableOf } from 'rxjs';

@Injectable()
export class NoAuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate() {
        if (localStorage.getItem("UserName") === null) {
            alert("log in");
            this.router.navigate(['/login']);
            return false;
        }
        else if (localStorage.getItem("Access") === "Admin") {
            return true;
        }
        else {
            alert("log in as admin");
            this.router.navigate(['/home']);
            return false;
        }
    }
}