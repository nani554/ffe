import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateUserAdminService implements CanActivate {
  finalVal;
  constructor(private authser: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.authser.isAuthenticated.subscribe(res => {
      if(res === "admin") {
        this.finalVal = true;
      } else {
        this.finalVal = false;
      }
    })
    return this.finalVal;
  }
}
