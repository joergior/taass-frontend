import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthGuardHome, AuthGuardLanding} from './services/_guards';
import {routing} from './services/routing/app.routing';
import {PicoEventModule} from 'picoevent';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeModule} from './components/home/home.module';
import {RegisterModule} from './components/register/register.module';
import {LandingModule} from './components/landing/landing.module';
import {PageNotFoundModule} from './components/page-not-found/page-not-found.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {OktaAuthModule} from '@okta/okta-angular';
import {AuthInterceptorService} from './services/auth-interceptor.service';
import {BackendService} from './services/backend.service';

const config = {
  issuer: 'https://dev-928137.oktapreview.com/oauth2/default',
  redirectUri: BackendService.FRONTEND_URL + '/implicit/callback',
  clientId: BackendService.CLIENT_ID,
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    routing,
    PicoEventModule,
    HomeModule,
    RegisterModule,
    LandingModule,
    HttpClientModule,
    PageNotFoundModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [
    AuthGuardHome,
    AuthGuardLanding,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
