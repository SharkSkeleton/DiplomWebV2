import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../settings.component';

@Component({
  selector: 'app-lans',
  templateUrl: './lans.component.html',
  styleUrls: ['./lans.component.css']
})
export class LansComponent implements OnInit {

  languages = [
    'Java',
    'Python',
    'NodeJs',
    'AngularCLI',
  ];
  ngOnInit(): void {
  }

  constructor(
    public dialogRef: MatDialogRef<LansComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
