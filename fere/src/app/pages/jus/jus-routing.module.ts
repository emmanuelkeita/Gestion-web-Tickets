import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JusPage } from './jus.page';

const routes: Routes = [
  {
    path: '',
    component: JusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JusPageRoutingModule {}
