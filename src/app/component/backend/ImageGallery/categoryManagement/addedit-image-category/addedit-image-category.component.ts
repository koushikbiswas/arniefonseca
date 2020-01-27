import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../../api.service';

import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-addedit-image-category',
  templateUrl: './addedit-image-category.component.html',
  styleUrls: ['./addedit-image-category.component.css']
})
export class AddeditImageCategoryComponent implements OnInit {
  // public serverUrl:any="https://9v41bpikik.execute-api.us-east-1.amazonaws.com/dev/api/";
  public serverUrl: any = this.apiService.serverUrl;
  public getDataEndpoint:any="datalist";
  public addEndpoint:any="addorupdatedata";
  public listUrl:any="image-gallery/category-management/list";
  public sourceName:any="imageGallery_category";
  public dataList:any=[];
  public editedData:any=[];
  constructor(public activeRoute :ActivatedRoute,public apiService : ApiService,  private readonly meta: MetaService) { 
    console.log("server url",this.serverUrl);
    
    this.meta.setTitle('Arniefonseca - Image Gallery');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Image Gallery');
    this.meta.setTag('twitter:title', 'Arniefonseca - Image Gallery');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');
  }

  ngOnInit() {
    if(this.activeRoute.snapshot.params._id){
      this.activeRoute.data.forEach(data=>{
        let result:any;
        result=data.ImageData.res;
        this.editedData=result;
      })
    }
  }

}
