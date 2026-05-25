import { Component } from '@angular/core';

@Component({
  selector: 'app-function-call',
  imports: [],
  templateUrl: './function-call.html',
  styleUrl: './function-call.css',
})
export class FunctionCall {
  
  count=0;
  handleClick(){
    console.log("button click",this.count);
    this.count++;
    this.helloWorld();
  }

  helloWorld(){
    console.log("hello world");
  }
}
