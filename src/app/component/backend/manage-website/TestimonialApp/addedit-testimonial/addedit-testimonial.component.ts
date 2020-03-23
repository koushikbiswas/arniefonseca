import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../../api.service';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-addedit-testimonial',
  templateUrl: './addedit-testimonial.component.html',
  styleUrls: ['./addedit-testimonial.component.css']
})
export class AddeditTestimonialComponent implements OnInit {

  public user_details: any;
  public header:string='Add Testimonial';

/* Config for add and edit start */
public configAddEdit: any = {
  action: "add",
  // endpoint: "https://9v41bpikik.execute-api.us-east-1.amazonaws.com/production/api/addorupdatedata",
  endpoint: this.ApiService.serverUrl + 'testimonialaddandreview',
  source: "testimonial",
  condition: {},
  defaultData: null,
  jwtToken: this.cookieService.get('jwtToken'),
  callBack: "testimonial/list",
  userData: { id: "18801017007", name: "Admin" },
}
/* Config for add and edit end */

public configData: any = {
  baseUrl: "https://fileupload.influxhostserver.com/",
  endpoint: "uploads",
  size: "51200", // kb
  format: ["jpg", "jpeg", "png"], // use all small font
  type: "testimonial-image",
  path: "testimonial",
  prefix: "testimonial-image_",
  formSubmit: false,
  conversionNeeded: 1,
  bucketName: "crmfiles.influxhostserver"
}
public configAudioFileUpload:any={
  baseUrl: "https://fileupload.influxhostserver.com/",
  endpoint: "uploads",
  size: "51200", // kb
  format:["jpg", "jpeg", "png", "bmp", "zip", 'html','mp4','mp3','doc','ppt','pptx','pdf','msword'],  // use all small font
  type: "testimonial-mp3",
  path: "testimonial",
  prefix: "testimonial-mp3_",
  formSubmit: false,
  conversionNeeded: 1,
  bucketName: "crmfiles.influxhostserver"
}
  constructor(private router : Router , private activatedRoute : ActivatedRoute ,private cookieService : CookieService, public ApiService: ApiService, private readonly meta: MetaService) {


    this.meta.setTitle('Arniefonseca - Testimonial');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca -  Testimonial');
    this.meta.setTag('twitter:title', 'Arniefonseca -  Testimonial');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');

    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {      
      this.user_details = JSON.parse(this.cookieService.get('user_details'));
    }

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params._id) {
        this.header='Edit Testimonial';
        this.activatedRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.testimonialData.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }

}
