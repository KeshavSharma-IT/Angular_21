import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-components',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header-components.html',
  styleUrl: './header-components.css',
})
export class HeaderComponents {}
