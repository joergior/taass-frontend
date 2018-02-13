import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import {Project} from '../../../model/project';
import {BackendService} from '../../../services/backend.service';
import {User} from '../../../model/user';
import {OktaAuthService} from '@okta/okta-angular';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  selectable = true;
  removable = true;
  addOnBlur = true;

  newProject: Project;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  emails = [];

  constructor(private backend: BackendService, private oktaAuth: OktaAuthService) { }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    const here = this;
    // Add an email
    if ((value || '').trim()) {
      this.emails.push(value.trim());
      this.backend.getUserIdByEmail(value.trim()).then((derp: string) => {
        here.newProject.ownerIds.push(derp);
      });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(email: any): void {
    const index = this.emails.indexOf(email);

    if (index >= 0) {
      this.emails.splice(index, 1);
    }

    const here = this;
    this.backend.getUserIdByEmail(email).then((derp: string) => {
      here.newProject.ownerIds.splice(here.newProject.ownerIds.indexOf(derp), 1);
    });
  }

  submitProject(projectName: string, projectDescription: string, projectLogoSrc: string) {
    const here = this;
    this.oktaAuth.getOktaAuth().token.getUserInfo(this.oktaAuth.getAccessToken()).then(user => {
      here.backend.createProject(new Project(projectName, projectDescription, [user.sub])).subscribe();
    });
  }
}
