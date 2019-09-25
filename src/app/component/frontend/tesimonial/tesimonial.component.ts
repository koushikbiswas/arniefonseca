import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-tesimonial',
  templateUrl: './tesimonial.component.html',
  styleUrls: ['./tesimonial.component.css']
})
export class TesimonialComponent implements OnInit {

  @ViewChild('imgsmall') imgsmall: DragScrollComponent;
public mainImg: any;
  public TestimonialListArray:any=[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

 
  ngOnInit() {
    this.activatedRoute.data.forEach(data=>{
      console.log(data);
      let result:any;
      result=data.testimonialListData.res;
      this.TestimonialListArray=result;
      //console.log("ojjjjjjjjhgdfhgdf",this.TestimonialListArray);
      this.moveRight();
    })
  }

  moveLeft() {
        this.imgsmall.moveLeft();
        console.log(this.imgsmall._index);
        // this.mainImg = this.imgsmall._index;
    }

    moveRight() {
        this.imgsmall.moveRight();
        console.log(this.imgsmall._index)
        // this.mainImg = this.imgsmall._index;
    }
  
  
    imgClick(val: any){
      console.log(val)
    }
  btnClick() {
    this.router.navigateByUrl('/testimoniallist');
  };
  

}
