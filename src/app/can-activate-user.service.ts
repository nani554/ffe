import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateUserService {
  finVal;
  constructor(private authser: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.authser.isAuthenticated.subscribe(res => {
      if(res === "user") {
        this.finVal = true;
      } else {
        this.finVal = false;
      }
    })
    return this.finVal;
  }
}
