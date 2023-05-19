import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    const headers = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("jwt")
    );
      console.log(request.url);
        const dataRequest=request.clone({headers:headers});

    return next.handle(dataRequest);
  }
}
