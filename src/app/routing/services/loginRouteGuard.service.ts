import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "../../user/services/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class LoginRouteGuard implements CanActivate{
    constructor(
        private authSerice: AuthService,
        private router: Router
    ){}

    canActivate(){
        if(this.authSerice.isAuthenticated){
            return true;
        } else {
            this.router.navigate(['/signIn']);
            return false;
        }
    }
}