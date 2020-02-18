import { Component, OnInit,Inject ,HostListener} from '@angular/core';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
// import 'angular-material-time-picker/dist/md-time-picker.css';
// import {ngTimePicker} from '@angular-material-time-picker';
import * as _moment from 'moment';

import { IgxTimePickerComponent } from "igniteui-angular";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {environment } from '../../../../../environments/environment.prod';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router'
import { HttpService} from '../../../../services/http.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {default as _rollupMoment} from 'moment';
import {DatePipe, getLocaleDateFormat} from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {ApiService} from '../../../../api.service'

import { MetaService } from '@ngx-meta/core';


const moment = _rollupMoment || _moment;

export interface DialogData {
  msg: string;
}


// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/

// export const MY_FORMATS = {
//   parse: {
//     dateInput: 'LL',
//   },
//   display: {
//     dateInput: 'LL',
//     monthYearLabel: 'MMM YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'MMMM YYYY',
//   },
// };
//================================================================



@Component({
  selector: 'app-add-edit-manage-event',
  templateUrl: './add-edit-manage-event.component.html',
  styleUrls: ['./add-edit-manage-event.component.css'],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue:MAT_MOMENT_DATE_FORMATS},
  ]
})


export class AddEditManageEventComponent implements OnInit {

public image_url:any=environment['imageUpload_url'];
  
  public eventForm:FormGroup;
  public booking_flag:boolean=false;
  public data: any ={};
  public action:any;
  public header_txt: any = 'Add Event';
  public name_txt:any="Add Event";
  public btn_text:any='SUBMIT';
  public successMessage:any="Submitted Successfully!!!";
  public img_flag:any=false;
  public condition:any;
  public defaultData:any;
  public fullImagePath:any;
  public imageName:any;
  public imageType:any;
  public ErrCode: boolean;
  public dialogRef: any;
  public cityList:any;
  public stateList:any;
  public allCities:any;

  // sticky section
  isSticky: boolean = false;
  stickyRight: boolean = false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;
  }


   /**ckeditor start here*/
  //  public Editor = ClassicEditor;  //for ckeditor
  //  editorConfig = {
  //    placeholder: 'Description....',
     
  //  };
  
   public model = {
     editorData: ''
   };
   /**ckeditor end here*/  

//image uplolad
  //  public configData: any = {
  //   baseUrl: this.image_url,
  //   endpoint: "uploads",
  //   size: "51200", // kb
  //   format: ["jpg", "jpeg", "png", "bmp", "zip", 'html'], // use all small font
  //   type: "event-picture",
  //   path: "files",
  //   prefix: "event_picture_"
  // }



  public configData: any = {
    baseUrl: "https://fileupload.influxhostserver.com/",
    endpoint: "uploads",
    size: "51200", // kb
    format:["jpg", "jpeg", "png", "bmp", "zip", 'html'],  // use all small font
    type: "event-picture",
    path: "files",
    prefix: "event-picture",
    formSubmit: false,
    conversionNeeded: 0,
    bucketName: "probidfiles-dev.com" 
  }
  

  //time zone json

  public timeZoneList:any=[
    {
      "name":"Central Standard Time",
      "value":"CST"
    },
    {
      "name":"Mountain Standard Time(GMT-07:00)",
      "value":"MST(GMT-07:00)" 
    },
    {
      "name":"Mountain StandardT ime (GMT-06:00)",
      "value":"MST(GMT-06:00)" 
    },
    {
      "name":"Pacific Standard Time",
      "value":"PST" 
    },
    {
      "name":"Alaska Standard Time",
      "value":"AST" 
    },
    {
      "name":"Hawaii-Aleutian Standard Time",
      "value":"HST" 
    },
    {
      "name":"Eastern Standard Time",
      "value":"EST" 
    }

  ]

  constructor(public fb:FormBuilder,public _http: HttpService, private _authHttp: HttpClient, private cookieService: CookieService,public router:Router,public activatedRoute:ActivatedRoute,public dialog: MatDialog, public activeroute: ActivatedRoute,public datePipe:DatePipe, private readonly meta: MetaService,public apiService:ApiService) { 

    this.activatedRoute.params.subscribe(params => {
      if (params['_id'] != null) {
        this.action = "edit";
        this.condition = { id: params._id };
        this.activatedRoute.data.subscribe(resolveData => {
          this.defaultData = resolveData.eventList.res[0];
          // console.log('+++++++++++++',this.defaultData)
        });
      }
      else
        this.action = "add";
    });



    this.meta.setTitle('Arniefonseca - Event');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Event');
    this.meta.setTag('twitter:title', 'Arniefonseca - Event');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');

    this.cityJson();
    this.stateJson();
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
        this.header_txt="Edit Event"
        this.name_txt="Edit Event";
        this.successMessage = "One row updated";
        this.setDefaultValue(this.defaultData);
        this.img_flag = true;
        break;
    }
    
  }


    //state json

    stateJson(){
      this.apiService.getJsonObject('assets/json/states.json').subscribe(resc=>{
        let result=resc;
        // console.log(result);
        this.stateList = result;
  
      })
    }


  //city json

  cityJson(){
    this.apiService.getJsonObject('assets/json/city.json').subscribe(res=>{
      let result=res;
      // console.log(result);
      this.cityList = result;


    })
  }

  getCity(event) {
    var val = event;
    this.allCities = this.cityList[val];
  }




  //form generate//
  generateForm(){
    this.eventForm=this.fb.group({
      title:['',Validators.required],
      date:['',Validators.required],
      event_date:[''],
      location:['',Validators.required],
      description:['',Validators.required],
      booking:['No'],
      bookingLink:[],
      time:['',Validators.required],
      status:[],
      type:['',Validators.required],
      event_image:[],
      timeZone:[],
      state:['',Validators.required],
      city:['',Validators.required]

    }) 
   
  }



  // set default value //
  setDefaultValue(defaultValue:any){

    // console.log('#########+++++++++++++++',defaultValue);
    setTimeout(() => {
      this.getCity(defaultValue.state);

    }, 500);

    this.eventForm.patchValue({
      title:defaultValue.title,
      event_date:defaultValue.date,
      location:defaultValue.location,
      description:defaultValue.description,
      booking:defaultValue.booking,
      bookingLink:defaultValue.bookingLink,
      time:defaultValue.time,
      status:defaultValue.status,
      type:defaultValue.type,
      event_image:defaultValue.event_image,
      timeZone:defaultValue.timeZone,
      state:defaultValue.state,
      city:defaultValue.city
      

    })
    let sDateArr: any = defaultValue.event_date.split("-");
    this.eventForm.controls['date'].patchValue(moment([sDateArr[2], sDateArr[1] - 1, sDateArr[0]]));


  this.fullImagePath=defaultValue.event_image.basepath + defaultValue.event_image.image;
  this.imageName=defaultValue.event_image.name;
  this.imageType=defaultValue.event_image.type;
  }





  // =========================================MODAL functions==========================================
  openDialog(x: any): void {
    this.dialogRef = this.dialog.open(EventModal, {
      width: '250px',
      data: { msg: x }
    });

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }
  // =====================================================================================================



  //form submit function//
  submit(){
    console.log('hit')
    //  File Upload Works 
    if (this.configData.files) {

      if (this.configData.files.length > 1) { this.ErrCode = true; return; }
      this.eventForm.value.event_image =
        {
          "basepath": this.configData.files[0].upload.data.basepath + '/' + this.configData.path + '/',
          "image": this.configData.files[0].upload.data.data.fileservername,
          "name": this.configData.files[0].name,
          "type": this.configData.files[0].type
        };
    } else {
      this.eventForm.value.event_image = false;
    }
    // console.log('>>>>>>>>>>>>>>',this.eventForm.value.event_image)


    let eventDate:any;
    eventDate=this.eventForm.value.date;
    // console.log('$$$$$$$$$$$$',this.eventForm.value.date);

    let dateFormat:any;
    //change format date

    dateFormat=this.datePipe.transform(this.eventForm.value.date,"MM-dd-yyyy");

    // console.log("******",dateFormat)

    //unix code converted date

    eventDate=moment(this.eventForm.value.date).format('x');

    // console.log('eventDate',eventDate)



    //blur function
    for(let i in this.eventForm.controls){
      this.eventForm.controls[i].markAsTouched();
    }


    // console.log('>>>>>>>>>>>')

    if(this.eventForm.valid){
      console.log('>>>',this.eventForm.value)

      this.eventForm.value.date=parseInt(eventDate);

      this.eventForm.value.event_date=dateFormat;

    

      // console.log(this.eventForm.value);

       //status
       if (this.eventForm.value.status) {
        this.eventForm.value.status = parseInt("1");
      }
      else {
        this.eventForm.value.status = parseInt("0");
      }


      //start process for add or update
      let postData: any = {
        "source": 'event',
        "data": Object.assign(this.eventForm.value, this.condition),
        "token": this.cookieService.get('jwtToken')
      };

      console.log(postData)

      this.apiService.CustomRequest(postData,'addorupdatedata').subscribe((response: any) => {
        let result: any;
        result = response;
        console.log('>>>>>>', result)

        if (result.status == "success") {

          this.openDialog(this.successMessage);
          setTimeout(() => {
         this.dialogRef.close();
          }, 500);

          setTimeout(() => {
            this.router.navigateByUrl('/manage-event-listing');
          }, 1000);

        }

      })


    }
  }



//blur function validation//
  inputBlur(val:any){
    // console.log(val);
    this.eventForm.controls[val].markAsUntouched();
  }

  //image clear//
  clear_image(){
    this.img_flag=false;
  }

}





//____________ modal section ______________//


@Component({
  selector: 'app-modal',
  templateUrl: 'event-modal.html',
})
export class EventModal {

  constructor(
    public dialogRef: MatDialogRef<EventModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}





