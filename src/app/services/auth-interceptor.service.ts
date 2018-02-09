import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {OktaAuthService} from '@okta/okta-angular';
import {BackendService} from './backend.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private oktaAuth: OktaAuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.indexOf(BackendService.API) > -1) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.oktaAuth.getAccessToken().accessToken}`
        }
      });
    }
    return next.handle(request);
  }
}
