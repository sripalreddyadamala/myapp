import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {ToDoList} from './todolist/ToDoList';
import {TodoStore} from './store/todoStore';
import TodoItem from './todoitem/todoitem';
@NgModule({
  declarations: [
    ToDoList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoStore,TodoItem],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [ToDoList]
})
export class AppModule { }
