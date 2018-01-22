import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from '../landing/landing.component';
import {AuthGuard} from '../_guards';
import {OktaCallbackComponent} from '@okta/okta-angular';
import {HomeComponent} from '../home/home.component';
import {RegisterComponent} from '../register/register.component';
import {AllProjectsComponent} from '../home/all-projects/all-projects.component';
import {CreateProjectComponent} from '../home/create-project/create-project.component';


const appRoutes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'home', component: HomeComponent,
    canActivate: [AuthGuard], children: [
      {path: '', component: AllProjectsComponent },
      {path: 'createProject', component: CreateProjectComponent },
    ]},
  { path: 'register', component: RegisterComponent},
  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
