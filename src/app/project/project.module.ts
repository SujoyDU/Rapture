import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTopPanelComponent } from './app-top-panel/app-top-panel.component';
import {MaterialModule} from "@angular/material";
import 'hammerjs';
import { ConnectDatabaseComponent } from './connect-database/connect-database.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [AppTopPanelComponent, ConnectDatabaseComponent],
  exports: [AppTopPanelComponent]
})
export class ProjectModule { }
