import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

export class UserCredentials extends Object{
    username : String = "";
    password : String = "";
}

@Injectable()
export class AuthService{

    constructor(
        private http : HttpClient,
        private router : Router
    ){
    }

    public signIn(userCredentials: UserCredentials){
        return this.http.post('/api/auth/signIn', userCredentials)
        .subscribe((res : any) => {
            this.token = res.token;
            this.router.navigate(['/private']);
        });
    }

    public signUp(userCredentials: UserCredentials){
        return this.http.post('/api/auth/signUp', userCredentials)
        .subscribe();
    }

    public signOut(){
        return this.http.get('/api/auth/signOut')
        .subscribe((res : any) =>{
            if(res && res.success){
                this.token = "";
                this.router.navigate(['/home']);
            }
        })
    }

    get token(): string{
        return localStorage.getItem("token");
    }

    set token(token : string) {
        localStorage.setItem("token", token);
    }

    get isAuthenticated(): boolean {
        return !!this.token;
    }

}