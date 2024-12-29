import { Component} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Client } from '../../models/client';
import { SharingDataService } from '../../service/sharing-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'client-form',
  imports: [FormsModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent {

    client: Client;    
    
    constructor(
      private sharingDataService: SharingDataService,
      private router: Router
    ){      
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.client = this.router.getCurrentNavigation()?.extras.state!['client'];
      }else{
        this.client = new Client();
      } 
    }

    onSubmit(clientForm: NgForm): void{
      if(clientForm.valid){
        this.sharingDataService.newClientEvenEmitter.emit(this.client);
        console.log(this.client);
      }      
      clientForm.reset();
      clientForm.resetForm();
    }
    onClear(clientForm: NgForm): void{
      this.client= new Client();
      clientForm.reset();
      clientForm.resetForm();
    }    
}