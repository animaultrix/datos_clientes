import { Component, OnInit} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Client } from '../../models/client';
import { SharingDataService } from '../../service/sharing-data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'client-form',
  imports: [FormsModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent implements OnInit{

    client: Client;    
    
    constructor(
      private sharingDataService: SharingDataService,
      private route: ActivatedRoute
    ){      
      this.client = new Client();
      
    }
  ngOnInit(): void {
    this.sharingDataService.selectClientEventEmitter.subscribe(client => this.client = client);
    this.route.paramMap.subscribe(params => {
      const id: number = +(params.get('id') || '0');
      if (id > 0){
        this.sharingDataService.findClientByIdEventEmitter.emit(id);
      }
    })
  };

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