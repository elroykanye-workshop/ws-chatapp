import { Injectable } from '@angular/core';
import {ChatMessage} from "../model/chat.message";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private CONN_URL: string = "ws://chatapp.herokuapp.com/chat";

  webSocket: WebSocket;
  chatMessages: ChatMessage[] = [];

  constructor() {
    this.webSocket = new WebSocket(this.CONN_URL);
  }

  public openWebSocket(): void {
    this.webSocket.onopen = (event: Event) => {
      console.log(`Open: ${event}`);
    };

    this.webSocket.onmessage = (event) => {
      const message: ChatMessage = JSON.parse(event.data);
      this.chatMessages.push(message);
    };

    this.webSocket.onclose = (event: Event) => {
      console.log(`Close: ${event}`);
    };
  }

  public sendMessage(message: ChatMessage): void {
    this.webSocket.send(JSON.stringify(message));
  }

  public closeWebSocket(): void {
    this.webSocket.close();
  }
}
