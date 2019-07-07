import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable() export class HttpClientInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('accessToken');

        if (token != 'undefined' && token) {
            request = request.clone({ headers: request.headers.set('user-key', token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                const data = {
                    reason: error.error && error.error.error.message ? error.error.error.message : ' unidentified error ',
                    status: error.error && error.error.error.code ? error.error.error.code : '500'
                };
                this.toastr.error(data.reason, data.status);
                if(error.error && error.error.error.field){
                    this.toastr.warning( error.error.error.field, 'Field(s)');
                }
                return throwError(error);
            }));
    }
}
