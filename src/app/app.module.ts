import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {TopPanelModule} from "./top-panel/top-panel.module";
import {UserModule} from "./user/user.module";
import { ProjectComponent } from './project/project.component';
import {ProjectModule} from "./project/project.module";
import {AuthService} from "./user/login/shared/auth.service";
import {LoggedInGuardService} from "./user/login/shared/logged-in-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    TopPanelModule,
    UserModule,
    ProjectModule
  ],
  providers: [ AuthService, LoggedInGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
