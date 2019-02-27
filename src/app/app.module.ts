import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserLoginComponent } from "./users/user-login/user-login.component";
import { UserProfileComponent } from "./users/user-profile/user-profile.component";

import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFirestore } from "@angular/fire/firestore/firestore";

@NgModule({
  declarations: [AppComponent, UserLoginComponent, UserProfileComponent],

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule
  ],

  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
