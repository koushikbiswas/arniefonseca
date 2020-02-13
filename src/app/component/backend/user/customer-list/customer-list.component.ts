import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MetaService } from '@ngx-meta/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public user_details:any;

  constructor(private readonly meta: MetaService, public router: Router,public cookieService: CookieService) {

    this.meta.setTitle('Arniefonseca - Commission List');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Commission List');
    this.meta.setTag('twitter:title', 'Arniefonseca - Commission List');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');

    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {      
      this.user_details = JSON.parse(this.cookieService.get('user_details'));
    }

  }

  ngOnInit() {
  }

}
