import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
/***************** This is use for image upload ********************/ 
  // public configData: any = {
  //   baseUrl: "http://3.15.236.141:5005/",
  //   endpoint: "uploads",
  //   size: "51200", // kb
  //   format: ["jpg", "jpeg", "png", "bmp", "zip", 'html'], // use all small font
  //   type: "profile-picture",
  //   path: "files",
  //   prefix: "profile_picture_"
  // }

  
  public logo: any = '../../assets/images/logo.png';      // logo url 
  public fromTitle: any = "Login";    // This is a From Title 
  public fullUrl: any = "https://63zzhpnoti.execute-api.us-east-1.amazonaws.com/production/api/";  // server url
  public endpoint: any = "login";  // login endpoint
  // public signUpRouteingUrl: any = 'sign-up';      // navigate the sign up page
  // public forgetRouteingUrl: any = 'forget-password';      // navigate the Forget password page
  public buttonName:any= 'Login';
  public signUpRouteingUrl: any = { 
    "path":"sign-up",
    "buttonName":"sign-up",
    "customLink":"",
    "customURl":""
  };

  public forgetRouteingUrl: any = {
    "path":"forget-password",
    "buttonName":"forget-password",
    "customLink":"",
    "customURl":""
  };
  public routerStatus: any;
    constructor(private readonly meta: MetaService, public apiService:ApiService) { 

    // this.meta.setTitle('Login Form dynamic');
    // this.meta.setTag('og:description', 'This is dynamic decription');
    // this.meta.setTag('og:title', 'This is dynamic title with meta og ');
    // this.meta.setTag('og:type', 'website');
    // this.meta.setTag('og:image', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg');

    this.meta.setTitle('Arniefonseca - Login');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Login');
    this.meta.setTag('twitter:title', 'Arniefonseca - Login');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo.png');

      this.routerStatus = {           // this is use for if login succcess then navigate which page 
        "data": [
          {
           "type":"admin",
           "routerNav":"admin-dashboard"
          },
          {
            "type":"customer",
           "routerNav":"customer-dashboard"
          },
          {
            "type":"rep",
            "routerNav":"rep-dashboard"
          }
        ]
      }
  
    }
  
    ngOnInit() {
      console.log(this.apiService.serverUrlDemo)
    }
  
  }
  