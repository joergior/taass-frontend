import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectCardComponent} from './project-card.component';
import {MatButtonModule, MatDialogModule, MatExpansionModule, MatIconModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [ProjectCardComponent],
  exports: [ProjectCardComponent]
})
export class ProjectCardModule { }
