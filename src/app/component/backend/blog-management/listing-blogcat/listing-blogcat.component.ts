import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../api.service';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-listing-blogcat',
  templateUrl: './listing-blogcat.component.html',
  styleUrls: ['./listing-blogcat.component.css']
})
export class ListingBlogcatComponent implements OnInit {

  //Listing for blog category
  public blogListConfig: any = {
    apiBaseUrl:this.apiService.serverUrl,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "blog_category",
    updateurl: "addorupdatedata",
    editUrl: "blog-category/edit/",
    jwtToken: "this.cookieService.get('jwtToken')",
    deleteEndPoint: "deletesingledata",
    addLink: "blog-category/add",
    view: "blog_category_view"

  }
  

  // public blogCatList: any;

  constructor(private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiService: ApiService, private readonly meta: MetaService) {
    this.meta.setTitle('Arniefonseca - Blog Management');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Blog Management');
    this.meta.setTag('twitter:title', 'Arniefonseca - Blog Management');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    
    
    let data: any = {
      source:"blog_category",
      endpoint: "datalist"
    }
    this.apiService.getDatalist(data).subscribe((result: any)=>{
      console.log(result.res);
      this.blogListConfig.datasource = result.res;
      this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');
    });
  
  }

  ngOnInit() {
   
    this.activatedRoute.data.forEach((data: any) => {
      this.blogListConfig.datasource = data.blogCatList.res;
      //  console.log('>>>>>koushikcat>>>>>>>>>',this.blogCatList)
    })
   
    
  }
}
