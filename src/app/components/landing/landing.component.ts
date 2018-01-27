import { Component, OnInit } from '@angular/core';
import {PicoEvent} from 'picoevent';
import {LoginEvent} from '../../services/events/login-event';

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
