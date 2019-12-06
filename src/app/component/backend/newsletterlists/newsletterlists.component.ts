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

public newsConfigForm: any = {
  apiBaseUrl: this.BaseUrl,
  listEndPoint: "datalist",
  datasource: "",
  tableName: "newsletters",
  updateurl: "addorupdatedata",
  editUrl: "newsletter/edit",
  jwtToken: "",
  deleteEndPoint: "deletesingledata",
  addLink: "newsletter/add",
  view: ""
}


public subscriptionForm: any = {
  apiBaseUrl: this.BaseUrl,
  listEndPoint: "datalist",
  datasource: "",
  tableName: "subscriptions",
  updateurl: "addorupdatedata",
  editUrl: "subscriber/add-group/edit/",
  jwtToken: "",  
  deleteEndPoint: "deletesingledata",
  addLink: "subscriber/add-subscription-admin",
  view: "subscriptions_view"

}

  public subscriptionCatForm: any = {
    apiBaseUrl: this.BaseUrl,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "resources",
    updateurl: "addorupdatedata",
    editUrl: "subscriber-group/edit/",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "subscriber-group/add",
    view: "news_category_view"

  }



  public senderConfigForm: any = {
    // apiBaseUrl: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
    apiBaseUrl: this.BaseUrl,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "senders",
    updateurl: "addorupdatedata",
    editUrl: "test/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "/test/add",
    view: "testemail_view"

  }


  public testEmailConfigForm: any = {
    // apiBaseUrl: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
    apiBaseUrl: this.BaseUrl,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "senders",
    updateurl: "addorupdatedata",
    editUrl: "test/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "/test/add",
    view: "testemail_view"

  }


 
  


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiservice: ApiService) { 


    


     // SubscriptionsList

    let data: any = {
      source:"subscriptions_view",
      endpoint: "datalist"

    }
    this.apiservice.getDatalist(data).subscribe((result: any)=>{
      this.subscriptionForm.datasource = result.res;
      console.log('>>>>>>>>>>>>koushik subscription>>>>>>>>>>>>>', this.subscriptionForm.datasource);
    });



    // SubscriptionsCATEGORYList

    let dataSubCat: any = {
      source:"news_category_view",
      endpoint: "datalist"

    }
    this.apiservice.getDatalist(dataSubCat).subscribe((result: any)=>{
      this.subscriptionCatForm.datasource = result.res;
      // console.log('>>>>>>>>>>>>koushik subscription Category>>>>>>>>>>>>>', this.subscriptionCatForm.datasource);
    });
        

       // testemail 

       let dataTestemail: any = {
        source:"testemail_view",
        endpoint: "datalist"
  
      }
      this.apiservice.getDatalist(dataTestemail).subscribe((result: any)=>{
        this.testEmailConfigForm.datasource = result.res;
         console.log('>>>>>>>>>>>>amitavatestemail>>>>>>>>>>>>>', this.testEmailConfigForm.datasource);
      });



      
          



  }

  ngOnInit() {

  // NewsletterList 

  this.activatedRoute.data.subscribe(resolveData => {
    this.newsConfigForm.datasource = resolveData.newsData.res;
    this.newsConfigForm.jwtToken = this.cookieService.get('jwtToken');
    // console.log('test', this.newsConfigForm.datasource);

  });
  }

}
