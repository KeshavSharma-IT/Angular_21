import { Component } from '@angular/core';
import { Card } from '../card/card';
import { Button } from "../button/button";
import { FormFields } from '../form-fields/form-fields';

@Component({
  selector: 'app-resuable-components',
  imports: [Card, Button,FormFields],
  templateUrl: './resuable-components.html',
  styleUrl: './resuable-components.css',
})
export class ResuableComponents {

  saveData(){
    console.log("Data Fetch");
  }
  
  message="";
  onSave(msg:string){
    console.log(msg);
    this.message=msg;
  }

  email=''
  onEmailChnage(value:string){
    console.log('email:',value);
    this.email=value;
  }
}
