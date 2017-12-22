import { Component, OnInit } from '@angular/core';
import { UserCredentials, AuthService } from '../../services/auth.service';

@Component({
    selector: "app-sign-up",
    templateUrl: "./signUp.component.html",
    styleUrls: ["./signUp.component.less"]
})
export class SignUpComponent implements OnInit {

    private userCredentials  = new UserCredentials();

    constructor(
        private authService : AuthService
    ) {}

    ngOnInit() {

    }

    private signUp() {
        this.authService
        .signUp(this.userCredentials)
    }

}