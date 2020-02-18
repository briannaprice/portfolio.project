import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userPostId: number;
  path: string ="post"
  constructor(private router: Router) { }
   
  redirect(){
    this.router.navigate([`/${this.path}/${this.userPostId}`])
  }

  ngOnInit(): void {
  }

}
