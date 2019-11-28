import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
// import 'angular-material-time-picker/dist/md-time-picker.css';
// import {ngTimePicker} from '@angular-material-time-picker';
import * as moment_ from 'moment';
import { IgxTimePickerComponent } from "igniteui-angular";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {environment } from '../../../../../environments/environment.prod';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router'
import { HttpService} from 'src/app/services/http.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



export interface DialogData {
  msg: string;
}


const moment = moment_;


@Component({
  selector: 'app-add-edit-manage-event',
  templateUrl: './add-edit-manage-event.component.html',
  styleUrls: ['./add-edit-manage-event.component.css']
})
export class AddEditManageEventComponent implements OnInit {
  
  public eventForm:FormGroup;
  public booking_flag:boolean=false;
  public data: any ={};
  public action:any;
  public header_txt: any = 'Add Event';
  public name_txt:any="ADD";
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


   /**ckeditor start here*/
   public Editor = ClassicEditor;  //for ckeditor
   editorConfig = {
     placeholder: 'Description..',
   };
   public model = {
     editorData: ''
   };
   /**ckeditor end here*/  

//image uplolad
   public configData: any = {
    baseUrl: "http://3.15.236.141:5005/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png", "bmp", "zip", 'html'], // use all small font
    type: "event-picture",
    path: "files",
    prefix: "event_picture_"
  }

  constructor(public fb:FormBuilder,public _http: HttpService, private _authHttp: HttpClient, private cookieService: CookieService,public router:Router,public activatedRoute:ActivatedRoute,public dialog: MatDialog, public activeroute: ActivatedRoute) { 

    this.activatedRoute.params.subscribe(params => {
      if (params['_id'] != null) {
        this.action = "edit";
        this.condition = { id: params._id };
        this.activatedRoute.data.subscribe(resolveData => {
          this.defaultData = resolveData.eventList.res[0];
          console.log('+++++++++++++',this.defaultData)
        });
      }
      else
        this.action = "add";
    });
  }



  ngOnInit() {
    this.generateForm();

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
        this.successMessage = "One row updated";
        this.setDefaultValue(this.defaultData);            
        this.header_txt = "Edit Event";
        this.img_flag = true;
        break;
    }
  }


  //form generate//
  generateForm(){
    this.eventForm=this.fb.group({
      title:['',Validators.required],
      date:['',Validators.required],
      location:['',Validators.required],
      description:['',Validators.required],
      booking:['No'],
      bookingLink:[],
      time:['',Validators.required],
      status:[],
      type:['',Validators.required],
      event_image:[]

    }) 
   
  }



  // set default value //
  setDefaultValue(defaultValue:any){

    console.log('#########',defaultValue);
    this.eventForm.patchValue({
      title:defaultValue.title,
      date:defaultValue.date,
      location:defaultValue.location,
      description:defaultValue.description,
      booking:defaultValue.booking,
      bookingLink:defaultValue.bookingLink,
      time:defaultValue.time,
      status:defaultValue.status,
      type:defaultValue.type,
      event_image:defaultValue.event_image

    })
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
    console.log('>>>>>>>>>>>>>>',this.eventForm.value.event_image)




    let date:any;
    date=this.eventForm.value.date;
    date=moment(new Date()).format("DD/MM/YYYY");

    //blur function
    for(let i in this.eventForm.controls){
      this.eventForm.controls[i].markAsTouched();
    }


    console.log('>>>>>>>>>>>')

    if(this.eventForm.valid){

      this.eventForm.value.date=date;
      console.log(this.eventForm.value);

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

      this._http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
        let result: any;
        result = response;
        console.log('>>>>>>', result)

        if (result.status == "success") {

          this.openDialog(this.successMessage);
          setTimeout(() => {
            this.dialogRef.close();
          }, 2000);

          this.router.navigateByUrl('/manage-seminar-listing');
        }

      })



    }
  }



//blur function validation//
  inputBlur(val:any){
    console.log(val);
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





