import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {MatButtonModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {SideMenuModule} from './side-menu/side-menu.module';
import {RouterModule} from '@angular/router';
import {AllProjectsModule} from './all-projects/all-projects.module';
import {CreateProjectModule} from './create-project/create-project.module';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    SideMenuModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule,
    AllProjectsModule,
    CreateProjectModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
