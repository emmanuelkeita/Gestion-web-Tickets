import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-typeboisson',
  templateUrl: './typeboisson.page.html',
  styleUrls: ['./typeboisson.page.scss'],
})
export class TypeboissonPage implements OnInit {

  nom:string;
  type:string;
  volume:string;
  prix:number;
  produit: any[] = [];

  constructor(
             private location:Location,
              private router:Router
              
        ) {
    let prouit = JSON.parse(localStorage.getItem('produit'));
    console.log('produitsaved',prouit);
    

   }
   versBack(){
    this.location.back();
  }


  ngOnInit() {
    localStorage.removeItem('pannier');
  }
  
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
    
  }
   
  }

   
  }

