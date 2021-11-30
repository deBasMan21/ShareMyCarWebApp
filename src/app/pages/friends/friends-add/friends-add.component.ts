import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ErrorService } from 'src/app/services/error.service';
import { FriendsService } from 'src/app/services/friends.service';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-friends-add',
  templateUrl: './friends-add.component.html',
  styleUrls: ['./friends-add.component.scss']
})
export class FriendsAddComponent implements OnInit {
  public users: User[] = [];

  constructor(
    private authService: AuthenticationService,
    private friendService: FriendsService,
    private router: Router,
    private errorService: ErrorService) { }

  ngOnInit(): void {
    this.errorService.showError = false;
    this.authService.getAllUsers().subscribe((users) => {
      if (users.length) {
        this.users = users;
      } else {
        this.errorService.showError = true;
      }
    });
  }

  addFriend(friendId: String): void {
    this.friendService.createFriend(friendId).subscribe((res) => {
      if (res.error) {
        this.errorService.showError = true;
      } else {
        this.ngOnInit();
      }
    })
  }

}
