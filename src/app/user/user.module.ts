import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {UserRoutingModule} from "./user-routing.module";
import {AuthService} from "./login/shared/auth.service";
import {LoggedInGuardService} from "./login/shared/logged-in-guard.service";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ AuthService, LoggedInGuardService],
  declarations: [LoginComponent, RegistrationComponent]
})
export class UserModule { }
