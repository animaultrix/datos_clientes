import { EventEmitter, Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _newClientEvenEmitter: EventEmitter<Client> = new EventEmitter();
  private _idClientEventEmitter: EventEmitter<number> = new EventEmitter();
  private _findClientByIdEventEmitter: EventEmitter<number> = new EventEmitter();
  private _selectClientEventEmitter: EventEmitter<Client> = new EventEmitter();

  constructor() { }

  get newClientEvenEmitter(): EventEmitter<Client>{
    return this._newClientEvenEmitter;
  };
  get idClientEventEmitter(): EventEmitter<number>{
    return this._idClientEventEmitter;
  };
  get findClientByIdEventEmitter(): EventEmitter<number>{
    return this._findClientByIdEventEmitter;
  };
  get selectClientEventEmitter(): EventEmitter<Client>{
    return this._selectClientEventEmitter;
  };
}