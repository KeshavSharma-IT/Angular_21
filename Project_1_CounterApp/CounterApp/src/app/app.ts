import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CounterApp');

  counter:number=0;

  // increment(){
  //   this.counter++;
  // }
  // decrement(){
  //   if(this.counter>0){

  //     this.counter--;
  //   }
  // }

  // reset(){
  //   this.counter=0;
  // }

  handle(input:string){
    if(input=="add"){
      this.counter++;
    }else if(input==="sub"){
      if(this.counter>0){
        this.counter--;
      }
    }else{
      this.counter=0;
    }
  }
}
