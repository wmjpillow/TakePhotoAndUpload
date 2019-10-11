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

export class MyFileUploadComponent{
  constructor( private http: HttpClient){
  }
  selectedFile: File=null;
  onFileSelected(event){
    console.log(event);
    this.selectedFile= <File>event.target.files[0];
  }
  onUpload(){
    const fd= new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name);
    this.http.post('https://us-central1-major-s-firebase.cloudfunctions.net/addMessage',fd)
     .subscribe(res =>{
       console.log(res);
     });
  }
}
