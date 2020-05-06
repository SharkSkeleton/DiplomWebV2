import {Component, OnDestroy} from '@angular/core';
import {PageService} from '../page.service';
import {Subscription} from 'rxjs';

export interface Section {
  title: string;
  subtitle: string;
  content: string[];
}

export interface EditableSection {
  title: string;
  subtitle: string;
  content: string[];
  buttonLabel: string;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnDestroy {

  message: string;
  subscription: Subscription;

  constructor(private pageService: PageService) {
    this.subscription = this.pageService.getMessage().subscribe(message => {
      if (message) {
        this.message = message.text;
      } else {
        this.message = '';
      }
    });
  }

  todoTasks: EditableSection[] = [
    { title: 'John Doe',
      subtitle: 'Developer CSG',
      content: ['Tasks:', '1. Task 1', '2. Task 2', '3. Task 3'],
      buttonLabel: 'Get',
    },
    { title: 'John Doe',
      subtitle: 'Developer CSG',
      content: ['Tasks:', '1. Task 1', '2. Task 2', '3. Task 3'],
      buttonLabel: 'Get',
    },
    { title: 'John Doe',
      subtitle: 'Developer CSG',
      content: ['Tasks:', '1. Task 1', '2. Task 2', '3. Task 3'],
      buttonLabel: 'Get',
    },
    { title: 'John Doe',
      subtitle: 'Developer CSG',
      content: ['Tasks:', '1. Task 1', '2. Task 2', '3. Task 3'],
      buttonLabel: 'Get',
    },
    { title: 'John Doe',
      subtitle: 'Developer CSG',
      content: ['Tasks:', '1. Task 1', '2. Task 2', '3. Task 3'],
      buttonLabel: 'Get',
    },
    { title: 'John Doe',
      subtitle: 'Developer CSG',
      content: ['Tasks:', '1. Task 1', '2. Task 2', '3. Task 3'],
      buttonLabel: 'Get',
    }
  ];

  inProgressTasks: EditableSection[] = [
    { title: 'John Doe',
      subtitle: 'Developer CSG',
      content: ['Tasks:', '1. Task 1', '2. Task 2', '3. Task 3'],
      buttonLabel: 'Send to check',
    }
  ];

  onCheckingTasks: Section[] = [
    { title: 'John Doe',
      subtitle: 'Developer CSG',
      content: ['Tasks:', '1. Task 1', '2. Task 2', '3. Task 3'],
    },
    { title: 'John Doe',
      subtitle: 'Developer CSG',
      content: ['Tasks:', '1. Task 1', '2. Task 2', '3. Task 3'],
    }
  ];

  doneTasks: Section[] = [
    { title: 'John Doe',
      subtitle: 'Developer CSG',
      content: ['Tasks:', '1. Task 1', '2. Task 2', '3. Task 3'],
    },
    { title: 'John Doe',
      subtitle: 'Developer CSG',
      content: ['Tasks:', '1. Task 1', '2. Task 2', '3. Task 3'],
    },
    { title: 'John Doe',
      subtitle: 'Developer CSG',
      content: ['Tasks:', '1. Task 1', '2. Task 2', '3. Task 3'],
    }
  ];

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
