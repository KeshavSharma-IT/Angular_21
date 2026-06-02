import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signal-template-binding',
  imports: [],
  templateUrl: './signal-template-binding.html',
  styleUrl: './signal-template-binding.css',
})
export class SignalTemplateBinding {

  count=signal(0);
  isLoggedIn=signal(false);

  items=signal<string[]>([
    "Angular","Vue","React"
  ])

  addItems(){
    this.items.update(items=>[...items,'HTML'])
  }

  role=signal<'admin'| 'user'>('user');

  features=signal<string[]>([
    "Dashboard",
    "Profile",
    "Settings"
  ]);

  makeAdmin(){
    this.role.set('admin');
    this.features.set([
      "Dashboard",
      "Profile",
      "Settings",
      "Admin Panel",
      "User managment"
    ])

  }

  makeUser(){
    this.role.set("user");
    this.features.set([
      "Dashboard",
      "Profile",
      "Settings",
      
    ])
  }
}
