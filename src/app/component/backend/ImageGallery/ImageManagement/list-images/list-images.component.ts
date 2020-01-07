import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../../api.service';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {
  public imageGalleryallData: any = [];
  // public serverUrl: any = "https://9v41bpikik.execute-api.us-east-1.amazonaws.com/dev/api/";
  public serverUrl: any = this.apiService.serverUrl;
  public updatedEndpoint: any = "addorupdatedata";
  public SourceName: any = "imageGallery_management";
  public DeleteEndpoint: any = "deletesingledata";
  public EditRoute: any = "image-gallery/edit";
  public addButtonRoute: any = "image-gallery/add";
  public searchEndpoint: any = "datalist";
  public searchSourcename: any = "imageGallery_management_view";
  public token = this.cookies.get('jwtToken');
  
  constructor(public activatedRoute: ActivatedRoute, public cookies: CookieService,public apiService:ApiService) { }

  ngOnInit() {
    this.activatedRoute.data.forEach(data => {
      let result: any;
      result = data.ImageData.res;
      this.imageGalleryallData = result;
    })
  }

}
