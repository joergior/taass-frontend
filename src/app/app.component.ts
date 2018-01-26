import {Component, OnInit} from '@angular/core';
import {PicoEvent} from 'picoevent';
import {LoginEvent} from './events/login-event';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {Router} from '@angular/router';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private eventBus: PicoEvent, private router: Router,
              private oauthService: OAuthService,
              private iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.oauthService.redirectUri = window.location.origin;
    this.oauthService.clientId = '0oadnltwac6LT4BlO0h7';
    this.oauthService.scope = 'openid profile email';
    this.oauthService.issuer = 'https://dev-928137.oktapreview.com/oauth2/default';
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocument().then(() => {
      this.oauthService.tryLogin().then(() => {
        this.router.navigate(['home']);
      });
    });
    this.iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github-circle.svg'));
    this.iconRegistry.addSvgIcon('bitbucket', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/bitbucket.svg'));
    this.iconRegistry.addSvgIcon('git', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/git.svg'));
    this.iconRegistry.addSvgIcon('presentation', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/presentation.svg'));
  }

  ngOnInit(): void {
    this.eventBus.listen(LoginEvent, (evt: LoginEvent) => {
      console.log('Event "LoginEvent" received correctly: event is ' +  evt.loginAction);
      if (evt.loginAction.localeCompare('login') === 0) {
        this.oauthService.initImplicitFlow();
      } else if (evt.loginAction.localeCompare('logout') === 0  ) {
        this.oauthService.logOut();
      }
    });
  }
}
