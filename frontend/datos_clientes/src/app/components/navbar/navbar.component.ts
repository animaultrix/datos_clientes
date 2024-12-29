import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Client } from '../../models/client';

@Component({
  selector: 'navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input() clients: Client[];

  constructor(){
    this.clients = [];
  }
}
