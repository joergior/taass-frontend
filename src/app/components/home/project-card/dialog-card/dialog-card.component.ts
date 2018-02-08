import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Project} from '../../../../model/project';
import {BackendService} from '../../../../services/backend.service';
import {Keynote} from '../../../../model/keynote';
import {Repo} from '../../../../model/repo';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.scss']
})
export class DialogCardComponent implements OnInit {
  private project: Project;
  keynotes: Keynote[];
  repos: Repo[];

  constructor(public dialogRef: MatDialogRef<DialogCardComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Project,
              private backend: BackendService) {
    this.project = data;
  }

  ngOnInit() {
    this.project.keynotes.forEach(function(id) {
      this.backend.getKeynote(id).then(data => this.keynotes.push(data));
    });
    this.project.repos.forEach(function(id) {
      this.backend.getRepo(id).then(data => this.repos.push(data));
    });
  }

  joinProject() {
    // TODO gestire promise di ritorno;
    this.backend.askToJoinProject(this.project);
  }

}
