import { Component } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.css'],
})
export class DeleteTodoComponent {
  deletedTodo: Todo | null = null;

  constructor(private todoService: TodoService) {}

  deleteTodoById(id: number) {
    this.todoService.deleteTodo(id).subscribe((data) => {
      this.deletedTodo = data;
      console.log('Todo deleted:', this.deletedTodo);
    });
  }
}
