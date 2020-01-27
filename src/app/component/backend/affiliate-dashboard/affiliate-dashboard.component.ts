import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-affiliate-dashboard',
  templateUrl: './affiliate-dashboard.component.html',
  styleUrls: ['./affiliate-dashboard.component.css']
})
export class AffiliateDashboardComponent implements OnInit {

  constructor(private readonly meta: MetaService,) { 

    this.meta.setTitle('Arniefonseca - Affiliate Dashboard');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Affiliate Dashboard');
    this.meta.setTag('twitter:title', 'Arniefonseca - Affiliate Dashboard');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');


   }

  ngOnInit() {
  }

}
