import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-couples-counseling',
  templateUrl: './couples-counseling.component.html',
  styleUrls: ['./couples-counseling.component.css']
})
export class CouplesCounselingComponent implements OnInit {

  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('Arniefonseca - Couples Counseling');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Couples Counseling');
    this.meta.setTag('twitter:title', 'Arniefonseca - Couples Counseling');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo.png');
   }

  ngOnInit() {
  }

}
