import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popovers',
  templateUrl: './popovers.page.html',
  styleUrls: ['./popovers.page.scss'],
})
export class PopoversPage implements OnInit {
  produit: any;

  constructor( private popoverController: PopoverController,
                private activatedRoute : ActivatedRoute
                ){
                  this.activatedRoute.queryParams.subscribe(queryParams=>{
                    this.produit=JSON.parse(queryParams.google)
                  })
                }
             

  ngOnInit() {
  }
  
 

}
