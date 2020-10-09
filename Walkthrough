1. Create the project with ionic “ionic start” project blanc
    Add android (or ios) to the platforms
        ionic cordova platform add android

2. Install the CameraPreview plugin:
    ionic cordova plugin add cordova-plugin-camera-preview
    npm install @ ionic-native / camera-preview

3. Install the Base64 plugin
    ionic cordova plugin add cordova-base64-to-gallery
    npm install @ ionic-native / base64-to-gallery

4. Add CameraPreview and Base64 to the appmodule (provider)

5. Add to the home TS file:

    to. He imports:

        import {CameraPreview} from '@ ionic-native / camera-preview / ngx';
        import {Platform} from '@ ionic / angular';
        import {Base64ToGallery, Base64ToGalleryOptions} from '@ ionic-native / base64-to-gallery / ngx'

    b. The variables:

        IMAGE_PATH: any;
        colorEffect u003d 'name';
        smallPreview: boolean;
        setZoom u003d 1;
        flashMode u003d 'off';
        focusMode u003d 'auto';
        tapFocus: true;
        
    c. Add the methods in the ts file for using the camera
    
    d. The CSS must be transparent
        ion-content {
            --background: transparent;
        }
    
6. Add the buttons for using the camera in the html

7. Android X problem
    To fix this problem that occurs during build or run with Android:
        cordova plugin add cordova-plugin-androidx
        cordova plugin add cordova-plugin-androidx-adapter

8. Build with:
        ionic cordova build android
        
    Alternatively you can run the app directly with
        ionic cordova run android
