import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from '../../components/landing/landing.component';
import {AuthGuardHome, AuthGuardLanding} from '../_guards';
import {HomeComponent} from '../../components/home/home.component';
import {AllProjectsComponent} from '../../components/home/all-projects/all-projects.component';
import {CreateProjectComponent} from '../../components/home/create-project/create-project.component';
import {EditProfileComponent} from '../../components/home/edit-profile/edit-profile.component';
import {RegisterComponent} from '../../components/register/register.component';
import {PageNotFoundComponent} from '../../components/page-not-found/page-not-found.component';
import {OktaCallbackComponent} from '@okta/okta-angular';


const appRoutes: Routes = [
  { path: '', component: LandingComponent, canActivate: [AuthGuardLanding] },
  {path: 'implicit/callback', component: OktaCallbackComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardHome], children: [
      {path: '', component: AllProjectsComponent },
      {path: 'createProject', component: CreateProjectComponent },
      {path: 'editProfile', component: EditProfileComponent }
    ]},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
