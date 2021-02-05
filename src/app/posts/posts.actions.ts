import { createAction, props } from "@ngrx/store";
import { Post } from "./model/post";

export const getAllPosts = createAction(
  "[Post Page] Fetching Post Data"
)

export const loadAllPosts = createAction(
  "[Load Post Effects] Fetching Post Data",
  props<{posts: Post[]}>()
)
