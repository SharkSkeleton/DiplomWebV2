import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postAuthenticationData(user: User) {
    const body = {email: user.email, password: user.password};
    return this.http.post('http://localhost:3000/', body);
  }
}
