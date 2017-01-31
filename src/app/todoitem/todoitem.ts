import {Component, Input,Output, EventEmitter} from '@angular/core';
import {TodoItem as ToDoItemModel} from './../store/todoStore';

@Component({
  selector: 'todo-item',
  templateUrl: 'todoitem.html',
  styleUrls: ['todoitem.css']
})
export default class TodoItem {

  @Input()
  item: ToDoItemModel;

  @Output()
  done = new EventEmitter();

  doneClicked() {
    this.done.next(this.item);
  }
}
