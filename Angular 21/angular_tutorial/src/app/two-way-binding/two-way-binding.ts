import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  //imports: [FormsModule ], //FormsModule  for old way
  imports: [], //FormsModule  for old way
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {
  
  usrname='keshav';

  name1=signal("keshav sharma");

  user=signal<{name : string; age:number}>({
    name:'keshav',
    age:28

  })

  updateName(value:string){
    this.user.update(user=>({...user,name:value}));
  }

  updateAge(){
    this.user.update(user=>({...user,age:user.age+1}));
  }
}
