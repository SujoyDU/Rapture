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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    TopPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
