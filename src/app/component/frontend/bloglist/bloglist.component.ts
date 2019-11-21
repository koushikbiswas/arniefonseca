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

  
  public indexval:any=4;
  public blogList: any;  
  public bloglisting:any;

  public blogcategory:any;
  public blogcategorycount:any;
  public blogcat:any;


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

 
  //***********blog list view in blog detail************//
  blogdetail(val:any){
    console.log(val)
    this.router.navigateByUrl('/blogdetail/' +val)
  }


  ngOnInit() {
//**all blog category and blog list from resolve in routing**//

  this.activatedRoute.data.forEach((data: any) => {
    this.blogList = data;
  //console.log('>>>>>>>kb>>>>>>>',this.blogList)

  //****total blog list****//
  this.bloglisting = this.blogList.blogCatList.blogs
 console.log('---------------',this.bloglisting)


  /**api service for total blog_catagory */
   
  this.blogcategory =this.blogList.blogCatList.blog_category;
  console.log('+++++++blogcategory+++++++++++',this.blogcategory)


  /**api service for blog_catagory total count */

   this.blogcategorycount = this.blogList.blogCatList.blog_category.length;
   // console.log('>>>>>>>>>>>>>>>>>',this.blogcategorycount)

})

}

}

