import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-personal-development-coaching',
  templateUrl: './personal-development-coaching.component.html',
  styleUrls: ['./personal-development-coaching.component.css']
})
export class PersonalDevelopmentCoachingComponent implements OnInit {

  constructor(private readonly meta: MetaService) { 
    this.meta.setTitle('Arniefonseca - Personal Development Coaching');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Personal Development Coaching');
    this.meta.setTag('twitter:title', 'Arniefonseca - Personal Development Coaching');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo.png');
  }

  ngOnInit() {
  }

}
