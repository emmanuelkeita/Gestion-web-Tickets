import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Produit } from '../model/produit';


@Component({
  selector: 'app-pannier',
  templateUrl: './pannier.page.html',
  styleUrls: ['./pannier.page.scss'],
})
export class PannierPage implements OnInit {
  
  nom:string;
  type:string;
  volume:string;
  prix:number; 
  images:string; 
 
count =1;
datas:any[]=[]
  produit:any[] ;
  produite:any[]

  constructor(
    private location:Location,
    ) { 
     this.produit = JSON.parse(localStorage.getItem('produit'));
    }


  ngOnInit() {
 
   this.produit.forEach(element => {
      element.nombre = 1
      this.datas.push(element)
    });
    console.log(this.datas);
    
  }

  versBack(){
    this.location.back();
  }

  ajouter(prod){
 
   let counter = prod.nombre
   counter++
   prod.nombre = counter
   
  };
  soustraire(prod){
    let counter = prod.nombre

    if(counter>1)
   
   
   { 
    counter--
    prod.nombre = counter
   }

  };
  // price(){

  // }
  


}
