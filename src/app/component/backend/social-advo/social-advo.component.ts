import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-social-advo',
  templateUrl: './social-advo.component.html',
  styleUrls: ['./social-advo.component.css']
})
export class SocialAdvoComponent implements OnInit {

  constructor(public router: Router, private readonly meta: MetaService) {


    this.meta.setTitle('Arniefonseca - Social Advo');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca -  Social Advo');
    this.meta.setTag('twitter:title', 'Arniefonseca -  Social Advo');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');

   }

  ngOnInit() {
    
  }

}
