import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class Interceptor1 implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modified = req.clone({ setHeaders: { 'Custom-Header-1': '1' } });
        return next.handle(modified);
    }
}

@Injectable()
export class Interceptor2 implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modified = req.clone({ setHeaders: { 'Custom-Header-2': '2' } });
        return next.handle(modified);
    }
}