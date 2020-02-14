import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  toDos: Todo[];
  name: string;
  username: string;
  constructor(private todoService: TodoService, 
    private actr: ActivatedRoute) {
  }

  addTodo(){
    if(this.name.length > 0){
      this.todoService.addTodo(this.username, this.name)
      this.toDos = this.todoService.toDosByUsername(this.username)
    }

  }

  deleteTodos(){
    this.toDos.filter(t=> t.markedForDeletion).forEach(td=> this.todoService.deleteTodo(td.id));
    this.toDos = this.todoService.toDosByUsername(this.username);

  }

  ngOnInit(): void {
    this.username = this.actr.snapshot.params.username
    this.toDos = this.todoService.toDosByUsername(this.username);
  }

}
