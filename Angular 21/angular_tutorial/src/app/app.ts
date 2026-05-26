import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SigninComponent } from './signin/signin';
import { Event } from "./event/event";
import { FunctionCall } from './function-call/function-call';
import { DataTypes } from './data-types/data-types';
import { Events } from './events/events';
import { InputFieldsValues } from './input-fields-values/input-fields-values';
import { CssStyling } from './css-styling/css-styling';
import { ControlStatement } from './control-statement/control-statement';
import { SwitchCase } from './switch-case/switch-case';
import { LoopComponents } from './loop-components/loop-components';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, SigninComponent, Event,FunctionCall,DataTypes,
    Events,InputFieldsValues,CssStyling,ControlStatement,SwitchCase,
    LoopComponents
  ],
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
