import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../change-user.component';

@Component({
  selector: 'app-change-some-data',
  templateUrl: './change-some-data.component.html',
  styleUrls: ['./change-some-data.component.css']
})
export class ChangeSomeDataComponent implements OnInit {

  roles = [
    'Team-lead',
    'Front-end-Developer',
    'Back-end-Developer',
    'Full-Stack-Developer',
    'QA',
    'Project-Manager',
  ];
  ngOnInit(): void {
  }

  constructor(
    public dialogRef: MatDialogRef<ChangeSomeDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
