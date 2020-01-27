import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-listing-subscription',
  templateUrl: './listing-subscription.component.html',
  styleUrls: ['./listing-subscription.component.css']
})
export class ListingSubscriptionComponent implements OnInit {
  

   /************** lib list setup start here *************/
  //  public subscriptionForm: any = {
  //   apiBaseUrl: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
  //   listEndPoint: "datalist",
  //   datasource: "",
  //   tableName: "subscriptions",
  //   updateurl: "addorupdatedata",
  //   editUrl: "newsletter/add-group/edit/",
  //   jwtToken: "",
  //   deleteEndPoint: "deletesingledata",
  //   addLink: "",
  //   view: "subscriptions"

  // }
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, private readonly meta: MetaService) {

    this.meta.setTitle('Arniefonseca - Newsletter');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca -  Newsletter');
    this.meta.setTag('twitter:title', 'Arniefonseca -  Newsletter');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');

    // this.activatedRoute.data.subscribe(resolveData => {
    //   this.subscriptionForm.datasource = resolveData.subscriptionData.res;
    //   this.subscriptionForm.jwtToken = this.cookieService.get('jwtToken');

    // });
  }

  ngOnInit() {
  }

}