import { NgModule } from "@angular/core";
import { ProjectComponent } from "./components/project/project.component";
import { CreateProjectComponent } from "./components/createProject/createProject.component";
import { RouterModule } from "@angular/router";
import { ProjectService } from "./services/project.service";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { ProjectListComponent } from "./components/projectList/projectList.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ProjectComponent,
        CreateProjectComponent,
        ProjectListComponent
    ],
    imports: [
        RouterModule,
        FormsModule,
        SharedModule,
        CommonModule
    ],
    providers: [
        ProjectService
    ]
})
export class ProjectsModule{}