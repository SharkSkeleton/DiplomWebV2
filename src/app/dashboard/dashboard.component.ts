import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PageService} from './page.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder, private pageService: PageService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  setToDoPage() {
    this.pageService.sendMessage('TODO');
  }

  setInProgressPage() {
    this.pageService.sendMessage('InProgress');
  }

  setOnCheckingPage() {
    this.pageService.sendMessage('OnChecking');
  }

  setDonePage() {
    this.pageService.sendMessage('Done');
  }

}
