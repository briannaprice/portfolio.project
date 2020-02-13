import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  @Input() todoList: Object[];
  @Output() markEvent = new EventEmitter()
  @Output() deleteEvent = new EventEmitter()
  search: string = ""
  sort: string = "id"
  constructor() { }

  markTodo(id){
    this.markEvent.emit(id);
  }

  deleteTodo(id){
    this.deleteEvent.emit(id);
  }

  ngOnInit(){
  }

}
