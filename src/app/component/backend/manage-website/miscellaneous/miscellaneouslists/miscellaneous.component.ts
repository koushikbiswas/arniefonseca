import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../../api.service';
import { environment } from '../../../../../../environments/environment';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.css']
})
export class MiscellaneousComponent implements OnInit {


  public user_details:any; 
  public contactUsData: any;  public user_cookie: any;
  contactUsData_skip: any = ["_id", "created_at"];
  detail_skip_array: any = ["_id"]
  contactUsData_modify_header: any = {
    "locationname": "Name"
  };
  tableName: any = 'contactusForm';
  UpdateEndpoint: any = "addorupdatedata";
  deleteEndpoint: any = "deletesingledata";
  view: any = "contactusForm";

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiservice: ApiService, private readonly meta: MetaService) { 
    this.meta.setTitle('Arniefonseca - Miscellaneous');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca -  Miscellaneous');
    this.meta.setTag('twitter:title', 'Arniefonseca -  Miscellaneous');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');

    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {      
      this.user_details = JSON.parse(this.cookieService.get('user_details'));
    }

  }

  ngOnInit() {

  }

}
