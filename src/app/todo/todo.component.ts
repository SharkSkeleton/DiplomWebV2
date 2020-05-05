import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-test',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todo = [
    '1. Создать header',
    '1.1 Добавить в header:',
    '1.1.1 Выпадающее меню',
    '1.1.1.1 Docs',
    '1.1.1.2 Account',
    '1.1.1.3 Settings',
    '1.1.2 Кнопку или ссылку "CSG"',
    '1.1.3 Кнопки: Chats, Dashboard, WorkSpace',
    '1.1.4 Поле: Search',
    '1.1.5 После поля кнопку перехода на GitHub',
    '1.1.6 После кнопку LogOut',
    '2. Настроить маршруты',
    '2.1 Кнопка menu',
    '2.1.1 Кнопка Docs: переход на /docs',
    '2.1.2 Кнопка Account: переход на /account',
    '2.1.3 Кнопка Settings: переход на /settings',
    '2.2 Кнопка CSG: переход на /home',
    '2.3 Кнопка Chats: переход на /chats',
    '2.4 Кнопка Dashboard: переход на /dashboard',
    '2.5 Кнопка WorkSpace: переход на /workspace',
    '3. Настройка вспомагательных элементов',
    '3.1 Поле для поиска: настроить поиск по ключевому слову с pop-up окном в котором динамические результаты поисков по сайту',
    '3.2 Кнопка GitHub: переход на GitHub репозиторий с проектом',
    '3.2 Кнопка LogOut: выход из системы (возможно это просто обнуление логина/пароля и переход на страничку с аутентификацией)',
  ];

  done = [
    ''
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
