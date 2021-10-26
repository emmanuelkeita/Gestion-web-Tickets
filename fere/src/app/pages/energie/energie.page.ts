import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-energie',
  templateUrl: './energie.page.html',
  styleUrls: ['./energie.page.scss'],
})
export class EnergiePage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  
voirDetailPage(bamako){
  let navigate : NavigationExtras={
    queryParams: {
      bamako : JSON.stringify(bamako)  
    }
  }
  this.router.navigate(['detail'],navigate);
}

}
