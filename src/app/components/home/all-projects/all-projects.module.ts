import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllProjectsComponent} from './all-projects.component';
import {ProjectCardModule} from '../project-card/project-card.module';
import {BackendService} from '../../../services/backend.service';

@NgModule({
  imports: [
    CommonModule,
    ProjectCardModule
  ],
  providers: [
    BackendService
  ],
  declarations: [AllProjectsComponent],
  exports: [AllProjectsComponent]
})
export class AllProjectsModule { }
