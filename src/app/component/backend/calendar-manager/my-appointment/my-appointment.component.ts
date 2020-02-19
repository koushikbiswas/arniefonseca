import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-my-appointment',
  templateUrl: './my-appointment.component.html',
  styleUrls: ['./my-appointment.component.css']
})
export class MyAppointmentComponent implements OnInit {

  constructor(private readonly meta: MetaService) {

    this.meta.setTitle('Arniefonseca - My Appointment');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca -  My Appointment');
    this.meta.setTag('twitter:title', 'Arniefonseca -  My Appointment');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');

  }

  ngOnInit() {
  }

}
