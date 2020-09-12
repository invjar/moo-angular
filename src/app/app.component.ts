import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'smooching';

  private list = new TodoList("raju", [
    new TodoItem("Clean house", false),
    new TodoItem("groceries", false),
    new TodoItem("laundry", false)
  
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter(item =>  !item.complete).length;
  }
}


