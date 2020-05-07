import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  changes = true;

  cities = [
    'Kiev',
    'Kharkiv',
    'Lviv',
    'Odessa'
  ];
  date = new FormControl(new Date());

  constructor() { }

  ngOnInit(): void {
  }

  doSomeChanges() {
    this.changes = false;
  }

}
