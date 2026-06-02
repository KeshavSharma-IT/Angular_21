import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-deep-dive',
  imports: [],
  templateUrl: './signal-deep-dive.html',
  styleUrl: './signal-deep-dive.css',
})
export class SignalDeepDive {

  count=signal(10);
  name=signal("keshav");

  setCount(){
    this.count.set(20);
  }

  dpoubleCount=computed(()=>this.count()*2);

  increment(){
    this.count.update(a=>2*a);
  }
}
