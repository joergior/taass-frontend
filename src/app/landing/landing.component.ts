import { Component, OnInit } from '@angular/core';
import {OktaAuthService} from '@okta/okta-angular';
import {PicoEvent} from 'picoevent';
import {LoginEvent} from '../login-event';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    public oktaAuth: OktaAuthService,
    private eventBus: PicoEvent) { }

  ngOnInit() {
  }

  login() {
    this.eventBus.publish(new LoginEvent('login'));
  }
}
