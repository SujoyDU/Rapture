import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTopPanelComponent } from './app-top-panel/app-top-panel.component';
import {MaterialModule} from "@angular/material";
import 'hammerjs';
import { ConnectDatabaseComponent } from './connect-database/connect-database.component';
import {DialogsService} from "./shared/dialogs.service";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [DialogsService],
  entryComponents: [ConnectDatabaseComponent],
  declarations: [AppTopPanelComponent, ConnectDatabaseComponent],
  exports: [AppTopPanelComponent, ConnectDatabaseComponent]
})
export class ProjectModule { }
