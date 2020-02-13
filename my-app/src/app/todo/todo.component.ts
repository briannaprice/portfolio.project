import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  username: string = "";
  title: string = "";
  todoList: Object[] = [];
  constructor(private todoService: TodoService){
    this.todoList = todoService.getAllTodos()
  }
  removeTodo(id){
    this.todoService.deleteTodo(id);
    this.todoList = [...this.todoService.getAllTodos()]
  }
  createTodo(id){
    this.todoService.addTodo(this.username, this.title);
    this.todoList = [...this.todoService.getAllTodos()]
  }
  markTodo(id){
    this.todoService.markTodo(id);
    this.todoList = [...this.todoService.getAllTodos()]
  }

  ngOnInit(){
  }

}
