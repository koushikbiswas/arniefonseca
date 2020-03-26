import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router,ActivatedRoute} from '@angular/router'

import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit {
public userCookies: any;
public user_full_name: any = '';
public eventhomelist:any;
public count:any;
  constructor(public cookieService: CookieService, private readonly meta: MetaService,public activatedRoute:ActivatedRoute) {
    // console.log(this.cookieService.getAll());
    // this.userCookies = JSON.parse(this.cookieService.get('user_details'));

    // console.log(this.userCookies.firstname);
    // this.user_full_name = this.userCookies.firstname +' '+this.userCookies.lastname;
    // console.log(this.user_full_name);

    this.meta.setTitle('Arniefonseca - Dashboard');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Dashboard');
    this.meta.setTag('twitter:title', 'Arniefonseca - Dashboard');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');

   }

  ngOnInit() {

    this.activatedRoute.data.forEach((resc:any)=>{
     //console.warn(resc);
     this.count=resc.count;
    })
  }

}
