import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoStoreService {
  private readonly _todos = new BehaviorSubject<Todo[]>([
    {id: 1, name: 'Wash the dog', user: 'Mike', completed: false},
    {id: 2, name: 'Buy groceries', user: 'Mike', completed: false},
    {id: 3, name: 'Pick up kids from school', user: 'John', completed: false},
    {id: 4, name: 'Cook dinner', user: 'Mike', completed: false},
    {id: 5, name: 'Wash the rhino', user: 'John', completed: false},

  ])
  nextId: number = 6;
  constructor() { }

  readonly todos$ = this._todos.asObservable()

  private get todos(): Todo[]{
    return this._todos.getValue();
  }

  private set todos(val: Todo[]){
    this._todos.next(val);
  }

  addTodo(uName: string, toDoName: string){
    let newTodo : Todo = {name: toDoName, user: uName, id: this.nextId, completed: false}
    this.nextId++;
    this.todos.push(newTodo);
  }
  
  toDosByUsername(username: string){
    return this.todos.filter(todo => todo.user === username)
  }

  get allToDos(): Todo[]{
    return [...this.todos]
  }

  deleteTodo(id: number){
    let index = this.todos.findIndex(todo => todo.id === id)
    this.todos.splice(index, 1)
  }

}
