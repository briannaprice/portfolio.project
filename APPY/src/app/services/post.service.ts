import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  postById(postId){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/=${postId}`);
  }

  postsByUserId(userId){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }
}
