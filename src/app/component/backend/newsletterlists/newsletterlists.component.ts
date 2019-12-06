import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../api.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-newsletterlists',
  templateUrl: './newsletterlists.component.html',
  styleUrls: ['./newsletterlists.component.css']
})
export class NewsletterlistsComponent implements OnInit {

public BaseUrl:any= environment["API_URL"];


  public subscriptionCatForm: any = {
    apiBaseUrl: this.BaseUrl,

    // apiBaseUrl: environment.API_URL,
    listEndPoint: "datalist",
    datasource: "subscriptiongrouplist",
    tableName: "resources",
    updateurl: "addorupdatedata",
    editUrl: "/subscriber-group/edit/",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "subscriber-group/add",
    //view: "news_category_view"

  }




  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiservice: ApiService) { }

  ngOnInit() {


    this.activatedRoute.data.subscribe(resolveData => {
      this.subscriptionCatForm.datasource = resolveData.subscriptionListData.res;
      this.subscriptionCatForm.jwtToken = this.cookieService.get('jwtToken');

      // console.log('test', this.subscriptionCatForm.datasource);

    });


    // this.activatedRoute.data.subscribe(resolveData => {
    //   this.newsConfigForm.datasource = resolveData.newLetterList.res;

    //   this.newsConfigForm.jwtToken = this.cookieService.get('jwtToken');




    // });

    // this.activatedRoute.data.subscribe(resolveData => {
    //   this.subscriptionCatForm.datasource = resolveData.subscriptionCatData.res;
    //   this.subscriptionCatForm.jwtToken = this.cookieService.get('jwtToken');

    // });

    // this.activatedRoute.data.subscribe(resolveData => {
    //   this.subscriptionForm.datasource = resolveData.subscriptionData.res;
    //   this.subscriptionForm.jwtToken = this.cookieService.get('jwtToken');

    // });

    // this.activatedRoute.data.subscribe(resolveData => {
    //   this.senderConfigForm.datasource = resolveData.senderData.res;
    //   this.senderConfigForm.jwtToken = this.cookieService.getAll();

    // });


    // this.activatedRoute.data.subscribe(resolveData => {
    //   this.testemailConfigForm.datasource = resolveData.testData.res;
    //   this.testemailConfigForm.jwtToken = this.cookieService.get('jwtToken');

    // });
  }

}
