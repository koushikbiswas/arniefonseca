import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from 'src/app/api.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-workshop-detail',
  templateUrl: './workshop-detail.component.html',
  styleUrls: ['./workshop-detail.component.css']
})
export class WorkshopDetailComponent implements OnInit {


  public indexvallength: any=1;


  public indexval:any=6;

  public WorkshopsdetailArry: any = []
  public dataformate: any;
  public eventImage:any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public apiService: ApiService, private readonly meta: MetaService,private sanitizer: DomSanitizer ) {

    this.meta.setTitle('Arniefonseca - Event');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Event');
    this.meta.setTag('twitter:title', 'Arniefonseca - Event');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo.png');
    this.dataformate = moment();
  }

  ngOnInit() {

    this.activatedRoute.data.forEach(data => {
      //console.log('test 12',data);
      let result: any = {};
      result = data.workshopsDetailData.res;

      this.WorkshopsdetailArry = result;

      this.indexvallength = this.WorkshopsdetailArry.length;

      console.warn(result);

      // this.eventImage=result.event_image[0].basepath[0]+result.event_image[0].image[0];
      // console.log('+++++>>>>>>>>>>>>', this.eventImage)
      // console.log('>>>>>>>>>>>>>>>>',result);

    })
  }



  //***********load more view blog *************//
  blogloadmore(){
    // console.log('load more')
    this.indexval=this.indexval+1;

  }

}
