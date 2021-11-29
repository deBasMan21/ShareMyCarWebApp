import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

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