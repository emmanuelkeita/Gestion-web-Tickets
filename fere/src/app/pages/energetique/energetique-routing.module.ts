import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnergetiquePage } from './energetique.page';

const routes: Routes = [
  {
    path: '',
    component: EnergetiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnergetiquePageRoutingModule {}
