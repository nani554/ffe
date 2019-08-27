import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth = "false";
  constructor(private authSer: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authSer.isAuthenticated.subscribe(res => {
      console.log(res);
      this.isAuth = res;
    })
  }
  logmeout() {
    this.authSer.changeAuth("false");
    this.router.navigate(['/']);
  }
}
