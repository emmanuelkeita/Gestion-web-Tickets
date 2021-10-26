import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanticketPage } from './scanticket.page';

const routes: Routes = [
  {
    path: '',
    component: ScanticketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanticketPageRoutingModule {}
