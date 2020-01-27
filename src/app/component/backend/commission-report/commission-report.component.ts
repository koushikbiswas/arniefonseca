import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-commission-report',
  templateUrl: './commission-report.component.html',
  styleUrls: ['./commission-report.component.css']
})
export class CommissionReportComponent implements OnInit {

  constructor(private readonly meta: MetaService,) { 

    this.meta.setTitle('Arniefonseca - Commission Report');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Commission Report');
    this.meta.setTag('twitter:title', 'Arniefonseca - Commission Report');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');

   }

  ngOnInit() {
  }

}
