import {AfterViewChecked, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatSidenav} from '@angular/material';
import {PicoEvent} from 'picoevent';
import {Router} from '@angular/router';
import {NavigationEvent} from '../../services/events/navigation-event';
import {CloseSidenavEvent} from '../../services/events/close-sidenav-event';
import {ShowToolbarEvent} from '../../services/events/show-toolbar-event';
import {SearchChangedEvent} from '../../services/events/search-changed-event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  menuToggleImgDir: string;
  showSearchBarInToolbar = false;

  @ViewChild('sidenav') sidenav: MatSidenav;
  currentWidth: number;

  constructor(private eventBus: PicoEvent, private router: Router) {
    this.eventBus.listen(NavigationEvent, (evt: NavigationEvent) => {
      console.log('NavigationEvent received, event is: ' + evt.directions);
      switch (evt.directions) {
        case 'url': {
          this.router.navigate([evt.url]);
          break;
        }
        case 'new project': {
          this.createProject();
          break;
        }
        case 'edit profile': {
          this.router.navigate(['home/editProfile']);
        }
      }
    });
    this.eventBus.listen(ShowToolbarEvent, (evt: ShowToolbarEvent) => {
      this.showSearchBarInToolbar = evt.value;
    });
  }

  ngAfterViewChecked(): void {
    this.currentWidth = window.screen.width;
  }

  ngOnInit() {
    this.menuToggleImgDir = 'assets/menu.png';
    this.eventBus.listen(CloseSidenavEvent, e => {
      this.sidenav.close();
    });
  }

  onSearchChange(searchValue: string ) {
    this.eventBus.publish(new SearchChangedEvent(searchValue));
  }

  createProject() {
    this.router.navigate(['home/createProject']);
    return;
    // if (this.currentWidth > 539) {
    //   this.dialog.open(CreateProjectComponent, {
    //     width: '500px'
    //   });
    // } else {
    //   this.router.navigate(['home/createProject']);
    // }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.currentWidth = event.target.innerWidth;
    console.log('window resized, new width is: ' + this.currentWidth);
  }
}
