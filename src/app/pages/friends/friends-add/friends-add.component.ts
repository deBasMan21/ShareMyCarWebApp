import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FriendsService } from 'src/app/services/friends.service';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-friends-add',
  templateUrl: './friends-add.component.html',
  styleUrls: ['./friends-add.component.scss']
})
export class FriendsAddComponent implements OnInit {
  public users: User[] = [];

  constructor(private authService: AuthenticationService, private friendService: FriendsService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  addFriend(friendId: String): void {
    this.friendService.createFriend(friendId).subscribe((res) => {
      this.ngOnInit();
    })
  }

}
