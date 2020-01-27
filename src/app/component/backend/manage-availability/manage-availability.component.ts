import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-manage-availability',
  templateUrl: './manage-availability.component.html',
  styleUrls: ['./manage-availability.component.css']
})
export class ManageAvailabilityComponent implements OnInit {

  constructor(private readonly meta: MetaService) {


    this.meta.setTitle('Arniefonseca - Manage Availability');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca -  Manage Availability');
    this.meta.setTag('twitter:title', 'Arniefonseca -  Manage Availability');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');

   }

  ngOnInit() {
  }

}
