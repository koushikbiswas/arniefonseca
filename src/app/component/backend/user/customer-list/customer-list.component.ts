import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { ApiService } from '../../../../api.service';
import { MetaService } from '@ngx-meta/core';
import { CookieService } from 'ngx-cookie-service';
import {environment } from '../../../../../environments/environment.prod';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public user_details:any;
  public affilateDataList:any[];
  public baseUrl: any = environment["API_URL"];

  public base_file_url:any=environment['file_url']

//------------------------------Declaration--------------------------------------
public affilateDataList_skip: any = ["_id","profile_picture","description_html","description","created_at","image","booking","bookingLink","date_unix","date"];
 public detail_skip_array:any=["_id","date_unix"]
 public affilateDataList_modify_header: any = {"status":"Status","event date":"Date","timeZone":"Time Zone"};
 public tableName: any = 'users';
 public UpdateEndpoint: any = "addorupdatedata";
 public deleteEndpoint: any = "deletesingledata";
 public searchingEndpoint: any = "datalist";
 public editUrl: any = '/customer/edit/';  
public user_cookie:any=this.cookieService.get('jwtToken');
public apiUrl: any = this.baseUrl;
public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
public view:any="users_view";
// public date_search_source:any="events_view";
public date_search_endpoint:any="datalist";
 public search_settings: any = {
    //  selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
    //  datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date", submit:"Search By Date",  field:"date_unix"}],   // this is use for  date search 

   };
  constructor(private readonly meta: MetaService, private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService,public apiService: ApiService) {

    this.meta.setTitle('Arniefonseca - Commission List');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Commission List');
    this.meta.setTag('twitter:title', 'Arniefonseca - Commission List');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');

    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {      
      this.user_details = JSON.parse(this.cookieService.get('user_details'));
    }

  }

  ngOnInit() {
    this.activatedRoute.data.forEach((resolveData)=>{
      this.affilateDataList=resolveData.affiliateList.res;
      // console.log('>>>>>>>>>>>>>',this.affilateDataList)
    })
  }

}
