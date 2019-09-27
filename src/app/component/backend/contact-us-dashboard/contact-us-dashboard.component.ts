import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-contact-us-dashboard',
  templateUrl: './contact-us-dashboard.component.html',
  styleUrls: ['./contact-us-dashboard.component.css']
})
export class ContactUsDashboardComponent implements OnInit {
  public contact_us_ditiles: any = [];
  public contact_us_ditiles_skip: any = [];
  public contact_us_ditiles_modify_header: any = {
    'email': 'Email Id',
    '_id': "ID"
  };
  public sourcedata: any= 'contactusForm';
  public delurl: any = 'deletesingledata';
  constructor(public route: ActivatedRoute, public apiService: ApiService) {
    
   }

  ngOnInit() {
    this.route.data.forEach(data =>{
      let result: any;
      result = data;
      console.log(result.serviceList.res);
      this.contact_us_ditiles = result.serviceList.res;
    })
  }

}
