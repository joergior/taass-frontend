import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {OktaAuthService} from '@okta/okta-angular';

@Injectable()
export class AuthGuardLanding implements CanActivate {

  constructor(
    private router: Router,
    private oktaAuth: OktaAuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.oktaAuth.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/home']);
    return false;
  }
}
