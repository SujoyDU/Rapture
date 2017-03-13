import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {ConnectDatabaseComponent} from "../connect-database/connect-database.component";
import {DialogsService} from "../shared/dialogs.service";

@Component({
  selector: 'app-top-panel',
  templateUrl: './app-top-panel.component.html',
  styleUrls: ['./app-top-panel.component.css']
})
export class AppTopPanelComponent implements OnInit {

   public result: any;
  constructor(private dialogsService: DialogsService) { }

  public databaseConnect() {
    this.dialogsService
      .confirm('Confirm Dialog', 'Are you sure you want to do this?')
      .subscribe(res => this.result = res);
  }

  // constructor(private _dialog: MdDialog) { }
  //
  // lastDialogResult: string;
  ngOnInit() {
  }
  //
  // databaseConnect() {
  //   console.log("in app-top-panel");
  //   let dialogRef = this._dialog.open(ConnectDatabaseComponent);
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.lastDialogResult = result;
  //   })
  // }
}
