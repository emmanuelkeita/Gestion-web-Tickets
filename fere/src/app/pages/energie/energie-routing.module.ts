import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnergiePage } from './energie.page';

const routes: Routes = [
  {
    path: '',
    component: EnergiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnergiePageRoutingModule {}
