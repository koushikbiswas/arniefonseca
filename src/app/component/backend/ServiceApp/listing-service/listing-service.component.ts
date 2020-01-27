import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../api.service';
import {} from '../../../../../environments/environment.dev';
import { environment } from '../../../../../environments/environment';
import { MetaService } from '@ngx-meta/core';



@Component({
  selector: 'app-listing-service',
  templateUrl: './listing-service.component.html',
  styleUrls: ['./listing-service.component.css']
})
export class ListingServiceComponent implements OnInit {

    /************** lib list setup start here *************/
    public serviceListConfig:any = {
      // apiBaseUrl: "https://9v41bpikik.execute-api.us-east-1.amazonaws.com/production/api/",
      apiBaseUrl: environment.API_URL,
      listEndPoint: "datalist",
      datasource: "",
      tableName: "service",
      updateurl: "addorupdatedata",
      editUrl: "service/edit",
      jwtToken: "",
      deleteEndPoint: "deletesingledata",
      addLink: "/service/add",
      view:"service"
    }
  
  constructor( private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiService: ApiService, private readonly meta: MetaService ) { 

    this.meta.setTitle('Arniefonseca - Service');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca -  Service');
    this.meta.setTag('twitter:title', 'Arniefonseca -  Service');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');

  this.activatedRoute.data.subscribe(resolveData => {
    this.serviceListConfig.datasource = resolveData.serviceList.res;    
    this.serviceListConfig.jwtToken = this.cookieService.get('jwtToken');   
  });

  
}

  ngOnInit() {
  }

}

