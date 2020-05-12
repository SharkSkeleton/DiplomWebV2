import {Component, EventEmitter, Output} from '@angular/core';
import {HttpService} from '../http.service';
import {FormControl, Validators} from '@angular/forms';
import {User} from './user';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent {
  // constructor(private httpService: HttpService) { }
  //
  // hide = true;
  // user: User = new User(); // данные вводимого пользователя
  // @Output() messageEvent = new EventEmitter();
  //
  // submit(user: User) {
  //   this.httpService.postData(user)
  //     .subscribe(
  //       (data: User) => { this.messageEvent.emit(true); },
  //       error => console.log(error)
  //     );
  // }

}
