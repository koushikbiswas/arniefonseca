import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment'; // add this 1 of 4
import { ApiService } from 'src/app/api.service';
import { MetaService } from '@ngx-meta/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

export interface DialogData {data: any;} 

@Component({
  selector: 'app-tesimoniallist',
  templateUrl: './tesimoniallist.component.html',
  styleUrls: ['./tesimoniallist.component.css']
})
export class TesimoniallistComponent implements OnInit {
  private indexvallength: any;
  public TestimonialListArray: any = [];
  // showMore = false;
  showme = true;
  public indexval: any = 6;
  public dataformate: any;
  public p_id: any;

  safeSrc: SafeResourceUrl;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public apiService: ApiService, private readonly meta: MetaService,private sanitizer: DomSanitizer,public dialog:MatDialog) { 

    this.meta.setTitle('Arniefonseca - Testimonial lists');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Testimonial lists');
    this.meta.setTag('twitter:title', 'Arniefonseca - Testimonial lists');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo.png');

    this.dataformate = moment();
  }

  

  ngOnInit() {    

    this.activatedRoute.data.forEach(data => {
      let result: any = {};
      result = data.testimonialListData.res;
      // console.warn(result);
      this.TestimonialListArray = result;
      this.indexvallength = this.TestimonialListArray.length;
    })
  }

  
  
  btnBackClick = function () {
    this.router.navigateByUrl('testimonial');
  };

  testimonialloadmore() {
    this.indexval = this.indexval + 3;
    // console.log(this.indexval);
  }

  showmore(index:any) {
   this.p_id = index._id;
  }

  showaudio() {
    console.log('showaudio function is wirking')
  }

  showvideo() {
    console.log('showvideo function is wirking')
  }

  //*********view Video modal section***********//

  openvideourl(val:any){

    let url:any;
    url="https://www.youtube.com/embed/";
     // console.log('video url....>',url+val);
     this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(url + val);
     
     // console.log('>>>>>>>>>>>>>>>>>>',this.safeSrc)
     const dialogRef = this.dialog.open(CommonTestimonialVideoModalComponent, {
       panelClass:['modal-md','success-modal'],       
       width:'450px',
       data:this.safeSrc, 
     });
     dialogRef.afterClosed().subscribe(result => {  
     });
   }

//********* end Video modal section***********//


}

//**********video modal component************//

@Component({
  selector:'app-commontestimonialvideomodal',
  templateUrl:'./commontestimonialvideomodal.html'
})
export class CommonTestimonialVideoModalComponent {
  constructor( public dialogRef: MatDialogRef<CommonTestimonialVideoModalComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData){
  }
}
