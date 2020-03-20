import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from '@angular/router';
export interface DialogData { 
  header: string,
  message: string,
  button1: { text: string },
  button2: { text: string },
}
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  public data: any;

  constructor(public dialogRef: MatDialogRef<CommonComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData, public router: Router) {
    this.data = dialogData;
  }

  ngOnInit() {
  }
  button1() {
    this.dialogRef.close(this.data.button1.text);
  }

  button2() {
    this.dialogRef.close(this.data.button2.text);
  }

}
