import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-scanticket',
  templateUrl: './scanticket.page.html',
  styleUrls: ['./scanticket.page.scss'],
})
export class ScanticketPage implements OnInit {
  textCode: string;
  harouna:any;
  eai:any;
  eais:any
  rec: any;

  constructor(private barcodeScanner: BarcodeScanner,
              private db: AngularFirestore
    ) { }

  

  ngOnInit() {}


  scanTicket(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.textCode = barcodeData.text;
      this.db.collection('mesTickets').valueChanges().subscribe((res)=>{
        this.harouna = res;
        console.log('data', this.harouna);
        this.co();
      })
      console.log('Barcode data', barcodeData);
      
     }).catch(err => {
         console.log('Error', err);
     });
  }
  co(){
    this.eais='';
    for (let i = 0; i < this.harouna.length; i++) {
      if (this.harouna[i].codeQr==this.textCode) {
        this.eais=this.harouna[i].codeQr;
        this.rec = this.harouna[i];
        console.log(this.rec);
      } else {
        this.eai="non valide"
        console.log('non valide');
      }
    }

    if (this.eais) {
      this.eais=this.eais;
      
      console.log(this.eais);
      this.eai='';
    } else {
      this.eai='non valide'
    }
  }
}
