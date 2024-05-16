import { Injectable } from "@angular/core";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private conexaoHub : HubConnection;

  //Construtor da conexão
  constructor(){
    this.conexaoHub = new HubConnectionBuilder().withUrl('http://localhost:7182/chat').build();
    this.startConexao();
  }
  //Método para realizar o start na conexão
  private startConexao(){
    this.conexaoHub.start().then(() => console.log('Conexão Inciada')).catch(err => console.log('Erro com o inicio da conexão !'));
  }
  //Método para envio da mensagem
  enviarMensagem(mensagem : string){
    this.conexaoHub.invoke('EnviarMensagem',mensagem).catch(err => console.log('Erro ao enviar a mensagem !'));
  }
  //Método para o recebimento da mensagem
  receberMensagem(): Observable<string> {
    return new Observable<string> (observador => {
      this.conexaoHub.on('ReceberMensagem', (mensagem:string)=> {
        observador.next(mensagem);
      });
    });
  }
}
