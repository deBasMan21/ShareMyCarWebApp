import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from '../user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public user: User = { name: '', email: '', phoneNumber: '', cars: [] }

  constructor(private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe((user) => {
      this.user = user;
      console.log((user));
    });
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
