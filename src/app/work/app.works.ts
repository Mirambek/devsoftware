import { Component } from '@angular/core';
import { MatDialog } from '../../../node_modules/@angular/material';
import { WorkDialog } from '../dialog/app.work.dialog'

@Component({
  templateUrl: './app.works.html',
  styleUrls: ['./app.works.css']
})
export class Works {
  public images: any;
  constructor(public dialog: MatDialog) {
    this.images =
      {
        wpfTicket: {
          short: "../assets/img/JDKassir.png",
          original: "../assets/img/JDKassirOriginal.png"
        },
        mobileApp:
          "../assets/img/mobileAndroid.png",
        kidsExercise:{
          short: "../assets/img/kidsexercesSh.png",
          original: "../assets/img/kidsexerces.png"
        }
      }
  }
   openDialog(link): void {
     if (!link){
    let dialogRef = this.dialog.open(WorkDialog, {
      width:'auto',
      height:'auto',
      data: { img: this.images.wpfTicket.original }
    });
   } else {
    let dialogRef = this.dialog.open(WorkDialog, {
      width:'auto',
      height:'auto',
      data: { img: link }
    });
   }
  }
}
