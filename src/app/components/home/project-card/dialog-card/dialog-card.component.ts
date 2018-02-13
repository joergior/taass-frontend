import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Project} from '../../../../model/project';
import {BackendService} from '../../../../services/backend.service';
import {User} from '../../../../model/user';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.scss']
})
export class DialogCardComponent implements OnInit {
  private project: Project;
  keynotes = [];
  repos = [];
  users: User[];

  constructor(public dialogRef: MatDialogRef<DialogCardComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Project,
              private backend: BackendService) {
    this.project = data;
  }

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

  joinProject() {
    // TODO gestire promise di ritorno;
    this.backend.askToJoinProject(this.project);
  }

}
