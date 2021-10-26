import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
       title: 'Cathegorie', 
       url: 'cathegorie', 
       icon: 'home'
   },

    { 
       title: 'Pannier',
       url: 'pannier', 
       icon: 'cart'
   },
     
    {
       title: 'Deconnexion',
       url: '/folder/Favorites', 
       icon: 'log-in'
   },

   

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
