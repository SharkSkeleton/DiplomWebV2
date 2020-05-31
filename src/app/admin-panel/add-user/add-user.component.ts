import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {HttpService} from '../../http.service';
import {AddUserAnswerComponent} from './add-user-answer/add-user-answer.component';
import {MatDialog} from '@angular/material/dialog';

export interface AddedUserData {
  login: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  roles = [
    'Team-lead',
    'Front-end-Developer',
    'Back-end-Developer',
    'Full-Stack-Developer',
    'QA',
    'Project-Manager',
  ];

  user = new User();
  receivedUser = new User();

  constructor(private httpService: HttpService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAnswer(): void {
    const dialogRef = this.dialog.open(AddUserAnswerComponent, {
      width: '300px',
      data: {login: this.user.login, password: this.user.password, role: this.user.role}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.login = result;
    });
  }

  submit(user: User) {
    this.httpService.postAddedUser(user)
      .subscribe(
        // tslint:disable-next-line:max-line-length
        (data: User) => { this.receivedUser.login = data.login; this.receivedUser.password = data.password; this.receivedUser.role = data.role; this.openAnswer();},
        error => console.log(error)
      );
  }

}
