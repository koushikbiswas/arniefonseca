import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import { MatAccordion,MatDialog,MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';

import { MetaService } from '@ngx-meta/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

export interface DialogData {
  data: any;  
} 

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {

  public blogDetail:any;
  public blog:any = '';
  public blogList:any;
  public blog_img:any
  public blog_image:any;

  public blogcategorysearch:any;
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

  ngOnInit() {

    //**all blog category and blog list from resolve in routing**//
// ************* blog details *****************//
      
      this.activatedRoute.data.forEach((data: any) => {
        this.blog = data.blogCatList.res;
        //console.log('>>>>>>>kb>>>>>>>',this.blog)  
        this.blog_img=this.blog[0].blogs_image[0].basepath+this.blog[0].blogs_image[0].image;
        
      })
 
  }

  openvideourl(val: any){
    //console.log(val)
    let url:any;
     url="https://www.youtube.com/embed/";
      //console.log('video url....>',url+val);
      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(url + val);
      
      //console.log('>>>>>>>>>>>>>>>>>>',this.safeSrc)
      const dialogRef = this.dialog.open(VideoModalComponent, {
        // panelClass:['modal-md','success-modal'],
       
        width:'450px',
        data:this.safeSrc,
      
        
  
      });
  
      dialogRef.afterClosed().subscribe(result => {
        
      });

  }

}

@Component({
  selector:'app-videomodal',
  templateUrl:'./videomodal.html'
})
export class VideoModalComponent {
  constructor( public dialogRef: MatDialogRef<VideoModalComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData){
  }
}