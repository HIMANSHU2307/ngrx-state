import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsHttpService } from './services/posts-http.service';

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
    RouterModule.forChild(postsRoutes)
  ],
  providers: [
    PostsHttpService
  ]
})
export class PostsModule { }
