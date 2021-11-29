import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../pages/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseurl: string = 'https://sharemycar.herokuapp.com/api';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: String, password: String) {
    this.http
      .post<any>(`${this.baseurl}/login`, { email: email, password: password })
      .subscribe((res) => {
        this.setSession(res);
        this.router.navigate(['/car']);
      });
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  private setSession(res: any) {
    localStorage.setItem('id_token', res.token);
    localStorage.setItem('expires_at', res.expires);
  }

  public isLoggedIn() {
    if (new Date() > this.getExpiration()!) {
      return false;
    } else {
      return localStorage.getItem('id_token') != undefined;
    }
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const dateString: string | null = localStorage.getItem('expires_at');
    if (dateString) {
      return new Date(dateString);
    } else {
      return null;
    }
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.baseurl}/user`);
  }

  register(user: any) {
    return this.http
      .post<any>(`${this.baseurl}/register`, user)
      .subscribe((res) => {
        this.setSession(res);
        this.router.navigate(['/car']);
      });
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseurl}/users`);
  }
}
