import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  user;
  totalUsers;
  constructor(private router: ActivatedRoute, private authser: AuthenticationService) { }

  ngOnInit() {
    console.log(this.router.queryParams['user']);
    this.router.queryParams.subscribe(res => {
      console.log(res);
      this.getParticularUser(res.user);
    })
    this.totalUsers = this.authser.getUser().length;
  }
  getParticularUser(u) {
    this.user = this.authser.getParticularUs(u);
    console.log(this.user);
  }

  changepassword() {
    
  }
}
