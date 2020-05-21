import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ChangeSomeDataComponent} from '../admin-panel/change-user/change-some-data/change-some-data.component';
import {Section} from '../admin-panel/change-user/change-user.component';
import {MatDialog} from '@angular/material/dialog';
import {PnsComponent} from './pns/pns.component';
import {PnaComponent} from './pna/pna.component';
import {LansComponent} from './lans/lans.component';
import {LibssComponent} from './libss/libss.component';
import {LibsaComponent} from './libsa/libsa.component';
import {StartsComponent} from './starts/starts.component';
import {StartaComponent} from './starta/starta.component';

export interface DialogData {
  login: string;
  password: string;
  role: string;
}

export interface PnsData {
  project: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  changes = true;

  cities = [
    'Kiev',
    'Kharkiv',
    'Lviv',
    'Odessa'
  ];
  date = new FormControl(new Date());


  login: string;
  password: string;
  role: string;

  users: Section[] = [
    {
      login: 'Mishka_new'
    },
    {
      login: 'Andrew'
    }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  doSomeChanges() {
    this.changes = false;
  }

  openPns(): void {
    const dialogRef = this.dialog.open(PnsComponent, {
      width: '300px',
      data: {name: this.login, animal: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.login = result;
    });
  }

  openPna(): void {
    const dialogRef = this.dialog.open(PnaComponent, {
      width: '300px',
      data: {name: this.login, animal: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.login = result;
    });
  }

  openLans(): void {
    const dialogRef = this.dialog.open(LansComponent, {
      width: '300px',
      data: {name: this.login, animal: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.login = result;
    });
  }

  openLibss(): void {
    const dialogRef = this.dialog.open(LibssComponent, {
      width: '300px',
      data: {name: this.login, animal: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.login = result;
    });
  }

  openLibsa(): void {
    const dialogRef = this.dialog.open(LibsaComponent, {
      width: '300px',
      data: {name: this.login, animal: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.login = result;
    });
  }

  openStarts(): void {
    const dialogRef = this.dialog.open(StartsComponent, {
      width: '300px',
      data: {name: this.login, animal: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.login = result;
    });
  }

  openStarta(): void {
    const dialogRef = this.dialog.open(StartaComponent, {
      width: '300px',
      data: {name: this.login, animal: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.login = result;
    });
  }

}
