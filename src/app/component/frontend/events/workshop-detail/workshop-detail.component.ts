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
  public workshop_img:any
  public workshop:any;
  // public SeminarsdetailArry: any = []
  public dataformate: any;
  public eventImage:any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public apiService: ApiService, private readonly meta: MetaService,private sanitizer: DomSanitizer ) {

    this.meta.setTitle('Arniefonseca - Event Workshop Detail');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Event Workshop Detail');
    this.meta.setTag('twitter:title', 'Arniefonseca - Event Workshop Detail');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo.png');
    this.dataformate = moment();
  }

  ngOnInit() {

    this.activatedRoute.data.forEach((data: any) => {
      this.workshop = data.workshopsDetailData.res;
      //console.log('>>>>>>>kb>>>>>>>',this.workshop)
      this.workshop_img=this.workshop[0].Image[0];

    })
  }



  //***********load more view blog *************//
  blogloadmore(){
    // console.log('load more')
    this.indexval=this.indexval+1;

  }

  copyText(val:any){
    console.log('copyText');
  }

}
