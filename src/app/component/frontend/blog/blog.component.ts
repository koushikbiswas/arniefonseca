import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public savedUrl: any = [];
  public savedId: any = [];


  safeSrc: SafeResourceUrl;
  public videos = ['https://www.youtube.com/embed/TOzJRrGdMCs', 'https://www.youtube.com/embed/0a-TwOCLqII', 'https://www.youtube.com/embed/TOzJRrGdMCs', 'https://www.youtube.com/embed/1AmZy4bSleY', 'https://www.youtube.com/embed/fQVf9Ruauko?list=RDfQVf9Ruauko', 'https://www.youtube.com/embed/1AmZy4bSleY', 'https://www.youtube.com/embed/fQVf9Ruauko?list=RDfQVf9Ruauko'];
  private currentSlide = 0;
  constructor(public sanitizer: DomSanitizer) {

   

    for (const i of this.videos) {
      var re = "https://www.youtube.com/embed/";
      // var str: any = "https://www.youtube.com/embed/TOzJRrGdMCs";
      var str: any = i;
      var newstr = str.replace(re, "");
      this.videos = newstr;
      this.savedId.push(newstr);
      // console.log(this.savedId)
    }


    this.safeSrc = this.videos;
    for (let i in this.safeSrc) {
      this.savedUrl.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.safeSrc[i]));

    }

    console.log(this.safeSrc);


  }


  prev() {
    if (this.currentSlide === this.savedUrl.length) return;
    this.currentSlide = (this.currentSlide - 1) % this.savedUrl.length;

    console.log(this.currentSlide)
  }
  next() {
    if (this.currentSlide === this.savedUrl.length) return;
    this.currentSlide = (this.currentSlide + 1) % this.savedUrl.length;
    console.log(this.currentSlide)
  }



  ngOnInit() {





    
    // var slides = document.querySelectorAll('#custom_slider_by_subrata .subrata');
    // var currentSlide = 0;
    // var slideInterval = setInterval(nextSlide, 3000);

    // var next: HTMLElement = document.querySelectorAll('#next')[0] as HTMLElement;
    // var previous: HTMLElement = document.querySelectorAll('#previous')[0] as HTMLElement;


    // next.onclick = function () {

    //   nextSlide();
    // };
    // previous.onclick = function () {

    //   previousSlide();
    // };

    // function nextSlide() {
    //   goToSlide(currentSlide + 1);
    // }

    // function previousSlide() {
    //   goToSlide(currentSlide - 1);
    // }

    // function goToSlide(n) {
    //   slides[currentSlide].className = 'subrata';
    //   currentSlide = (n + slides.length) % slides.length;
    //   slides[currentSlide].className = 'subrata showing';
    // }


    // get youtube video id

    // // function youtube_parser(url) {
    // var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    // //   var match = url.match(regExp);
    // //   return (match && match[7].length == 11) ? match[7] : false;
    // // }


    // var regex = new RegExp(/(?:\?v=)([^&]+)(?:\&)*/);
    // var url = "http://www.youtube.com/watch?v=kJ9g_-p3dLA";
    // var matches = regex.exec(url);
    // var down = document.querySelector('#GFG_DOWN');

    // var videoId = matches[1];
    // down.innerHTML = "ID = " + videoId;




  }



  public video1: any = '';
  public temp: any = '';



  onSelect(video) {
    console.log(video)

    this.video1 = "https://www.youtube.com/embed/" + video;
      this.safeSrc = this.video1;

      this.temp = this.safeSrc;
    console.log(this.temp)
  }

}
