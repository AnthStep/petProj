import { Component, OnInit} from '@angular/core';
import { UserService } from '../user/services/user.service';

@Component({
    selector: "app-private-board",
    templateUrl: "./privateBoard.component.html",
    styleUrls: ["./privateBoard.component.less"]
})
export class PrivateBoardComponent implements OnInit {
    constructor(
        private userService : UserService
    ){
        
    }

    ngOnInit(){
        this.userService
        .getUser()
        .subscribe(resp => {
            console.log(resp);
        })
    }
}