import { Injectable, Injector } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject, throwError, catchError } from 'rxjs';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    refreshTokenInProgress = false;
    tokenRefreshedSource = new Subject();
    tokenRefreshed$ = this.tokenRefreshedSource.asObservable();

    constructor(private router: Router, private injector: Injector) {}

    logout() {
        this.router.navigate(['/authentification/connexion']);
    }

    handleResponseError(
        error: { status: number },
        request?: HttpRequest<any>,
        next?: HttpHandler
    ): any {
        // Invalid token error
        if (error.status === 401 || error.status === 403) {
            this.logout();
        }

        // user existe dans auth0 mais pas dans notre bdd
        if (error.status === 402) {
            this.router.navigate(['/demo']);
        }

        return throwError(error);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        // Handle response
        return next
            .handle(request)
            .pipe(
                catchError((error) =>
                    this.handleResponseError(error, request, next)
                )
            );
    }
}
