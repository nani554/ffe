import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PublicHomeComponent } from './public-home/public-home.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticationService } from './authentication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanActivateUserAdminService } from './can-activate-user-admin.service';
import { CanActivateUserService } from './can-activate-user.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    PublicHomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    CanActivateUserAdminService,
    CanActivateUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
