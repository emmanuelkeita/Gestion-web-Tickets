import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecupinfoticketPage } from './recupinfoticket.page';

const routes: Routes = [
  {
    path: '',
    component: RecupinfoticketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecupinfoticketPageRoutingModule {}
