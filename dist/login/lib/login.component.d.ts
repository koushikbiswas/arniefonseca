import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
export declare class LoginComponent implements OnInit {
    fb: FormBuilder;
    http: HttpClient;
    router: Router;
    apiService: ApiService;
    message: any;
    formDirective: FormGroupDirective;
    fromTitleValue: any;
    serverURL: any;
    signUpRouteingUrlValue: any;
    forgetRouteingUrlValue: any;
    routerStatusValue: any;
    endpointValue: any;
    logoValue: any;
    fromTitle: any;
    logo: any;
    fullUrl: any;
    endpoint: any;
    signUpRouteingUrl: any;
    forgetRouteingUrl: any;
    routerStatus: any;
    loginForm: FormGroup;
    project_name: any;
    constructor(fb: FormBuilder, http: HttpClient, router: Router, apiService: ApiService);
    ngOnInit(): void;
    /********* Login Form Submit start here*********/
    loginFormSubmit(): void;
    inputUntouched(val: any): void;
    forgetpassword(): void;
    signup(): void;
}
