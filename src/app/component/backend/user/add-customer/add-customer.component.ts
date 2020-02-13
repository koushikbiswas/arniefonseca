import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../../../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from '@ngx-meta/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  public addcustomerForm: FormGroup;
  public user_details:any;
  public userType:any;

  public header_text:any="Add Customer"

  constructor(public activatedRouter:ActivatedRoute, public apiservice: ApiService, public fb: FormBuilder, public dialog: MatDialog,public router:Router,public cookieService:CookieService,private readonly meta: MetaService) { 

    this.meta.setTitle('ProBid Auto - Add Customer');
    this.meta.setTag('og:title', 'ProBid Auto - Add Customer');
    this.meta.setTag('twitter:title', 'ProBid Auto - Add Customer');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');

    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {      
      this.user_details = JSON.parse(this.cookieService.get('user_details'));
    }
    this.userType=this.user_details.type;

    this.addcustomerForm = this.fb.group({
      id:null,
        email: [null, Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
        firstname: [null, Validators.required],
        lastname: [null, Validators.required],
        phone: [null, Validators.compose([Validators.required, Validators.pattern(/^0|[1-9]\d*$/)])],
        zip: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        address: [null, Validators.required],
        salesrep:['', Validators.required],
        type: ["customer"],
        status:1
    })

  }

  ngOnInit() {

  }


  editaffiliateprofile(){
    this.header_text="Edit Customer"
  }

}
