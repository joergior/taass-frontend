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
import {OAuthModule, OAuthService, UrlHelperService} from 'angular-oauth2-oidc';
import {HttpClientModule} from '@angular/common/http';


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
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['https://dev-928137.oktapreview.com/api'],
        sendAccessToken: true
      }
    })
  ],
  providers: [
    AuthGuardHome,
    AuthGuardLanding,
    OAuthService,
    UrlHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
