import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeboissonPageRoutingModule } from './typeboisson-routing.module';

import { TypeboissonPage } from './typeboisson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeboissonPageRoutingModule
  ],
  declarations: [TypeboissonPage]
})
export class TypeboissonPageModule {}
