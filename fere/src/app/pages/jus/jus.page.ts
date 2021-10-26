import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-jus',
  templateUrl: './jus.page.html',
  styleUrls: ['./jus.page.scss'],
})
export class JusPage implements OnInit {

  nom:string;
  type:string;
  volume:string;
  prix:number;
  produit: any[] = [];

  constructor(private location:Location,
               private router:Router) { }

  ngOnInit() {
  }

  produits: Produit[]=[
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/jus/jus9.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/jus/jus2.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/jus/jus3.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/jus/jus4.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/jus/jus5.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/jus/jus6.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/jus/jus7.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/jus/jus8.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/jus/jus9.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/jus/jus7.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/jus/jus8.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/jus/jus9.jpg",
    },
   

    
    
  ]

  versBack(){
    this.location.back();
  };
  versPannier(){
    this.router.navigate(['pannier']);
  };
  versPagesPannier(){
    let nouveauProuit = JSON.parse(localStorage.getItem('produit'));
    if(nouveauProuit){
      nouveauProuit.push({
        nom:this.nom,
        type:this.type,
        volume:this.volume,
        prix:this.prix
      })
      localStorage.setItem('produit',JSON.stringify(nouveauProuit));
      console.log('nouveauproduit');
    }else{
      this.produit.push({
        nom:this.nom,
        type:this.type,
        volume:this.volume,
        prix:this.prix
    })
    localStorage.setItem('produit',JSON.stringify(this.produit))
    console.log(this.produit);
    
  };


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
