import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CathegoriePage } from './cathegorie.page';

const routes: Routes = [
  {
    path: '',
    component: CathegoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CathegoriePageRoutingModule {}
