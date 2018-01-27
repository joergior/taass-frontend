import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.scss']
})
export class DialogCardComponent implements OnInit {

  name: string;
  logoSrc: string;
  studentsArray;
  keynotes;
  repos;

  constructor(public dialogRef: MatDialogRef<DialogCardComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.name = data.name;
    this.logoSrc = data.logoSrc;
    this.studentsArray = data.studentsArray;
    this.keynotes = data.keynotes;
    this.repos = data.repos;
  }

  ngOnInit() {
  }

}
