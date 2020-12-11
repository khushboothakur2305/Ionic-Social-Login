import { Component } from "@angular/core";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import firebase from "firebase";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private googlePlus: GooglePlus) {}
  login() {
    // 375060315010-q8ct55oq0th2l3t6vo5g8272uq7qefkk.apps.googleusercontent.com
    //375060315010-q8ct55oq0th2l3t6vo5g8272uq7qefkk.apps.googleusercontent.com
    const params = {
      webClientId:
        "375060315010-q8ct55oq0th2l3t6vo5g8272uq7qefkk.apps.googleusercontent.com",
      offline: true,
      scopes: "profile email",
    };
    this.googlePlus
      .login(params)
      .then((res) => {
        const googleCredential = firebase.auth.GoogleAuthProvider.credential(
          res.idToken,
          res.accessToken
        );
        firebase
          .auth()
          .signInWithCredential(googleCredential)
          .then((success: firebase.auth.UserCredential) => {
            console.log(success);
          })
          .catch((err) => {
            console.log(err);
          });
        console.log("response");

        console.log(res);
      })
      .catch((err) => {
        console.log("error");
        console.error(err);
      });
  }
}
