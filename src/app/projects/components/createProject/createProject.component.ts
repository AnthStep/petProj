import { Component,OnInit } from "@angular/core";
import { Project, ProjectService } from "../../services/project.service";
import { UserService, User } from "../../../user/services/user.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-create-project",
    templateUrl: "./createProject.component.html",
    styleUrls: ["./createProject.component.less"]
})
export class CreateProjectComponent implements OnInit{

    private newProject = new Project();
    private users : User[] = [];
    private selectedUsers : User[] =[];

    constructor(
        private userService : UserService,
        private projectService : ProjectService,
        private router : Router
    ){}

    ngOnInit(){
        this.userService
        .getAll()
        .subscribe(users => {
            this.users = users;
        })
    }

    private saveProject(){
        this.newProject.participants = this.selectedUsers.map(el => el["_id"]);
        this.projectService
        .create(this.newProject)
        .subscribe((res : any) => {
            if(res.success){
                this.router.navigate(["/projects/projectList"]);
            }
        })
    }


}