import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: 'todo', component: TodoComponent},
  {path: 'user/:useername', component: UserComponent},
  {path: '**', redirectTo: '/todos'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
