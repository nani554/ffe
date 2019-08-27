import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signinform;
  siginStatus;
  constructor(private authser: AuthenticationService) { }

  ngOnInit() {
    this.signinformfn();
  }
  signinformfn() {
    this.signinform = new FormGroup({
      'username': new FormControl('admin', [Validators.required]),
      'password': new FormControl('password', [Validators.required])
    });
  }
  signmein() {
    console.log(this.signinform.value);
    if (this.signinform.valid && this.signinform.value.username !== "admin") {
      this.siginStatus = this.authser.authenticateUser(this.signinform.value);
      setTimeout(() => {
        this.siginStatus = null;
      }, 3000);
    } else if (this.signinform.valid && this.signinform.value.username == "admin") {
      this.authser.authenticateAdmin(this.signinform.value);
    }
  }
}
