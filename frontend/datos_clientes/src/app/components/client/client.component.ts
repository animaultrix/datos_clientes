import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Client } from '../../models/client';
import Swal from 'sweetalert2'

@Component({
  selector: 'client',
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

  @Input() clients: Client[] = [];
  @Output() idClientEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() selectedClientEventEmitter: EventEmitter<Client> = new EventEmitter();

  onRemoveClient(id: number): void{    
    this.idClientEventEmitter.emit(id);       
  };
  onSelectedClient(client: Client): void{
    this.selectedClientEventEmitter.emit(client);  
  };
  
}
