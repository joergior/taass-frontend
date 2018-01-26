import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  logoSrc = 'assets/unito-logo.svg';
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis arcu vel turpis eleifend, vitae sodales diam pulvinar.' +
    ' Donec sit amet dui vel metus euismod varius et vel arcu. Ut vel erat blandit ante volutpat auctor quis in ante. Nam vel turpis lacinia, pharetra' +
    ' nisl id, bibendum est. Phasellus dignissim.';
  name = 'lorem ipsum';
  studentsArray =
    [ {name: 'Pinco Pallino', badge: '123456'},
      {name: 'Caio Giulio Cesare', badge: '123456'},
      {name: 'Abdul BlaBlacar', badge: '123456'},
      {name: 'Tizio a caso che non lavora', badge: '123456'}];
  repos = [
    {icon: 'github', name: 'Frontend', content: 'http://yolo.com/rotfl/ambarabà cicì cocò'},
    {icon: 'git', name: 'Backend', content: 'http://yolo.com/rotfl/ambarabà cicì cocò'},
    {icon: 'bitbucket', name: 'Banane fritte', content: 'http://yolo.com/rotfl/ambarabà cicì cocò'}
  ];
  keynotes = [
    {icon: 'presentation', name: 'Presentazione 1', content: 'http://yolo.com/rotfl/ambarabà cicì cocò'},
    {icon: 'presentation', name: 'Presentazione 1', content: 'http://yolo.com/rotfl/ambarabà cicì cocò'}
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openDialog() {

  }
}
