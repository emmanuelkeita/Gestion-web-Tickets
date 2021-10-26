import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';
import { Produit } from '../model/produit';
@Component({
  selector: 'app-sucre',
  templateUrl: './sucre.page.html',
  styleUrls: ['./sucre.page.scss'],
})
export class SucrePage implements OnInit {

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
      images : "assets/images/gaz/ga1.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/gaz/ga5.jpg",
    },
    
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/gaz/ga3.jpg",
    },
    
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/gaz/ga4.jpg",
    },
    
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/gaz/ga5.jpg",
    },
    
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/gaz/ga6.jpg",
    },
    
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/gaz/ga7.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/gaz/ga7.jpg",
    },


    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/gaz/ga7.jpg",
    },

    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/gaz/ga1.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/gaz/ga5.jpg",
    },
    
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/gaz/ga3.jpg",
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
