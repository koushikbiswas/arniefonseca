import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';


@Component({
  selector: 'app-booking-report',
  templateUrl: './booking-report.component.html',
  styleUrls: ['./booking-report.component.css']
})
export class BookingReportComponent implements OnInit {

  constructor(private readonly meta: MetaService,) { 

    this.meta.setTitle('Arniefonseca - Booking Report');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Booking Report');
    this.meta.setTag('twitter:title', 'Arniefonseca - Booking Report');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');


  }

  ngOnInit() {
  }

}
