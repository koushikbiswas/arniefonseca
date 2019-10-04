import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';


export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 /* public showHidediv: any;
*/
  /*@Output() public sidenavToggle = new EventEmitter();*/

  public  name: string;
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  public userCookies: any;
public user_full_name: any = '';
   
  constructor(public router: Router, public cookieService: CookieService, public dialog: MatDialog) {
    // this.userCookies = JSON.parse(this.cookieService.get('user_details'));

    // console.log(this.userCookies.firstname);
    // this.user_full_name = this.userCookies.firstname +' '+this.userCookies.lastname;
    // console.log(this.user_full_name);
   }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(comingSoonDialog, {
      width: '250px',
      data: {name: this.name}
    });
  }

 /* public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }*/



}


@Component({
  selector: 'coming',
  // templateUrl: './coming-soon.html',
  template: `<h2> Coming Soon </h2>`
})
export class comingSoonDialog {

  constructor(
    public dialogRef: MatDialogRef<comingSoonDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}