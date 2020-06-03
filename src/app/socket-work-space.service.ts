import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class SocketWorkSpace {
  private host = 'http://localhost:8080';
  private socket: SocketIOClient.Socket;
  private tasksSubj = new Subject<any>();

  constructor() {
    this.socket = io(this.host); // {transports: ['webSocket']}
    console.log('Pre connect steps are performed');
  }

  // EMITTER
  sendMessage(id: string, login: string) {
    console.log('Here');
    this.socket.emit('news', { uId: id, uL: login });
    this.socket.on('news', data => {
      console.log('Received data from Backend', data);
      this.tasksSubj.next(data);
    });
    return this.tasksSubj.asObservable();
  }

  getTasks() {
    this.socket.emit('news', 'TODO');
    this.socket.on('news', data => {
      console.log('Received data from Backend', data);
      this.tasksSubj.next(data);
    });
    return this.tasksSubj.asObservable();
  }


  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  // HANDLER
  // onNewMessage() {
  //   console.log('I`m working');
  //   return Observable.create(observer => {
  //     this.socket.on('news', data => {
  //       // this.socket.emit('news', 'sa');
  //       observer.next(data);
  //       console.log(data);
  //     });
  //   });
  // }
}
