import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class WebSocketService{
    webSocket: WebSocket;
    chatMessages: any;

    constructor(){}
    public openWebSocket(){
        this.webSocket = new WebSocket('ws://localhost:8000/ws')
        this.webSocket.onopen = (event) => {
            console.log('Open: ', event);
          };
    }
}