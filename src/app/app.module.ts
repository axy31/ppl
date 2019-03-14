import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./pages/home/home.component";
import { RoutingModule } from "./routing/routing.module";
import { HeaderComponent } from "./navigation/header/header.component";
import { SidenavListComponent } from "./navigation/sidenav-list/sidenav-list.component";
import { MakePredictionComponent } from "./pages/make-prediction/make-prediction.component";
import { PreviousPredictionsComponent } from "./pages/previous-predictions/previous-predictions.component";
import { PredictionArchiveComponent } from "./pages/prediction-archive/prediction-archive.component";
import { GeneralInfoComponent } from "./pages/general-info/general-info.component";
import { ConfigComponent } from "./pages/config/config.component";
import { UserLoginComponent } from "./users/user-login/user-login.component";
import { UserProfileComponent } from "./users/user-profile/user-profile.component";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import {
  MatSelectChange,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatSortModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { HttpClientModule } from '@angular/common/http';
import { EqualValidator  } from './directive/passwordmatch.directive';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    MakePredictionComponent,
    PreviousPredictionsComponent,
    PredictionArchiveComponent,
    GeneralInfoComponent,
    ConfigComponent,
    UserLoginComponent,
    UserProfileComponent,
    UserRegisterComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
