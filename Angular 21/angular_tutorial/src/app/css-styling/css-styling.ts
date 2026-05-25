import { Component } from '@angular/core';

@Component({
  selector: 'app-css-styling',
  imports: [],
  templateUrl: './css-styling.html',
  // styleUrl: './css-styling.css',
  styles:[
    `
      .box{
        background-color: yellow;
      }
    `
  ]
})
export class CssStyling {}
