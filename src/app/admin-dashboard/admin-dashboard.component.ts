import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  userlist;
  editDetails;
  registerform;
  regStatus = null;
  constructor(private userser: AuthenticationService) { }

  ngOnInit() {
    this.getAllusers();
    this.registerform = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'emailid': new FormControl('', [Validators.required]),
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
  }
  getAllusers() {
    this.userlist = this.userser.getUser();
  }
  editUser(user) {
    console.log(user);
    if(user) {
      this.editDetails = true;
      this.registerform.controls['name'].setValue(user.name);
      this.registerform.controls['emailid'].setValue(user.emailid);
      this.registerform.controls['username'].setValue(user.username);
      this.registerform.controls['password'].setValue(user.password);
    }
  }
  activateDe(user) {
    console.log(user);
    if(user) {
      this.userser.activation(user);
      this.getAllusers();
    }
  }
  delete(user) {
    let confirmation = confirm("Do you want to delte this user");
    if(confirmation) {
      console.log(user);
      if(user) {
        this.userser.deleteUser(user);
        this.getAllusers();
      }
    }
  }

  submitEdit() {
    if (this.registerform.valid) {
      this.regStatus = this.userser.editUser(this.registerform.value);
      console.log(this.regStatus);
      this.getAllusers();
    }
  }
}
