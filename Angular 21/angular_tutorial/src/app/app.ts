import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SigninComponent } from './signin/signin';
import { Event } from "./event/event";
import { FunctionCall } from './function-call/function-call';
import { DataTypes } from './data-types/data-types';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, SigninComponent, Event,FunctionCall,DataTypes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('angular_tutorial');
  name="keshav agular"; 
  isAdmin=true;
  title=signal("Angular tutorial keshav");

  getUser(){
    return "Keshav sharma";
  }
}
