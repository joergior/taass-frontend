import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogCardComponent} from './dialog-card/dialog-card.component';
import {Project} from '../../../model/project';
import {BackendService} from '../../../services/backend.service';
import {Keynote} from '../../../model/keynote';
import {it} from 'selenium-webdriver/testing';
import {Repo} from '../../../model/repo';
import {User} from '../../../model/user';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input()
  project: Project;
  users: User[];
  keynotes = [];
  repos = [];

  constructor(public dialog: MatDialog, public backend: BackendService) { }

  ngOnInit() {
    const here = this;
    this.project.keynoteIds.forEach(function(id: number) {
      here.backend.getKeynoteById(id).then(data => here.keynotes.push(data));
    });
    this.project.repoIds.forEach(function(id: number) {
      here.backend.getRepobyId(id).then(data => here.repos.push(data));
    });
    this.backend.getUsersByID(this.project.ownerIds).then(data => this.users = data);
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
