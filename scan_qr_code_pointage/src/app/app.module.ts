import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera } from '@ionic-native/camera/ngx';



var firebaseConfig = {
  apiKey: "AIzaSyAlWesHnZ8bHEJh5kU2nxolqy36UNoB3Dg",
  authDomain: "pointage-458b2.firebaseapp.com",
  projectId: "pointage-458b2",
  storageBucket: "pointage-458b2.appspot.com",
  messagingSenderId: "281548464005",
  appId: "1:281548464005:web:4a25204c8817ff3f17eeec",
  measurementId: "G-5KPENY3EQ8"
};
// Initialize Firebase


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule],
  providers: [ BarcodeScanner,  Camera ,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
