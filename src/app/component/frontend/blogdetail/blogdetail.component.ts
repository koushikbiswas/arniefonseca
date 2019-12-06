import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import { MatAccordion,MatDialog,MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../api.service';

import { MetaService } from '@ngx-meta/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { NestedTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, observable, of as observableOf } from 'rxjs';
import { MatTreeNestedDataSource } from '@angular/material/tree';


export interface DialogData {
  data: any;  
} 

export class FileNode{
  children: FileNode[];
  filename: string;
  type:any;
}

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {


  public nestedTreeControl: NestedTreeControl<FileNode>;
  public blogCategoryDataSource:MatTreeNestedDataSource<FileNode>;
  public dataChange:BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);




  public blogCategory:any;
  public blogDetail:any;
  public blog:any = '';
  public blogList:any;
  public blog_img:any;
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

  copyText(val:any){
    console.log('copyText');
  }

  constructor(private readonly meta: MetaService, private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiService: ApiService,private sanitizer: DomSanitizer,public dialog:MatDialog) { 
    
    this.meta.setTitle('Arnie Fonseca - Blogs');
    this.meta.setTag('og:description', 'Check out the latest blogs by “Coach Arnie” about everything that is happening in the Personal Development industry and learn of the best ways to improve your lives and achieve success.');
    this.meta.setTag('twitter:description', 'Check out the latest blogs by “Coach Arnie” about everything that is happening in the Personal Development industry and learn of the best ways to improve your lives and achieve success.');

    this.meta.setTag('og:keyword', 'Arnie Fonseca Blogs, Personal Development Blogs, Blogs on Personal Development');
    this.meta.setTag('twitter:keyword', 'Arnie Fonseca Blogs, Personal Development Blogs, Blogs on Personal Development');

    this.meta.setTag('og:title', 'Arnie Fonseca - Blogs');
    this.meta.setTag('twitter:title', 'Arnie Fonseca - Blogs');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo.png');



    this.nestedTreeControl = new NestedTreeControl<FileNode> (this._getChildren);
    this.blogCategoryDataSource = new MatTreeNestedDataSource();

    this.dataChange.subscribe(data => this.blogCategoryDataSource.data = data);

   

    
    this.dataChange.next([
      {
        filename: "test",
        type: "",
        children:[
          {
            filename: "test3",
            type: "exe",
            children: [],
          }
        ],
      },
      {
        filename: "test2",
        type: "exe",
        children:[],
      },
    ]);   

  }

  private _getChildren = (item: FileNode) => { return observableOf(item.children); };
  hasNestedChild = (_: number, nodeData: FileNode) => { return ! (nodeData.type); };

  panelOpenState = false;

  ngOnInit() {

    //**all blog category and blog list from resolve in routing**//
// ************* blog details *****************//
      
      this.activatedRoute.data.forEach((data: any) => {
        this.blog = data.blogCatList.res;
        //console.log('>>>>>>>kb>>>>>>>',this.blog)  
        this.blog_img=this.blog[0].blogs_image[0];
        
      })
 

       /**api service for blog_catagory total count by uttam */  
      //  this.blogcategorycount = this.blogList.blogCatList.blog_category.length;
       // console.log('>>>>>>>>>>>>>>>>>',this.blogcategorycount)
       
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