import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ticketangular2';

  sideBarOpen = true;

  constructor() {}

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
