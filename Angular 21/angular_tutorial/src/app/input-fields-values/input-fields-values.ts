import { Component } from '@angular/core';

@Component({
  selector: 'app-input-fields-values',
  imports: [],
  templateUrl: './input-fields-values.html',
  styleUrl: './input-fields-values.css',
})
export class InputFieldsValues {
  name:string="";
  city:string=""; 
  email:string="";

  updateName(val:string){
    this.name=val;
  }

  getEmail(val:string){
    this.email=val;  
  }
}
