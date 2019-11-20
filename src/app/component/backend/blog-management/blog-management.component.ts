
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-blog-management',
  templateUrl: './blog-management.component.html',
  styleUrls: ['./blog-management.component.css']
})
export class BlogManagementComponent implements OnInit {

  //Blogs Lib List
  public blogListConfig: any = {
    apiBaseUrl: this.apiService.serverUrlDemo,
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
    apiBaseUrl:this.apiService.serverUrlDemo,
    listEndPoint: "datalist",
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

  constructor(private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiService: ApiService) {

    let data: any = {
      source:"blog_category",
      endpoint: "datalist",
      token: this.cookieService.get('jwtToken')
    }
    this.apiService.getDatalist(data).subscribe((result: any)=>{
      //console.log(result.res);
      this.blogCatConfig.datasource = result.res;
      //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogCatConfig.datasource);
    });

   }

  ngOnInit() {

     this.activatedRoute.data.forEach((data: any) => {
      //console.log('>>>>>>>koushik>>>>>>>',data)
      // this.blogsList = data.blogCatList.res;
      this.blogListConfig.datasource = data.blogsList.res;
    })

  }


}
