import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { AuthService } from '../services/auth';
import { DisplayPage } from '../pages/display/display';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = HomePage;
  isAuthenticated = false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    private menuCtrl: MenuController, private authService: AuthService)  {
    // Firebase imported and initialized
      firebase.initializeApp({
        apiKey: "AIzaSyAS3UMy0oJm4UeYQUUIncpl1QGutXaMdYQ",
        authDomain: "tabsex-bc319.firebaseapp.com"
      })

      firebase.auth().onAuthStateChanged(user => {
        if(user) { 
          this.isAuthenticated = true;
          this.rootPage = DisplayPage;
        } else {
           this.isAuthenticated = false;
           this.rootPage = HomePage;
        }
      })

      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}
