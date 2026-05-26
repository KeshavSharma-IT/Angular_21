import { Component } from '@angular/core';

@Component({
  selector: 'app-control-statement',
  imports: [],
  templateUrl: './control-statement.html',
  styleUrl: './control-statement.css',
})
export class ControlStatement {
  isLoggedin=true;

  marks=65;

  showBox=true;

  toggleBox(){
    this.showBox=!this.showBox
  }

  age:number=0;
  updateEvent(age:string){
    this.age=Number(age);
  }

  status="Processing"

}
