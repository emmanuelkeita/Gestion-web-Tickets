import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanticketPageRoutingModule } from './scanticket-routing.module';

import { ScanticketPage } from './scanticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanticketPageRoutingModule
  ],
  declarations: [ScanticketPage]
})
export class ScanticketPageModule {}
