import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../service/local-storage';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly storageService: LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.storageService.getData('token')

    if(token != null) {
      request = request.clone( {
        headers: request.headers.append('AccessToken', token)
      })
    }

    return next.handle(request);

  }
}
