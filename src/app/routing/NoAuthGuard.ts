import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

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