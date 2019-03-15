import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class isLoggedIn implements CanActivate {
    constructor(private router: Router) { }
    canActivate() {
        if (localStorage.getItem("UserName") === null) {
            alert("log in");
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    }
}