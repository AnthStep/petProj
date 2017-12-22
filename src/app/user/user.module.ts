import { NgModule } from "@angular/core";
import { SignUpComponent } from "./components/singUp/signUp.component";
import { SignInComponent } from "./components/signIn/signIn.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from "./services/user.service";
import { AuthService } from "./services/auth.service";

@NgModule({
    imports: [
        HttpClientModule,
        FormsModule
    ],
    declarations: [
        SignUpComponent,
        SignInComponent
    ],
    providers: [
        UserService,
        AuthService
    ],
    exports: [
        SignInComponent,
        SignUpComponent
    ]
})
export class UserModule { }