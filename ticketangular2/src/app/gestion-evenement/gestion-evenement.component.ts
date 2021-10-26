import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '../model/model';
import { CrudService} from '../shared/crud.service';
@Component({
  selector: 'app-gestion-evenement',
  templateUrl: './gestion-evenement.component.html',
  styleUrls: ['./gestion-evenement.component.scss']
})
export class GestionEvenementComponent implements OnInit {
 
 gestion:Event[]=[
   {
    titre:"sidi", date:"01/02/2020",lieu:"omnisport",prix:"2000fcfa",  categorie:"vip",images:"",  
   }
 ];

 form:FormGroup
 
 constructor( private service:CrudService,
             private fb:FormBuilder){}


createForm(){
  this.form = this.fb.group({
    titre:['',Validators.required],
    date:['',Validators.required],
    lieu:['',Validators.required],
    categorie:['',Validators.required],
    images:['',Validators.required],
    prix:['',Validators.required],
  })
}
  
 categorie=[
  { id:1, value: 'Place Vip + Comso'},
  { id:2, value: 'Place Vip'},
  { id:3, value: 'Place normal'}
 ]

 onClear(){
   this.service.form.reset();
   this.service.initializeFormGroup()
 }
  ngOnInit(): void {
    this.createForm();
  }

  ongetEvent(){ }
}

