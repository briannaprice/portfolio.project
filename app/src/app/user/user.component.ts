import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoStoreService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { UserStoreService } from '../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  [x: string]: any;
  toDos: Todo[] = [];
  todoForm: FormGroup
  username: string;
  constructor(private todoService: TodoStoreService, 
    private actr: ActivatedRoute, private userService: UserStoreService, private fb: FormBuilder) {
  }

  logout(){
    this.userService.logout()
  }

  addTodo(e){ 
    e.preventDefault()
    if(this.todoForm.valid){
      this.todoService.addTodo(this.username, this.todoForm.value.name, this.todoForm.value.dueDate)
    }

  }

  deleteTodos(){
    this.toDos.filter(t=> t.markedForDeletion).forEach(td=> this.todoStore.deleteTodo(td.id));

  }

  ngOnInit(): void {
    this.username = this.actr.snapshot.params.username
    this.todos = this.todoService.toDosByUsername(this.username).subscribe(todos => this.toDos = todos);
    this.todoForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      dueDate: ['', Validators.compose([Validators.required])]
    })
  }

}
