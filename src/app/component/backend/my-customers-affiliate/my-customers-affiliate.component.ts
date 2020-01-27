import { Component, OnInit } from '@angular/core';

import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-my-customers-affiliate',
  templateUrl: './my-customers-affiliate.component.html',
  styleUrls: ['./my-customers-affiliate.component.css']
})
export class MyCustomersAffiliateComponent implements OnInit {

  constructor(private readonly meta: MetaService) {

    this.meta.setTitle('Arniefonseca - Customers Affiliate');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca -  Customers Affiliate');
    this.meta.setTag('twitter:title', 'Arniefonseca -  Customers Affiliate');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');

  }

  ngOnInit() {
  }

}
