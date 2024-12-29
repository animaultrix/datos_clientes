import { Component } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';
import Swal from 'sweetalert2';
import { RouterOutlet, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { SharingDataService } from '../../service/sharing-data.service';


@Component({
  selector: 'client-app',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './client-app.component.html',
  styleUrl: './client-app.component.css'
})
export class ClientAppComponent {

  clients: Client[] = [];
  idclient!: number;

    constructor(
      private clientService: ClientService,
      private sharingDataService: SharingDataService,
      private router: Router
    ){
      
    };
    
    ngOnInit(): void {
      this.clientService.findAll().subscribe(response => this.clients = response);
      this.addClient();
      this.removeClient();
      this.findClientById();
    };
    findClientById(){
      this.sharingDataService.findClientByIdEventEmitter.subscribe(id =>{
        const client = this.clients.find(client => client.id == id);
        this.sharingDataService.selectClientEventEmitter.emit(client);
      });
    };
    addClient(){
      this.sharingDataService.newClientEvenEmitter.subscribe(client =>{
        if(client.id > 0){
          this.clients = this.clients.map(c => client.id == c.id?{ ...client }:c)
        }else{
          this.clients = [... this.clients, {... client}];
        };
        this.router.navigate(['/clients'], {state:{clients: this.clients}});
        Swal.fire({
          title: "Guardado!",
          text: "Guardado con exito!",
          icon: "success"
        });
      });
      
    };
    removeClient(): void{ 
      this.sharingDataService.idClientEventEmitter.subscribe(id =>{
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
            this.router.navigate(['/clients/create'], {skipLocationChange: true}).then(()=>{
              this.router.navigate(['/clients'], {state:{clients: this.clients}});
            })
            Swal.fire({
              title: "Eliminado!",
              text: "Registro eliminado.",
              icon: "success"
            });
          };
        }); 
      });
    };
 
}
