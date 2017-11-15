import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA,MatDialogRef} from '../../../node_modules/@angular/material';

@Component({
  selector: 'work-dialog',
   templateUrl: './app.work.dialog.html',
   styles:[`
   #main-picture {
    width:100% !important;
    height:100% !important;
  }
   .mat-dialog-content{
    max-height: 80vh !important;
  }
   `]
})
export class WorkDialog {
  constructor(
    public dialogRef: MatDialogRef<WorkDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
    this.dialogRef.close();
    }
}
