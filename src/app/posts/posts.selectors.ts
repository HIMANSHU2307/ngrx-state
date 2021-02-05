import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./reducers";

export const selectPostState = createFeatureSelector<PostState>("post");


export const selectAllPosts = createSelector(
  selectPostState,
  posts => posts
)

export const isPostLoaded = createSelector(
  selectPostState,
  state => state.allPostsLoaded
)
