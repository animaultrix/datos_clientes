import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Client } from '../../models/client';

@Component({
  selector: 'client-form',
  imports: [FormsModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent {

    @Input() client: Client;
    @Output() newClientEvenEmitter: EventEmitter<Client> = new EventEmitter();
    @Output() openEventEmitter: EventEmitter<boolean> = new EventEmitter();
    
    constructor(){
      this.client = new Client();
    }

    onSubmit(clientForm: NgForm): void{
      if(clientForm.valid){
        this.newClientEvenEmitter.emit(this.client);
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
    onOpenClose(clientForm: NgForm){
      this.openEventEmitter.emit();
      clientForm.reset();
      clientForm.resetForm();
    }
}