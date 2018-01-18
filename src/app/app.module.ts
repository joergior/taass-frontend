import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {AuthGuard} from './_guards';
import {routing} from './routing/app.routing';
import {OktaAuthModule} from '@okta/okta-angular';
import {PicoEventModule} from 'picoevent';

const config = {
  issuer: 'https://dev-928137.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oadnltwac6LT4BlO0h7'
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    routing,
    OktaAuthModule.initAuth(config),
    PicoEventModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
