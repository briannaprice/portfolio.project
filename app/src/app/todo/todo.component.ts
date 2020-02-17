import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  toDos: Todo[];
  user: string;
  name: string;
  constructor(private todoService: TodoService) {
    this.toDos = this.todoService.allToDos
  }

  addTodo(){
    if(this.user.length > 0 && this.name.length > 0){
      this.todoService.addTodo(this.user, this.name);
      this.toDos = this.todoService.allToDos
    }
  }

  ngOnInit(): void {
  }

}
