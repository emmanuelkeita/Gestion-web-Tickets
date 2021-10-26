import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Camera, CameraOptions, } from '@ionic-native/camera/ngx';
import { User } from '../model/user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
user:User = new User();
pass2:string;
userPhoto:string
  constructor( private afAuth: AngularFireAuth,
              private db: AngularFirestore,
               private router:Router,
               private loadCtrl:LoadingController, 
               private camera: Camera) { }

 async inscrire(){

  const load = await this.loadCtrl.create({
    spinner:'crescent',
    duration: 2000
  });
  load.present();
    this.afAuth.createUserWithEmailAndPassword(this.user.email,this.user.pass).then((response)=>{
      
      this.db.collection('users').doc(response.user.uid).set({
        prenom: this.user.prenom,
        nom : this.user.nom,
        email : this.user.email,
        pass: this.user.pass,
        userPhoto:this.userPhoto

      }).then(()=>{
        load.dismiss();
        this.router.navigate(['scan'])
      })
       
     
    })
  }

  photoUser(){
    const options: CameraOptions = {
      sourceType:this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 20,
      allowEdit:true,
      targetHeight:600,
      targetWidth:600,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture().then((imageData) => {
      this.userPhoto = 'data:image/jpeg;base64,' + imageData;
     })
  };

  ngOnInit() {
  }

}
