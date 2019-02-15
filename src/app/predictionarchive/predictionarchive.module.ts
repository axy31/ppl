import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PredictionarchivePage } from './predictionarchive.page';

const routes: Routes = [
  {
    path: '',
    component: PredictionarchivePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PredictionarchivePage]
})
export class PredictionarchivePageModule {}
