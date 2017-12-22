import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { PrivateBoardComponent } from '../privateBoard/privateBoard.component';
import { SignUpComponent } from '../user/components/singUp/signUp.component';
import { SignInComponent } from '../user/components/signIn/signIn.component';
import { LoginRouteGuard } from './services/loginRouteGuard.service';
import { GuestRouteGuard } from './services/guestRouteGuard.service';
import { ProjectComponent } from '../projects/components/project/project.component';
import { CreateProjectComponent } from '../projects/components/createProject/createProject.component';
import { ProjectListComponent } from '../projects/components/projectList/projectList.component';


const appRoutes: Routes = [
    { 
        path: 'home', 
        component: HomeComponent 
    },
    { 
        path: 'private', 
        component: PrivateBoardComponent,
        canActivate: [LoginRouteGuard]
    },
    { 
        path: 'signup', 
        component: SignUpComponent ,
        canActivate: [GuestRouteGuard]
    },
    { 
        path: 'signin', 
        component: SignInComponent,
        canActivate: [GuestRouteGuard]
    },
    {
        path: "projects",
        component: ProjectComponent,
        canActivate: [LoginRouteGuard],
        children: [
            {
                path: "createProject",
                component: CreateProjectComponent
            },
            {
                path: "projectList",
                component: ProjectListComponent
            }
        ]
    },
    { 
        path: '', redirectTo: '/home', 
        pathMatch: 'full' 
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes, 
            { enableTracing: false })
    ],
    exports: [
        RouterModule
    ],
    providers: [
        LoginRouteGuard,
        GuestRouteGuard
    ]
})
export class AppRoutingModule { }