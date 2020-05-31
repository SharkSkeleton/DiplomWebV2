import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PageService} from './page.service';
import {HttpService} from '../http.service';
import {Task} from '../task';
import {User} from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  taskUser: string;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  tasks: Task[] = [
    {
      title: '',
      description: '',
      status: '',
      author: '',
      authorRole: '',
      executor: '',
    },
  ];

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder, private pageService: PageService, private httpService: HttpService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.setToDoPage();
  }

  setToDoPage() {
    // tslint:disable-next-line:max-line-length
    this.httpService.postGetAllTasks().subscribe( (data: Task[]) => { this.tasks = data; this.pageService.sendMessage('TODO', this.tasks); } );
  }

  setInProgressPage() {
    // tslint:disable-next-line:max-line-length
    this.httpService.postGetAllDataAboutUser(window.sessionStorage.getItem('id')).subscribe( (data: User) => { this.taskUser = data.login; this.httpService.postGetAllTasksInProgress(this.taskUser).subscribe((data1: Task[]) => { this.tasks = data1; this.pageService.sendMessage('InProgress', this.tasks); }); } );
    // tslint:disable-next-line:max-line-length
    // this.httpService.postGetAllTasksInProgress(this.httpService.postGetAllDataAboutUser(window.sessionStorage.getItem('id')).subscribe( (data: User) => { data.login; })).subscribe( (data: Task[]) => { this.tasks = data; this.pageService.sendMessage('InProgress', this.tasks); } );
  }
  //
  // setOnCheckingPage() {
  //   this.pageService.sendMessage('OnChecking');
  // }
  //
  // setDonePage() {
  //   this.pageService.sendMessage('Done');
  // }

  public onStepChange(event: any): void {
    switch (event.selectedIndex) {
      case 0:
        this.setToDoPage();
        break;
      case 1:
        this.setInProgressPage();
        break;
      // case 2:
      //   this.setOnCheckingPage();
      //   break;
      // case 3:
      //   this.setDonePage();
      //   break;
    }
  }
}
