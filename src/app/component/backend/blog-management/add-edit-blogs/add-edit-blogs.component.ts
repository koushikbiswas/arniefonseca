import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../api.service';
import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-add-edit-blogs',
  templateUrl: './add-edit-blogs.component.html',
  styleUrls: ['./add-edit-blogs.component.css']
})
export class AddEditBlogsComponent implements OnInit {


  server: any =this.apiService.serverUrl;
  addUrl: any = 'addorupdatedata';
  getDataUrl: any= 'datalist';
  public editdata: any = [];
  action:any="add";
  listURL:any="blog-management";


  public configData: any = {
    baseUrl: "http://3.15.236.141:5005/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png"], // use all small font
    type: "blogs-image",
    path: "blogs",
    prefix: "blogs-image_"
  }

  public configFileData: any = {
    baseUrl: "http://3.15.236.141:5005/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["pdf", "doc", "docx","docxx"], // use all small font
    type: "blogs-file",
    path: "blogs",
    prefix: "blogs-file"
  }
  constructor(private cookieService: CookieService, public router:Router, public activatedRoute: ActivatedRoute,public apiService: ApiService, private readonly meta: MetaService, ) { 


    this.meta.setTitle('Arniefonseca - BLOG MANAGEMENT');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - BLOG MANAGEMENT');
    this.meta.setTag('twitter:title', 'Arniefonseca - BLOG MANAGEMENT');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      if (params._id) {
        this.activatedRoute.data.subscribe(resolveData => {         
          this.editdata= resolveData.blogsData.res[0];  
          this.action="edit";    
        });
      }
    });
  }

}
