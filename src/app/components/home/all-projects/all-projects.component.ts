import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {BackendService} from '../../../services/backend.service';
import {PicoEvent} from 'picoevent';
import {ShowToolbarEvent} from '../../../services/events/show-toolbar-event';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit, OnDestroy {

  projects;

  constructor(private backend: BackendService, private eventBus: PicoEvent) { }

  ngOnInit() {
    this.projects = this.backend.searchProjectsByName(null);
    this.eventBus.publish(new ShowToolbarEvent(true));
  }

  ngOnDestroy() {
    this.eventBus.publish(new ShowToolbarEvent(false));
  }

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    console.log('Scroll Event' +  event);
  }
}
