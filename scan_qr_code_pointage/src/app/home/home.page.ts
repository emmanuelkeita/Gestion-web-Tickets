
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    mail:string;
    motDePasse:string
  
  constructor(private afAuht:AngularFireAuth,
              private router:Router,
              private loadCtrl:LoadingController,
             private alertController: AlertController){ }


    async presentAlert() {
      const alert = await this.alertController.create({
        message: 'ERROR Veuillez Ressayer',
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }


  async goToScan(){
    const load = await this.loadCtrl.create({
      spinner:'crescent',
      duration: 2000
    });
    load.present();
  

    this.afAuht.signInWithEmailAndPassword(this.mail,this.motDePasse).then((response)=>{

      load.dismiss();
      this.router.navigate(['scan']).catch((err) => {
  
        load.dismiss();  
        
      
      })
    })
  }

  async Inscription(){
    const load = await this.loadCtrl.create({
      spinner:'crescent',
      duration: 2000
    });
    load.present();
      this.router.navigate(['inscription' ])
      load.dismiss();  
    }
}
