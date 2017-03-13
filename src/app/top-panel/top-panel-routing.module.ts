/**
 * Created by sujoy on 3/8/2017.
 */


import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {LoginComponent} from "../user/login/login.component";
import {RegistrationComponent} from "../user/registration/registration.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',  component: LandingPageComponent },
      { path: 'login',  component: LoginComponent },
      // { path: 'register',  component: RegistrationComponent },

    ])
  ],
  exports: [
    RouterModule
  ]

})
export class TopPanelRoutingModule { }
