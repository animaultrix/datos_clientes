import { Component, EventEmitter, } from '@angular/core';
import { Client } from '../../models/client';
import { RouterModule, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { SharingDataService } from '../../service/sharing-data.service';

@Component({
  selector: 'client',
  imports: [RouterModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

  clients: Client[] = [];
  
  constructor(
    private router: Router, 
    private clientService: ClientService, 
    private sharingDataService: SharingDataService
   ){
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.clients = this.router.getCurrentNavigation()?.extras.state!['clients'];
    }else{
      clientService.findAll().subscribe(response => this.clients = response);
    }  
  };
  onRemoveClient(id: number): void{    
    this.sharingDataService.idClientEventEmitter.emit(id);       
  };
  onSelectedClient(client: Client): void{
    //this.sharingDataService.selectedClientEventEmitter.emit(client);
    this.router.navigate(['/clients/edit', client.id], {state:{client:client}});
  };  
}
