import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../sign-in/sign-in.component.scss']
})
export class SignUpComponent implements OnInit {
  registerform;
  regStatus = null;
  constructor(private regser: AuthenticationService) { }

  ngOnInit() {
    this.signinformfn();
  }
  signinformfn() {
    this.registerform = new FormGroup({
      'name': new FormControl('manoj', [Validators.required]),
      'emailid': new FormControl('manoj@yopmail.com', [Validators.required]),
      'username': new FormControl('manoj001', [Validators.required]),
      'password': new FormControl('manoj123', [Validators.required]),
      'access': new FormControl(true),
    });
  }
  register() {
    if (this.registerform.valid) {
      this.regStatus = this.regser.newUser(this.registerform.value);
      console.log(this.regStatus);
      if(this.regStatus) {
        alert(this.regStatus);
      } else {
        this.regStatus = true;
        setTimeout(() => {
          this.regStatus = false;
        }, 3000);
      }
    }
  }
}
