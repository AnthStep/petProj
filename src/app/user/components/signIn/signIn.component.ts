import { Component, OnInit } from "@angular/core";
import { UserCredentials, AuthService } from "../../services/auth.service";

@Component({
    selector: "app-sign-in",
    templateUrl: "./signIn.component.html",
    styleUrls: ["./signIn.component.less"]
})
export class SignInComponent {

    private userCredentials = new UserCredentials();

    constructor(
        private authService : AuthService
    ) { }

    private signIn() {
        this.authService
        .signIn(this.userCredentials);
    }
}