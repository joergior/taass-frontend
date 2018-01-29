import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Project} from '../../../../model/project';
import {BackendService} from '../../../../services/backend.service';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.scss']
})
export class DialogCardComponent implements OnInit {
  private project: Project;

  constructor(public dialogRef: MatDialogRef<DialogCardComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Project,
              private backend: BackendService) {
    this.project = data;
  }

  ngOnInit() {
  }

  joinProject() {
    // TODO gestire promise di ritorno;
    this.backend.askToJoinProject(this.project);
  }

}
