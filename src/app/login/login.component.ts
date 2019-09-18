import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public fromTitle: any = "Login Form";    // This is a From Title 
  public fullUrl: any = "https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/";  // server url
  public endpoint: any = "login";
  public signUpRouteingUrl: any = 'sign-up';
  public forgetRouteingUrl: any = 'forget-password';
  public routerStatus: any;
    constructor(private readonly meta: MetaService, public apiService:ApiService) { 

    this.meta.setTitle('About us dynamic');
    this.meta.setTag('og:description', 'This is dynamic decription ');
    this.meta.setTag('og:title', 'This is dynamic title with meta og ');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg');




      this.routerStatus = {           // this is use for if login succcess then navigate which page 
        "data": [
          {
           "type":"admin",
           "routerNav":"forget-password"
          },
          {
            "type":"user",
           "routerNav":"userDashbord"
          },
          {
            "type":"model",
            "routerNav":"modelDashbord"
          }
        ]
      }
  
    }
  
    ngOnInit() {
      console.log(this.apiService.serverUrlDemo)
    }
  
  }
  