import {Component, Input, OnInit} from '@angular/core';
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
  keynotes: Keynote[];
  repos: Repo[];

  constructor(public dialog: MatDialog, public backend: BackendService) { }

  ngOnInit() {
    this.project.keynotes.forEach(function(id) {
      this.backend.getKeynote(id).then(data => this.keynotes.push(data));
    });
    this.project.repos.forEach(function(id) {
      this.backend.getRepo(id).then(data => this.repos.push(data));
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
