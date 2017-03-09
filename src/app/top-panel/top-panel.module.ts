import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {TopPanelRoutingModule} from "./top-panel-routing.module";
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {AuthService} from "../user/login/shared/auth.service";
import {LoggedInGuardService} from "../user/login/shared/logged-in-guard.service";

@NgModule({
  imports: [
    CommonModule,
    TopPanelRoutingModule,
    MaterialModule
  ],
  //providers: [ AuthService, LoggedInGuardService],
  declarations: [LandingPageComponent]
})
export class TopPanelModule {


}
