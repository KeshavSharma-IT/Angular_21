import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-form-fields',
  imports: [],
  templateUrl: './form-fields.html',
  styleUrl: './form-fields.css',
})
export class FormFields {

  label=input<string>();
  // value=input<string>();
  type=input<string>('text');
  valueChange=output<string>();

  onInput(value:string){
    console.log("Child value");
    this.valueChange.emit(value);
  }

}
