import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ViewTodosComponent } from './view-todos/view-todos.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';
import { ViewSingleTodoComponent } from './view-single-todo/view-single-todo.component';

const routes: Routes = [
  { path: 'add-todo', component: AddTodoComponent },
  { path: 'view-todos', component: ViewTodosComponent },
  { path: 'delete-todo', component: DeleteTodoComponent },
  { path: 'view-single-todo/:id', component: ViewSingleTodoComponent },
  { path: '', redirectTo: '/view-todos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
