import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-special-programs-for-young-men',
  templateUrl: './special-programs-for-young-men.component.html',
  styleUrls: ['./special-programs-for-young-men.component.css']
})
export class SpecialProgramsForYoungMenComponent implements OnInit {

  constructor(private readonly meta: MetaService) { 
    this.meta.setTitle('Arniefonseca - Special Program for young men');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Special Program for young men');
    this.meta.setTag('twitter:title', 'Arniefonseca - Special Program for young men');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo.png');
  }

  ngOnInit() {
  }

}
