import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PipeshortNamePipe } from '../CustomPipes/pipeshort-name-pipe';
import { ConvertCurrencyPipe } from '../CustomPipes/convert-currency-pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,PipeshortNamePipe,ConvertCurrencyPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {

  name="keshav";
  uName="KESHAV";

  today=new Date();

  amount=2500;

  per=0.35;

  user={
    name:"keshav",
    email:"sh@gmail.com"
  }


  // custome pipe logic

  fullname="keshav sharma"

  usd=10;
  usdToInr=95;

}
