import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PicoEvent} from 'picoevent';
import {CloseSidenavEvent} from '../../events/close-sidenav-event';
import {OAuthService} from 'angular-oauth2-oidc';
import {LoginEvent} from '../../events/login-event';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private router: Router,
              private eventBus: PicoEvent) {
  }

  ngOnInit() {

  }

  onNavigationSelection(index: number) {
    this.eventBus.publish(new CloseSidenavEvent());
    switch (index) {
      case 0: {
        this.router.navigate(['/home']);
        break;
      }
      case 1: {
        this.router.navigate(['/home/createProject']);
        break;
      }
      case 2: {
        this.eventBus.publish(new LoginEvent('logout'));
        break;
      }
    }
  }
}
