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

  constructor(private friendsService: FriendsService) { }

  ngOnInit(): void {
    this.friendsService.getAllFriends().subscribe((res) => {
      this.friends = res;
    });

    this.friendsService.getAllFriendRecommendations().subscribe((res) => {
      this.recommendations = res;
      this.recommendations.push(new User('619cf099de90cba8bcaf7f8e', 'freek', 'freekje@vonk.nl', '061234657', []));
    });
  }

  addFriend(friendId: String): void {
    this.friendsService.createFriend(friendId).subscribe((res) => {
      console.log(res);
    });
  }

}
