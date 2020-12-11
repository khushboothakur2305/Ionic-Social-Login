import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
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
      var firebaseConfig = {
        apiKey: "AIzaSyDPwm59lP2tqzskBP3SPi48JXPM4bCcxuI",
        authDomain: "login-298315.firebaseapp.com",
        projectId: "login-298315",
        storageBucket: "login-298315.appspot.com",
        messagingSenderId: "375060315010",
        appId: "1:375060315010:web:130ef3dd995b1c8b456d9b",
        measurementId: "G-6HBQ18V90Q",
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    });
  }
}
