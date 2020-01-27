import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-manage-commission',
  templateUrl: './manage-commission.component.html',
  styleUrls: ['./manage-commission.component.css']
})
export class ManageCommissionComponent implements OnInit {

  constructor(private readonly meta: MetaService) {

    this.meta.setTitle('Arniefonseca - Manage Commission');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca -  Manage Commission');
    this.meta.setTag('twitter:title', 'Arniefonseca -  Manage Commission');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');

  }

  ngOnInit() {
  }

}
