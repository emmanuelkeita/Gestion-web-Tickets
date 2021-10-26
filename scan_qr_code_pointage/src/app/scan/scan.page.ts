import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { User } from '../model/user';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})

export class ScanPage implements OnInit {
  textCode:string;
  user:User = new User();
  

  constructor(private barcodeScanner: BarcodeScanner,
    private afAuth:AngularFireAuth,
    private db: AngularFirestore) {
      
    }


  
  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.textCode = barcodeData.text;
      console.log('Barcode data', barcodeData);
      this.afAuth.currentUser.then((user)=>{
        this.db.collection('users').doc(user.uid).valueChanges().subscribe((res:User)=>{
          
          this.user = res,
          this.user.id = user.uid
          console.log('Barcode user',user);
          this.db.collection('recupscan').add({
            user:this.user,
            text: this.textCode,
            date:new Date()
          }).then(()=>{
            console.log('recupscan');
           
          })
        })
      })
     }).catch(err => {
         console.log('Error', err);
         this.scan();

     });
    
  }
  
 
  ngOnInit() {}  

}
