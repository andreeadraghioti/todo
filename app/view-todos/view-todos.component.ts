import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model'; // Import your Todo interface
import { TodoService } from '../todo.service'; // Import your TodoService

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.css'],
})
export class ViewTodosComponent implements OnInit {
  todos: Todo[] = []; 
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getAllTodos().subscribe((data) => {
      this.todos = data;
    });
  }
}
