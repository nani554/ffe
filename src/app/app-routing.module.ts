import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicHomeComponent } from './public-home/public-home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CanActivateUserAdminService } from './can-activate-user-admin.service';
import { CanActivateUserService } from './can-activate-user.service';


const routes: Routes = [
  { path: '', component: PublicHomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'userhome', component: UserDashboardComponent, canActivate: [CanActivateUserService] },
  { path: 'adminhome', component: AdminDashboardComponent, canActivate: [CanActivateUserAdminService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
