import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FE';
  constructor(
    private router: Router,
    private loginSrv: LoginService
    ) {}

  ngOnInit() {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     window.scrollTo(0, 0);
    //   }
    // });
    // this.isAdmin = this.loginSrv.checkIsAdmin();

  }
}
