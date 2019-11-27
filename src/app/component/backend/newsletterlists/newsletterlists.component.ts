import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-newsletterlists',
  templateUrl: './newsletterlists.component.html',
  styleUrls: ['./newsletterlists.component.css']
})
export class NewsletterlistsComponent implements OnInit {


  public newsConfigForm: any = {
    endpoint: this.apiservice.serverUrl,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "newsletters",
    updateurl: "addorupdatedata",
    editUrl: "newsletter/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "/newsletter/add",
    view: ""

  }
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiservice: ApiService) {

    this.activatedRoute.data.subscribe(resolveData => {
      this.newsConfigForm.datasource = resolveData.newsData.res;
      this.newsConfigForm.jwtToken = this.cookieService.get('jwtToken');

    });
  }

  ngOnInit() {
  }

}
