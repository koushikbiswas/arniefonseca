import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../../../api.service';

@Component({
  selector: 'app-addedit-image',
  templateUrl: './addedit-image.component.html',
  styleUrls: ['./addedit-image.component.css']
})
export class AddeditImageComponent implements OnInit {
  
  public user_details: any;

  // public serverUrl:any="https://9v41bpikik.execute-api.us-east-1.amazonaws.com/dev/api/";
  public serverUrl: any = this.apiService.serverUrl;
  public sourceName : any = "imageGallery_management";
  public imageCategorySourceName:any="imageGallery_category";
  public getDataEndpoint:any="datalist";
  public addEndpoint:any="addorupdatedata";
  public imageListingUrl:any="image-gallery/category-management/list";
  public editedData:any=[];

  public configData: any = {
    baseUrl: "https://fileupload.influxhostserver.com/",
    endpoint: "uploads",
    size: "51200", // kb
    format:["jpg", "jpeg", "png", "bmp"],  // use all small font
    type: "imageGallery-picture",
    path: "imageGallery",
    prefix: "imageGallery-picture_",
    formSubmit: false,
    conversionNeeded: 0,
    aspectratio: [467/638,467/467],
    bucketName: "image-gallery-bucket"
  }

  constructor(public router:Router, public activeRoute :ActivatedRoute, public apiService : ApiService,private cookieService : CookieService) { 
    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {      
      this.user_details = JSON.parse(this.cookieService.get('user_details'));
    }
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
