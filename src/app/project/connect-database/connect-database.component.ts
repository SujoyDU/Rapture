import {Component, OnInit, Optional} from '@angular/core';
import {MdDialogRef,MdDialog} from "@angular/material";

@Component({
  selector: 'app-connect-database',
  templateUrl: './connect-database.component.html',
  styleUrls: ['./connect-database.component.css']
})
export class ConnectDatabaseComponent implements OnInit {

  //title = 'app works!';

  public title: string;
  public message: string;
  constructor(public dialogRef: MdDialogRef<ConnectDatabaseComponent>) {}


  // constructor(@Optional() public dialogRef: MdDialogRef<ConnectDatabaseComponent>) { }
  //
  ngOnInit() {
    console.log("abc");
  }

}
