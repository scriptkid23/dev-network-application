import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { Injectable } from '@angular/core';


@Injectable()
export class WebSocketService{
    private stompClient:any;

    constructor(){}
    connect(){
        
    }
}