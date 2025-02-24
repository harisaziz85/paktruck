import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, switchMap, of, delay, retry, catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { error } from 'console';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.authService.getToken();
    // console.log('JWT Interceptor - Retrieved Token:', token); // Debuging
  
    if (!token) {
      // console.warn('Token is null, retrying in 100ms...'); // Debuging
      return of(null).pipe(
        delay(100),  // Small delay to wait for the token
        switchMap(() => {
          let newToken = this.authService.getToken();
          // console.log('Retrying - Retrieved Token:', newToken); // Debuging
          
          let authReq = req;
          if (newToken) {
            authReq = req.clone({
              setHeaders: {
                Authorization: `Bearer ${newToken}`
              }
            });
          }
          return next.handle(authReq);
        })
      );
    }
  
    let authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  
    return next.handle(authReq);
  }
  
}
