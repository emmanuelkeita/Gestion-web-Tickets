import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { Location } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-alcool',
  templateUrl: './alcool.page.html',
  styleUrls: ['./alcool.page.scss'],
})
export class AlcoolPage implements OnInit {

  
  nom:string;
  type:string;
  volume:string;
  prix:number;
  produit: any[] = [];


  
  alcool: Produit[]=[
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/alcool/al1.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/alcool/al2.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/alcool/al3.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/alcool/al4.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/alcool/al5.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/alcool/al6.jpg",
    },
    {
      nom:"xxl",
      cathegorie:"energetique",
      volume: "35cl",
      prix:600,
      images : "assets/images/alcool/al7.jpg",
    },
    
  ]
  constructor(private location:Location,
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
