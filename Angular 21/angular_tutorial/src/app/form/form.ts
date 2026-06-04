import { Component, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms'; //old way
import { FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { email, submit } from '@angular/forms/signals';

@Component({
  selector: 'app-form',
  // imports: [FormsModule],
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  // old way
  // name=signal('');
  // email=signal('');

  // submitForm(){
  //   console.log(`Name: ${this.name()}, Email:${this.email()}`);
  // }

  //new way

  userSignal=signal({name:'',email:''});
  form:any;
  constructor(private fb:FormBuilder){
    this.form=this.fb.group({
      name:[''],
      email:['']
    })
    this.form.valueChanges.subscribe((value:any)=>{
      this.userSignal.set(value);
    });
  }
  
  submitForm(){
    console.log(`Name: ${this.userSignal().name}, Email:${this.userSignal().email}`);
  }
}
