import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideMenuComponent} from './side-menu.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatDividerModule, MatIconModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [SideMenuComponent],
  exports: [SideMenuComponent]
})
export class SideMenuModule { }
