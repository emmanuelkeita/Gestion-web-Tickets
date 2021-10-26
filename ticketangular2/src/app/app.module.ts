import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CrudService} from './shared/crud.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatistiqueComponent } from './statistique/statistique.component';
import { GestionEvenementComponent } from './gestion-evenement/gestion-evenement.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import { ListEvenementComponent } from './list-evenement/list-evenement.component';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestorE';
import { AngularFireStorageModule } from '@angular/fire/storage';

// var firebaseConfig = {
//   apiKey: "AIzaSyAlWesHnZ8bHEJh5kU2nxolqy36UNoB3Dg",
//   authDomain: "pointage-458b2.firebaseapp.com",
//   projectId: "pointage-458b2",
//   storageBucket: "pointage-458b2.appspot.com",
//   messagingSenderId: "281548464005",
//   appId: "1:281548464005:web:4a25204c8817ff3f17eeec",
//   measurementId: "G-5KPENY3EQ8"
// };

@NgModule({
  declarations: [
    AppComponent,
    StatistiqueComponent,
    GestionEvenementComponent,
    GestionUtilisateurComponent,
    HeaderComponent,
    SidenavComponent,
    ListEvenementComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatStepperModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent],
  entryComponents:[GestionEvenementComponent]
})
export class AppModule { }
