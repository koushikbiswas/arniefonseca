import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';



@Component({
  selector: 'app-listing-service',
  templateUrl: './listing-service.component.html',
  styleUrls: ['./listing-service.component.css']
})
export class ListingServiceComponent implements OnInit {

    /************** lib list setup start here *************/
    public serviceListConfig:any = {
      // apiBaseUrl: "https://9v41bpikik.execute-api.us-east-1.amazonaws.com/production/api/",
      endpoint: this.apiService.serverUrl,
      listEndPoint: "datalist",
      datasource: "",
      tableName: "services",
      updateurl: "addorupdatedata",
      editUrl: "service/edit",
      jwtToken: "",
      deleteEndPoint: "deletesingledata",
      addLink: "/service/add",
      view:"services_view"
    }
  
  constructor( private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiService: ApiService ) { 

  this.activatedRoute.data.subscribe(resolveData => {
    this.serviceListConfig.datasource = resolveData.serviceList.res;
    this.serviceListConfig.jwtToken = this.cookieService.get('jwtToken');   
  });
}

  ngOnInit() {
  }

}

