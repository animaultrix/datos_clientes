import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  private clients: Client[]=[
    {
      id: 1,
      nombre: 'Esteban',
      apellido1: 'Pestana',
      apellido2: 'Guerra'
    },
    {
      id: 2,
      nombre: 'Pepe',
      apellido1: 'Vega',
      apellido2: 'Lopez'
    }
];
  constructor() { }

  findAll(): Observable<Client[]>{
    return of(this.clients);
  }
}
