import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UsersHttpService } from './services/users-http.service';
import { RouterModule, Routes } from '@angular/router';

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
    UsersHttpService
  ]
})
export class UsersModule { }
