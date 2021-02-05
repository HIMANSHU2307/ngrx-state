import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { Post } from '../model/post';

import * as PostAction from '../posts.actions';

export interface PostState {
  posts: Post[],
  allPostsLoaded: boolean
}

export const initialPostState: PostState = {
  posts: undefined,
  allPostsLoaded: false
}

export const postReducer = createReducer(

  initialPostState,

  on(PostAction.loadAllPosts, (state, action) => {
    return {
      posts: action.posts,
      allPostsLoaded: true
    }
  })

)

// remove metareducer
