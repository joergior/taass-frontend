import { Component, OnInit } from '@angular/core';
import {PicoEvent} from 'picoevent';
import {Router} from '@angular/router';
import {CloseSidenavEvent} from '../../../services/events/close-sidenav-event';
import {NavigationEvent} from '../../../services/events/navigation-event';
import {LoginEvent} from '../../../services/events/login-event';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  userImg = 'https://vignette.wikia.nocookie.net/sote-rp/images/c/c4/User-placeholder.png/revision/latest?cb=20150624004222';
  email = 'basti.lamberto@gmail.com';
  name = 'Lamberto Basti';
  hasProject = false;

  constructor(public eventBus: PicoEvent, public router: Router) {

  }

  ngOnInit() {

  }

  menuSelection(index: number) {
    this.eventBus.publish(new CloseSidenavEvent());
    switch (index) {
      case (0): {
        this.eventBus.publish(new NavigationEvent('edit profile'));
        break;
      }
      case (1): {
        this.eventBus.publish(new NavigationEvent('url', '/home'));
        break;
      }
      case (2): {
        this.eventBus.publish(new NavigationEvent('url', '/home/createProject'));
        break;
      }
      case (3): {
        this.eventBus.publish(new NavigationEvent('url', '/home/myProject/'));
        break;
      }
      case (4): {
        this.eventBus.publish(new LoginEvent('logout'));
      }
    }
  }

  logout() {
    this.eventBus.publish(new CloseSidenavEvent());
    this.eventBus.publish(new LoginEvent('logout'));
  }

  goTo(url: string) {
    this.eventBus.publish(new CloseSidenavEvent());
    this.eventBus.publish(new NavigationEvent('url', url));
  }

  newProject() {
    this.eventBus.publish(new CloseSidenavEvent());
    this.eventBus.publish(new NavigationEvent('new project'));
  }

  editProfile() {
    this.eventBus.publish(new CloseSidenavEvent());
    this.eventBus.publish(new NavigationEvent('edit profile'));
  }

  myProject() {

  }
}
