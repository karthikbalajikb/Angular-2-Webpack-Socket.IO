
import { Observable } from 'rxjs/Observable';
//import * as io from 'socket.io-client';
var io = require('socket.io-client');

export class SocketService {
  private url = 'http://localhost:5000/';
  private socket: any;

  sendMessage(message: any) {
    this.socket.emit('createNewTopic', message);
  }

  getBuildData() {
    let observable = new Observable((observer:any) => {
      this.socket = io(this.url);
      this.socket.emit('getBuildMetricData','test')
      this.socket.on('receiveBuildMetricData', (data: any) => { 
        console.log("UpdateBuildGrid:", data)
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  
}