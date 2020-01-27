import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../../api.service';

import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-listing-category',
  templateUrl: './listing-category.component.html',
  styleUrls: ['./listing-category.component.css']
})
export class ListingCategoryComponent implements OnInit {
  public imageGalleryList: any = [];
  // public serverUrl:any="https://9v41bpikik.execute-api.us-east-1.amazonaws.com/dev/api/";
  public serverUrl: any = this.apiService.serverUrl;
  public updatedEndpoint:any="addorupdatedata";
  public SourceName:any="imageGallery_category";
  public DeleteEndpoint:any="deletesingledata";
  public EditRoute:any="image-gallery/category-management/edit";
  public addButtonRoute:any="image-gallery/category-management/add";
  public manageImageButtonRoute:any="image-gallery/list";
  public searchEndpoint:any="datalist";
  public searchSourcename:any="imageGallery_category_view";
  public token=this.cookies.get('jwtToken');

  constructor(public activatedRoute : ActivatedRoute,public cookies :CookieService,public apiService:ApiService,  private readonly meta: MetaService) { 

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
    this.activatedRoute.data.forEach(data => {
      let result: any;
      result = data.ImageData.res;
      this.imageGalleryList = result;
    })

  }

}
