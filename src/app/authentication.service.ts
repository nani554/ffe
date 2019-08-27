import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  usersList = []
  isAuthenticated = new BehaviorSubject("false");
  changeAuth(value) {
    this.isAuthenticated.next(value);
  }
  constructor(private router: Router) { }
  newUser(user) {
    if (this.usersList.length == 0) {
      this.usersList = [user];
    } else {
      let userExist = this.usersList.filter(res => {
        return res.username === user.username;
      })
      console.log(user, userExist)
      if (userExist.length == 0) {
        this.usersList = [...this.usersList, user];
      } else {
        return 'User Exist';
      }
    }
    console.log(this.usersList);
  }
  authenticateUser(user) {
    console.log(user.access);
    let isUserA;
    let userAccess = this.usersList.filter(res => {
      return res.username === user.username;
    })
    if(userAccess.length > 0) {
      isUserA = userAccess[0].access;
      // console.log();
    }
    if(isUserA) {
      let isUser = this.usersList.filter(res => {
        return (res.username === user.username && res.password === user.password);
      });
      console.log(user, isUser);
      if (isUser.length > 0) {
        this.changeAuth("user");
        console.log("navigated");
        let usena = isUser[0].username;
        console.log(usena);
        this.router.navigate(['/userhome'],  { queryParams: { user: usena } });
      } else {
        return "false";
      }
    } else {
      return "deactivated";
    }

  }
  authenticateAdmin(admin) {
    console.log(admin);
    if (admin.username === "admin" && admin.password === "password") {
      this.changeAuth("admin");
      console.log("navigated");
      this.router.navigate(['/adminhome']);
    } else {
      return "false";
    }
  }

  getUser() {
    return this.usersList;
  }
  getParticularUs(uname) {
    console.log(uname)
    let un = this.usersList.filter(res => {
      return res.username === uname;
    })
    console.log(un);
    if(un.length > 0) {
      return un[0];
    } else {
      return "doesnt exist";
    }
  }
  editUser(user) {
    let remainingUsers = this.usersList.filter(res => {
      return res.username !== user.username;
    })
    console.log(user, remainingUsers)
    this.usersList = [...remainingUsers, user];
    console.log(this.usersList);
  }

  deleteUser(user) {
    let euser = this.usersList.filter(res => {
      return user.username !== res.username;
    })
    this.usersList = [...euser];
  }

  activation(user) {
    if(user.access) {
      user.access = false;
    } else {
      user.access = true;
    }
    console.log(user);
  }
}
