import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-speaker-engagements',
  templateUrl: './speaker-engagements.component.html',
  styleUrls: ['./speaker-engagements.component.css']
})
export class SpeakerEngagementsComponent implements OnInit {

  constructor(private readonly meta: MetaService) { 
    
    this.meta.setTitle('Arniefonseca - Speaker Engagements');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Speaker Engagements');
    this.meta.setTag('twitter:title', 'Arniefonseca - Speaker Engagements');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo.png');
  }

  ngOnInit() {
  }

}
