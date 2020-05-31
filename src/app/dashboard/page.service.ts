import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Task} from '../task';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private subject = new Subject<any>();

  sendMessage(message: string, tasks: Task[]) {
    this.subject.next({ text: message, allTasks: tasks });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
