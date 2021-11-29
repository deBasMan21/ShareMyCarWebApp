import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FriendsService } from 'src/app/services/friends.service';
import { User } from '../user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public user: User = { _id: '', name: '', email: '', phoneNumber: '', cars: [] }
  public expireDateTime: any = { days: 0, hours: 0, minutes: 0 };
  public friendCount: number = 0;

  constructor(private authService: AuthenticationService,
    private router: Router,
    private friendService: FriendsService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe((user) => {
      this.user = user;
    });
    const time: number = - new Date().getTime();
    let endDate = new Date();
    let purchaseDate = this.authService.getExpiration()?.getTime()!;
    let diffMs = (purchaseDate.valueOf() - endDate.valueOf()); // milliseconds
    this.expireDateTime.days = Math.floor(diffMs / 86400000); // days
    this.expireDateTime.hours = Math.floor((diffMs % 86400000) / 3600000); // hours
    this.expireDateTime.minutes = Math.round(((diffMs % 86400000) % 3600000) / 60000) - 1; // minutes

    this.friendService.getAllFriends().subscribe((res) => {
      this.friendCount = res.length;
    });
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
