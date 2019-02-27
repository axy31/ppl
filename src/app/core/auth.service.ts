import { Injectable } from "@angular/core";
import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
@Component({
  selector: "app-root",
  template: `
    
ngIf="afAuth.user | async as user; else showLogin">

      <h1>Hello {{ user.displayName }}!</h1>
      <button (click)="logout()">Logout</button>
    </div>
    <ng-template #showLogin>
      <p>Please login.</p>
      <button (click)="login()">Login with Google</button>
    </ng-template>
  `
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
