import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-high-performance-coaching',
  templateUrl: './high-performance-coaching.component.html',
  styleUrls: ['./high-performance-coaching.component.css']
})
export class HighPerformanceCoachingComponent implements OnInit {

  constructor(private readonly meta: MetaService) { 
    this.meta.setTitle('Arniefonseca - High performance coaching');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - High performance coaching');
    this.meta.setTag('twitter:title', 'Arniefonseca - High performance coaching');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo.png');
  }

  ngOnInit() {
  }

}
