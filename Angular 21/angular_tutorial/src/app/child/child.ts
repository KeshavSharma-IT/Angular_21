import { Component, input,EventEmitter,Output, signal, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  name=input<string>();

  // old way
  // @Output() notify=new EventEmitter<string>();

  // sendToParent(){
  //   this.notify.emit('Hello parent (EventEmitter with output)')
  // }

  // new way
  message=signal("Hello Parent (signal)");

  updateMessage(){
    this.message.set("Updated cfrom children component (signal method)");
  }
}
