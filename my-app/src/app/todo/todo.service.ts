import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private toDos: Object[] = [
    {id: 1, completed: false, title: 'Wash the dog', username: 'Mike'},
    {id: 2, completed: false,title: 'Wash the cat', username: 'Mike'},
    {id: 3, completed: true, title: 'Wash the elephant', username: 'John'},
    {id: 4, completed: false, title: 'Wash the horse', username: 'Mike'},
    {id: 5, completed: false, title: 'Wash the rhino', username: 'John'}
  ]
  private nextId: number = 6;
  constructor() { }

  getAllTodos(){
    return this.toDos
  }

  getTodosByUsername(uName){
    return this.toDos.filter(todo => todo['username'] === uName)
  }

  addTodo(uName, todoTitle){
    let newTodo = {
      id: this.nextId,
      title: todoTitle,
      username: uName,
      completed: false
    }
    this.nextId++;
    this.toDos.push(newTodo);
  }
  deleteTodo(id){
    let idx = this.toDos.findIndex(todo => todo['id'] === id);
    this.toDos.splice(idx, 1);
  }
  markTodo(id){
    let idx = this.toDos.findIndex(todo => todo['id'] === id);
    this.toDos[idx]['completed'] = !this.toDos[idx]['completed']
  }
}
