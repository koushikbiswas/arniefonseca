import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../../api.service';

import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-listing-testimonial',
  templateUrl: './listing-testimonial.component.html',
  styleUrls: ['./listing-testimonial.component.css']
})
export class ListingTestimonialComponent implements OnInit {

  public user_details: any;
  public libtestimonial:any=[];
  /************** lib list setup start here *************/
  // public testimonialListConfig:any = {
  //   // apiBaseUrl: "https://9v41bpikik.execute-api.us-east-1.amazonaws.com/production/api/",
  //   endpoint: this.ApiService.serverUrl,
  //   listEndPoint: "datalist",
  //   datasource: "",
  //   tableName: "testimonial",
  //   updateurl: "addorupdatedata",
  //   editUrl: "testimonial/edit",
  //   jwtToken: "",
  //   deleteEndPoint: "deletesingledata",
  //   addLink: "/testimonial/add",
  //   view: "testimonial_view"
  // }
  public bloglist:any;


  //Blogs Lib List
  
// ===============================Declarations for blog listing=========================
public libtestimonial_skip: any = ["_id","description","created_at","priority","video_url","video_desc","testimonial_img","testimonial_audio"];
public detail_skip_array:any=["_id"]
public libtestimonial_modify_header: any = {"status":"Status","description html":"Description",};
public tableName: any = 'testimonial';
public UpdateEndpoint: any = "addorupdatedata";
public deleteEndpoint: any = "deletesingledata";
public searchingEndpoint: any = "datalist";
public editUrl: any = 'testimonial/edit';
public user_cookie:any=this.cookieService.get('jwtToken');
public apiUrl: any = "https://9v41bpikik.execute-api.us-east-1.amazonaws.com/dev/api/";
public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' },{ val: 3, 'name': 'Pending' }];
public view:any="testimonial_view";
public image_detail_datatype:any='';
public date_search_source:any="testimonial_view";
public date_search_endpoint:any="datalist";
public search_settings: any = {
    selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
    textsearch: [{ label: "Search by Name", field: 'name' },{ label: "Search by Email", field: 'email' }],
    // datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date", submit:"Search By Date",  field:"created_at"}],   // this is use for  date search 

  };
// ===============================
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public ApiService: ApiService, private readonly meta: MetaService) { 

    this.meta.setTitle('Arniefonseca - Testimonial');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca -  Testimonial');
    this.meta.setTag('twitter:title', 'Arniefonseca -  Testimonial');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');

    //console.log('---------------kbtest serverUrl-------------', this.ApiService.serverUrl);
  this.activatedRoute.data.subscribe(resolveData => {
    console.warn(resolveData);
    // this.testimonialListConfig.datasource = resolveData.testimonialList.res;
    this.libtestimonial=resolveData.testimonialList.res;
    //  console.log('---------------kbtest testimonialList-------------', this.testimonialListConfig.datasource );
    // this.testimonialListConfig.jwtToken = this.cookieService.get('jwtToken');


    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {      
      this.user_details = JSON.parse(this.cookieService.get('user_details'));
    }
    
  });

 

}

  ngOnInit() {
  }

}
