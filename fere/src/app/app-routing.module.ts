import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cathegorie',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cathegorie',
    loadChildren: () => import('./pages/cathegorie/cathegorie.module').then( m => m.CathegoriePageModule)
  },
  {
    path: 'typeboisson',
    loadChildren: () => import('./pages/typeboisson/typeboisson.module').then( m => m.TypeboissonPageModule)
  },
  {
    path: 'pannier',
    loadChildren: () => import('./pages/pannier/pannier.module').then( m => m.PannierPageModule)
  },
  {
    path: 'popovers',
    loadChildren: () => import('./pages/popovers/popovers.module').then( m => m.PopoversPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'alcool',
    loadChildren: () => import('./pages/alcool/alcool.module').then( m => m.AlcoolPageModule)
  },
  {
    path: 'sucre',
    loadChildren: () => import('./pages/sucre/sucre.module').then( m => m.SucrePageModule)
  },
  {
    path: 'energetique',
    loadChildren: () => import('./pages/energetique/energetique.module').then( m => m.EnergetiquePageModule)
  },
  {
    path: 'energie',
    loadChildren: () => import('./pages/energie/energie.module').then( m => m.EnergiePageModule)
  },
  {
    path: 'energie',
    loadChildren: () => import('./pages/energie/energie.module').then( m => m.EnergiePageModule)
  },
  {
    path: 'jus',
    loadChildren: () => import('./pages/jus/jus.module').then( m => m.JusPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
