import { Injectable } from '@nestjs/common';
import { Todo } from './model/todo';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos.find((todo) => todo.id === id);
  }

  createTodo(todo: Todo): Todo {
    todo.id = Math.floor(Math.random() * 1000);
    this.todos.push(todo);
    return todo;
  }

  deleteTodo(id: number): Todo {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      const deletedTodo = this.todos.splice(index, 1);
      return deletedTodo[0];
    }
    return null;
  }
}
