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
      name: 'Esteban',
      lastname1: 'Pestana',
      lastname2: 'Guerra'
    },
    {
      id: 2,
      name: 'Pepe',
      lastname1: 'Vega',
      lastname2: 'Lopez'
    }
];
  constructor() { }

  findAll(): Observable<Client[]>{
    return of(this.clients);
  }
}
