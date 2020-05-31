import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../settings.component';

@Component({
  selector: 'app-pna',
  templateUrl: './pna.component.html',
  styleUrls: ['./pna.component.css']
})
export class PnaComponent implements OnInit {

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
    public dialogRef: MatDialogRef<PnaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
