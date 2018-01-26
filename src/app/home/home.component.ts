import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {PicoEvent} from 'picoevent';
import {CloseSidenavEvent} from '../events/close-sidenav-event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuToggleImgDir: string;

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private eventBus: PicoEvent) { }

  ngOnInit() {
    this.menuToggleImgDir = 'assets/menu.png';
    this.eventBus.listen(CloseSidenavEvent, e => {
      this.sidenav.close();
    });
  }

}
