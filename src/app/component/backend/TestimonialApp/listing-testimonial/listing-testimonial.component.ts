import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../api.service';

import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-listing-testimonial',
  templateUrl: './listing-testimonial.component.html',
  styleUrls: ['./listing-testimonial.component.css']
})
export class ListingTestimonialComponent implements OnInit {

  /************** lib list setup start here *************/
  public testimonialListConfig:any = {
    // apiBaseUrl: "https://9v41bpikik.execute-api.us-east-1.amazonaws.com/production/api/",
    endpoint: this.ApiService.serverUrl,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "testimonial",
    updateurl: "addorupdatedata",
    editUrl: "testimonial/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "/testimonial/add",
    view: "testimonial_view"
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public ApiService: ApiService, private readonly meta: MetaService) { 

    this.meta.setTitle('Arniefonseca - Testimonial');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca -  Testimonial');
    this.meta.setTag('twitter:title', 'Arniefonseca -  Testimonial');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');

    //console.log('---------------kbtest serverUrl-------------', this.ApiService.serverUrl);
  this.activatedRoute.data.subscribe(resolveData => {
    this.testimonialListConfig.datasource = resolveData.testimonialList.res;
    //  console.log('---------------kbtest testimonialList-------------', this.testimonialListConfig.datasource );
    this.testimonialListConfig.jwtToken = this.cookieService.get('jwtToken');
    
  });

 

}

  ngOnInit() {
  }

}
