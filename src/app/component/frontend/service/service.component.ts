import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  public ServiceListArray:any=[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
    this.activatedRoute.data.forEach(data=>{
      let result:any;
      result=data.serviceListData.res;
      this.ServiceListArray=result;
      // console.log("ojjjjjjjjhgdfhgdf",this.ServiceListArray);   
    })
  }

  btnClick= function () {
    this.router.navigateByUrl('/servicelist');
  };

}
