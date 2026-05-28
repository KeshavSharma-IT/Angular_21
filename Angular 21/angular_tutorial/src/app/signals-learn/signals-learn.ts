import { Component, computed, signal } from '@angular/core';

interface User{
  name:string;
  age:number
}


@Component({
  selector: 'app-signals-learn',
  imports: [],
  templateUrl: './signals-learn.html',
  styleUrl: './signals-learn.css',
})
export class SignalsLearn {

  count=signal(10);
  val=20;

  // count.update(c=>c+1);  // only work  in ts file

  increment(){
    this.count.update(c=>c+1);
  }
  decrement(){
    this.count.update(c=>c-1);
  }

  reset(){
    this.count.set(0);
  }

// data types in signal
 myCount=signal<Number>(0);
 name=signal<String>('angular');
 isActive=signal<boolean>(true);

 num=signal<Number[]>([1,2,3,4,5,6,7])
 user=signal<{name:string,age:number}>({name:'keshav',age:28});  // not prefered way

 users=signal<User>({name:'keshav',age:23});




//  change  array //assign new value
Directupdate(){
  this.num.set([23,34,45])
}
// add value to array
addNumber(){
  this.num.update(arr=>[...arr,400]);
}
//computer signal




NewCount=signal<number>(2);

doubleNewCount=computed<number>(()=>this.NewCount()*2);


trippleNewCount=computed<number>(()=>this.NewCount()*3);

incrementNew(){
    this.NewCount .update(c=>c+1);
}


firstName=signal<string>('keshav');
lastName=signal<string>('sharma')

fullName=computed<string>(()=> `${this.firstName()} ${this.lastName()}`);

}
