import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-tesimonial',
  templateUrl: './tesimonial.component.html',
  styleUrls: ['./tesimonial.component.css']
})
export class TesimonialComponent implements OnInit {

  
  public TestimonialListArray:any=[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

 
  ngOnInit() {
    this.activatedRoute.data.forEach(data=>{
      console.log(data);
      let result:any;
      result=data.testimonialListData.res;
      this.TestimonialListArray=result;
      //console.log("ojjjjjjjjhgdfhgdf",this.TestimonialListArray);
      
    })
  }

  btnClick= function () {
    this.router.navigateByUrl('/tesimoniallist');
  };

}
