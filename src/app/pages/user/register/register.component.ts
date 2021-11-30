import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: any = { name: '', email: '', phoneNumber: '' };

  constructor(private authService: AuthenticationService, private errorService: ErrorService) { }

  ngOnInit(): void {
    this.errorService.showError = false;
  }

  submit() {
    this.authService.register(this.user);
  }

}
