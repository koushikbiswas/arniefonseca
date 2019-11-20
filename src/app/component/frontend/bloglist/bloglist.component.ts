import { Component, OnInit, ViewChild} from '@angular/core';
import { MatAccordion,MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';

import { MetaService } from '@ngx-meta/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
 
  //Blogs Lib List
  public blogListConfig: any = {
    apiBaseUrl: this.apiService.serverUrlDemo,
    listEndPoint: "datalist",
    datasource: [],
    tableName: "blogs",
    updateurl: "addorupdatedata",
    editUrl: "blog-management/edit",
    jwtToken: this.cookieService.get('jwtToken'),
    deleteEndPoint: "deletesingledata",
    addLink: "/blog-management/add",
    view: "blogs"
  }

  
  public indexval:any=4;
  public blogList: any;  
  public bloglisting:any;


  @ViewChild('myaccordion') myPanels: MatAccordion;

  openAll(){
    this.myPanels.openAll();
  }
  closeAll(){
    this.myPanels.closeAll();
  }

  safeSrc: SafeResourceUrl;

  constructor(private readonly meta: MetaService, private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiService: ApiService,private sanitizer: DomSanitizer,public dialog:MatDialog) {
    this.meta.setTitle('Arniefonseca - Blog');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Blog');
    this.meta.setTag('twitter:title', 'Arniefonseca - Blog');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo.png');
   }

   panelOpenState = false;

 
  ngOnInit() {
//**all blog category and blog list from resolve in routing**//

  this.activatedRoute.data.forEach((data: any) => {
  this.blogList = data.serviceListData.res;
  //console.log('>>>>>>>>>>>>>>',this.blogList)

})

// ****total blog list****//
//this.bloglisting = this.blogList.blogCatList.blogs
//console.log('++++++++++++++++', this.bloglisting);

}






}

