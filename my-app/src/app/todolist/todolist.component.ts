import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  filterInput: string = '';
  sortBy: string = 'id';
  @Input()  toDos: Todo[];
  @Output() deleteEvent = new EventEmitter<void>()
  isUserRoute: boolean;
  constructor(private actr: ActivatedRoute) { 
    this.isUserRoute = this.actr.snapshot.url[0].path === 'user'
  
  }

  deleteTodos(){
    this.deleteEvent.emit();
  }

  changeSort(sort){
    this.sortBy = sort;
  }

  ngOnInit(): void {
  }

}