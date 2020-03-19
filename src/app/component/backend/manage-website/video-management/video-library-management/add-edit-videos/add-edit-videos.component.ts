import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../../../api.service';
import { CookieService } from 'ngx-cookie-service';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-add-edit-videos',
  templateUrl: './add-edit-videos.component.html',
  styleUrls: ['./add-edit-videos.component.css']
})
export class AddEditVideosComponent implements OnInit {
  // public serverUrl: any = "https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/";
  public serverUrl: any = this.apiService.serverUrl;
  public addUpdateEndpoint: any = "addorupdatedata";
  public getDataEndpoint:any="datalist";
  public listingRoute: any = "video-category/list";
  public sourceName:any ="video_management";
  public categorySourceName = "video_category";
  public SingleVideoData: any = [];
  public user_details:any;
  
  constructor(private router : Router, public activeRoute: ActivatedRoute,public apiService : ApiService, public cookies :CookieService, private readonly meta: MetaService) { 


    this.meta.setTitle('Arniefonseca - User Management');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca -   User Management');
    this.meta.setTag('twitter:title', 'Arniefonseca -   User Management');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');


    if (this.cookies.get('user_details') != undefined && this.cookies.get('user_details') != null && this.cookies.get('user_details') != '') {      
      this.user_details = JSON.parse(this.cookies.get('user_details'));
    }


  }

  ngOnInit() {
    if (this.activeRoute.snapshot.params._id) {
      this.activeRoute.data.forEach(data => {
        let result: any;
        result = data.videodata.res;
        this.SingleVideoData = result;
      })
    }
  }

}
