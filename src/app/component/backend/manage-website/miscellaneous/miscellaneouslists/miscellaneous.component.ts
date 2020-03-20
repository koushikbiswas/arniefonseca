import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../../api.service';
import { environment } from '../../../../../../environments/environment';
import { MetaService } from '@ngx-meta/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { CommonComponent } from '../../../common/common.component';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
// import { ApiService } from '../../../../../api.service';


export interface PeriodicElement {
  _id:string;
  viewAction:any;
  no:number;
  name:string;
  address:string;
  created_at:number;
  email: string;
  message: string;
  phone: number;
}
const ALLDATA: PeriodicElement[] = [];
@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.css']
})
export class MiscellaneousComponent implements OnInit {
  displayedColumns: string[] = ['no','name','address','email','message', 'phone','created_at','viewAction'];
  public dataSource: any;
  public dialogRef: any;
  public deleteId:any
  public deleteIndex:any;
  public user_details:any; 
  public contactUsData: any;  public user_cookie: any;
  contactUsData_skip: any = ["_id", "created_at"];
  detail_skip_array: any = ["_id"]
  contactUsData_modify_header: any = {
    "locationname": "Name"
  };
  tableName: any = 'contactusForm';
  UpdateEndpoint: any = "addorupdatedata";
  deleteEndpoint: any = "deletesingledata";
  view: any = "contactusForm";
  public dataList:any=[];
  public singleData:any;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  constructor(public dialog: MatDialog,private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiservice: ApiService, private readonly meta: MetaService) { 
    this.meta.setTitle('Arniefonseca - Miscellaneous');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca -  Miscellaneous');
    this.meta.setTag('twitter:title', 'Arniefonseca -  Miscellaneous');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://arniefonseca-backend.influxiq.com/assets/images/logo.png');

    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {      
      this.user_details = JSON.parse(this.cookieService.get('user_details'));
    }
    this.activatedRoute.data.forEach(data => {
      this.dataList = data.miscellaneousData.miscellaneousdata;
      this.dataSource = new MatTableDataSource(this.dataList);
    })

  }

  ngOnInit() {
   
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    }, 100);
  }
  deleteRecord(id:any,index:any){
    this.deleteId = id;
    this.deleteIndex = index;
    let modalData: any = {
      panelClass: 'delete-dialog',
      data: {
        header: "Message",
        message: "Are you want to delete these record ?",
        button1: { text: "No" },
        button2: { text: "Yes" },
      }
    }
    this.dialogRef = this.dialog.open(CommonComponent, modalData);
    this.dialogRef.afterClosed().subscribe(result => {

      switch (result) {
        case "No":
          break;
        case "Yes":
          this.deleteFunction(id, index);
          break;
      }
    });
  }
  deleteFunction(id:any,index:any){
    let data: any = {
      endpoint: 'deletesingledata',
      source: 'contactusForm',
      id:id
    }
    this.apiservice.getDatalist(data).subscribe((res: any) => {
      if (res.status = "success") {
        this.dataList.splice(index, 1);
        let allData: PeriodicElement[] = this.dataList;
        this.dataSource = new MatTableDataSource(allData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }

    })

  }
  singledatafetch(id:any){
   let data: any = {
    endpoint: 'datalist',
    source: 'contactusForm',
    condition: {
      "_id_object": id
    }  }
  this.apiservice.getDatalist(data).subscribe((res: any) => {
    if (res.status = "success") {
       this.singleData = res.res;
       console.log("single data",this.singleData);
       let modalData: any = {
        panelClass: 'delete-dialog',
        data: {
          header: "User Details",
          singledata:this.singleData,
          message: "",
          button1: { text: "" },
          button2: { text: "" },
        }
      }
      this.dialogRef = this.dialog.open(CommonComponent, modalData);
      this.dialogRef.afterClosed().subscribe(result => {
      });

    }

  })
  }
}
