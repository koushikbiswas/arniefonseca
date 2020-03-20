import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import {MatDialog} from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-bk-header',
  templateUrl: './bk-header.component.html',
  styleUrls: ['./bk-header.component.css']
})
export class BkHeaderComponent implements OnInit {
  public userCookies: any;     
  public user_data: any;

  public user_cookies: any;
 
  public cookies_id: any;
  public userData: any = [];
  public user_full_name: any;

  constructor(public cookieService: CookieService, private sidenav: SidenavService, public dialog: MatDialog, public router: Router, public activeroute: ActivatedRoute,public apiService: ApiService) {
    let allcookies: any;
    allcookies = cookieService.getAll();
    this.user_cookies = JSON.parse(allcookies.user_details);
    this.cookies_id = this.user_cookies._id;
    this.getdata();
  }
  toggleActive:boolean = false;
  toggleRightSidenav() {
    this.toggleActive = !this.toggleActive;
    this.sidenav.toggle();
    // console.log('Clicked');
    
    
    
   }

  ngOnInit() {
    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {
      this.userCookies = JSON.parse(this.cookieService.get('user_details'));
      //console.log(this.userCookies.type);
      this.user_full_name = this.userCookies.firstname + ' '+ this.userCookies.lastname ;
      // this.userid = this.userCookies._id;    
      }
  }

  logOut() {
    this.cookieService.deleteAll();
    this.router.navigateByUrl('/');
    window.location.href="https://arniefonseca.influxiq.com/";
    // console.log("logout");
  }
  getdata() {
    let data: any = {
      endpoint: 'datalist',
      source: 'users_view',
      condition: {
        "_id_object": this.cookies_id
      }
    }
    this.apiService.getDatalist(data).subscribe((res: any) => {
      this.userData = res.res[0];
     
    });
  }
}

