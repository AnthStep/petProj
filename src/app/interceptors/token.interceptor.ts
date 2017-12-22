import { Injectable } from "@angular/core";
import { 
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent } from "@angular/common/http";
import { AuthService } from "../user/services/auth.service";
import { Observable } from "rxjs/Observable";
import { Injector } from "@angular/core";

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    constructor(
        private injector : Injector
    ){}

    public get authService() : AuthService {
        return this.injector.get(AuthService)
    }

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders : {
                Authorization: `${this.authService.token}`
            }
        })

        return next.handle(request);
    }

}