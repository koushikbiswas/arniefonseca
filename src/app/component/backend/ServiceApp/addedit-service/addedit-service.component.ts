import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../api.service';
import {environment} from '../../../../../environments/environment.dev'

import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-addedit-service',
  templateUrl: './addedit-service.component.html',
  styleUrls: ['./addedit-service.component.css']
})
export class AddeditServiceComponent implements OnInit {
  public configAddEdit: any = {
    action: "add",
    // endpoint: "https://9v41bpikik.execute-api.us-east-1.amazonaws.com/production/api/addorupdatedata",
    endpoint: environment.API_URL+'addorupdatedata',
  
    source: "service",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "service/list",
    userData: { id: "18801017007", name: "Admin" },
  }
  public configImgUploadData: any = {
    baseUrl: "https://fileupload.influxhostserver.com/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png"], // use all small font
    type: "service-image",
    path: "services",
    prefix: "service-image_"
  }

  public configIconUploadData: any = {
    baseUrl: "https://fileupload.influxhostserver.com/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png"], // use all small font
    type: "additional-image",
    path: "services",
    prefix: "additional-image_"
  }


  constructor(private router : Router , private activatedRoute : ActivatedRoute ,private cookieService : CookieService, public ApiService: ApiService, private readonly meta: MetaService) {
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
    
   }

 
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params._id) {
        this.activatedRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.serviceData.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }

}


