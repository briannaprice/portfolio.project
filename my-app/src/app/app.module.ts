import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';
import { FilterPipe } from './pipe/filter.pipe';
import { TodoListComponent } from './todolist/todolist.component';
import { MouseDirective } from './directives/mouse.directive';
import { BirthdayDirective } from './directives/birthday.directive';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    UserComponent,
    FilterPipe,
    TodoListComponent,
    MouseDirective,
    BirthdayDirective,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
