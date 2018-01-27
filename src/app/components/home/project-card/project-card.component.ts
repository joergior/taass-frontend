import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogCardComponent} from './dialog-card/dialog-card.component';
import {Project} from '../../../model/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input()
  project: Project;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openDialog() {
    this.dialog.open(DialogCardComponent, {
      width: '550px',
      height: '500px',
      data: this.project
    });
  }
}
