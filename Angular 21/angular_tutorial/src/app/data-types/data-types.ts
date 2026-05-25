import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-types',
  imports: [],
  templateUrl: './data-types.html',
  styleUrl: './data-types.css',
})
export class DataTypes {
    // value=10;
    // value="keshav"

    name: string | number="keshav"
    Sum:number | DecimalPipe=0;

    handleClick(){
      let value;
      value="keshAV"
      console.log(value);
      value=10;
      console.log(value);
    }
    
    
    sum(a:number,b:number){
      this.Sum=a+b;
      return a+b;
    }

    
}
