import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
// import { environment } from '../../../../../environments/environment';
import { ApiService } from '../../../../api.service';

import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-add-edit-subscriber-group',
  templateUrl: './add-edit-subscriber-group.component.html',
  styleUrls: ['./add-edit-subscriber-group.component.css']
})
export class AddEditSubscriberGroupComponent implements OnInit {

  // public configAddEdit: any = {
  //   action: "add",
   
  //   //endpoint: "https://9v41bpikik.execute-api.us-east-1.amazonaws.com/dev/api/addorupdatedata",
  //   //  endpoint2: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
  //   // endpoint: environment.API_URL + 'addorupdatedata',
  //    endpoint: this.apiservice.serverUrl + 'addorupdatedata',
  //   source: "subscriptiongroupadd",
  //   condition: {},
  //   defaultData: null,
  //   jwtToken: this.cookieService.get('jwtToken'),
  //   callBack: "subscriber-group/list",
  //   userData: { id: "18801017007", name: "Admin" },
  //   defaultDataAlways: null,
  //   group_table:'subscriptiongroupadd',
  //   sender_table:'senders'

  
    
  // }  


  public configAddEdit: any = {
    action: "add",
    endpoint: this.apiservice.serverUrl + 'addorupdatedata',
    source: "news_category",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "/newsletter-list",
    userData: { id: "18801017007", name: "Admin" },
    defaultDataAlways: null
  }


  constructor( private cookieService : CookieService, private activatedRoute : ActivatedRoute, public apiservice: ApiService, private readonly meta: MetaService ) {

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

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params._id) {
        this.activatedRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.subscriptiongroupData.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }

}



