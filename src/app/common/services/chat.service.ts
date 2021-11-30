import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';
import { HttpClient } from '@angular/common/http';

import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socketClient: any;

  constructor(private session: SessionService, private http: HttpClient) { 
    this.socketClient = socketIo.io(environment.socketUrl);
  }

  sendMessage(roomId:string, content: string): void {
    this.socketClient.emit('newMessage', roomId, {
      user: this.session.getUsername(),
      content: content
    });
  }

  onNewMessage(): Observable<any> {
    return new Observable(observer => {
      this.socketClient.on('newMessage', (msg: any) => {
        observer.next(msg);
      });
    });
  }

  connectToRoom(roomId: string): void {
    this.socketClient.emit('joinRoom', roomId);
  }
}
