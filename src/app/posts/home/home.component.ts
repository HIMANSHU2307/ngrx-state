import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, shareReplay, map } from 'rxjs/operators';
import { Post } from '../model/post';
import { PostsHttpService } from '../services/posts-http.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts$: Observable<Post[]>;
  posts: Post[] = [];

  constructor(private postsService: PostsHttpService) { }

  ngOnInit(): void {

    // this.posts$ = this.postsService.findAllPosts()
    //   .pipe(
    //     tap(posts => {
    //       console.log(posts)
    //     }),
    //     shareReplay()
    //   );

    this.postsService.findAllPosts()
    .subscribe(users => {

      this.posts = users;

    });

  }

  handleFilter(userID) {
    // if(userID.target.value) {
    //   this.filterdPost =  this.postList.filter(post =>
    //     post.id == userID.target.value
    //     )
    // } else {
    //   this.filterdPost = this.postList;
    // }
  }

}
