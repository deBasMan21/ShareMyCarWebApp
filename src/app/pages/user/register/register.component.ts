import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: any = { name: '', email: '', phoneNumber: '' };

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.register(this.user);
  }

}
