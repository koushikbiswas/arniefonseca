import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../../api.service';
import { environment } from '../../../../../../environments/environment';

import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-add-edit-newsletter',
  templateUrl: './add-edit-newsletter.component.html',
  styleUrls: ['./add-edit-newsletter.component.css']
  
})
export class AddEditNewsletterComponent implements OnInit {

  public user_details:any;
  
  public configAddEdit: any = {
    action: "add",
   
     endpoint: environment.API_URL+'/addorupdatedata',
     endpoint2: environment.API_URL,
    // endpoint: environment.API_URL+'addorupdatedata',
   // endpoint: this.apiservice.serverUrl + 'addorupdatedata',
    source: "newsletters",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "newsletter-list",
    userData: { id: "18801017007", name: "Admin" },
    defaultDataAlways: null,
    group_table:'news_category',
    sender_table:'senders'

  
    
  }  
  
  constructor(public cookieService: CookieService, private activatedRoute: ActivatedRoute, public apiservice: ApiService, private readonly meta: MetaService ) {
    console.log('data',this.configAddEdit.endpoint );

    this.meta.setTitle('Arniefonseca - Newsletter');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca -  Newsletter');
    this.meta.setTag('twitter:title', 'Arniefonseca -  Newsletter');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');

    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {      
      this.user_details = JSON.parse(this.cookieService.get('user_details'));
    }


  }



  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params._id) {
        this.activatedRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.newsLetterAdd.res;

          console.log( this.configAddEdit.defaultData );
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };

        });
      }
    });
  }

}


