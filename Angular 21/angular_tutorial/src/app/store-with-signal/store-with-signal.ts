import { Component } from '@angular/core';
// import { CounterStore } from '../Core/Store/counter';

import { UserStore } from '../Core/Store/user';

@Component({
  selector: 'app-store-with-signal',
  imports: [],
  templateUrl: './store-with-signal.html',
  styleUrl: './store-with-signal.css',
})
export class StoreWithSignal {

  // constructor(public counterStore:CounterStore){}

  constructor(public userStore:UserStore){}
}
