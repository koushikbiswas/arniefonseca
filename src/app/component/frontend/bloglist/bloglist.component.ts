import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import { MatAccordion, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';
import { MetaService } from '@ngx-meta/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

export interface DialogData {data: any;} 

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  
  
  public blogList: any;
  public blogcategory:any;
  public blogcount:any;
  public blogcategorysearch:any;
  public blogcategorycount:any;
  public blogcat:any;
  public blogsubcategorycount:any;
  public count:any=0;
  public indexval:any=4;
  public bloglisting:any;
  public videourl:any='';
  public url:"https://www.youtube.com/embed/"
  
  safeSrc: SafeResourceUrl;


  @ViewChild('myaccordion') myPanels: MatAccordion;

  openAll(){
    this.myPanels.openAll();
  }
  closeAll(){
    this.myPanels.closeAll();
  }


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

//    panelOpenState = false;

 
//   //***********blog list view in blog detail************//
//   blogdetail(val:any){
//     console.log(val)
//     this.router.navigateByUrl('/blogdetail/' +val)
//   }


//   ngOnInit() {
// //**all blog category and blog list from resolve in routing**//

//   this.activatedRoute.data.forEach((data: any) => {
//     this.blogList = data;
//   //console.log('>>>>>>>kb>>>>>>>',this.blogList)

//   //****total blog list****//
//   this.bloglisting = this.blogList.blogCatList.blogs
//  console.log('---------------',this.bloglisting)


//   /**api service for total blog_catagory */
   
//   this.blogcategory =this.blogList.blogCatList.blog_category;
//   console.log('+++++++blogcategory+++++++++++',this.blogcategory)


//   /**api service for blog_catagory total count */

//    this.blogcategorycount = this.blogList.blogCatList.blog_category.length;
//    // console.log('>>>>>>>>>>>>>>>>>',this.blogcategorycount)

// })

// }

panelOpenState = false;

//***********blog list view in blog detail************//
  blogdetail(val:any){
    // console.log(val)
    this.router.navigateByUrl('/blogdetail/' +val)
  }
  

  ngOnInit() {

    //**all blog category and blog list from resolve in routing**//

    this.activatedRoute.data.forEach((data: any) => {
      this.blogList = data;
      //  console.log('>>>>>>>>>>>>>>',this.blogList)

    })
    
   //****total blog list****//
          this.bloglisting = this.blogList.blogCatList.blogs
          // console.log('---------------',this.bloglisting)
          


    /**api service for total blog_catagory by uttam */
   
          this.blogcategory =this.blogList.blogCatList.blog_category;
          // console.log('++++++++++++++++++',this.blogcategory)

    /**api service for blog_catagory total count by uttam */  
          this.blogcategorycount = this.blogList.blogCatList.blog_category.length;
          // console.log('>>>>>>>>>>>>>>>>>',this.blogcategorycount)
}

  /** end api service for blog_catagory total count by uttam */

    //*********view Video modal section***********//

    openvideourl(val:any){

     let url:any;
     url="https://www.youtube.com/embed/";
      // console.log('video url....>',url+val);
      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(url + val);
      
      // console.log('>>>>>>>>>>>>>>>>>>',this.safeSrc)
      const dialogRef = this.dialog.open(CommonVideoModalComponent, {
        panelClass:['modal-md','success-modal'],       
        width:'450px',
        data:this.safeSrc, 
      });
      dialogRef.afterClosed().subscribe(result => {  
      });
    }

//********* end Video modal section***********//

//*********** sub blog list view in blog detail************//
    blog(val:any){
      this.blogcat = val._id;
      // this.router.navigateByUrl('/blogdetail/'+val._id)
    }

//*********** end sub blog list view in blog detail************//


//***********load more view blog *************//
    blogloadmore(){
      // console.log('load more')
      this.indexval=this.indexval+2;
 
    }

    //**blog view from blog category list**//
    openblog(val:any){
      console.log(val)
    }
}

//**********video modal component************//
@Component({
  selector:'app-commonvideomodal',
  templateUrl:'./commonvideomodal.html'
})
export class CommonVideoModalComponent {
  constructor( public dialogRef: MatDialogRef<CommonVideoModalComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData){
  }
}

