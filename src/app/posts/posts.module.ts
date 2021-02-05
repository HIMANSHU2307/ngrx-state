import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsHttpService } from './services/posts-http.service';
import { StoreModule } from '@ngrx/store';
import * as fromPost from './reducers';
import { PostEffects } from './posts.effects';
import { EffectsModule } from '@ngrx/effects';

export const postsRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(postsRoutes),
    StoreModule.forFeature('post', fromPost.postReducer),
    EffectsModule.forFeature([PostEffects])
  ],
  providers: [
    PostsHttpService
  ]
})

export class PostsModule { }
