import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Project } from "../../projects/services/project.service";

export class User {
    username : string;
    projects : Array<Project>;
}

@Injectable()
export class UserService{
    
    constructor(
        private http : HttpClient,
    ){}

    public getUser() : Observable<User>{
        return this.http.get<User>('/api/protected/users/getUser');
    }

    public getAll() : Observable<User[]>{
        return this.http.get<User[]>('/api/protected/users/getAll')
    }
}