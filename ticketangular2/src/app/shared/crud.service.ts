import { Injectable } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  form: FormGroup = new  FormGroup({
    $key: new FormControl(null),
    titre: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    lieu: new FormControl('',Validators.required),
    categorie: new FormControl('',Validators.required),
    images: new FormControl('',Validators.required),
  });

  initializeFormGroup(){
    this.form.setValue({})
  }
}
