import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../api.service';

import { MetaService } from '@ngx-meta/core';


@Component({
  selector: 'app-video-category-management',
  templateUrl: './video-category-management.component.html',
  styleUrls: ['./video-category-management.component.css']
})
export class VideoCategoryManagementComponent implements OnInit {
// public serverUrl:any="https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/";
public serverUrl: any = this.apiService.serverUrl;
public getDataEndpoint:any="datalist";
public addEndpoint:any="addorupdatedata";
public listUrl:any="video-category/list";
public sourceName:any="video_category";
public dataList:any=[];
public editedData:any=[];
  constructor(public activeRoute:ActivatedRoute,public apiService : ApiService, private readonly meta: MetaService) {

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
    if(this.activeRoute.snapshot.params._id){
      this.activeRoute.data.forEach(data=>{
        let result:any;
        result=data.videoData.res;
        this.editedData=result;
        console.log("okk",this.editedData);
      })
    }
      

    


  }

}
