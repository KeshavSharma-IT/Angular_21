import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
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


}
