import {Component, OnInit} from '@angular/core';
import {PicoEvent} from 'picoevent';
import {LoginEvent} from './services/events/login-event';
import {Router} from '@angular/router';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {OktaAuthService} from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private eventBus: PicoEvent, private router: Router,
              private oktaAuth: OktaAuthService,
              private iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.iconRegistry
      .addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github-circle.svg'))
      .addSvgIcon('bitbucket', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/bitbucket.svg'))
      .addSvgIcon('git', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/git.svg'))
      .addSvgIcon('presentation', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/presentation.svg'))
      .addSvgIcon('magnify', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/magnify.svg'))
      .addSvgIcon('logout', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logout.svg'))
      .addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'))
      .addSvgIcon('source-branch', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/source-branch.svg'))
      .addSvgIcon('cancel', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/close-circle.svg'))
      .addSvgIcon('plus', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/plus.svg'));
  }

  ngOnInit(): void {
    this.eventBus.listen(LoginEvent, (evt: LoginEvent) => {
      console.log('Event "LoginEvent" received correctly: event is ' +  evt.loginAction);
      if (evt.loginAction.localeCompare('login') === 0) {
        this.oktaAuth.loginRedirect();
      } else if (evt.loginAction.localeCompare('logout') === 0  ) {
        this.oktaAuth.logout();
        this.router.navigate(['']);
      }
    });
  }
}
