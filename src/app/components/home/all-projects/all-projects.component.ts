import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../../services/backend.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {

  projects;

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.projects = this.backend.getAllProjects();
  }

}
