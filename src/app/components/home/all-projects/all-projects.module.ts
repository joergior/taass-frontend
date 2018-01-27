import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllProjectsComponent} from './all-projects.component';
import {ProjectCardModule} from '../project-card/project-card.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectCardModule
  ],
  declarations: [AllProjectsComponent],
  exports: [AllProjectsComponent]
})
export class AllProjectsModule { }
