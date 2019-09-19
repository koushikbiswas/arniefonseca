import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MatDialog } from "@angular/material";
export interface DialogData {
    message: string;
}
export declare class AddBlogComponent implements OnInit {
    fb: FormBuilder;
    activeroute: ActivatedRoute;
    apiservice: ApiService;
    _http: HttpClient;
    router: Router;
    dialog: MatDialog;
    /**ckeditor start here*/
    Editor: any;
    editorConfig: {
        placeholder: string;
    };
    model: {
        editorData: string;
    };
    /**ckeditor end here*/
    /**blog varibles declaration start here**/
    dialogRef: any;
    getDataEndpointData: any;
    addEndpointData: any;
    serverUrlData: any;
    listUrl: any;
    blogarray: any;
    isSubmitted: boolean;
    blogAddEditForm: FormGroup;
    params_id: any;
    editarray: any;
    statusarray: any;
    allData: any;
    /**blog varibles declaration end here**/
    headerText: any;
    buttonText: any;
    messageText: any;
    listRoute: any;
    serverUrl: any;
    getDataEndpoint: any;
    addEndpoint: any;
    singleData: any;
    constructor(fb: FormBuilder, activeroute: ActivatedRoute, apiservice: ApiService, _http: HttpClient, router: Router, dialog: MatDialog);
    ngOnInit(): void;
    openDialog(x: any): void;
    /**modal end here */
    /**validation untouch purpose **/
    inputUntouch(form: any, val: any): void;
    /** getting all blogs data start here **/
    getBlogData(): void;
    /**add & update* blogs submitting form start here**/
    blogAddEditFormSubmit(): void;
}
export declare class Dialogtest {
    dialogRef: MatDialogRef<Dialogtest>;
    data: DialogData;
    is_error: any;
    constructor(dialogRef: MatDialogRef<Dialogtest>, data: DialogData);
}
