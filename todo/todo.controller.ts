import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Todo } from './model/todo';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos(): Todo[] {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  getTodoById(@Param('id') id: number): Todo {
    return this.todoService.getTodoById(id);
  }

  @Post()
  createTodo(@Body() todo: Todo): Todo {
    return this.todoService.createTodo(todo);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: number): Todo {
    return this.todoService.deleteTodo(id);
  }
}
