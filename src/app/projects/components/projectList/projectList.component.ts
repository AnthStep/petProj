import { Component, OnInit } from "@angular/core";
import { ProjectService, Project } from "../../services/project.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-project-list",
    templateUrl: "./projectList.component.html",
    styleUrls: ["./projectList.component.less"]
})
export class ProjectListComponent implements OnInit{

    private projects : Project[] = [];
    
    constructor(
        private projectService : ProjectService,
        private router : Router
    ){}

    ngOnInit(){
        this.projectService
        .getAll()
        .subscribe(projects => {
            this.projects = projects;
        })
    }

}