import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../pages/home/home.component";
import { MakePredictionComponent } from "../pages/make-prediction/make-prediction.component";
import { PreviousPredictionsComponent } from "../pages/previous-predictions/previous-predictions.component";
import { PredictionArchiveComponent } from "../pages/prediction-archive/prediction-archive.component";
import { GeneralInfoComponent } from "../pages/general-info/general-info.component";
import { ConfigComponent } from "../pages/config/config.component";
import { UserLoginComponent } from "../users/user-login/user-login.component";
import { UserRegisterComponent } from "../users/user-register/user-register.component";
import { NoAuthGuard } from "./NoAuthGuard";
import { isLoggedIn } from "./isLoggedIn";
import { UserProfileComponent } from "../users/user-profile/user-profile.component";
import { ForgotPasswordComponent } from "../users/forgot-password/forgot-password.component";
import { ActualScoresComponent } from '../pages/actual-scores/actual-scores.component';
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "makeprediction", component: MakePredictionComponent, canActivate: [isLoggedIn] },
  { path: "previousprediction", component: PreviousPredictionsComponent, canActivate: [isLoggedIn] },
  { path: "predictionarchive", component: PredictionArchiveComponent },
  { path: "generalinfo", component: GeneralInfoComponent },
  { path: "config", component: ConfigComponent, canActivate: [NoAuthGuard] },
  { path: "actualscores", component: ActualScoresComponent, canActivate: [NoAuthGuard] },
  { path: "login", component: UserLoginComponent },
  { path: "register", component: UserRegisterComponent },
  { path: "forgotPassword", component: ForgotPasswordComponent },
  { path: "profile", component: UserProfileComponent, canActivate: [isLoggedIn] },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
