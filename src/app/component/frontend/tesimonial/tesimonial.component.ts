import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-tesimonial',
  templateUrl: './tesimonial.component.html',
  styleUrls: ['./tesimonial.component.css']
})
export class TesimonialComponent implements OnInit {

  @ViewChild('imgsmall') imgsmall: DragScrollComponent;
  public mainImg: any;
  public TestimonialListArray: any = [];
  public index_number: any = 1;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.activatedRoute.data.forEach(data => {
      console.log(data);
      let result: any;
      result = data.testimonialListData.res;
      this.TestimonialListArray = result;
      //console.log("ojjjjjjjjhgdfhgdf",this.TestimonialListArray);
      this.moveRight();
    })
  }

  moveLeft() {
    this.imgsmall.moveLeft();
    console.log(this.imgsmall);
    let imgsmallval: any;
    imgsmallval = this.imgsmall;
    this.index_number = JSON.parse(imgsmallval._index)
    console.log(this.index_number)
    // this.mainImg = this.imgsmall._index;
  }

  moveRight() {
    this.imgsmall.moveRight();
    let imgsmallval: any;
    imgsmallval = this.imgsmall;
    this.index_number = JSON.parse(imgsmallval._index)
    console.log(this.index_number)
  }


  imgClick(val: any) {
    console.log(val)
  }
  btnClick() {
    this.router.navigateByUrl('/testimoniallist');
  };


}
