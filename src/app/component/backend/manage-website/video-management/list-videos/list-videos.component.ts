import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../../api.service';

import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.css']
})
export class ListVideosComponent implements OnInit {
  

  
  public videoList: any = [];
  // public serverUrl:any = "https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/";
  public serverUrl: any = this.apiService.serverUrl;
  public token:any=this.cookies.get('jwtToken');
  public updatedEndpoint:any="addorupdatedata";
  public SourceName:any="video_category";
  public deleteEndpoint:any="deletesingledata";
  public EditRoute:any="video-category/edit/";
  public addButtonRoute:any="video-category/add";
  public videoManagementRoute:any="video-library-management/list";
  public searchEndpoint:any="datalist";
  public searchSourcename:any="video_category_view";
  public user_details:any;




  public AddVideoButtonRoute: any = 'video-library-management/add';
  public SearchEndpointForVideo: any = 'datalist';
  public SearchSourceNameForVideo: any = 'video_management_view';
  public listingForVideo: any = [];
  public editRouteForVideo: any = 'video-library-management/edit';
  public serverUrlForVideo: any = this.apiService.serverUrl;
  public TokenForVideo: any = this.cookies.get('jwtToken');
  public updatedEndpointForVideo: any = 'addorupdatedata';
  public TableNameForVideo: any = 'video_management';
  public DeleteEndpointForVideo: any = 'deletesingledata';



  
  constructor(public activatedRoute: ActivatedRoute, public cookies :CookieService,public apiService : ApiService, private readonly meta: MetaService) {

    this.meta.setTitle('Arniefonseca - Videos');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca -   Videos');
    this.meta.setTag('twitter:title', 'Arniefonseca -   Videos');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');


    if (this.cookies.get('user_details') != undefined && this.cookies.get('user_details') != null && this.cookies.get('user_details') != '') {      
      this.user_details = JSON.parse(this.cookies.get('user_details'));
      // console.log("video dataaaa",this.user_details);

    }


   }

  ngOnInit() {
    this.activatedRoute.data.forEach(data => {
      let result: any;
      result = data.videoData.res;
      this.videoList = result;
      console.log("video dataaaa",this.videoList);
      
    })



    //for video

    let data: any;
    data = {
      "source": "video_management_view"
    }
    this.apiService.CustomRequest(data, 'datalist').subscribe(res => {
      // console.log(res);
      let result: any;
      result = res;
      this.listingForVideo = result.res;
    })



  }

}
