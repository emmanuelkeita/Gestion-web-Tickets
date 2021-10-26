import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecupinfoticketPageRoutingModule } from './recupinfoticket-routing.module';

import { RecupinfoticketPage } from './recupinfoticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecupinfoticketPageRoutingModule
  ],
  declarations: [RecupinfoticketPage]
})
export class RecupinfoticketPageModule {}
