import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './create-project.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateProjectComponent],
  exports: [CreateProjectComponent]
})
export class CreateProjectModule { }
