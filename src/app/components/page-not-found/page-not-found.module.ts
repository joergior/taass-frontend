import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from './page-not-found.component';
import {MatButtonModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    PageNotFoundComponent
  ],
  declarations: [
    PageNotFoundComponent
  ]
})
export class PageNotFoundModule { }
