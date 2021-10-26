import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CathegoriePageRoutingModule } from './cathegorie-routing.module';

import { CathegoriePage } from './cathegorie.page';
import { PopoversPage } from '../popovers/popovers.page';
import { ModalPage } from '../modal/modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CathegoriePageRoutingModule
  ],
  declarations: [CathegoriePage,PopoversPage,ModalPage],
  entryComponents :[PopoversPage,ModalPage]
})
export class CathegoriePageModule {}
