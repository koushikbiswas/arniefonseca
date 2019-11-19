import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public userType: any = 'admin';
  public logo: any = '../../assets/images/logo.png';
  public modaleLogo: any = '../../assets/images/logo.png';
  public forgetRouteingUrl: any = 'forget-password';
  public loginRouteingUrl: any = 'login';

  public formTitle: any = 'Sign Up';
  // public serverUrl: any = 'https://9v41bpikik.execute-api.us-east-1.amazonaws.com/production/api/';
  public serverUrl: any = this.apiService.serverUrlDemo;
  public addEndpoint: any = {
    endpoint:'addorupdatedata',
    source:'users'
  };
  constructor(private readonly meta: MetaService, public apiService: ApiService) {
    
    // this.meta.setTitle('Sign Up dynamic');
    // this.meta.setTag('og:description', 'This is dynamic description ');
    // this.meta.setTag('og:title', 'This is dynamic title with meta og ');
    // this.meta.setTag('og:type', 'website');
    // this.meta.setTag('og:image', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg');

    this.meta.setTitle('Arniefonseca - Sign Up');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Sign Up');
    this.meta.setTag('twitter:title', 'Arniefonseca - Sign Up');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo.png');

}

  ngOnInit() {
  }

}
