/**
 * Created by sujoy on 3/8/2017.
 */

import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent }    from './login/login.component';
//import { UserComponent }    from './user.component';
import { RegistrationComponent }  from './registration/registration.component';
// import { LandingComponent } from './landing/landing.component';
// import {ForgetPassComponent} from "./login/forget-pass/forget-pass.component";

@NgModule({
  imports: [
    RouterModule.forChild([

    ])
  ],
  exports: [
    RouterModule
  ]

})
export class UserRoutingModule { }
