import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of as observableOf } from 'rxjs';

@Injectable()
export class NoAuthGuard implements CanActivate {
    constructor() { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        if (localStorage.getItem("Access") === "Admin")
            return observableOf(true);
        else
            return observableOf(false);
    }
}