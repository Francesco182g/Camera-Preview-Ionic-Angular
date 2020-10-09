import { Component } from '@angular/core';
import { CameraPreview} from '@ionic-native/camera-preview/ngx';
import { Platform} from '@ionic/angular';
import { Base64ToGallery, Base64ToGalleryOptions} from '@ionic-native/base64-to-gallery/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    IMAGE_PATH: any;
    colorEffect = 'nome';
    smallPreview: boolean;
    setZoom = 1;
    flashMode = 'off';
    focusMode = 'auto';
    tapFocus: true;

    camera = true;
    
  constructor(private cameraPreview: CameraPreview, private platform: Platform,
              private base64ToGallery: Base64ToGallery) {

  }

  async ionViewWillEnter() {
    console.log("WILL ENTER: ");

    await this.startCameraRear();
  }

  async ionViewWillLeave() {
    console.log("WILL LEAVE");

    await this.stopCamera();
  }

  show() {
    return this.cameraPreview.show();
  }

  async hide() {
    return this.cameraPreview.hide();
  }

  async changeColorEffect() {
    this.cameraPreview.setColorEffect(this.colorEffect);
  }

  async changeZoom() {
    this.cameraPreview.setZoom(this.setZoom);
  }

  async changeFlashMode() {
    this.cameraPreview.setFlashMode(this.flashMode);
  }

  async changeFocusMode() {
    this.cameraPreview.setFocusMode(this.focusMode);
  }
  
    takePicture() {
    let base64option: Base64ToGalleryOptions = {
      prefix: 'img',
      mediaScanner: false
    };

    this.cameraPreview.takePicture({
      width: 1280,
      height: 1280,
      quality: 100,
    }).then(async (imageData: string) => {
      let b64data = atob(imageData);
      this.IMAGE_PATH = 'data:image/jpeg;base64,' + imageData + "?" + (Math.random() * 3);;
      
      this.base64ToGallery.base64ToGallery(btoa(b64data), { prefix: '_img', mediaScanner: true }).then(
        res => console.log("Saved Success", res),
        err => console.log("Error saving image to gallery ", err)
      );
      
    }, (err) => {
      console.log(err);
      this.IMAGE_PATH = 'PathAlternativo';
    });
  }
  
   async startCameraRear() {
    try {

      await this.platform.ready();
      await this.cameraPreview.startCamera({
        x: 0,
        y: 0,
        width: this.platform.width(),
        height: this.platform.height(),
        toBack: true,
        camera: "rear",
        previewDrag: false,
        tapPhoto: true
      });
    } catch (err) {
      console.error("startCameraAbove", err);
    } finally {
    }
  }

  async stopCamera() {
    try {
      console.log("stopping camera");
      await this.cameraPreview.stopCamera();
    } catch (err) {
      console.error("stop camera error. Err: ", err);
    } finally {
    }
  }


  switchCamera(){
    this.cameraPreview.switchCamera();
  }

}
