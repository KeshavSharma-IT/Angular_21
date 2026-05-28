import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effects',
  imports: [],
  templateUrl: './effects.html',
  styleUrl: './effects.css',
})
export class Effects {
  count=signal(0);

  
  increment(){
    this.count.update(a=>a+1);
  }
  
  // constructor(){
  //   effect(()=>{
  //     console.log("count value is:",this.count());
  //   })
  // }

  isDarkmode=signal(false);

  constructor(){
    effect(()=>{
      console.log("count value is:",this.count());  //for count

      // for dark mode
      if(this.isDarkmode()){
        document.body.style.background='black';
        document.body.style.color='white'
      }else{
        document.body.style.background='white';
        document.body.style.color='black'
      }
    })

   
  }

  toggle(){
    this.isDarkmode.update(a=>!a);
  }
}
