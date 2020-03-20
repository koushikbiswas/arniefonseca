import { Component, OnInit, ViewChildren, ViewChild,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../../../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { MetaService } from '@ngx-meta/core';

export interface DialogData {
  msg: string;
}


@Component({
  selector: 'app-add-affiliate',
  templateUrl: './add-affiliate.component.html',
  styleUrls: ['./add-affiliate.component.css']
})
export class AddAffiliateComponent implements OnInit {

  public addaffiliateForm: FormGroup;
  public header_text:any="Add Affiliate"
  public user_details:any;
  public booking_flag:boolean=false;
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
  public stateList: any;
  public cityList: any;
  public allCities: any;
  public city : any;

  @ViewChild(FormGroupDirective, {static: false}) formDirective: FormGroupDirective;
  constructor(public activatedRouter: ActivatedRoute, public apiservice: ApiService, public fb: FormBuilder, public dialog: MatDialog, public router: Router,private readonly meta: MetaService,public cookieService:CookieService) { 
    
    this.activatedRouter.params.subscribe(params => {
      
      if (params['_id'] != null) {
        this.action = "edit";
        this.header_text='Edit Affiliate';
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
    
    this.meta.setTitle('ProBid Auto - Add Affiliate');
    this.meta.setTag('og:title', 'ProBid Auto - Add Affiliate');
    this.meta.setTag('twitter:title', 'ProBid Auto - Add Affiliate');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');


    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {      
      this.user_details = JSON.parse(this.cookieService.get('user_details'));
    }

  }

  ngOnInit() {

    this.generateForm();
    // this.getDate();
   

    // Case 
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

  generateForm() {
    this.addaffiliateForm=this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      phone: [null, Validators.compose([Validators.required, Validators.pattern(/^0|[1-9]\d*$/)])],
      zip: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      address: [null, Validators.required],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required],
      type: "user",
      status:1
  },{validator: this.checkIfMatchingPasswords('password', 'confirmPass')});
      // affiliate:['', Validators.required],
    }
    checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
      return (group: FormGroup) => {
        let passwordInput = group.controls[passwordKey],
            passwordConfirmationInput = group.controls[passwordConfirmationKey];
        if (passwordInput.value !== passwordConfirmationInput.value) {
          return passwordConfirmationInput.setErrors({notEquivalent: true})
        }
        else {
            return passwordConfirmationInput.setErrors(null);
        }
      }
    }
   


  setDefaultValue(defaultValue:any){

    this.addaffiliateForm.patchValue({
      firstname:defaultValue.firstname,
      lastname:defaultValue.lastname,
      email:defaultValue.email,
      phone:defaultValue.phone,
      zip:defaultValue.zip,
      city:defaultValue.city,
      state:defaultValue.state,
      address:defaultValue.address
    })
  }

  openDialog(x : any): void {
    this.dialogRef = this.dialog.open(AffiliateModal, {
      width: '250px',
      data: {msg : x}
    });

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }

  submit() {

    // console.log('>>>>>>>>>>>')

    //blur function
    for(let i in this.addaffiliateForm.controls){
      this.addaffiliateForm.controls[i].markAsTouched();
    }


    // console.log('>>>>>>>>>>>')

    if(this.addaffiliateForm.valid){

       //status
       if (this.addaffiliateForm.value.status) {
        this.addaffiliateForm.value.status = parseInt("1");
      }
      else {
        this.addaffiliateForm.value.status = parseInt("0");
      }
      delete this.addaffiliateForm.value.confirmPass;

      //start process for add or update
      let postData: any = {
        "source": 'users',
        "data": Object.assign(this.addaffiliateForm.value, this.condition),
        "token": this.cookieService.get('jwtToken')
      };

      this.apiservice.CustomRequest( postData,'addorupdatedata').subscribe((response: any) => {
        let result: any;
        result = response;
        // console.log('>>>>>>', result)

        if (result.status == "success") {

          this.openDialog(this.successMessage);
          setTimeout(() => {
            this.dialogRef.close();
          }, 2000);

          this.router.navigateByUrl('/affiliate-admin');
        }

      })



    }
  }

}





@Component({
  selector: 'app-affiliatemodal',
  templateUrl: 'affiliatemodal.html',
})
export class AffiliateModal {

  constructor(
    public dialogRef: MatDialogRef<AffiliateModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}