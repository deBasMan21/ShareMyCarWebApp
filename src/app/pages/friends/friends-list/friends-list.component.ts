import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { FriendsService } from 'src/app/services/friends.service';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {
  public friends: User[] = [];
  public recommendations: User[] = [];
  public requests: User[] = [];
  public doneLoading: boolean = false;

  constructor(private friendsService: FriendsService,
    private errorService: ErrorService) { }

  ngOnInit(): void {
    this.errorService.setDefault();
    this.doneLoading = false;

    this.friendsService.getAllFriends().subscribe((res) => {
      if (res.length) {
        this.friends = res;
      } else {
        this.errorService.errorMessage = 'Je hebt nog geen vrienden gemaakt';
        this.errorService.showError = true;
      }
      this.doneLoading = true;
    });

    this.friendsService.getAllFriendRecommendations().subscribe((res) => {
      this.recommendations = res;
      if (res.length > 0) {
        this.doneLoading = true;
      }
    });

    this.friendsService.getRequests().subscribe((res) => {
      this.requests = res;
      if (res.length > 0) {
        this.doneLoading = true;
      }
    })
  }

  addFriend(friendId: String): void {
    this.friendsService.createFriend(friendId).subscribe((res) => {
      if (res.error) {
        this.errorService.showError = true;
      } else {
        this.ngOnInit();
      }
    });
  }

  removeFriend(friendId: String): void {
    this.friendsService.removeFriend(friendId).subscribe((res) => {
      if (res.error) {
        this.errorService.showError = true;
      } else {
        this.ngOnInit();
      }
    });
  }

  acceptFriend(friendId: String): void {
    this.friendsService.acceptRequest(friendId).subscribe((res) => {
      if (res.error) {
        this.errorService.showError = true;
      } else {
        this.ngOnInit();
      }
    })
  }

  ignoreFriend(friendId: String): void {
    this.friendsService.ignoreRequest(friendId).subscribe((res) => {
      if (res.error) {
        this.errorService.showError = true;
      } else {
        this.ngOnInit();
      }
    })
  }

}
