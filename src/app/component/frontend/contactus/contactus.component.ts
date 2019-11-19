import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  
  public formTitle: any = "Contact Us";      // Enter the Forl Title
  public pageUrl: any = 'home';
  public serverUrl: any = 'https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/';

  public addEndpoint: any = {
    endpoint:'addorupdatedata',
    source:'contactusForm'
  };
  public getDataUrl: any = 'datalist';
  public routeingUrl: any = 'dashboard';

  constructor(private readonly meta: MetaService) {
    
    // this.meta.setTitle('Contact Us dynamic');
    // this.meta.setTag('og:description', 'This is dynamic decription ');
    // this.meta.setTag('og:title', 'This is dynamic title with meta og ');
    // this.meta.setTag('og:type', 'website');
    // this.meta.setTag('og:image', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg');

    this.meta.setTitle('Arniefonseca - Contact Us');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Contact Us');
    this.meta.setTag('twitter:title', 'Arniefonseca - Contact Us');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo.png');

  }

  ngOnInit() {
  }

}
