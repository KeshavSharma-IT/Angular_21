import { Component } from '@angular/core';

@Component({
  selector: 'app-loop-components',
  imports: [],
  templateUrl: './loop-components.html',
  styleUrl: './loop-components.css',
})
export class LoopComponents {

  items=['Html','CSS','JAVASCRIPT','Angular'];

  users=[
    {name:'Keshav',age:28},
    {name:'Rohan',age:22},
    {name:'Mohan',age:24}
  ]

  nums=[1,2,3,4,5,6]
}
