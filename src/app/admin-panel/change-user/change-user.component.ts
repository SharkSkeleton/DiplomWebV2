import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ChangeSomeDataComponent} from './change-some-data/change-some-data.component';

export interface Section {
  login: string;
}

export interface DialogData {
  login: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-change-user',
  templateUrl: './change-user.component.html',
  styleUrls: ['./change-user.component.css']
})
export class ChangeUserComponent implements OnInit {

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

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangeSomeDataComponent, {
      width: '250px',
      data: {name: this.login, animal: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.login = result;
    });
  }

}
