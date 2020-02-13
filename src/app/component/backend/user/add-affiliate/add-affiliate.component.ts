import { Component, OnInit, ViewChildren, ViewChild,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../../../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-add-affiliate',
  templateUrl: './add-affiliate.component.html',
  styleUrls: ['./add-affiliate.component.css']
})
export class AddAffiliateComponent implements OnInit {

  public addaffiliateForm: FormGroup;
  public header_text:any="Add Affiliate"
  public user_details:any;

  @ViewChild(FormGroupDirective, {static: false}) formDirective: FormGroupDirective;
  constructor(public activatedRouter: ActivatedRoute, public apiservice: ApiService, public fb: FormBuilder, public dialog: MatDialog, public router: Router,private readonly meta: MetaService,public cookieService:CookieService) { 
    this.meta.setTitle('ProBid Auto - Add Affiliate');
    this.meta.setTag('og:title', 'ProBid Auto - Add Affiliate');
    this.meta.setTag('twitter:title', 'ProBid Auto - Add Affiliate');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');


    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {      
      this.user_details = JSON.parse(this.cookieService.get('user_details'));
    }


    this.addaffiliateForm = this.fb.group({
      id:null,
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      phone: [null, Validators.compose([Validators.required, Validators.pattern(/^0|[1-9]\d*$/)])],
      zip: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      address: [null, Validators.required],
      // affiliate:['', Validators.required],
      type: ["affiliate"],
      status:1
    })

  }

  ngOnInit() {
  }

  editcustomerprofile(){
    this.header_text="Edit Affiliate"
  }

}
