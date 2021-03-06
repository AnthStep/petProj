import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService : AuthService,
  ) { }

  ngOnInit() {
  }

}
