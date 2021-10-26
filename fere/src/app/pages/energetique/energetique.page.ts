import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { Location } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-energetique',
  templateUrl: './energetique.page.html',
  styleUrls: ['./energetique.page.scss'],
})
export class EnergetiquePage implements OnInit {

  nom:string;
  type:string;
  volume:string;
  prix:number;
  produit: any[] = [];


  produits: Produit[]=[
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/01.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/im3.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/en02.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/en03.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/en04.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/en05.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/en06.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/en07.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/en07.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/en06.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/en07.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/en07.jpg",
    }
    
    
  ]

  constructor(  private location:Location,
    private router:Router) { }

  ngOnInit() {
  }
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
