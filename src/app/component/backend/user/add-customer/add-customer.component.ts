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
  public stateList:any=[];
  public header_text:any="Add Customer"
  public cityList:any=[];
  public city:any;
  public data: any ={};
  public action:any;
  public header_txt: any = 'Add Event';
  public name_txt:any="Add Event";
  public btn_text:any='SUBMIT';
  public successMessage:any="Submitted Successfully!!!";
  public condition:any;
  public defaultData:any;
  public ErrCode: boolean;
  public dialogRef: any;
  @ViewChild(FormGroupDirective, {static: false}) formDirective: FormGroupDirective;
  constructor(public activatedRouter:ActivatedRoute, public apiservice: ApiService, public fb: FormBuilder, public dialog: MatDialog,public router:Router,public cookieService:CookieService,private readonly meta: MetaService) { 
    this.activatedRouter.params.subscribe(params => {
      
      if (params['_id'] != null) {
        this.action = "edit";
        this.header_text='Edit Customer';
        this.condition = { id: params._id };
        this.activatedRouter.data.subscribe(resolveData => {
          this.defaultData = resolveData.affiliateList.res[0];
          
          console.log('+++++++++++++',this.defaultData)
        });
      }
      else
        this.action = "add";
    });
    this.allStateCityData();
    setTimeout(() => {
      this.getCity(this.defaultData.state);
    }, 500);

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
        // affiliate:['', Validators.required],
        type: ["customer"],
        status:1
    })

  }

  ngOnInit() {

    switch (this.action) {
      case 'add':
        /* Button text */
        this.btn_text = "SUBMIT";
        break;
      case 'edit':
        /* Button text */
        this.btn_text = "UPDATE";
        this.header_txt="Edit Affiliate"
        this.name_txt="Edit Affiliate";
        this.successMessage = "One row updated";
        this.setDefaultValue(this.defaultData);
        break;
    }
  }

  allStateCityData() {
    this.apiservice.getcitystate("./assets/data/state.json").subscribe(response => {
      this.stateList = response;
    });

    this.apiservice.getcitystate("./assets/data/city.json").subscribe(response => {
      this.cityList = response;
    });
  }

  getCity(event) {
    var val = event;
    this.city = this.cityList[val];
  }

  editaffiliateprofile(){
    this.header_text="Edit Customer"
  }

  setDefaultValue(defaultValue:any){

    this.addcustomerForm.patchValue({
      id:defaultValue._id,
      firstname:defaultValue.firstname,
      lastname:defaultValue.lastname,
      email:defaultValue.email,
      phone:defaultValue.phone,
      zip:defaultValue.zip,
      city:defaultValue.city,
      state:defaultValue.state,
      address:defaultValue.address
    });
  }
/**submit function */
submit() {

  // console.log('>>>>>>>>>>>')

  //blur function
  for(let i in this.addcustomerForm.controls){
    this.addcustomerForm.controls[i].markAsTouched();
  }

  if(this.addcustomerForm.valid){
    delete this.addcustomerForm.value.confirmPass;

  if(this.addcustomerForm.value.id==null){
    delete this.addcustomerForm.value.id
  }
    //start process for add or update
    let postData: any = {
      "source": 'users',
      "data":this.addcustomerForm.value,
      "token": this.cookieService.get('jwtToken')
    };

    this.apiservice.CustomRequest( postData,'addorupdatedata').subscribe((response: any) => {
      let result: any;
      result = response;
      if (result.status == "success") {

        // this.openDialog(this.successMessage);
        // setTimeout(() => {
        //   this.dialogRef.close();
        // }, 2000);

        this.router.navigateByUrl('/customer-list-admin');
      }

    })



  }
}
}
