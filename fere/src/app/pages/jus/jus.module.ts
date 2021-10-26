import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JusPageRoutingModule } from './jus-routing.module';

import { JusPage } from './jus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JusPageRoutingModule
  ],
  declarations: [JusPage]
})
export class JusPageModule {}
