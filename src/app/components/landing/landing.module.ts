import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatLineModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LandingComponent} from './landing.component';
import {PicoEventModule} from 'picoevent';



@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    PicoEventModule,
    MatLineModule
  ],
  declarations: [
    LandingComponent
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
