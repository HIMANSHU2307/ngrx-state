import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import { Users } from '../model/user';
import { UsersHttpService } from '../services/users-http.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Users[] = [];

  constructor(
    private usersService: UsersHttpService
  ) { }

  ngOnInit(): void {

    // this.users$ = this.usersService.findAllUsers()
    //   .pipe(
    //     tap(users => {
    //       console.log(users)
    //     }),
    //     shareReplay()
    //   );

    this.usersService.findAllUsers()
    .subscribe(users => {

      this.users = users;

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
