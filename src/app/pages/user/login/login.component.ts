import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: String = '';
  password: String = '';

  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.errorService.setDefault();

    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/car']);
    }
  }

  submit(): void {
    this.authenticationService.login(this.email, this.password);
  }

}
