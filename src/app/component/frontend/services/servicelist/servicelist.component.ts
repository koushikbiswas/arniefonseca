import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.component.html',
  styleUrls: ['./servicelist.component.css']
})
export class ServicelistComponent implements OnInit {
  
  private indexvallength:any;
  public ServiceListArray:any=[];
  // showMore = false;
  showme=true;
  public indexval:any = 6;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private readonly meta: MetaService) { 

    this.meta.setTitle('Arniefonseca - Services');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Services');
    this.meta.setTag('twitter:title', 'Arniefonseca - Services');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo.png');

  }

  ngOnInit() {
    // this.activatedRoute.data.forEach(data=>{
    //   let result:any;
    //   result=data.serviceListData.res;
    //   this.ServiceListArray=result;
    //   // console.log("ojjjjjjjjhgdfhgdf",this.ServiceListArray);       
    //  this.indexvallength = this.ServiceListArray.length;    
    // })
  }

  btnBackClick= function () {
    this.router.navigateByUrl('service');
  };

  showMoreFunc(){
    this.indexval = this.indexval + 3;   
    console.log(this.indexval);
  }

}