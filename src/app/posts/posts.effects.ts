import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostsHttpService } from "./services/posts-http.service";
import * as PostActions from './posts.actions';
import { map, mergeMap } from "rxjs/operators";

@Injectable()
export class PostEffects {

  loadPosts$ = createEffect(

    () => this.actions$
    .pipe(
      ofType(PostActions.getAllPosts),
      mergeMap((action) => {
        return this.postService.findAllPosts().pipe(
          map(posts => {
            return PostActions.loadAllPosts({ posts: JSON.parse(JSON.stringify(posts)) })
          })
        )
      })
    )

  )


  constructor(private actions$: Actions, private postService: PostsHttpService) {

  }

}
