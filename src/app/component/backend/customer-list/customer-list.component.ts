import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private readonly meta: MetaService, public router: Router) {

    this.meta.setTitle('Arniefonseca - Commission List');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Commission List');
    this.meta.setTag('twitter:title', 'Arniefonseca - Commission List');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');


  }

  ngOnInit() {
  }

}
