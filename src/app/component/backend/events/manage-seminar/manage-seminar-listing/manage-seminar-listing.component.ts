import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import {environment } from '../../../../../../environments/environment.prod';


@Component({
  selector: 'app-manage-seminar-listing',
  templateUrl: './manage-seminar-listing.component.html',
  styleUrls: ['./manage-seminar-listing.component.css']
})
export class ManageSeminarListingComponent implements OnInit {
  public eventDataList:any[];
  public baseUrl: any = environment["API_URL"];



  // ===============================Declarations=========================
 public eventDataList_skip: any = ["_id","description_html","description","created_at","image"];
 public detail_skip_array:any=["_id"]
 public eventDataList_modify_header: any = {"status":"Status"};
 public tableName: any = 'event';
 public UpdateEndpoint: any = "addorupdatedata";
 public deleteEndpoint: any = "deletesingledata";
 public searchingEndpoint: any = "datalist";
 public editUrl: any = '/add-edit-manage-seminar';
public user_cookie:any=this.cookieService.get('jwtToken');
public apiUrl: any = this.baseUrl;
public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
public view:any="event";
 public search_settings: any = {
     selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
     textsearch: [{ label: '', field: '' }]
   };
 // ====================================================================
   /*Showing Image in the Modal*/
   image_detail_datatype:any = [{
     key: "image",
     value: 'image',
     fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/files/'      // Image path 
   }]




  constructor(public http: HttpService, public cookieService: CookieService,
    public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.data.forEach((resolveData)=>{
      this.eventDataList=resolveData.eventList.res;
      console.log('>>>>>>>>>>>>>',this.eventDataList)
    })
  }

}
