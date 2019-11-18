import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

// declare var $:any;
// var iframe           = $('iframe:first');
// var iframe_src       = iframe.attr('src');
// var youtube_video_id = iframe_src.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent implements OnInit {
  
// videoshow(){
//   if (youtube_video_id.length == 11) {
//     var video_thumbnail = $('<img src="//img.youtube.com/vi/'+youtube_video_id+'/0.jpg">');
//     $('body').append(video_thumbnail);
  
//     $('img:first').click(function() {
//         $('iframe:first').fadeToggle('400');
//     });
//   }
// }


  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('Arniefonseca - Video Gallery');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Video Gallery');
    this.meta.setTag('twitter:title', 'Arniefonseca - Video Gallery');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo.png');
   }

  ngOnInit() {}

}

    