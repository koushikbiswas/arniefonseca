import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  
  public formTitle: any = "Contact Us";      // Enter the Forl Title
  public pageUrl: any = 'home';
  public serverUrl: any = this.apiService.serverUrlDemo;
  public addEndpoint: any = {
    endpoint:'addorupdatedata',
    source:'contactusForm'
  };
  public getDataUrl: any = 'datalist';
  public routeingUrl: any = 'dashboard';

  constructor(private readonly meta: MetaService, public apiService: ApiService) {

    //console.log('--koushikcontact-----', this.apiService.serverUrlDemo);    

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
