import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-view-single-todo',
  templateUrl: './view-single-todo.component.html',
  styleUrls: ['./view-single-todo.component.css'],
})
export class ViewSingleTodoComponent implements OnInit {
  todo: Todo | null = null;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodoById(id).subscribe((data) => {
      this.todo = data;
    });
  }
}
