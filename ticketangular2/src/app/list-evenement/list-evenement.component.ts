import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { GestionEvenementComponent } from '../gestion-evenement/gestion-evenement.component';


export interface evenement {
  titre: string;
  date: string;
  lieu: string;
  prix: string;
  categorie:string;
}



let Donne_Evenemt: evenement[] = [
  {date: '10/10/2021', titre: 'Sidiki Diabaté', lieu: 'OmniSport', prix: '5000fcfa',categorie:'VIP' },
  {date: '10/10/2021', titre: 'Bama-Art', lieu:'OmniSport', prix: '5000fcfa',categorie:'VIP'  },
  {date: '10/10/2021', titre: 'Gaspi', lieu: 'OmniSport', prix: '5000fcfa',categorie:'VIP'  },
  {date: '10/10/2021', titre: 'Claba', lieu: 'OmniSport', prix: '5000fcfa',categorie:'VIP'  },
  {date: '10/10/2021', titre: 'Malakey', lieu: 'OmniSport', prix: '5000fcfa',categorie:'VIP'  },
  {date: '10/10/2021', titre: 'Oudeé-Mill', lieu: 'OmniSport', prix: '5000fcfa',categorie:'VIP'  },
  {date: '10/10/2021', titre: 'Weei-Soldat', lieu: 'OmniSport', prix: '5000fcfa',categorie:'VIP'  },
  {date: '10/10/2021', titre: 'Oxygen', lieu: 'OmniSport', prix: '5000fcfa',categorie:'VIP'  },
  {date: '10/10/2021', titre: 'Fluorine', lieu: 'OmniSport', prix: '5000fcfa',categorie:'VIP'  },
  {date: '10/10/2021', titre: 'Neon', lieu: 'OmniSport', prix: '5000fcfa',categorie:'VIP'  },
];

@Component({
  selector: 'app-list-evenement',
  templateUrl: './list-evenement.component.html',
  styleUrls: ['./list-evenement.component.scss']
})
export class ListEvenementComponent  {
 
  constructor(private dialog:MatDialog){}

      // dataSource = Donne_Evenemt;
      dataSource = new MatTableDataSource(Donne_Evenemt);
    displayedColumns: string[] = [ 'titre', 'lieu', 'date',  'prix','Categorie' , 'actions' ];
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onCreate(){
    this.dialog.open(GestionEvenementComponent,{
      width:'800px',
      disableClose:false
    })
  }

  onefface(){
    
  }
  
  }

