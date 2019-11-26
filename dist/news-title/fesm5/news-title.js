import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListingModule } from 'listing-angular7';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DatePipe, CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, Validators, FormGroupDirective, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatDialogModule, MatDialog as MatDialog$1, MatDialogRef as MatDialogRef$1, MAT_DIALOG_DATA as MAT_DIALOG_DATA$1 } from '@angular/material/dialog';
import { Injectable, Component, Input, NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA, ViewChild, defineInjectable, inject } from '@angular/core';
import { AmazingTimePickerService, AmazingTimePickerModule } from 'amazing-time-picker';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NewsTitleService = /** @class */ (function () {
    function NewsTitleService(_http, _authHttp, cookieService) {
        this._http = _http;
        this._authHttp = _authHttp;
        this.cookieService = cookieService;
        this.progress = [];
        this.uploaderror = '';
        this.accesstoken = this.cookieService.get('jwtToken');
        this.fileservername = [];
        this.serverUrl = '';
        this.getdata_endpointUrl = 'datalist';
    }
    /**
     * @return {?}
     */
    NewsTitleService.prototype.isTokenExpired = /**
     * @return {?}
     */
    function () {
        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
        // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        // console.log('refresh_token',localStorage.getItem('refresh_token'))
        // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
        // console.log('id_token isExpired:',isIdTokenExpired)
        // console.log('refresh_token isExpired:',isRefreshTokenExpired)
    };
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    NewsTitleService.prototype.addData = /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    function (endpoint, requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    NewsTitleService.prototype.UpdateData = /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    function (endpoint, requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    NewsTitleService.prototype.getData = /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    function (endpoint, requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    NewsTitleService.prototype.deleteSingleData = /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    function (endpoint, requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    NewsTitleService.prototype.deleteMultipleData = /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    function (endpoint, requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    NewsTitleService.prototype.UpdateStatusForSingleData = /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    function (endpoint, requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    NewsTitleService.prototype.UpdateStatusForMultipleData = /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    function (endpoint, requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint + 'many', JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    NewsTitleService.prototype.CustomRequest = /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    function (endpoint, requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    NewsTitleService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NewsTitleService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: HttpClient },
        { type: CookieService }
    ]; };
    /** @nocollapse */ NewsTitleService.ngInjectableDef = defineInjectable({ factory: function NewsTitleService_Factory() { return new NewsTitleService(inject(HttpClient), inject(HttpClient), inject(CookieService)); }, token: NewsTitleService, providedIn: "root" });
    return NewsTitleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApiService = /** @class */ (function () {
    function ApiService(_http, _authHttp, cookieService) {
        var _this = this;
        this._http = _http;
        this._authHttp = _authHttp;
        this.cookieService = cookieService;
        this.progress = [];
        this.uploaderror = '';
        this.accesstoken = this.cookieService.get('jwtToken');
        // public accesstoken:any='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjgzNTgyMTAsImlhdCI6MTU2ODI3MTgxMH0.2ltvxVKwfX1uwMOwQ2Zzgp1K2jiaCDj051Wyho0Iw-Q';
        this.fileservername = [];
        this.subjectForServerUrl = new Subject();
        this.subjectForaddEndpointUrl = new Subject();
        this.subjectForuploadEndpointUrl = new Subject(); //added by souresh
        //added by souresh
        this.subjectForupdateEndpointUrl = new Subject();
        this.subjectFordeletesingleEndpointUrl = new Subject();
        this.subjectForupdatestatusSingleEndpointUrl = new Subject();
        this.subjectForGetdataEndpointUrl = new Subject();
        this.subscriptionServer = this.getServerUrl().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            /** @type {?} */
            var result;
            result = message;
            if (result != null) {
                _this.serverUrl = result;
            }
            else {
                _this.serverUrl = null;
            }
        }));
        this.subscriptionaddEndpoint = this.getaddEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            /** @type {?} */
            var result;
            result = message;
            if (result != null) {
                _this.addendpointUrl = result;
            }
            else {
                _this.addendpointUrl = null;
            }
        }));
        /*********added by souresh***********/
        this.subscriptionuploadEndpoint = this.getuploadEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            /** @type {?} */
            var result;
            result = message;
            if (result != null) {
                _this.uploadEndpointUrl = result;
            }
            else {
                _this.uploadEndpointUrl = null;
            }
        }));
        /************souresh end here**************/
        this.subscriptionupdateEndpoint = this.getupdateEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            /** @type {?} */
            var result;
            result = message;
            if (result != null) {
                _this.updateendpointUrl = result;
            }
            else {
                _this.updateendpointUrl = null;
            }
        }));
        this.subscriptiondeletesingleEndpoint = this.getdeletesingleEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            /** @type {?} */
            var result;
            result = message;
            if (result != null) {
                _this.deletesingle_endpointUrl = result;
            }
            else {
                _this.deletesingle_endpointUrl = null;
            }
        }));
        this.subscriptionupdatestatusSingleEndpoint = this.getupdatestatus_singleEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            /** @type {?} */
            var result;
            result = message;
            if (result != null) {
                _this.updatestatus_single_endpointUrl = result;
            }
            else {
                _this.updatestatus_single_endpointUrl = null;
            }
        }));
        this.subscriptionGetdataEndpoint = this.getdataEndpoint().subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            /** @type {?} */
            var result;
            result = message;
            if (result != null) {
                _this.getdata_endpointUrl = result;
            }
            else {
                _this.getdata_endpointUrl = null;
            }
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ApiService.prototype.setServerUrl = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subjectForServerUrl.next(value);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.clearServerUrl = /**
     * @return {?}
     */
    function () {
        this.subjectForServerUrl.next(null);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getServerUrl = /**
     * @return {?}
     */
    function () {
        return this.subjectForServerUrl.asObservable();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ApiService.prototype.setaddEndpoint = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subjectForaddEndpointUrl.next(value);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.clearaddEndpoint = /**
     * @return {?}
     */
    function () {
        this.subjectForaddEndpointUrl.next(null);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getaddEndpoint = /**
     * @return {?}
     */
    function () {
        return this.subjectForaddEndpointUrl.asObservable();
    };
    /*****added by souresh******/
    /**
     * **added by souresh*****
     * @param {?} value
     * @return {?}
     */
    ApiService.prototype.setuploadEndpont = /**
     * **added by souresh*****
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subjectForuploadEndpointUrl.next(value);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.clearuploadEndpoint = /**
     * @return {?}
     */
    function () {
        this.subjectForuploadEndpointUrl.next(null);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getuploadEndpoint = /**
     * @return {?}
     */
    function () {
        return this.subjectForuploadEndpointUrl.asObservable();
    };
    /********souresh end here********/
    /**
     * *****souresh end here*******
     * @param {?} value
     * @return {?}
     */
    ApiService.prototype.setupdateEndpoint = /**
     * *****souresh end here*******
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subjectForupdateEndpointUrl.next(value);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.clearupdateEndpoint = /**
     * @return {?}
     */
    function () {
        this.subjectForupdateEndpointUrl.next(null);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getupdateEndpoint = /**
     * @return {?}
     */
    function () {
        return this.subjectForupdateEndpointUrl.asObservable();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ApiService.prototype.setdeletesingleEndpoint = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subjectFordeletesingleEndpointUrl.next(value);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.cleardeletesingleEndpoint = /**
     * @return {?}
     */
    function () {
        this.subjectFordeletesingleEndpointUrl.next(null);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getdeletesingleEndpoint = /**
     * @return {?}
     */
    function () {
        return this.subjectFordeletesingleEndpointUrl.asObservable();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ApiService.prototype.setupdatestatus_singleEndpoint = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subjectForupdatestatusSingleEndpointUrl.next(value);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.clearupdatestatus_singleEndpoint = /**
     * @return {?}
     */
    function () {
        this.subjectForupdatestatusSingleEndpointUrl.next(null);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getupdatestatus_singleEndpoint = /**
     * @return {?}
     */
    function () {
        return this.subjectForupdatestatusSingleEndpointUrl.asObservable();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ApiService.prototype.setgetdataEndpoint = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subjectForGetdataEndpointUrl.next(value);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.cleargetdataEndpoint = /**
     * @return {?}
     */
    function () {
        this.subjectForGetdataEndpointUrl.next(null);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getdataEndpoint = /**
     * @return {?}
     */
    function () {
        return this.subjectForGetdataEndpointUrl.asObservable();
    };
    /**
     * @return {?}
     */
    ApiService.prototype.isTokenExpired = /**
     * @return {?}
     */
    function () {
        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
        // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        // console.log('refresh_token',localStorage.getItem('refresh_token'))
        // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
        // console.log('id_token isExpired:',isIdTokenExpired)
        // console.log('refresh_token isExpired:',isRefreshTokenExpired)
    };
    /**
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.addData = /**
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        console.log('in adddata apiservice');
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken //hard code written Authorization(temp)
            })
        };
        console.log('httpoptions', httpOptions, this.serverUrl, requestdata);
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /*******added by souresh************/
    /**
     * ****added by souresh***********
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.uploadFile = /**
     * ****added by souresh***********
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken //hard code written Authorization(temp)
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.uploadEndpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /*******souresh end here********/
    /**
     * ****souresh end here*******
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.UpdateData = /**
     * ****souresh end here*******
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken //hard code written Authorization(temp)
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.updateendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.getData = /**
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.getdata_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /*************** Added by himadri start here ***************/
    /**
     * ************ Added by himadri start here **************
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.addLogin = /**
     * ************ Added by himadri start here **************
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        console.log('in addLogin apiservice');
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
                // 'Authorization': this.accesstoken          //hard code written Authorization(temp)
            })
        };
        console.log(this.serverUrl, requestdata);
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /*************** Added by himadri end here ***************/
    /*************** Added by himadri start here ***************/
    /*************** Added by himadri end here ***************/
    /**
     * ************ Added by himadri start here **************
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.forgetPassword = /*************** Added by himadri end here ***************/
    /**
     * ************ Added by himadri start here **************
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        console.log('in forgetPassword apiservice');
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
                // 'Authorization': this.accesstoken          //hard code written Authorization(temp)
            })
        };
        console.log(this.serverUrl, requestdata);
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /*************** Added by himadri end here ***************/
    /**
     * ************ Added by himadri end here **************
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.deleteSingleData = /**
     * ************ Added by himadri end here **************
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.deleteMultipleData = /**
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.UpdateStatusForSingleData = /**
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} requestdata
     * @return {?}
     */
    ApiService.prototype.UpdateStatusForMultipleData = /**
     * @param {?} requestdata
     * @return {?}
     */
    function (requestdata) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} requestdata
     * @param {?} endpoint
     * @return {?}
     */
    ApiService.prototype.CustomRequest = /**
     * @param {?} requestdata
     * @param {?} endpoint
     * @return {?}
     */
    function (requestdata, endpoint) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    ApiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ApiService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: HttpClient },
        { type: CookieService }
    ]; };
    /** @nocollapse */ ApiService.ngInjectableDef = defineInjectable({ factory: function ApiService_Factory() { return new ApiService(inject(HttpClient), inject(HttpClient), inject(CookieService)); }, token: ApiService, providedIn: "root" });
    return ApiService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NewsTitleComponent = /** @class */ (function () {
    function NewsTitleComponent(fb, apiService, _snackBar, dialog) {
        // this.newsLatterForm = this.fb.group({
        //   fullname: ['', Validators.required],
        //   phone: ['', Validators.required],
        //   company: ['', Validators.required],
        //   email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]
        // });
        this.fb = fb;
        this.apiService = apiService;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.formTitleValue = '';
        this.serverUrlValue = '';
        this.addEndpointValue = '';
        this.logoValue = '';
        this.durationInSeconds = 10;
        // setInterval(()=> {
        //   this.openSnackBar(); },4000); 
    }
    Object.defineProperty(NewsTitleComponent.prototype, "formTitle", {
        set: /**
         * @param {?} formTitleVal
         * @return {?}
         */
        function (formTitleVal) {
            this.formTitleValue = formTitleVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsTitleComponent.prototype, "logo", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.logoValue = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsTitleComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlVal
         * @return {?}
         */
        function (serverUrlVal) {
            this.serverUrlValue = (serverUrlVal) || '<no name set>';
            this.serverUrlValue = serverUrlVal;
            // console.log("======================",this.serverUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsTitleComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} addEndpointVal
         * @return {?}
         */
        function (addEndpointVal) {
            this.addEndpointValue = addEndpointVal;
            // console.log(this.addEndpointValue)
        },
        enumerable: true,
        configurable: true
    });
    // openSnackBar() {
    //   this._snackBar.openFromComponent(NewsTitleComponent, {
    //     duration: this.durationInSeconds * 1000,
    //   });
    // }
    // openSnackBar() {
    //   this._snackBar.openFromComponent(NewsTitleComponent, {
    //     duration: this.durationInSeconds * 1000,
    //   });
    // }
    /**
     * @return {?}
     */
    NewsTitleComponent.prototype.ngOnInit = 
    // openSnackBar() {
    //   this._snackBar.openFromComponent(NewsTitleComponent, {
    //     duration: this.durationInSeconds * 1000,
    //   });
    // }
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.openDialog();
        }), 500);
    };
    // newsLatterFormSubmit() {
    //   for (const key in this.newsLatterForm.controls) {
    //     this.newsLatterForm.controls[key].markAsTouched();
    //   }
    //   if (this.newsLatterForm.valid) {
    //     console.log(this.newsLatterForm.value);
    //     let data: any = {
    //       'data': this.newsLatterForm.value,
    //       "source": this.addEndpointValue.source
    //     };
    //     this.apiService.addData(data).subscribe((responce) => {
    //       console.log(responce);
    //       let result: any = {};
    //       result = responce;
    //       if (result.status == "success") {
    //         this.formDirective.resetForm();
    //       }
    //     })
    //   }
    // }
    // inputUntouched(val: any) {
    //   console.log('ok----');
    //   this.newsLatterForm.controls[val].markAsUntouched();
    // }
    // newsLatterFormSubmit() {
    //   for (const key in this.newsLatterForm.controls) {
    //     this.newsLatterForm.controls[key].markAsTouched();
    //   }
    //   if (this.newsLatterForm.valid) {
    //     console.log(this.newsLatterForm.value);
    //     let data: any = {
    //       'data': this.newsLatterForm.value,
    //       "source": this.addEndpointValue.source
    //     };
    //     this.apiService.addData(data).subscribe((responce) => {
    //       console.log(responce);
    //       let result: any = {};
    //       result = responce;
    //       if (result.status == "success") {
    //         this.formDirective.resetForm();
    //       }
    //     })
    //   }
    // }
    // inputUntouched(val: any) {
    //   console.log('ok----');
    //   this.newsLatterForm.controls[val].markAsUntouched();
    // }
    /**
     * @return {?}
     */
    NewsTitleComponent.prototype.openDialog = 
    // newsLatterFormSubmit() {
    //   for (const key in this.newsLatterForm.controls) {
    //     this.newsLatterForm.controls[key].markAsTouched();
    //   }
    //   if (this.newsLatterForm.valid) {
    //     console.log(this.newsLatterForm.value);
    //     let data: any = {
    //       'data': this.newsLatterForm.value,
    //       "source": this.addEndpointValue.source
    //     };
    //     this.apiService.addData(data).subscribe((responce) => {
    //       console.log(responce);
    //       let result: any = {};
    //       result = responce;
    //       if (result.status == "success") {
    //         this.formDirective.resetForm();
    //       }
    //     })
    //   }
    // }
    // inputUntouched(val: any) {
    //   console.log('ok----');
    //   this.newsLatterForm.controls[val].markAsUntouched();
    // }
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dialogRef = this.dialog.open(modalData, {
            // width: '250px',
            data: {
                addEndpointValue: this.addEndpointValue,
                serverUrlValue: this.serverUrlValue,
                formTitleValue: this.formTitleValue,
                logoValue: this.logoValue
            }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            // console.log('The dialog was closed');
            // console.log(result);
        }));
    };
    NewsTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-newsTitle',
                    // templateUrl:'./news-title.component.html',
                    template: "",
                    styles: [".mat-form-field{display:inline-block;position:relative;text-align:left;width:100%}.material-icons{position:absolute;top:-20px;right:-20px;font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased}.logowrapper{margin:0 auto;display:block;text-align:center}h2{text-align:center;background-color:#00f;color:#f0f8ff;padding:10px;margin:0 auto}"]
                }] }
    ];
    /** @nocollapse */
    NewsTitleComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ApiService },
        { type: MatSnackBar },
        { type: MatDialog }
    ]; };
    NewsTitleComponent.propDecorators = {
        formTitle: [{ type: Input }],
        logo: [{ type: Input }],
        serverUrl: [{ type: Input }],
        addEndpoint: [{ type: Input }],
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }]
    };
    return NewsTitleComponent;
}());
var modalData = /** @class */ (function () {
    function modalData(dialogRef, data, apiService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.apiService = apiService;
        this.fb = fb;
        // console.log(data);
        this.newsLatterForm = this.fb.group({
            fullname: ['', Validators.required],
            group: [0,],
            phone: ['', Validators.required],
            company: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]
        });
    }
    /**
     * @return {?}
     */
    modalData.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiService.clearServerUrl(); //  Clear the server url
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.data.serverUrlValue); //  set the server url
        }), 50);
        // console.log("+++++++++++++++",this.data.serverUrlValue);
        this.apiService.clearaddEndpoint(); //  Clear the endpoint
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.data.addEndpointValue.endpoint); //  set the endpoint
        }), 50);
    };
    /**
     * @return {?}
     */
    modalData.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    /**
     * @return {?}
     */
    modalData.prototype.newsLatterFormSubmit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log(this.newsLatterForm.value);
        for (var key in this.newsLatterForm.controls) {
            this.newsLatterForm.controls[key].markAsTouched();
        }
        if (this.newsLatterForm.valid) {
            console.log(this.newsLatterForm.value);
            /** @type {?} */
            var data = {
                'data': this.newsLatterForm.value,
                "source": this.data.addEndpointValue.source
            };
            this.apiService.addData(data).subscribe((/**
             * @param {?} responce
             * @return {?}
             */
            function (responce) {
                console.log(responce);
                /** @type {?} */
                var result = {};
                result = responce;
                if (result.status == "success") {
                    _this.formDirective.resetForm();
                }
            }));
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    modalData.prototype.inputUntouched = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log('ok---?-');
        this.newsLatterForm.controls[val].markAsUntouched();
    };
    modalData.decorators = [
        { type: Component, args: [{
                    selector: 'modalData',
                    template: "\n<mat-card >\n\n        <span class=\"logowrapper\" *ngIf=\"data.logoValue != ''\" >\n             <img  [src]=\"data.logoValue\">\n         </span>\n   \n       <h2 *ngIf=\"data.formTitleValue != ''\"> {{data.formTitleValue}}</h2>\n   \n       <form [formGroup]=\"newsLatterForm\" (ngSubmit)=\"newsLatterFormSubmit()\" novalidate>\n           <mat-form-field>\n               <input matInput placeholder=\"Name \" formControlName=\"fullname\" (blur)=\"inputUntouched('fullname')\">\n               <mat-error\n                           *ngIf=\"!newsLatterForm.controls['fullname'].valid && newsLatterForm.controls['fullname'].errors.required && newsLatterForm.controls['fullname'].touched\">\n                           Name field can not be blank</mat-error>\n           </mat-form-field>\n   \n           <!--Phone field start here-->\n           <mat-form-field>\n               <input matInput placeholder=\"Phone \" formControlName=\"phone\" (blur)=\"inputUntouched('phone')\">\n               <mat-error *ngIf=\"!newsLatterForm.controls['phone'].valid && newsLatterForm.controls['phone'].errors.required && newsLatterForm.controls['phone'].touched\">\n                           Phone field can not be blank</mat-error>\n           </mat-form-field>\n   \n           <!-- Email field start here-->\n           <mat-form-field>\n               <input matInput placeholder=\"Email \" formControlName=\"email\" (blur)=\"inputUntouched('email')\">\n               <mat-error\n                           *ngIf=\"!newsLatterForm.controls['email'].valid && !newsLatterForm.controls['email'].errors.required\">\n                           Email is not valid</mat-error>\n                       <mat-error\n                           *ngIf=\"!newsLatterForm.controls['email'].valid && newsLatterForm.controls['email'].errors.required\">\n                           Email field can not be blank</mat-error>\n           </mat-form-field>\n   \n           <!--Company field start here-->\n           <mat-form-field>\n               <input matInput placeholder=\"Company \" formControlName=\"company\" (blur)=\"inputUntouched('company')\">\n               <mat-error\n                           *ngIf=\"!newsLatterForm.controls['company'].valid && newsLatterForm.controls['company'].errors.required && newsLatterForm.controls['company'].touched\">\n                           Full Name field can not be blank</mat-error>\n           </mat-form-field>\n   \n   \n           <button mat-raised-button color=\"primary\">Submit</button>\n           <!-- <button mat-raised-button color=\"primary\"(click)=\"onNoClick()\">No Thanks</button> -->\n           <i class=\"material-icons\" (click)=\"onNoClick()\">\n               clear\n               </i>\n   \n   \n       </form>\n   </mat-card>",
                    styles: [".mat-form-field{display:inline-block;position:relative;text-align:left;width:100%}.material-icons{position:absolute;top:-20px;right:-20px;font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased}.logowrapper{margin:0 auto;display:block;text-align:center}h2{text-align:center;background-color:#00f;color:#f0f8ff;padding:10px;margin:0 auto}"]
                }] }
    ];
    /** @nocollapse */
    modalData.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: ApiService },
        { type: FormBuilder }
    ]; };
    modalData.propDecorators = {
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }]
    };
    return modalData;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        A11yModule,
                        CdkStepperModule,
                        CdkTableModule,
                        CdkTreeModule,
                        DragDropModule,
                        MatAutocompleteModule,
                        MatBadgeModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatButtonToggleModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatChipsModule,
                        MatStepperModule,
                        MatDatepickerModule,
                        MatDialogModule,
                        MatDividerModule,
                        MatExpansionModule,
                        MatGridListModule,
                        MatIconModule,
                        MatInputModule,
                        MatListModule,
                        MatMenuModule,
                        MatNativeDateModule,
                        MatPaginatorModule,
                        MatProgressBarModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatRippleModule,
                        MatSelectModule,
                        MatSidenavModule,
                        MatSliderModule,
                        MatSlideToggleModule,
                        MatSnackBarModule,
                        MatSortModule,
                        MatTableModule,
                        MatTabsModule,
                        MatToolbarModule,
                        MatTooltipModule,
                        MatTreeModule,
                        PortalModule,
                        ScrollingModule,
                    ]
                },] }
    ];
    return DemoMaterialModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListingNewsletterComponent = /** @class */ (function () {
    // =========================================================================================
    function ListingNewsletterComponent() {
        this.loader = true;
    }
    /**
     * @return {?}
     */
    ListingNewsletterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(ListingNewsletterComponent.prototype, "config", {
        // ================================================Input For Lib Listing================================
        set: 
        // ================================================Input For Lib Listing================================
        /**
         * @param {?} receivedData
         * @return {?}
         */
        function (receivedData) {
            this.newsLetterListConfig = {
                apiUrl: receivedData.apiBaseUrl,
                listEndPoint: receivedData.listEndPoint,
                datasource: receivedData.datasource,
                tableName: receivedData.tableName,
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at", "image"],
                listArray_modify_header: { "fullname": "Full Name", "phone": "Phone", "company": "Company", "email": "Email", "group": "Group" },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
                search_settings: {
                    textsearch: [{ label: "Search by customer name...", field: 'fullname' }, { label: "Search by email...", field: 'email' }],
                }
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    ListingNewsletterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing-newsletter',
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"newsLetterListConfig.datasource !=null && newsLetterListConfig.datasource.length > 0\"\n      [datasource]=\"newsLetterListConfig.datasource\" [skip]=\"newsLetterListConfig.listArray_skip\"\n      [modify_header_array]=\"newsLetterListConfig.listArray_modify_header\" [sourcedata]=\"newsLetterListConfig.tableName\"\n      [statusarr]=\"newsLetterListConfig.statusarr\" [jwttoken]=\"newsLetterListConfig.jwtToken\"\n      [apiurl]=\"newsLetterListConfig.apiUrl\" [editroute]=\"newsLetterListConfig.editUrl\"\n      [deleteendpoint]=\"newsLetterListConfig.deleteEndPoint\"\n      [date_search_source]=\"newsLetterListConfig.view\"\n     [date_search_endpoint]=\"newsLetterListConfig.listEndPoint\"\n     [search_settings]=\"newsLetterListConfig.search_settings\">\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <h2 *ngIf=\"newsLetterListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListingNewsletterComponent.ctorParameters = function () { return []; };
    ListingNewsletterComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListingNewsletterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddEditSubcategoryComponent = /** @class */ (function () {
    function AddEditSubcategoryComponent(formBuilder, newsletterService, router, dialog) {
        this.formBuilder = formBuilder;
        this.newsletterService = newsletterService;
        this.router = router;
        this.dialog = dialog;
        // ====================declarations==================
        this.buttonText = "SUBMIT";
        this.header_name = "Add Subscription Category";
        this.successMessage = "Submitted Successfully!!!";
    }
    Object.defineProperty(AddEditSubcategoryComponent.prototype, "config", {
        // ==================================================
        set: 
        // ==================================================
        /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.configData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AddEditSubcategoryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        //generating the form
        this.generateForm();
        // --------------------------------checking the cases------------------------ 
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.successMessage = "One row updated!!!";
                this.setDefaultValue(this.configData.defaultData);
                this.header_name = "EDIT";
                break;
        }
        // --------------------------------------------------------------------------
    };
    // =========================================MODAL functions==========================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    AddEditSubcategoryComponent.prototype.openDialog = 
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Modal, {
            width: '250px',
            data: { msg: x }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
        }));
    };
    // =====================================================================================================
    // ================================================Default value======================================
    // =====================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditSubcategoryComponent.prototype.setDefaultValue = 
    // =====================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        this.subscriptionCatForm.patchValue({
            name: defaultValue.name,
            priority: defaultValue.priority,
            status: defaultValue.status,
        });
    };
    // ==================================================================================================
    // ======================form generation=====================
    // ==================================================================================================
    // ======================form generation=====================
    /**
     * @return {?}
     */
    AddEditSubcategoryComponent.prototype.generateForm = 
    // ==================================================================================================
    // ======================form generation=====================
    /**
     * @return {?}
     */
    function () {
        this.subscriptionCatForm = this.formBuilder.group({
            name: [],
            priority: [],
            status: []
        });
    };
    // ==========================================================
    // =========================SUBMIT FUNCTION======================
    // ==========================================================
    // =========================SUBMIT FUNCTION======================
    /**
     * @return {?}
     */
    AddEditSubcategoryComponent.prototype.onSubmit = 
    // ==========================================================
    // =========================SUBMIT FUNCTION======================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /* stop here if form is invalid */
        if (this.subscriptionCatForm.invalid) {
            return;
        }
        else {
            if (this.subscriptionCatForm.value.status) {
                this.subscriptionCatForm.value.status = parseInt("1");
            }
            else {
                this.subscriptionCatForm.value.status = parseInt("0");
            }
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.subscriptionCatForm.value, this.configData.condition)
            };
            this.newsletterService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    _this.openDialog(_this.successMessage);
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.dialogRef.close();
                    }), 2000);
                    _this.router.navigate([_this.configData.callBack]);
                }
                else {
                    alert("Some error occurred. Please try angain.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                alert("Some error occurred. Please try angain.");
            }));
        }
    };
    AddEditSubcategoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-subcategory',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n      <form autocomplete=\"off\" [formGroup]=\"subscriptionCatForm\">\n\n\n        <!-- Name  -->\n        <mat-form-field>\n          <mat-label>Name</mat-label>\n          <input matInput placeholder=\"name\" formControlName=\"name\">\n        </mat-form-field>\n\n\n        <!-- Priority -->\n\n        <mat-form-field>\n          <mat-label>Priority</mat-label>\n          <input matInput placeholder=\"priority\" type=\"number\" formControlName=\"priority\">\n        </mat-form-field>\n\n        <!-- Status  -->\n        <mat-label>Status</mat-label>\n        <mat-checkbox formControlName=\"status\">Active</mat-checkbox><br>\n\n\n        <!-- Button  -->\n        <button type=\"button\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\" (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n      </form>\n\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditSubcategoryComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: NewsTitleService },
        { type: Router },
        { type: MatDialog$1 }
    ]; };
    AddEditSubcategoryComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddEditSubcategoryComponent;
}());
// ============================================MODAL COMPONENT===========================================
var Modal = /** @class */ (function () {
    function Modal(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    Modal.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    Modal.decorators = [
        { type: Component, args: [{
                    selector: 'app-modal',
                    template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
                }] }
    ];
    /** @nocollapse */
    Modal.ctorParameters = function () { return [
        { type: MatDialogRef$1 },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA$1,] }] }
    ]; };
    return Modal;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListingSubcategoryComponent = /** @class */ (function () {
    // ====================================================================================================
    function ListingSubcategoryComponent() {
        this.loader = true;
    }
    Object.defineProperty(ListingSubcategoryComponent.prototype, "config", {
        // =====================================================================================================
        // ================================================Input For Lib Listing================================
        set: 
        // =====================================================================================================
        // ================================================Input For Lib Listing================================
        /**
         * @param {?} receivedData
         * @return {?}
         */
        function (receivedData) {
            this.SubsCatListConfig = {
                apiUrl: receivedData.apiBaseUrl,
                listEndPoint: receivedData.listEndPoint,
                datasource: receivedData.datasource,
                tableName: receivedData.tableName,
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at", "image"],
                listArray_modify_header: { "name": "Name", "priority": "Priority", "status": "Status", "date_added": "Date" },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
                search_settings: {
                    textsearch: [{ label: "name...", field: 'name' }],
                    selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
                },
                /*Showing Image in the Modal*/
                pendingmodelapplicationarray_detail_datatype: [{
                        key: "image",
                        value: 'image',
                        fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/testimonial/' // Image path 
                    }],
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListingSubcategoryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ListingSubcategoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing-subcategory',
                    template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"SubsCatListConfig.datasource !=null && SubsCatListConfig.datasource.length > 0\"\n        [datasource]=\"SubsCatListConfig.datasource\" [skip]=\"SubsCatListConfig.listArray_skip\"\n        [modify_header_array]=\"SubsCatListConfig.listArray_modify_header\" [sourcedata]=\"SubsCatListConfig.tableName\"\n        [statusarr]=\"SubsCatListConfig.statusarr\" [jwttoken]=\"SubsCatListConfig.jwtToken\"\n        [apiurl]=\"SubsCatListConfig.apiUrl\" [editroute]=\"SubsCatListConfig.editUrl\"\n        [deleteendpoint]=\"SubsCatListConfig.deleteEndPoint\"\n        [date_search_source]=\"SubsCatListConfig.view\"\n       [date_search_endpoint]=\"SubsCatListConfig.listEndPoint\"\n       [search_settings]=\"SubsCatListConfig.search_settings\"\n       [detail_datatype]=\"SubsCatListConfig.pendingmodelapplicationarray_detail_datatype\">\n    </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"SubsCatListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListingSubcategoryComponent.ctorParameters = function () { return []; };
    ListingSubcategoryComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListingSubcategoryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddEditSubscriptiongroupComponent = /** @class */ (function () {
    // ========================================================
    function AddEditSubscriptiongroupComponent(formBuilder, cookieService, newsService, router, dialog) {
        this.formBuilder = formBuilder;
        this.cookieService = cookieService;
        this.newsService = newsService;
        this.router = router;
        this.dialog = dialog;
        this.buttonText = "SUBMIT";
        this.header_name = "Add a group to subscriptions";
        this.group_array = [];
        this.successMessage = "Group Added!!!";
    }
    /**
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        //generating the form
        this.generateForm();
        //getting the group
        this.getGroup();
        //Switch Case starts here
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                this.buttonText = "SUBMIT";
                this.header_name = "Add a Group";
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.setDefaultValue(this.configData.defaultData);
                this.header_name = "Change/Remove Group";
                break;
        }
    };
    Object.defineProperty(AddEditSubscriptiongroupComponent.prototype, "config", {
        set: /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.configData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    // =====================generate form==============
    // =====================generate form==============
    /**
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.generateForm = 
    // =====================generate form==============
    /**
     * @return {?}
     */
    function () {
        this.subGroupForm = this.formBuilder.group({
            fullname: [],
            phone: [],
            email: [],
            company: [],
            group: []
        });
    };
    // ================================================
    // ================================================Default value======================================
    // ================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.setDefaultValue = 
    // ================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        this.subGroupForm.patchValue({
            fullname: defaultValue.fullname,
            phone: defaultValue.phone,
            email: defaultValue.email,
            company: defaultValue.company,
            group: defaultValue.group
        });
    };
    // ==================================================================================================
    // =========================================MODAL functions==========================================
    // ==================================================================================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.openDialog = 
    // ==================================================================================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Modal2, {
            width: '250px',
            data: { msg: x }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
        }));
    };
    // =====================================================================================================
    // ==========================================SUBMIT=================================================
    // =====================================================================================================
    // ==========================================SUBMIT=================================================
    /**
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.onSubmit = 
    // =====================================================================================================
    // ==========================================SUBMIT=================================================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.subGroupForm.value.group == 0)
            this.successMessage = "Removed Group!!!";
        /* stop here if form is invalid */
        if (this.subGroupForm.invalid) {
            return;
        }
        else {
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.subGroupForm.value, this.configData.condition),
                "sourceobj": ["group"]
            };
            this.newsService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    _this.openDialog(_this.successMessage);
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.dialogRef.close();
                    }), 2000);
                    _this.router.navigate([_this.configData.callBack]);
                }
                else {
                    alert("Some error occurred. Please try angain.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                alert("Some error occurred. Please try angain.");
            }));
        }
    };
    // =================================================================================================
    //Getting the parent category
    // =================================================================================================
    //Getting the parent category
    /**
     * @return {?}
     */
    AddEditSubscriptiongroupComponent.prototype.getGroup = 
    // =================================================================================================
    //Getting the parent category
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var postData = {
            source: this.configData.group,
            token: this.cookieService.get('jwtToken')
        };
        this.newsService.getData(this.configData.endpoint2 + 'datalist', postData).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.group_array = response.res;
        }));
    };
    AddEditSubscriptiongroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-subscriptiongroup',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"subGroupForm\">\n        <!-- Name -->\n        <mat-form-field>\n          <mat-label>Name</mat-label>\n          <input matInput formControlName=\"fullname\">\n        </mat-form-field>\n\n        <!-- Phone -->\n        <mat-form-field>\n          <mat-label>Phone</mat-label>\n          <input matInput formControlName=\"phone\">\n        </mat-form-field>\n\n        <!-- Email -->\n        <mat-form-field>\n          <mat-label>Email</mat-label>\n          <input matInput formControlName=\"email\">\n        </mat-form-field>\n\n        <!-- Company -->\n        <mat-form-field>\n          <mat-label>Company</mat-label>\n          <input matInput formControlName=\"company\">\n        </mat-form-field>\n\n        <!-- Group  -->\n        <mat-form-field>\n          <mat-label>Group</mat-label>\n          <select matNativeControl formControlName=\"group\">\n               <option value=0>Remove Group</option>\n              <option value=\"{{  item._id }}\" *ngFor=\"let item of group_array\">{{ item.name  }}</option>\n            \n            </select>\n        </mat-form-field>\n\n\n\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\"  (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditSubscriptiongroupComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: CookieService },
        { type: NewsTitleService },
        { type: Router },
        { type: MatDialog$1 }
    ]; };
    AddEditSubscriptiongroupComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddEditSubscriptiongroupComponent;
}());
// ============================================MODAL COMPONENT===========================================
var Modal2 = /** @class */ (function () {
    function Modal2(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    Modal2.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    Modal2.decorators = [
        { type: Component, args: [{
                    selector: 'app-modal',
                    template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
                }] }
    ];
    /** @nocollapse */
    Modal2.ctorParameters = function () { return [
        { type: MatDialogRef$1 },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA$1,] }] }
    ]; };
    return Modal2;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddEditNewsletterlibComponent = /** @class */ (function () {
    function AddEditNewsletterlibComponent(atp, newsService, datepipe, cookieService, formBuilder, router) {
        this.atp = atp;
        this.newsService = newsService;
        this.datepipe = datepipe;
        this.cookieService = cookieService;
        this.formBuilder = formBuilder;
        this.router = router;
        // =================declaration==================
        this.header_name = "Newsletter";
        this.buttonText = "SAVE";
        this.group_name_array = [];
        this.sender_name_array = [];
        // ==============================================
        /**
         * ckeditor start here
         */
        this.Editor = ClassicEditor; //for ckeditor
        //for ckeditor
        this.editorConfig = {
            placeholder: 'Content:',
        };
        this.model = {
            editorData: ''
        };
    }
    Object.defineProperty(AddEditNewsletterlibComponent.prototype, "config", {
        /**ckeditor end here*/
        set: /**
         * ckeditor end here
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.configData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.configData.action == 'add')
            this.time = this.datepipe.transform(new Date(), 'h:mm a');
        //Calling the group name
        this.getGroupName();
        //Get sender's getGroupName
        this.getSenderAddress();
        //Getting the cookie value
        this.cookieValue = this.cookieService.getAll();
        //  calling the form generation 
        this.generateForm();
        this.newsForm.value.cookiemail = this.cookieService.get('get_email');
        /*Switch case*/
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                this.buttonText = "SUBMIT";
                this.header_name = "Add a Newsletter";
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.time = "";
                this.setDefaultValue(this.configData.defaultData);
                break;
        }
    };
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var amazingTimePicker = this.atp.open();
        amazingTimePicker.afterClose().subscribe((/**
         * @param {?} time
         * @return {?}
         */
        function (time) {
        }));
    };
    /*getting the group name*/
    /*getting the group name*/
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.getGroupName = /*getting the group name*/
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = { 'source': this.configData.group_table };
        this.newsService.getData(this.configData.endpoint2 + 'datalist', data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result;
            result = response;
            _this.group_name_array = result.res;
        }));
    };
    /*getting the sender's email*/
    /*getting the sender's email*/
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.getSenderAddress = /*getting the sender's email*/
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = { 'source': this.configData.sender_table };
        this.newsService.getData(this.configData.endpoint2 + 'datalist', data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result;
            result = response;
            _this.sender_name_array = result.res;
        }));
    };
    //generate form
    //generate form
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.generateForm = 
    //generate form
    /**
     * @return {?}
     */
    function () {
        this.newsForm = this.formBuilder.group({
            newstitle: [],
            newssubject: [],
            share_news: [],
            senderaddress: [],
            publishdate: [],
            settime: [this.time],
            content: [],
            sendnews: [],
            newsfrequency: [],
            timeofday: [this.time],
            timezone: [],
            startdate: [],
            enddate: [],
            reply: [],
            status: [1]
        });
    };
    //setting the default value
    //setting the default value
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.setDefaultValue = 
    //setting the default value
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        this.newsForm.patchValue({
            newstitle: defaultValue.newstitle,
            newssubject: defaultValue.newssubject,
            share_news: defaultValue.share_news,
            senderaddress: defaultValue.senderaddress,
            publishdate: defaultValue.publishdate,
            settime: defaultValue.settime,
            content: defaultValue.content,
            sendnews: defaultValue.sendnews,
            newsfrequency: defaultValue.newsfrequency,
            timeofday: defaultValue.timeofday,
            timezone: defaultValue.timezone,
            startdate: defaultValue.startdate,
            enddate: defaultValue.enddate,
            reply: defaultValue.reply
        });
    };
    //submit function
    //submit function
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.onSubmit = 
    //submit function
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /* stop here if form is invalid */
        if (this.newsForm.invalid) {
            console.log("Invalid Form");
            return;
        }
        else {
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.newsForm.value, this.configData.condition),
                "sourceobj": ["share_news", "senderaddress"]
            };
            this.newsService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    console.log(response.status);
                    _this.router.navigate([_this.configData.callBack]);
                }
                else {
                    alert("Some error occurred. Please try angain.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                alert("Some error occurred. Please try angain.");
            }));
        }
    };
    AddEditNewsletterlibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-newsletterlib',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"newsForm\">\n\n\n\n        <!-- Newsletter title  -->\n        <mat-form-field>\n          <mat-label>Newsletter Title:</mat-label>\n          <input matInput formControlName=\"newstitle\">\n        </mat-form-field>\n\n        <!-- Newsletter Subject  -->\n        <mat-form-field>\n          <mat-label>Newsletter Subject:</mat-label>\n          <input matInput formControlName=\"newssubject\">\n        </mat-form-field>\n\n\n        <!-- share newsletter with -->\n        <mat-form-field>\n          <mat-label>Share newsletter with group:</mat-label>\n          <mat-select matNativeControl required formControlName=\"share_news\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- sender's address  -->\n        <mat-form-field>\n          <mat-label>Sender's address</mat-label>\n          <mat-select matNativeControl required formControlName=\"senderaddress\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array'>{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Set Publish Date  -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Set publish date:\" formControlName=\"publishdate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n\n        <!-- Time Picker  -->\n        <mat-form-field>\n          <mat-label>Set time:</mat-label>\n          <input matInput atp-time-picker  formControlName=\"settime\"/>\n        </mat-form-field>\n\n\n        <!-- Content  -->\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"content\"></ckeditor>\n\n\n\n        <h1> SET FREQUENCY </h1>\n        <hr>\n\n\n        <!-- Automatically send newsletters to -->\n        <mat-form-field>\n          <mat-label>Automatically send newsletter to members:</mat-label>\n          <mat-select matNativeControl required formControlName=\"sendnews\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Newsletter frequency  -->\n        <mat-form-field>\n          <mat-label>Newsletter Frequency:</mat-label>\n          <mat-select matNativeControl required formControlName=\"newsfrequency\">\n            <mat-option value=\"daily\">Daily</mat-option>\n            <mat-option value=\"weekly\">Weekly</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- News letter Day of the week  -->\n        <div class=\"dayofweek\">\n          <h5>NewsLetter day of the week</h5>\n          <mat-card-content class=\"date_wrapper\">\n            <mat-checkbox>Sunday</mat-checkbox>\n            <mat-checkbox>Monday</mat-checkbox>\n            <mat-checkbox>Tuesday</mat-checkbox>\n            <mat-checkbox>Wednesday</mat-checkbox>\n            <mat-checkbox>Thursday</mat-checkbox>\n            <mat-checkbox>Friday</mat-checkbox>\n            <mat-checkbox>Saturday</mat-checkbox>\n          </mat-card-content>\n        </div>\n\n\n        <!-- News Letter time of the day -->\n        <mat-form-field>\n          <mat-label>News Letter time of the day:</mat-label>\n          <input matInput atp-time-picker formControlName=\"timeofday\" />\n        </mat-form-field>\n\n\n\n        <!-- News Letter Time Zone -->\n        <mat-form-field>\n          <mat-label>News Letter Time Zone</mat-label>\n          <mat-select matNativeControl required formControlName=\"timezone\">\n            <mat-option value=\"Central Standard Time\">Central Standard Time</mat-option>\n            <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\n            <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\n            <mat-option value=\"Pacific Standard Time\">Pacific Standard Time</mat-option>\n            <mat-option value=\"Alaska Standard Time\">Alaska Standard Time</mat-option>\n            <mat-option value=\"Hawaii-Aleutian Standard Time\">Hawaii-Aleutian Standard Time</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- News letter start Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Newsletter start date\" formControlName=\"startdate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2></mat-datepicker>\n        </mat-form-field>\n\n        <!-- News letter end Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"Newsletter end date\" formControlName=\"enddate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n          <mat-datepicker #picker3></mat-datepicker>\n        </mat-form-field>\n\n        <!-- NewsLetter reply to email address  -->\n\n        <mat-form-field>\n          <mat-label>Reply address</mat-label>\n          <mat-select matNativeControl required formControlName=\"reply\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array'>{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n\n\n\n\n        <!-- Buttons  -->\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">PREVIEW</button>\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\" (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.dayofweek{border:5px solid #663399;padding:10px}.closecard i{font-size:18px;line-height:27px}.date_wrapper .mat-checkbox{margin-right:15px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditNewsletterlibComponent.ctorParameters = function () { return [
        { type: AmazingTimePickerService },
        { type: NewsTitleService },
        { type: DatePipe },
        { type: CookieService },
        { type: FormBuilder },
        { type: Router }
    ]; };
    AddEditNewsletterlibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddEditNewsletterlibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListingNewsletterlibComponent = /** @class */ (function () {
    // ====================================================================================================
    function ListingNewsletterlibComponent() {
        this.loader = true;
    }
    Object.defineProperty(ListingNewsletterlibComponent.prototype, "config", {
        // =====================================================================================================
        // ================================================Input For Lib Listing================================
        set: 
        // =====================================================================================================
        // ================================================Input For Lib Listing================================
        /**
         * @param {?} receivedData
         * @return {?}
         */
        function (receivedData) {
            this.newsConfigForm = {
                apiUrl: receivedData.apiBaseUrl,
                listEndPoint: receivedData.listEndPoint,
                datasource: receivedData.datasource,
                tableName: receivedData.tableName,
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
                listArray_modify_header: { 'title': 'Title', 'subject': 'Subject', 'userGroup': 'User Group', 'time': 'Publish Time',
                    'publishdate': 'Publish Date', 'status': 'Status' },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListingNewsletterlibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ListingNewsletterlibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing-newsletterlib',
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"newsConfigForm.datasource !=null && newsConfigForm.datasource.length > 0\"\n      [datasource]=\"newsConfigForm.datasource\" [skip]=\"newsConfigForm.listArray_skip\"\n      [modify_header_array]=\"newsConfigForm.listArray_modify_header\" [sourcedata]=\"newsConfigForm.tableName\"\n      [statusarr]=\"newsConfigForm.statusarr\" [jwttoken]=\"newsConfigForm.jwtToken\"\n      [apiurl]=\"newsConfigForm.apiUrl\" [editroute]=\"newsConfigForm.editUrl\"\n      [deleteendpoint]=\"newsConfigForm.deleteEndPoint\">\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n\n  <h2 *ngIf=\"newsConfigForm.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListingNewsletterlibComponent.ctorParameters = function () { return []; };
    ListingNewsletterlibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListingNewsletterlibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddEditSenderComponent = /** @class */ (function () {
    // ===========================================
    function AddEditSenderComponent(formBuilder, newsService, router, dialog) {
        this.formBuilder = formBuilder;
        this.newsService = newsService;
        this.router = router;
        this.dialog = dialog;
        this.buttonText = "SUBMIT";
        this.header_name = "Add Sender";
        this.successMessage = "Submitted Successfully!!!";
    }
    /**
     * @return {?}
     */
    AddEditSenderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        //generating the form
        this.generateForm();
        // --------------------------------checking the cases------------------------ 
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.successMessage = "One row updated!!!";
                this.setDefaultValue(this.configData.defaultData);
                this.header_name = "Edit Sender's Information";
                break;
        }
        // --------------------------------------------------------------------------
    };
    // ===============generate form====================
    // ===============generate form====================
    /**
     * @return {?}
     */
    AddEditSenderComponent.prototype.generateForm = 
    // ===============generate form====================
    /**
     * @return {?}
     */
    function () {
        this.senderForm = this.formBuilder.group({
            name: [],
            email: []
        });
    };
    Object.defineProperty(AddEditSenderComponent.prototype, "config", {
        // ================================================
        set: 
        // ================================================
        /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.configData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    // =========================================MODAL functions==========================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    AddEditSenderComponent.prototype.openDialog = 
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Modal3, {
            width: '250px',
            data: { msg: x }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
        }));
    };
    // =====================================================================================================
    // ================================================Default value======================================
    // =====================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditSenderComponent.prototype.setDefaultValue = 
    // =====================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        this.senderForm.patchValue({
            name: defaultValue.name,
            email: defaultValue.email
        });
    };
    // ==================================================================================================
    // =======================On SUBMIT======================
    // ==================================================================================================
    // =======================On SUBMIT======================
    /**
     * @return {?}
     */
    AddEditSenderComponent.prototype.onSubmit = 
    // ==================================================================================================
    // =======================On SUBMIT======================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log("++++++++", this.senderForm.value);
        /* stop here if form is invalid */
        if (this.senderForm.invalid) {
            return;
        }
        else {
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.senderForm.value, this.configData.condition),
                "sourceobj": ["group"]
            };
            this.newsService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    console.log(response.status);
                    _this.openDialog(_this.successMessage);
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.dialogRef.close();
                    }), 2000);
                    _this.router.navigate([_this.configData.callBack]);
                }
                else {
                    alert("Some error occurred. Please try angain.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                alert("Some error occurred. Please try angain.");
            }));
        }
    };
    AddEditSenderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-sender',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"senderForm\">\n        <!-- Senders name -->\n        <mat-form-field>\n          <mat-label>Sender's Name</mat-label>\n          <input matInput formControlName=\"name\">\n        </mat-form-field>\n\n        <!-- Sender's email  -->\n        <mat-form-field>\n          <mat-label>Email</mat-label>\n          <input matInput formControlName=\"email\">\n        </mat-form-field>\n\n\n        <!-- Button  -->\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n          (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditSenderComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: NewsTitleService },
        { type: Router },
        { type: MatDialog$1 }
    ]; };
    AddEditSenderComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddEditSenderComponent;
}());
// ============================================MODAL COMPONENT===========================================
var Modal3 = /** @class */ (function () {
    function Modal3(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    Modal3.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    Modal3.decorators = [
        { type: Component, args: [{
                    selector: 'app-modal',
                    template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
                }] }
    ];
    /** @nocollapse */
    Modal3.ctorParameters = function () { return [
        { type: MatDialogRef$1 },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA$1,] }] }
    ]; };
    return Modal3;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListingSenderComponent = /** @class */ (function () {
    // ====================================================================================================
    function ListingSenderComponent(cookieService) {
        this.cookieService = cookieService;
        this.loader = true;
    }
    Object.defineProperty(ListingSenderComponent.prototype, "config", {
        // =====================================================================================================
        // ================================================Input For Lib Listing================================
        set: 
        // =====================================================================================================
        // ================================================Input For Lib Listing================================
        /**
         * @param {?} receivedData
         * @return {?}
         */
        function (receivedData) {
            this.senderConfigForm2 = {
                apiUrl: receivedData.apiBaseUrl,
                listEndPoint: receivedData.listEndPoint,
                datasource: receivedData.datasource,
                tableName: receivedData.tableName,
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
                listArray_modify_header: { "name": "Sender's Name", "email": "Sender's Email", "date": "Date" },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListingSenderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ListingSenderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing-sender',
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"senderConfigForm2.datasource !=null && senderConfigForm2.datasource.length > 0\"\n      [datasource]=\"senderConfigForm2.datasource\" [skip]=\"senderConfigForm2.listArray_skip\"\n      [modify_header_array]=\"senderConfigForm2.listArray_modify_header\" [sourcedata]=\"senderConfigForm2.tableName\"\n      [statusarr]=\"senderConfigForm2.statusarr\" [jwttoken]=\"senderConfigForm2.jwtToken\"\n      [apiurl]=\"senderConfigForm2.apiUrl\" [editroute]=\"senderConfigForm2.editUrl\"\n      [deleteendpoint]=\"senderConfigForm2.deleteEndPoint\">\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n\n  <h2 *ngIf=\"senderConfigForm2.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: [".sender_message{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    ListingSenderComponent.ctorParameters = function () { return [
        { type: CookieService }
    ]; };
    ListingSenderComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListingSenderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddEditTestemaillibComponent = /** @class */ (function () {
    // ===========================================
    function AddEditTestemaillibComponent(formBuilder, newsService, router, dialog) {
        this.formBuilder = formBuilder;
        this.newsService = newsService;
        this.router = router;
        this.dialog = dialog;
        this.buttonText = "SUBMIT";
        this.header_name = "Add Sender(Test)";
        this.successMessage = "Submitted Successfully!!!";
    }
    /**
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        //generating the form
        this.generateForm();
        // --------------------------------checking the cases------------------------ 
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.successMessage = "One row updated!!!";
                this.setDefaultValue(this.configData.defaultData);
                this.header_name = "Edit sender's Information";
                break;
        }
        // --------------------------------------------------------------------------
    };
    // ===============generate form====================
    // ===============generate form====================
    /**
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.generateForm = 
    // ===============generate form====================
    /**
     * @return {?}
     */
    function () {
        this.senderForm = this.formBuilder.group({
            name: [],
            email: []
        });
    };
    Object.defineProperty(AddEditTestemaillibComponent.prototype, "config", {
        // ================================================
        set: 
        // ================================================
        /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.configData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    // =========================================MODAL functions==========================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.openDialog = 
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Modal4, {
            width: '250px',
            data: { msg: x }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
        }));
    };
    // =====================================================================================================
    // ================================================Default value======================================
    // =====================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.setDefaultValue = 
    // =====================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        this.senderForm.patchValue({
            name: defaultValue.name,
            email: defaultValue.email
        });
    };
    // ==================================================================================================
    // =======================On SUBMIT======================
    // ==================================================================================================
    // =======================On SUBMIT======================
    /**
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.onSubmit = 
    // ==================================================================================================
    // =======================On SUBMIT======================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /* stop here if form is invalid */
        if (this.senderForm.invalid) {
            return;
        }
        else {
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.senderForm.value, this.configData.condition),
            };
            this.newsService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    console.log(response.status);
                    _this.openDialog(_this.successMessage);
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.dialogRef.close();
                    }), 2000);
                    _this.router.navigate([_this.configData.callBack]);
                }
                else {
                    alert("Some error occurred. Please try angain.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                alert("Some error occurred. Please try angain.");
            }));
        }
    };
    AddEditTestemaillibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-testemaillib',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"senderForm\">\n        <!-- Senders name -->\n        <mat-form-field>\n          <mat-label>Sender's Name</mat-label>\n          <input matInput formControlName=\"name\">\n        </mat-form-field>\n\n        <!-- Sender's email  -->\n        <mat-form-field>\n          <mat-label>Email</mat-label>\n          <input matInput formControlName=\"email\">\n        </mat-form-field>\n\n\n        <!-- Button  -->\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n          (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditTestemaillibComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: NewsTitleService },
        { type: Router },
        { type: MatDialog$1 }
    ]; };
    AddEditTestemaillibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddEditTestemaillibComponent;
}());
// ============================================MODAL COMPONENT===========================================
var Modal4 = /** @class */ (function () {
    function Modal4(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    Modal4.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    Modal4.decorators = [
        { type: Component, args: [{
                    selector: 'app-modal',
                    template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
                }] }
    ];
    /** @nocollapse */
    Modal4.ctorParameters = function () { return [
        { type: MatDialogRef$1 },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA$1,] }] }
    ]; };
    return Modal4;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListingTestemaillibComponent = /** @class */ (function () {
    // ====================================================================================================
    function ListingTestemaillibComponent() {
        this.loader = true;
    }
    Object.defineProperty(ListingTestemaillibComponent.prototype, "config", {
        // =====================================================================================================
        // ================================================Input For Lib Listing================================
        set: 
        // =====================================================================================================
        // ================================================Input For Lib Listing================================
        /**
         * @param {?} receivedData
         * @return {?}
         */
        function (receivedData) {
            this.senderConfigForm = {
                apiUrl: receivedData.apiBaseUrl,
                listEndPoint: receivedData.listEndPoint,
                datasource: receivedData.datasource,
                tableName: receivedData.tableName,
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
                listArray_modify_header: { "name": "Sender's Name", "email": "Sender's Email" },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListingTestemaillibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ListingTestemaillibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing-testemaillib',
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"senderConfigForm.datasource !=null && senderConfigForm.datasource.length > 0\"\n      [datasource]=\"senderConfigForm.datasource\" [skip]=\"senderConfigForm.listArray_skip\"\n      [modify_header_array]=\"senderConfigForm.listArray_modify_header\" [sourcedata]=\"senderConfigForm.tableName\"\n      [statusarr]=\"senderConfigForm.statusarr\" [jwttoken]=\"senderConfigForm.jwtToken\"\n      [apiurl]=\"senderConfigForm.apiUrl\" [editroute]=\"senderConfigForm.editUrl\"\n      [deleteendpoint]=\"senderConfigForm.deleteEndPoint\">\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <h2 *ngIf=\"senderConfigForm.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListingTestemaillibComponent.ctorParameters = function () { return []; };
    ListingTestemaillibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListingTestemaillibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NewsTitleModule = /** @class */ (function () {
    function NewsTitleModule() {
    }
    NewsTitleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [Modal4, Modal2, Modal, NewsTitleComponent, modalData, ListingNewsletterComponent,
                        AddEditSubcategoryComponent, ListingSubcategoryComponent, AddEditSubscriptiongroupComponent,
                        AddEditNewsletterlibComponent, ListingNewsletterlibComponent, AddEditSenderComponent,
                        ListingSenderComponent, Modal3, AddEditTestemaillibComponent, ListingTestemaillibComponent,
                    ],
                    imports: [
                        DemoMaterialModule,
                        ReactiveFormsModule, FormsModule,
                        BrowserAnimationsModule,
                        CommonModule,
                        ListingModule,
                        RouterModule,
                        HttpClientModule,
                        AmazingTimePickerModule,
                        CKEditorModule,
                    ],
                    exports: [AddEditSenderComponent, AddEditNewsletterlibComponent, AddEditSubscriptiongroupComponent,
                        Modal, NewsTitleComponent, ListingNewsletterComponent, AddEditSubcategoryComponent,
                        ListingSubcategoryComponent, AddEditTestemaillibComponent, ListingTestemaillibComponent, ListingNewsletterlibComponent,
                        ListingSenderComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    providers: [ApiService, DatePipe],
                    entryComponents: [Modal4, Modal3, NewsTitleComponent, modalData, Modal, Modal2]
                },] }
    ];
    return NewsTitleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NewsTitleService, NewsTitleComponent, modalData, NewsTitleModule, AddEditSubscriptiongroupComponent as ɵd, Modal2 as ɵe, ListingNewsletterComponent as ɵh, AddEditNewsletterlibComponent as ɵj, ListingNewsletterlibComponent as ɵk, AddEditSenderComponent as ɵl, Modal3 as ɵm, ListingSenderComponent as ɵn, AddEditSubcategoryComponent as ɵf, Modal as ɵg, ListingSubcategoryComponent as ɵi, AddEditTestemaillibComponent as ɵb, Modal4 as ɵc, ListingTestemaillibComponent as ɵo, ApiService as ɵa, DemoMaterialModule as ɵp };

//# sourceMappingURL=news-title.js.map