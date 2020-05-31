import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ChangeSomeDataComponent} from '../admin-panel/change-user/change-some-data/change-some-data.component';
import {Section} from '../admin-panel/change-user/change-user.component';
import {MatDialog} from '@angular/material/dialog';
import {PnaComponent} from './pna/pna.component';
import {LibsaComponent} from './libsa/libsa.component';
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

  languages = [
    'Java',
    'Python',
    'NodeJs',
    'AngularCLI',
  ];

  projects = [
    'Project1',
    'Project2',
    'Project3',
    'Project4',
  ];

  templates = [
    'None',
    'Maven',
    'JEE',
  ];

  files = [
    'Main.java',
    'file1.java',
    'file2.java',
  ];

  date = new FormControl(new Date());


  login: string;
  password: string;
  role: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  doSomeChanges() {
    this.changes = false;
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
