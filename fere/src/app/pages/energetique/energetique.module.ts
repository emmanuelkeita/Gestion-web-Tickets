import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnergetiquePageRoutingModule } from './energetique-routing.module';

import { EnergetiquePage } from './energetique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnergetiquePageRoutingModule
  ],
  declarations: [EnergetiquePage]
})
export class EnergetiquePageModule {}
