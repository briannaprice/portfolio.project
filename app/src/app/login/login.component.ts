import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  constructor(private userService: UserService) { }

  login(){
    if(this.password !== "" && this.username !== ""){
      this.userService.login(this.username, this.password);
    }
  }
  
  ngOnInit(): void {
  }

}
