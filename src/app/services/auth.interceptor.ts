import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { AuthenticationService } from "./authentication.service";
import { ErrorService } from "./error.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService, private errorService: ErrorService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const id = localStorage.getItem('id_token');

        if (id) {
            const cloned = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${id}`
                }
            });
            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }

}