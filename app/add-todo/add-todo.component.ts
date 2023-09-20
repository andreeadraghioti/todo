import { Component } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  newTodo: Todo = { id: 0, title: '', description: '', completed: false };

  constructor(private todoService: TodoService) {}

  addTodo() {
    this.todoService.createTodo(this.newTodo).subscribe((response) => {
      console.log('Todo created:', response);
    });
  }
}
