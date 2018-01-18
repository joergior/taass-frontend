import {Component, OnInit} from '@angular/core';
import {PicoEvent} from 'picoevent';
import {LoginEvent} from './login-event';
import {OktaAuthService} from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private eventBus: PicoEvent,
    public oktaAuth: OktaAuthService) { }

  ngOnInit(): void {
    this.eventBus.listen(LoginEvent, (evt: LoginEvent) => {
      if (evt.loginAction.localeCompare('login') === 0
          && !this.oktaAuth.isAuthenticated()) {
        this.oktaAuth.loginRedirect();
      }
    });
  }
}
