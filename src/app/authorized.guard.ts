import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanActivate {
  constructor(private authService: AuthenticationService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url = state.url;
    console.log(url);
    return this.isLoggedIn(url);
  }

  isLoggedIn(url: String): true | UrlTree {
    if (this.authService.isLoggedIn()) {
      if (url == "/login") {
        console.log('inlog gelukt')
        return this.router.parseUrl('/car');
      } else {
        console.log('authorized')
        return true;
      }
    } else {
      console.log('niet ingelogd')
      return this.router.parseUrl('/login');
    }
  }

}
