import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SucrePageRoutingModule } from './sucre-routing.module';

import { SucrePage } from './sucre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SucrePageRoutingModule
  ],
  declarations: [SucrePage]
})
export class SucrePageModule {}
