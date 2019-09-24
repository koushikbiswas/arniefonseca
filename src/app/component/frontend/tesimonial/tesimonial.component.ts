import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {DragScrollComponent} from 'ngx-drag-scroll';

@Component({
  selector: 'app-tesimonial',
  templateUrl: './tesimonial.component.html',
  styleUrls: ['./tesimonial.component.css']
})
export class TesimonialComponent implements OnInit {
  @ViewChild('imgsmall') imgsmall: DragScrollComponent;

  public imgbig1: any;
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

  imgClick(img: any) {
    console.log('ok');
    this.imgbig1 = img;
    console.log(this.imgbig1);
    console.log(this.imgbig1);
}




moveLeft() {
  this.imgsmall.moveLeft();
  console.log('moveLeft')
}

moveRight() {
  this.imgsmall.moveRight();
  console.log('moveRight')
}

  btnClick() {
    this.router.navigateByUrl('/testimoniallist');
  };

}
