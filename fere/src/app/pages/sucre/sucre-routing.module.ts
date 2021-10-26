import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SucrePage } from './sucre.page';

const routes: Routes = [
  {
    path: '',
    component: SucrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SucrePageRoutingModule {}
