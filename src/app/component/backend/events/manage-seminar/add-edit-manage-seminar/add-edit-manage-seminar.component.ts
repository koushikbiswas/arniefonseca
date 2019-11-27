import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
// import 'angular-material-time-picker/dist/md-time-picker.css';
// import {ngTimePicker} from '@angular-material-time-picker';
import * as moment_ from 'moment';
import { IgxTimePickerComponent } from "igniteui-angular";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const moment = moment_;


@Component({
  selector: 'app-add-edit-manage-seminar',
  templateUrl: './add-edit-manage-seminar.component.html',
  styleUrls: ['./add-edit-manage-seminar.component.css']
})
export class AddEditManageSeminarComponent implements OnInit {
  
  public eventForm:FormGroup;

  public booking_flag:boolean=false;
  public data: any ={};

   /**ckeditor start here*/
   public Editor = ClassicEditor;  //for ckeditor
   editorConfig = {
     placeholder: 'Write Event Details.... ',
   };
   public model = {
     editorData: ''
   };
   /**ckeditor end here*/  


  constructor(public fb:FormBuilder) { }

  ngOnInit() {
    this.generateForm();
  }


  //form generate//
  generateForm(){
    this.eventForm=this.fb.group({
      title:['',Validators.required],
      date:['',Validators.required],
      location:['',Validators.required],
      description:['',Validators.required],
      subTitle:['',Validators.required],
      booking:['No'],
      bookingLink:[],
      time:[]

    })    
  }


  //form submit function//
  submit(){
    let date:any;
    date=this.eventForm.value.date;
    date=moment(new Date()).format("DD/MM/YYYY");

    for(let i in this.eventForm.controls){
      this.eventForm.controls[i].markAsTouched();
    }
    console.log('>>>>>>>>>>>')
    if(this.eventForm.valid){
      this.eventForm.value.date=date;
      console.log(this.eventForm.value);

      
    }
  }


//blur function validation//
  inputBlur(val:any){
    console.log(val);
    this.eventForm.controls[val].markAsUntouched();
  }

}
