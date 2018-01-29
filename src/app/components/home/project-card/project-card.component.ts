import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogCardComponent} from './dialog-card/dialog-card.component';
import {Project} from '../../../model/project';
import {BackendService} from '../../../services/backend.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input()
  project: Project;

  constructor(public dialog: MatDialog, public backend: BackendService) { }

  ngOnInit() {

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
