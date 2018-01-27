import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './create-project.component';
import {MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule
  ],
  declarations: [CreateProjectComponent],
  exports: [CreateProjectComponent]
})
export class CreateProjectModule { }
