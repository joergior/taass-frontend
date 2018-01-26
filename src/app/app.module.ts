import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AuthGuard} from './_guards';
import {routing} from './routing/app.routing';
import {PicoEventModule} from 'picoevent';
import {HomeModule} from './home/home.module';
import {LandingModule} from './landing/landing.module';
import {RegisterModule} from './register/register.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { OAuthService, UrlHelperService} from 'angular-oauth2-oidc';

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
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    OAuthService,
    UrlHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
