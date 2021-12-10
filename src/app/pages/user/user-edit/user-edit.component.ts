import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ErrorService } from 'src/app/services/error.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  public user: any = { name: '', phoneNumber: '' };
  public originalUser: User = new User('', '', '', '', []);

  constructor(private authService: AuthenticationService, private errorService: ErrorService, private router: Router) { }

  ngOnInit(): void {
    this.errorService.setDefault();
    this.authService.getUser().subscribe((user) => {
      this.user.name = user.name;
      this.user.phoneNumber = user.phoneNumber;
      this.originalUser = user;
    })
  }

  submit() {
    this.originalUser.name = this.user.name;
    this.originalUser.phoneNumber = this.user.phoneNumber;
    console.log(this.originalUser)
    this.authService.update(this.originalUser).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/account']);
    });
  }

}
