import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../api.service';

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
  constructor(public activatedRoute: ActivatedRoute, public cookies :CookieService,public apiService : ApiService, private readonly meta: MetaService) {

    this.meta.setTitle('Arniefonseca - Videos');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca -   Videos');
    this.meta.setTag('twitter:title', 'Arniefonseca -   Videos');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');

   }

  ngOnInit() {
    this.activatedRoute.data.forEach(data => {
      let result: any;
      result = data.videoData.res;
      this.videoList = result;
      console.log("video dataaaa",this.videoList);
      
    })

  }

}
