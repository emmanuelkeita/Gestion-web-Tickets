import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  bamako:any;
  Produitlocal:any[] = JSON.parse(localStorage.getItem('produit'));
  ProduitTab:any[]=[];
  produits:Produit[]=[

     
    // {
    //   nom:"xxl",
    //   cathegorie:"energetique",
    //   volume: "35cl",
    //   prix:600,
    //   images : "assets/images/im5.jpg",
      
    // },
  ];


  constructor(private activetedRoute : ActivatedRoute,
    private location:Location)
  
  {
    console.log(" nouveauProuit " )
    this.activetedRoute.queryParams.subscribe(queryParams=>{
     this.bamako = JSON.parse(queryParams.bamako),
     console.log('produits');
   })
  }
  goToBack(){
    this.location.back();
  }

  versPagesPannier(data){
    console.log(data);
    
     
      
      if(this.Produitlocal){
        this.Produitlocal.push(data);
        localStorage.setItem('produit',JSON.stringify(this.Produitlocal));
        console.log(JSON.parse(localStorage.getItem('produit')) );
      }else{
        this.ProduitTab.push(data);
        localStorage.setItem('produit',JSON.stringify(this.ProduitTab));
        console.log(JSON.parse(localStorage.getItem('produit')) );
      }
    }

  ngOnInit() {
  }

}
