import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from '../landing/landing.component';
import {AuthGuard} from '../_guards';
import {OktaCallbackComponent} from '@okta/okta-angular';


const appRoutes: Routes = [
  { path: '', component: LandingComponent, canActivate: [AuthGuard] },
  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
