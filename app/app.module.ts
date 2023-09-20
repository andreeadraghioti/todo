import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ViewTodosComponent } from './view-todos/view-todos.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';
import { ViewSingleTodoComponent } from './view-single-todo/view-single-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ViewTodosComponent,
    DeleteTodoComponent,
    ViewSingleTodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
