import { Component } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {

  done = false;

  favorites: Section[] = [
    {
      name: 'Mishka',
      updated: new Date('1/1/20'),
    },
    {
      name: 'Captain',
      updated: new Date('1/17/20'),
    },
    {
      name: 'Own',
      updated: new Date('1/28/20'),
    }
  ];
  groups: Section[] = [
    {
      name: 'Group Angular',
      updated: new Date('2/20/20'),
    },
    {
      name: 'Group Java',
      updated: new Date('1/18/20'),
    },
    {
      name: 'Group NodeJs',
      updated: new Date('3/19/20'),
    },
    {
      name: 'Group Docker',
      updated: new Date('5/5/20'),
    }
  ];

  ChatOpen() {
    this.done = true;
  }

}
