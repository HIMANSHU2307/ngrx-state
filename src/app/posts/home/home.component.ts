import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, shareReplay, map } from 'rxjs/operators';
import { Post } from '../model/post';
import { getAllPosts } from '../posts.actions';
import { isPostLoaded, selectAllPosts } from '../posts.selectors';
import { PostState } from '../reducers';
import { PostsHttpService } from '../services/posts-http.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts$: Observable<Post[]>;
  posts: Post[] = [];

  constructor(
    private postsService: PostsHttpService,
    private store: Store<PostState>
    ) { }

  ngOnInit(): void {

    this.store.pipe(
      select(isPostLoaded)
      ).subscribe(isPost => {
        if(!isPost) {
          this.store.dispatch(getAllPosts())
        } else {
          this.loadPost();
        }
      });

  }

  loadPost() {
    this.store
      .pipe(
        select(selectAllPosts)
      ).subscribe(posts => {
        this.posts = posts.posts
      })
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
