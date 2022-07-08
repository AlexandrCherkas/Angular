import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class DemoInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('randomuser.me')) {
      console.log('The interceptor is working! Request for URL :', request);
    }

    return next.handle(request);
  }
}
