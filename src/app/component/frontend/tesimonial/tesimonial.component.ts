import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { ApiService } from 'src/app/api.service';

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



  hideScrollbar;
  disabled;
  xDisabled;
  yDisabled;

  leftNavDisabled = false;
  rightNavDisabled = false;
  index = 0;

  @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;


  constructor(private activatedRoute: ActivatedRoute, private router: Router, public apiService: ApiService) { }


  ngOnInit() {
    let data: any = {};
    data = {
      source:"testimonals",
      endpoint: "datalist"
    }
    this.apiService.getDatalist(data).subscribe((res)=>{
      console.log(res);
          let result: any = {};
      result = res;
      this.TestimonialListArray = result.res;
      console.log(this.TestimonialListArray);
    })
    // this.activatedRoute.data.forEach(data => {
    //   let result: any;
    //   result = data.testimonialListData.res;
    //   this.TestimonialListArray = result;
    //   console.log(this.TestimonialListArray);

    // })
  }



  moveLeft() {
    this.imgsmall.moveLeft();
    // console.log(this.imgsmall);
    let imgsmallval: any;
    imgsmallval = this.imgsmall;
    this.index_number = JSON.parse(imgsmallval._index)
    // console.log(this.index_number)
    // this.mainImg = this.imgsmall._index;
  }

  moveRight() {
    this.imgsmall.moveRight();
    let imgsmallval: any;
    imgsmallval = this.imgsmall;
    this.index_number = JSON.parse(imgsmallval._index)
    // console.log(this.index_number)
  }


  imgClick(val: any) {
    // console.log(val)
  }
  btnClick() {
    this.router.navigateByUrl('/testimonial');
  };








  clickItem(item) {
    console.log('item clicked');
  }

  // remove() {
  //   this.imagelist.pop();
  // }

  toggleHideSB() {
    this.hideScrollbar = !this.hideScrollbar;
  }

  toggleDisable() {
    this.disabled = !this.disabled;
  }
  toggleXDisable() {
    this.xDisabled = !this.xDisabled;
  }
  toggleYDisable() {
    this.yDisabled = !this.yDisabled;
  }

  moveLeft1() {
    this.ds.moveLeft();
  }

  moveRight1() {
    this.ds.moveRight();
  }

  moveTo(idx: number) {
    this.ds.moveTo(idx);
  }

  leftBoundStat(reachesLeftBound: boolean) {
    this.leftNavDisabled = reachesLeftBound;
  }

  rightBoundStat(reachesRightBound: boolean) {
    this.rightNavDisabled = reachesRightBound;
  }

  onSnapAnimationFinished() {
    console.log('snap animation finished');
  }

  onIndexChanged(idx) {
    this.index = idx;
    console.log('current index: ' + idx);
  }

  onDragScrollInitialized() {
    console.log('first demo drag scroll has been initialized.');
  }

  onDragStart() {
    console.log('drag start');
  }

  onDragEnd() {
    console.log('drag end');
  }


}
