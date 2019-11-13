import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment'; // add this 1 of 4
import { ApiService } from 'src/app/api.service';

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

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public apiService: ApiService) { 

    this.dataformate = moment();
  }


  ngOnInit() {
    var data: any = {};
    data = {
      source:"testimonial_view",
      endpoint: "datalist"
    }
    this.apiService.getTempToken().subscribe((res:any)=>{

      if(res.status == 'success') {
        this.apiService.getDatalistWithToken(data, res).subscribe((res2:any)=>{
          
          this.TestimonialListArray = res2.res;
        });
      }
    });

    // this.activatedRoute.data.forEach(data => {
    //   let result: any = {};
    //   result = data.testimonialListData.res;
    //   console.warn(result)
    //   this.TestimonialListArray = result;
    //   this.indexvallength = this.TestimonialListArray.length;
    // })
  }
  
  btnBackClick = function () {
    this.router.navigateByUrl('testimonial');
  };

  showMoreFunc() {
    this.indexval = this.indexval + 3;
    console.log(this.indexval);
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

}
