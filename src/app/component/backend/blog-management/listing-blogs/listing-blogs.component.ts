import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../api.service';
@Component({
  selector: 'app-listing-blogs',
  templateUrl: './listing-blogs.component.html',
  styleUrls: ['./listing-blogs.component.css']
})
export class ListingBlogsComponent implements OnInit {

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

    // public blogsList: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService,public apiService: ApiService) {
    let data: any = {
      source:"blogs_view",
      endpoint: "datalist"
    }
    this.apiService.getDatalist(data).subscribe((result: any)=>{
      console.log(result.res);
      this.blogListConfig.datasource = result.res;
      this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');
    });
  }

  ngOnInit() {

    // this.activatedRoute.data.forEach((data: any) => {
    //   console.log('>>>>>>>koushik>>>>>>>',data)
    //   // this.blogsList = data.blogCatList.res;
    //   this.blogListConfig.datasource = data.blogsList.res;
    // })

  }

}
