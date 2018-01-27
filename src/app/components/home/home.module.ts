import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {SideMenuModule} from './side-menu/side-menu.module';
import {RouterModule} from '@angular/router';
import {AllProjectsModule} from './all-projects/all-projects.module';
import {CreateProjectModule} from './create-project/create-project.module';
import {CreateProjectComponent} from './create-project/create-project.component';
import {EditProfileModule} from './edit-profile/edit-profile.module';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    SideMenuModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule,
    AllProjectsModule,
    CreateProjectModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    EditProfileModule
  ],
  entryComponents: [
    CreateProjectComponent
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
