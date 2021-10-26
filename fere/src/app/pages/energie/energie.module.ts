import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnergiePageRoutingModule } from './energie-routing.module';

import { EnergiePage } from './energie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnergiePageRoutingModule
  ],
  declarations: [EnergiePage]
})
export class EnergiePageModule {}
