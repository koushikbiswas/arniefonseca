import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../../../api.service';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-listing-category',
  templateUrl: './listing-category.component.html',
  styleUrls: ['./listing-category.component.css']
})


export class ListingCategoryComponent implements OnInit {
  public user_details:any;
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
  public token=this.cookieService.get('jwtToken');



  public AddImageButtonRoute:any='image-gallery/add';
  public TableNameForImage:any='imageGallery_management';
  public DataListForImage:any;
  public TokenForImage:any=this.cookieService.get('jwtToken');
  public imageServerUrlData:any=this.apiService.serverUrl;
  public imageDeleteendpoint:any='deletesingledata';
  public imageEditRoute:any='image-gallery/edit';
  public imageAddupdateRouteUrl:any='addorupdatedata';
  public imageSearchSourceval:any='imageGallery_management_view';
  public imageSearchEndpoint:any=this.apiService.serverUrl;



  constructor(public activatedRoute : ActivatedRoute, public apiService:ApiService,  private readonly meta: MetaService, private cookieService: CookieService) { 

    this.meta.setTitle('Arniefonseca - Image Gallery');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Image Gallery');
    this.meta.setTag('twitter:title', 'Arniefonseca - Image Gallery');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');

    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {      
      this.user_details = JSON.parse(this.cookieService.get('user_details'));
    }

  }

  ngOnInit() {
    this.activatedRoute.data.forEach(data => {
      let result: any;
      result = data.ImageData.res;
      this.imageGalleryList = result;
    })




    let data:any;
    data={
      "source":"imageGallery_management_view"
    }
    this.apiService.CustomRequest(data,'datalist').subscribe(res=>{
      // console.log(res)
      let result:any;
      result=res;
      this.DataListForImage=result.res;
      console.log(  this.DataListForImage)

    })

  }

}
