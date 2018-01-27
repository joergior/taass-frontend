import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditProfileComponent} from './edit-profile.component';
import {MatInputModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatListModule
  ],
  exports: [
    EditProfileComponent
  ],
  declarations: [
    EditProfileComponent
  ]
})
export class EditProfileModule { }
