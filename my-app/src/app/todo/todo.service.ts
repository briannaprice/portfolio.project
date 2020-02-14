import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private toDos : Todo[] = [
    {id: 1, name: 'Wash the dog', user: 'Mike', completed: false},
    {id: 2, name: 'Buy groceries', user: 'Mike', completed: false},
    {id: 3, name: 'Pick up kids from school', user: 'John', completed: false},
    {id: 4, name: 'Cook dinner', user: 'Mike', completed: false},
    {id: 5, name: 'Wash the rhino', user: 'John', completed: false},
  ]
  nextId: number = 6;
  constructor() { }

  addTodo(uName: string, toDoName: string){
    let newTodo : Todo = {name: toDoName, user: uName, id: this.nextId, completed: false}
    this.nextId++;
    this.toDos.push(newTodo);
  }
  
  toDosByUsername(username: string){
    return this.toDos.filter(todo => todo.user === username)
  }

  get allToDos(): Todo[]{
    return [...this.toDos]
  }

  deleteTodo(id: number){
    let index = this.toDos.findIndex(todo => todo.id === id)
    this.toDos.splice(index, 1)
  }

}