import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../../user/services/user.service";
import { Observable } from "rxjs/Observable";

export class Project{
    title : string = "";
    code : string = "";
    participants : Array<User> = [];
}

@Injectable()
export class ProjectService{
    constructor(
        private http : HttpClient
    ){}

    public create(project : Project){
        return this.http.post("/api/protected/projects/create",project);
    }

    public getAll() : Observable<Project[]>{
        return this.http.get<Project[]>("/api/protected/projects/getAll");
    }
}