import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {OktaAuthService} from '@okta/okta-angular';

@Injectable()
export class AuthGuardHome implements CanActivate {

  constructor(
    private router: Router,
    private oktaAuth: OktaAuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.oktaAuth.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['']);
    return false;
  }
}
