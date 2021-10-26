import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionEvenementComponent } from './gestion-evenement/gestion-evenement.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { ListEvenementComponent } from './list-evenement/list-evenement.component';
import { StatistiqueComponent } from './statistique/statistique.component';

const routes: Routes = [
  {path:'', redirectTo:'statistique', pathMatch:'full'},
  {path:'statistique',component:StatistiqueComponent},
  {path:'gestion-evenement',component:GestionEvenementComponent},
  {path:'gestion-utilisateur',component:GestionUtilisateurComponent},
  {path:'list-evenement',component:ListEvenementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
