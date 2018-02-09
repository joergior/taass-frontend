import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogCardComponent} from './dialog-card/dialog-card.component';
import {Project} from '../../../model/project';
import {BackendService} from '../../../services/backend.service';
import {Keynote} from '../../../model/keynote';
import {it} from 'selenium-webdriver/testing';
import {Repo} from '../../../model/repo';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input()
  project: Project;
  keynotes = [];
  repos = [];

  constructor(public dialog: MatDialog, public backend: BackendService) { }

  ngOnInit() {
    const here = this;
    this.project.keynoteIds.forEach(function(id: number) {
      here.backend.getKeynote(id).then(data => here.keynotes.push(data));
    });
    this.project.repoIds.forEach(function(id: number) {
      here.backend.getRepo(id).then(data => here.repos.push(data));
    });
  }

  openDialog() {
    this.dialog.open(DialogCardComponent, {
      width: '550px',
      height: '500px',
      data: this.project
    });
  }

  joinProject() {
    // TODO gestire promise di ritorno;
    this.backend.askToJoinProject(this.project);
  }
}
