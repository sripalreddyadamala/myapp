import { Component} from '@angular/core';
import {TodoStore,TodoItem as TodoModelItem} from './../store/todoStore';
import TodoItem  from '../todoitem/todoitem';

@Component({
  selector: 'todo-list',
  templateUrl: 'todolist.html',
  styleUrls: ['todolist.css'],
})
export class ToDoList {
  newItem = 'test';
  store: TodoStore;

  constructor(store: TodoStore) {
    this.store = store;
  }
  addItem() {
    this.store.addItem(this.newItem);
    this.newItem = '';
  }
  removeItem(item: TodoModelItem) {
    this.store.removeItem(item);
  }

}
