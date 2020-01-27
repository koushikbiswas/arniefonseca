import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../api.service';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-add-edit-blogcat',
  templateUrl: './add-edit-blogcat.component.html',
  styleUrls: ['./add-edit-blogcat.component.css']
})
export class AddEditBlogcatComponent implements OnInit {
  //Add editfor blog category
  public configAddEdit: any = {
    action: "add",
    endpoint: this.apiService.serverUrl+'addorupdatedata',
    endpoint2: this.apiService.serverUrl,
    source: "blog_category",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "/blog-category/list",
    userData: { id: "18801017007", name: "Admin" },
    defaultDataAlways: null
  }
  constructor(private activatedRouter: ActivatedRoute, private cookieService: CookieService,public apiService: ApiService, private readonly meta: MetaService,) { 


    this.meta.setTitle('Arniefonseca - BLOG MANAGEMENT');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - BLOG MANAGEMENT');
    this.meta.setTag('twitter:title', 'Arniefonseca - BLOG MANAGEMENT');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.arniefonseca.influxiq.com/assets/images/logo.png');

  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      if (params._id) {
        this.activatedRouter.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.blogCatList.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }

}
