import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material';
export declare class ForgetPasswordComponent implements OnInit {
    fb: FormBuilder;
    private http;
    router: Router;
    apiService: ApiService;
    private snackBar;
    message: any;
    formDirective: FormGroupDirective;
    forgetPasswordForm: FormGroup;
    formTitleValue: any;
    serverUrlValue: any;
    signUpRouteingUrlValue: any;
    private domanUrlValue;
    addEndpointValue: any;
    logoValue: any;
    durationInSeconds: number;
    domanUrl: any;
    formTitle: any;
    serverUrl: any;
    logo: any;
    addEndpoint: any;
    signUpRouteingUrl: any;
    constructor(fb: FormBuilder, http: HttpClient, router: Router, apiService: ApiService, snackBar: MatSnackBar);
    ngOnInit(): void;
    /********* Forget password  Form Submit start here*********/
    forgetPasswordSubmit(): void;
    /********* Forget password  Form Submit end here*********/
    /********* openSnackBar function open start here*********/
    openSnackBar(): void;
    signup(): void;
    inputUntouched(val: any): void;
}
export declare class snackBarComponent {
}
