import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {BackendService} from '../../../services/backend.service';
import {PicoEvent} from 'picoevent';
import {ShowToolbarEvent} from '../../../services/events/show-toolbar-event';
import {Project} from '../../../model/project';
import {SearchChangedEvent} from '../../../services/events/search-changed-event';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit, OnDestroy {

  projects;

  constructor(private backend: BackendService, private eventBus: PicoEvent) { }

  ngOnInit() {
    this.backend.searchProjectsByTitle('P').then((data: Project[]) => {this.projects = data; });
    this.eventBus.publish(new ShowToolbarEvent(true));
    this.eventBus.listen(SearchChangedEvent, (event: SearchChangedEvent) => {
      this.backend.searchProjectsByTitle(event.query).then((data: Project[]) => {this.projects = data; });
    });
  }

  ngOnDestroy() {
    this.eventBus.publish(new ShowToolbarEvent(false));
  }

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    console.log('Scroll Event' +  event);
  }
}
