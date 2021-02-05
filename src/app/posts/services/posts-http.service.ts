import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../model/post';

@Injectable()
export class PostsHttpService {

  constructor(private http:HttpClient) {
  }

  findAllPosts(): Observable<any> {
      return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
