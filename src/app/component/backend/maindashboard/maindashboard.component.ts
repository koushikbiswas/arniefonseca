import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit {
public userCookies: any;
public user_full_name: any = '';
  constructor(public cookieService: CookieService) {
    // console.log(this.cookieService.getAll());
    this.userCookies = JSON.parse(this.cookieService.get('user_details'));

    console.log(this.userCookies.firstname);
    this.user_full_name = this.userCookies.firstname +' '+this.userCookies.lastname;
    console.log(this.user_full_name);
   }

  ngOnInit() {
  }

}
