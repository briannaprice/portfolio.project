import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoStoreService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  [x: string]: any;
  toDos: Todo[];
  name: string;
  username: string;
  constructor(private todoService: TodoStoreService, 
    private actr: ActivatedRoute) {
  }

  addTodo(){
    if(this.name.length > 0){
      this.todoService.addTodo(this.username, this.name)
      this.todos = this.todoService.toDosByUsername(this.username)
    }

  }

  deleteTodos(){
    this.todos.filter(t=> t.markedForDeletion).forEach(td=> this.todoService.deleteTodo(td.id));
    this.todos = this.todoService.toDosByUsername(this.username);

  }

  ngOnInit(): void {
    this.username = this.actr.snapshot.params.username
    this.todos = this.todoService.toDosByUsername(this.username);
  }

}
