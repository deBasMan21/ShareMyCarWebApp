import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: String = '';
  password: String = '';

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/car']);
    }
  }

  submit(): void {
    this.authenticationService.login(this.email, this.password);
  }

}
