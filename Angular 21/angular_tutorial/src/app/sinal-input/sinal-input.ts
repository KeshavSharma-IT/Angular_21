import { Component, Signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-sinal-input',
  imports: [Child],
  templateUrl: './sinal-input.html',
  styleUrl: './sinal-input.css',
})
export class SinalInput {
  username:string='Angular'

  message:string='';

  onMessage(msg:string){
    this.message=msg;
  }
}
