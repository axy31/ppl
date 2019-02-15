import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Make Prediction',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Previous Prediction',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Actual Scores',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Config',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Prediction Archive',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'General Info',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
