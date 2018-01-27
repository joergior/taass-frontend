import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectCardComponent} from './project-card.component';
import {MatButtonModule, MatDialogModule, MatExpansionModule, MatIconModule, MatListModule} from '@angular/material';
import { DialogCardComponent } from './dialog-card/dialog-card.component';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [
    ProjectCardComponent,
    DialogCardComponent
  ],
  entryComponents: [
    DialogCardComponent
  ],
  exports: [
    ProjectCardComponent
  ]
})
export class ProjectCardModule { }
