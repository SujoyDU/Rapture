import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {ConnectDatabaseComponent} from "../connect-database/connect-database.component";

@Component({
  selector: 'app-top-panel',
  templateUrl: './app-top-panel.component.html',
  styleUrls: ['./app-top-panel.component.css']
})
export class AppTopPanelComponent implements OnInit {

  constructor(private _dialog: MdDialog) { }

  lastDialogResult: string;
  ngOnInit() {
  }

  databaseConnect() {
    console.log("in app-top-panel");
    let dialogRef = this._dialog.open(ConnectDatabaseComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }
}
