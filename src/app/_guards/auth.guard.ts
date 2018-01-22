import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {OktaAuthService} from '@okta/okta-angular';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private oktaAuth: OktaAuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const loginStatus = this.oktaAuth.isAuthenticated();
    if (!loginStatus) {
      this.router.navigate(['']);
    };
    return loginStatus;
  }
}
