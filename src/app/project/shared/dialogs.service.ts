import { Injectable } from '@angular/core';
import {MdDialog, MdDialogRef} from "@angular/material";
import {Observable} from "rxjs";
import {ConnectDatabaseComponent} from "../connect-database/connect-database.component";

@Injectable()
export class DialogsService {


    constructor(private dialog: MdDialog) { }

    public confirm(title: string, message: string): Observable<boolean> {

        let dialogRef: MdDialogRef<ConnectDatabaseComponent>;

        dialogRef = this.dialog.open(ConnectDatabaseComponent);

        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }

}
