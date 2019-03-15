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
import { NoAuthGuard } from './NoAuthGuard';
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "makeprediction", component: MakePredictionComponent },
  { path: "previousprediction", component: PreviousPredictionsComponent },
  { path: "predictionarchive", component: PredictionArchiveComponent },
  { path: "generalinfo", component: GeneralInfoComponent },
  { path: "config", component: ConfigComponent, canActivate: [NoAuthGuard] },
  { path: "login", component: UserLoginComponent },
  { path: "register", component: UserRegisterComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
