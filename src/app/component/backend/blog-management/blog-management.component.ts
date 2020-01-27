
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../api.service';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-blog-management',
  templateUrl: './blog-management.component.html',
  styleUrls: ['./blog-management.component.css']
})
export class BlogManagementComponent implements OnInit {

  //Blogs Lib List
  public blogListConfig: any = {
    apiBaseUrl: this.apiService.serverUrl,
    listEndPoint: "datalist",
    datasource: [],
    tableName: "blogs",
    updateurl: "addorupdatedata",
    editUrl: "blogs/edit",
    jwtToken: this.cookieService.get('jwtToken'),
    deleteEndPoint: "deletesingledata",
    addLink: "blogs/add",
    view: "blogs_view"
  }



  //Listing for blog category
  public blogCatConfig: any = {
    apiBaseUrl:this.apiService.serverUrl,
    listEndPoint: "datalistwithouttoken",
    datasource: [],
    tableName: "blog_category",
    updateurl: "addorupdatedata",
    editUrl: "blog-category/edit/",
    jwtToken: this.cookieService.get('jwtToken'),
    deleteEndPoint: "deletesingledata",
    addLink: "blog-category/add",
    view: "blog_category_view"    
  }





  public blogsList: any;

  constructor(private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiService: ApiService, private readonly meta: MetaService,) {

    let data: any = {
      source:"blog_category_view",
      endpoint: "datalistwithouttoken"
      // token: this.cookieService.get('jwtToken')

    }
    this.apiService.getDatalist(data).subscribe((result: any)=>{
      // console.log(result.res);
      this.blogCatConfig.datasource = result.res;
      //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogCatConfig.datasource);
    });



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

     this.activatedRoute.data.forEach((data: any) => {
      //console.log('>>>>>>>koushik>>>>>>>',data)
      // this.blogsList = data.blogCatList.res;
      this.blogListConfig.datasource = data.blogsList.res;
    })

  }


}
