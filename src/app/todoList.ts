// build on top of todoItems
// this houses an arry of todoItems with owner information

import { TodoItem } from "./todoItem";

export class TodoList {

    public user: string;
    private todoItems: TodoItem[];

    constructor(usr: string, todoItm: TodoItem[] = []) {
        this.user = usr;
        this.todoItems = todoItm;
    }

    get items(): readonly TodoItem[] {
        return this.todoItems;
    }

    addItem(task: string) {
        this.todoItems.push(new TodoItem(task));
    }

}