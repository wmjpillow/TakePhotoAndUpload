import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  capturedSnapURL:string;
  cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera, private http: HttpClient) {}
  takeSnap() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      // this.camera.DestinationType.FILE_URI gives file URI saved in local
      // this.camera.DestinationType.DATA_URL gives base64 URI
      
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.capturedSnapURL = base64Image;
    }, (err) => {
      
      console.log(err);
      // Handle error
    });
  }

  // selectedFile: File=null;
  // onFileSelected(event){
  //   console.log(event);
  //   this.selectedFile= <File>event.target.files[0];
  // }
  // onUpload(){
  //   const fd= new FormData();
  //   fd.append('image',this.selectedFile,this.selectedFile.name);
  //   this.http.post('https://us-central1-major-s-firebase.cloudfunctions.net/addMessage',fd)
  //    .subscribe(res =>{
  //      console.log(res);
  //    });
  // }


}
