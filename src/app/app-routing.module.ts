import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'makeprediction', loadChildren: './makeprediction/makeprediction.module#MakepredictionPageModule' },
  { path: 'previousprediction', loadChildren: './previousprediction/previousprediction.module#PreviouspredictionPageModule' },
  { path: 'actualscores', loadChildren: './actualscores/actualscores.module#ActualscoresPageModule' },
  { path: 'config', loadChildren: './config/config.module#ConfigPageModule' },
  { path: 'predictionarchive', loadChildren: './predictionarchive/predictionarchive.module#PredictionarchivePageModule' },
  { path: 'generalinfo', loadChildren: './generalinfo/generalinfo.module#GeneralinfoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
