import { NgFor } from '@angular/common';
import { ChatService } from './../../services/chat.service';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-meuchat',
  standalone: true,
  imports: [NgFor, FormsModule ],
  templateUrl: './meuchat.component.html',
  styleUrl: './meuchat.component.css'
})
export class MeuchatComponent {
  title = 'meuchat';
  public mensage: string[] = [];
  public newMensage: string = '';

  constructor(private chatService: ChatService){
    this.chatService.receberMensagem().subscribe((mensage: string) => {
      this.mensage.push(mensage);
    });
  }

  sendMesage(){
    this.chatService.enviarMensagem(this.newMensage);
    this.newMensage = '';
  }
}
