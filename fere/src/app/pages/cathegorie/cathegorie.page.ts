import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoversPage } from '../popovers/popovers.page';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Produit } from '../model/produit';



@Component({
  selector: 'app-cathegorie',
  templateUrl: './cathegorie.page.html',
  styleUrls: ['./cathegorie.page.scss'],
})
export class CathegoriePage implements OnInit {

  image ='assets/images/im5.jpg';
  variable: string;
  Harouna : any;
  slideoption = {
    autoplay : true,
    loop : true,
    speed: 1000
  };
  produits : Produit[]=[
    
    
      {
        nom:"xxl",
        cathegorie:"energetique",
        volume: "35cl",
        prix:600,
        images : "assets/images/im5.jpg",
        
      },
    
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/im5.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/im5.jpg",
    },
    {
      nom:"pepsi",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/im8.jpg",
    },
    {
      nom:"power",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/im6.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/im6.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/im4.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/im4.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/im4.jpg",
    },
  ];
  nom:string;
  type:string;
  volume:string;
  prix:number; 
  images:string;
  produit: any[] = [];
 


  constructor(private router:Router,
              private popoverController: PopoverController,
              private modalController: ModalController
    ) {
    // let prouit = JSON.parse(localStorage.getItem('produit'));
    // console.log('produitsaved',prouit);
    // localStorage.clear();
    this.variable="prod";

    this.variable="produit";
    console.log(this.variable);
   }
   aleatoireProduit(){
    this.produits.sort(() => Math.random() - 0.5)
   }

  ngOnInit() {
    //  localStorage.removeItem("produit");
    
    this.aleatoireProduit();
    
  }
  
versTypeBoisson(){
  this.router.navigate(['typeboisson'])
};
versJUS(){
  this.router.navigate(['jus'])
};
versGazeuse(){
  this.router.navigate(['sucre'])
};
versAlcool(){
  this.router.navigate(['alcool'])
};
versPannier(){
  this.router.navigate(['pannier']);
};
versEnergetique(){
  this.router.navigate(['energetique'])
}

versPagesPannier(data){
console.log(data);

  let nouveauProuit:any[]= JSON.parse(localStorage.getItem('produit'));
  if(nouveauProuit){
    nouveauProuit.push(data);
    localStorage.setItem('produit',JSON.stringify(nouveauProuit));
    console.log(JSON.parse(localStorage.getItem('produit')) );
  }else{
    this.produit.push(data)
    localStorage.setItem('produit',JSON.stringify(this.produit));
    console.log(JSON.parse(localStorage.getItem('produit')) );
  }
}
  // localStorage.setItem('produit',JSON.stringify(data))
  // console.log(data);


// async versPopover(data) {
//   const popover = await this.popoverController.create({
//     component: PopoversPage,
//     cssClass: 'my-custom-class',
//     translucent: true,
    
    
   
//   });
//   console.log(data);
   
//   let navigate : NavigationExtras ={
//     queryParams:{
//       google : JSON.stringify(data),
//     }
    
//   }
//   this.router.navigate([''],navigate);
//   return await popover.present(); 
// }


async versModal() {
  const modal = await this.modalController.create({
    component: ModalPage,
   
  });
  return await modal.present();
};

voirDetailPage(bamako){
  let navigate : NavigationExtras={
    queryParams: {
      bamako : JSON.stringify(bamako)  
    }
  }
  this.router.navigate(['detail'],navigate);
}

}
