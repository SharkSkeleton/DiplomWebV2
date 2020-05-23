import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {User} from '../user';
import {HttpService} from '../http.service';


@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent {

  constructor(private httpService: HttpService) {}

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  user = new User();
  role = '';
  routerLink = '';

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Enter your email!';
    }

    return this.email.hasError('email') ? 'Enter correct email' : '';
  }

  getPassErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Enter your password!';
    }
  }

  submit(user: User) {
    this.httpService.postAuthenticationData(user)
      .subscribe(
        (data: User) => { this.role = data.role; this.routerLink = '/home'; },
        error => console.log(error)
      );
  }

  testBtn() {
    this.role = 'guest';
  }

}
