import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // private camera: Camera, private http: HttpClient
  ) {
    this.initializeApp();
  }
  // capturedSnapURL:string;
  // cameraOptions: CameraOptions = {
  //   quality: 100,
  //   destinationType: this.camera.DestinationType.DATA_URL,
  //   encodingType: this.camera.EncodingType.JPEG,
  //   mediaType: this.camera.MediaType.PICTURE
  // }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // takeSnap() {
  //   this.camera.getPicture(this.cameraOptions).then((imageData) => {
  //     // this.camera.DestinationType.FILE_URI gives file URI saved in local
  //     // this.camera.DestinationType.DATA_URL gives base64 URI
      
  //     let base64Image = 'data:image/jpeg;base64,' + imageData;
  //     this.capturedSnapURL = base64Image;
  //   }, (err) => {
      
  //     console.log(err);
  //     // Handle error
  //   });
  // }
}



