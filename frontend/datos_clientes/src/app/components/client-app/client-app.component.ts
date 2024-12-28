import { Component } from '@angular/core';
import { ClientComponent } from '../client/client.component';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';
import { ClientFormComponent } from "../client-form/client-form.component";
import Swal from 'sweetalert2';


@Component({
  selector: 'client-app',
  imports: [ClientComponent, ClientFormComponent],
  templateUrl: './client-app.component.html',
  styleUrl: './client-app.component.css'
})
export class ClientAppComponent {

  clients: Client[] = [];
  idclient!: number;
  clientSelected: Client;
  open: boolean = false;

    constructor(private clientService: ClientService){
      this.clientSelected = new Client
    }
    ngOnInit(): void {
      this.clientService.findAll().subscribe(response => this.clients = response);
    }
    addClient(client: Client){
      if(client.id > 0){
        this.clients = this.clients.map(c => client.id == c.id?{ ...client }:c)
      }else{
        this.clients = [... this.clients, {... client}];
      }
      Swal.fire({
        title: "Guardado!",
        text: "Guardado con exito!",
        icon: "success"
      });
      this.clientSelected = new Client();
      this.setOpen();      
    }
    removeClient(id: number): void{      
      Swal.fire({
        title: "¿Estas seguro de que quiere eliminar el registro?",
        text: "¡Cuidado, el registro sera eliminado permanentemente!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then((result) => {
        if (result.isConfirmed) {
          this.clients = this.clients.filter(client => client.id != id);
          Swal.fire({
            title: "Eliminado!",
            text: "Registro eliminado.",
            icon: "success"
          });
        }
      });  
    }
    setSelectedClient(clientRow: Client): void{
      this.clientSelected = {... clientRow};
      this.open = true;
    }
    setOpen(): void{ 
      this.open = !this.open;   
    };
}
