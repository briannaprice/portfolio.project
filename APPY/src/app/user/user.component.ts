import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { Post } from '../interfaces/post.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;
  posts: Post[];
  timer: Observable<number> = interval(1000)
  constructor(private userService: UserService, private postService: PostService, private actr: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.actr.snapshot.params.id;
    this.userService.userById(id).subscribe((user: User)=> this.user = user);
    this.postService.postsByUserId(id).subscribe((posts: Post[])=> this.posts = posts);
  }

}
