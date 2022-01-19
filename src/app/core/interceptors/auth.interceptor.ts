import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('HTTP Request started');
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse) => {
        const errorMessage = this.setError(error);
        console.log(error.status);
        alert(errorMessage);
        return throwError(errorMessage);
      })
    )
  }

  setError(error: HttpErrorResponse): string {
    let errorMessage = 'Unknown error occured';
    if(error.error instanceof ErrorEvent) {
        // Client side error
        errorMessage = error.error.message;
    } else {
        // server side error
        // if (error.status!==0) {
        //     errorMessage = error.error.errorMessage;
        // }
         if(error.status == 404){
          errorMessage = '404 Not found';
        }
    }
    return errorMessage;
  }
}
