import { Component, OnInit } from '@angular/core';
import {OktaAuthService} from '@okta/okta-angular';
import {PicoEvent} from 'picoevent';
import {LoginEvent} from '../events/login-event';
import {Router} from '@angular/router';
import {OAuthService} from 'angular-oauth2-oidc';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private eventBus: PicoEvent) { }

  ngOnInit() {
  }

  login() {
    this.eventBus.publish(new LoginEvent('login'));
  }
}
