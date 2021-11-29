import { Component, OnInit } from '@angular/core';
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

  constructor(private friendsService: FriendsService) { }

  ngOnInit(): void {
    // this.addFriend("619b9c1cbe5759938d18b887");
    this.friendsService.getAllFriends().subscribe((res) => {
      this.friends = res;
      this.doneLoading = true ? res.length > 0 : this.doneLoading;
    });

    this.friendsService.getAllFriendRecommendations().subscribe((res) => {
      this.recommendations = res;
      this.doneLoading = true ? res.length > 0 : this.doneLoading;
    });

    this.friendsService.getRequests().subscribe((res) => {
      this.requests = res;
      this.doneLoading = true ? res.length > 0 : this.doneLoading;
    })
  }

  addFriend(friendId: String): void {
    this.friendsService.createFriend(friendId).subscribe((res) => {
      this.ngOnInit();
    });
  }

  removeFriend(friendId: String): void {
    this.friendsService.removeFriend(friendId).subscribe((res) => {
      this.ngOnInit();
    });
  }

  acceptFriend(friendId: String): void {
    this.friendsService.acceptRequest(friendId).subscribe((res) => {
      this.ngOnInit();
    })
  }

  ignoreFriend(friendId: String): void {
    this.friendsService.ignoreRequest(friendId).subscribe((res) => {
      this.ngOnInit();
    })
  }

}
