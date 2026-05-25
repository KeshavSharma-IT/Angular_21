import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {

  handleClick(){
    console.log("button click");
  }

  onTyping(event:any){
     console.log("typed",event);
     console.log("typed",event.target.value);
     
  }
  
  onKeyUp(event:any){
    console.log("keyUp",event);
    console.log("keyup target key",event.key);
  }

  onHover(){
    console.log("Hover hover event")
  }
  onLeave(){
    console.log("Mouse leave event")
  }

  onBlur(){
    console.log("blur event event")
  }

  onFocus(){
    console.log("Focus event")
  }
}
