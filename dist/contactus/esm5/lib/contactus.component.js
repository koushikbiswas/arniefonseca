/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(fb, apiService, http, router, cookieService) {
        this.fb = fb;
        this.apiService = apiService;
        this.http = http;
        this.router = router;
        this.cookieService = cookieService;
        // This variable is use for show the Form title   
        this.email = [];
        this.phone = [];
        this.address = [];
        this.serverURL = ''; // url variable to fetch the add availability form page
        // url variable to fetch the add availability form page
        this.addEndpointData = '';
        this.routeingUrlValue = '';
        /*Using for google map start ----*/
        this.latitude = -28.68352;
        this.longitude = -147.20785;
        this.mapType = 'satellite';
        this.contactUsForm = this.fb.group({
            locationname: ['', Validators.required],
            message: ['', Validators.required],
            // tslint:disable-next-line:max-line-length
            multipleemails: this.fb.array([this.fb.group({ emails: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])] })]),
            phones: this.fb.array([this.fb.group({ phone: ['', Validators.required] })]),
            addresses: this.fb.array([this.fb.group({ address: ['', Validators.required] })])
        });
    }
    Object.defineProperty(ContactusComponent.prototype, "formTitle", {
        set: /**
         * @param {?} formTitleVal
         * @return {?}
         */
        function (formTitleVal) {
            this.formTitleValue = formTitleVal;
            console.log(this.formTitleValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlval
         * @return {?}
         */
        function (serverUrlval) {
            this.serverURL = (serverUrlval) || '<no name set>';
            this.serverURL = serverUrlval;
            // console.log(this.serverURL);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.addEndpointData = (endpointUrlval) || '<no name set>';
            this.addEndpointData = endpointUrlval;
            // console.log('this.addEndpointData');
            // console.log(this.addEndpointData);
            // console.log(this.addEndpointData.endpoint);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusComponent.prototype, "routeingUrl", {
        set: /**
         * @param {?} routeingUrlval
         * @return {?}
         */
        function (routeingUrlval) {
            this.routeingUrlValue = (routeingUrlval) || '<no name set>';
            this.routeingUrlValue = routeingUrlval;
            // console.log(this.routeingUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ContactusComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiService.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.serverURL);
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.addEndpointData.endpoint);
        }), 50);
        // console.log(this.addEndpointData.endpoint);
    };
    Object.defineProperty(ContactusComponent.prototype, "multipleemails", {
        /* Multiple emails created start here*/
        get: /* Multiple emails created start here*/
        /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.contactUsForm.get('multipleemails')));
        },
        enumerable: true,
        configurable: true
    });
    /* Add email field start here */
    /* Add email field start here */
    /**
     * @return {?}
     */
    ContactusComponent.prototype.addEmail = /* Add email field start here */
    /**
     * @return {?}
     */
    function () {
        console.log('okk');
        // tslint:disable-next-line:max-line-length
        this.multipleemails.push(this.fb.group({ emails: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])] }));
    };
    /* Add email field end here */
    /* Remove email field start here */
    /* Add email field end here */
    /* Remove email field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    ContactusComponent.prototype.removeEmail = /* Add email field end here */
    /* Remove email field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        console.log(index);
        this.multipleemails.removeAt(index);
    };
    Object.defineProperty(ContactusComponent.prototype, "addresses", {
        /* Remove email field end here */
        /* Multiple emails created end here*/
        /* Multiple addresses created start here*/
        get: /* Remove email field end here */
        /* Multiple emails created end here*/
        /* Multiple addresses created start here*/
        /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.contactUsForm.get('addresses')));
        },
        enumerable: true,
        configurable: true
    });
    /* Add addresses field start here */
    /* Add addresses field start here */
    /**
     * @return {?}
     */
    ContactusComponent.prototype.addAddress = /* Add addresses field start here */
    /**
     * @return {?}
     */
    function () {
        console.log('okk');
        this.addresses.push(this.fb.group({ address: ['', Validators.required] }));
    };
    /* Add addresses field end here */
    /* Remove addresses field start here */
    /* Add addresses field end here */
    /* Remove addresses field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    ContactusComponent.prototype.removeAddress = /* Add addresses field end here */
    /* Remove addresses field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        // console.log(index);
        this.addresses.removeAt(index);
    };
    Object.defineProperty(ContactusComponent.prototype, "phones", {
        /* Remove addresses field end here */
        /* Multiple addresses created end here*/
        /* Multiple phones created start here*/
        get: /* Remove addresses field end here */
        /* Multiple addresses created end here*/
        /* Multiple phones created start here*/
        /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.contactUsForm.get('phones')));
        },
        enumerable: true,
        configurable: true
    });
    /* Add addresses field start here */
    /* Add addresses field start here */
    /**
     * @return {?}
     */
    ContactusComponent.prototype.addPhone = /* Add addresses field start here */
    /**
     * @return {?}
     */
    function () {
        // console.log('okk');
        this.phones.push(this.fb.group({ phone: ['', Validators.required] }));
    };
    /* Add phones field end here */
    /* Remove phones field start here */
    /* Add phones field end here */
    /* Remove phones field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    ContactusComponent.prototype.removePhone = /* Add phones field end here */
    /* Remove phones field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        // console.log(index);
        this.phones.removeAt(index);
    };
    /* Remove phones field end here */
    /* Multiple phones created end here*/
    // contactUsForm submit function start here
    /* Remove phones field end here */
    /* Multiple phones created end here*/
    // contactUsForm submit function start here
    /**
     * @return {?}
     */
    ContactusComponent.prototype.contactUsFormSubmit = /* Remove phones field end here */
    /* Multiple phones created end here*/
    // contactUsForm submit function start here
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        var e_1, _a, e_2, _b, e_3, _c;
        /** @type {?} */
        var x;
        for (x in this.contactUsForm.controls) {
            this.contactUsForm.controls[x].markAsTouched();
        }
        if (this.contactUsForm.valid) {
            try {
                // console.log('ok');
                // console.log(this.contactUsForm.value);
                // All emails sites in a Array start here
                for (var _d = tslib_1.__values(this.contactUsForm.value.multipleemails), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var key = _e.value;
                    this.email.push(key.emails);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                // All emails sites in a Array end here
                // All Phones sites in a Array start here
                // console.log(this.contactUsForm.value.phones);
                for (var _f = tslib_1.__values(this.contactUsForm.value.phones), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var key = _g.value;
                    this.phone.push(key.phone);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
            try {
                // All Phones sites in a Array end here
                // All addresses sites in a Array start here
                for (var _h = tslib_1.__values(this.contactUsForm.value.addresses), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var key = _j.value;
                    this.address.push(key.address);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                }
                finally { if (e_3) throw e_3.error; }
            }
            // All addresses sites in a Array end here
            /** @type {?} */
            var allData = {};
            allData.locationname = this.contactUsForm.value.locationname;
            allData.address = this.address;
            allData.phone = this.phone;
            allData.email = this.email;
            allData.message = this.contactUsForm.value.message;
            // console.log(allData);
            /** @type {?} */
            var data = {
                "source": this.addEndpointData.source,
                "data": allData,
                "token": this.cookieService.get('jwtToken')
            };
            this.apiService.addData(data).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var result;
                result = res;
                if (result.status === 'success') {
                    // console.log(result);
                    _this.formDirective.resetForm();
                }
            }));
        }
    };
    // contactUsForm submit function end here
    // contactUsForm submit function end here
    /**
     * @param {?} val
     * @return {?}
     */
    ContactusComponent.prototype.inputUntouched = 
    // contactUsForm submit function end here
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        console.log('ok----');
        this.contactUsForm.controls[val].markAsUntouched();
    };
    /**
     * @return {?}
     */
    ContactusComponent.prototype.goToListing = /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/' + this.routeingUrlValue);
    };
    /**
     * @return {?}
     */
    ContactusComponent.prototype.setJwtToken = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var link = "https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/temptoken";
        /** @type {?} */
        var data;
        this.http.post(link, data).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            // console.log(res);
            /** @type {?} */
            var result = {};
            result = res;
            _this.cookieService.set('jwtToken', result.token);
            _this.cookieService.getAll();
        }));
    };
    ContactusComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-contactus',
                    template: "\n\n  <button class=\"listingButton\" mat-raised-button color=\"accent\" (click)=\"goToListing()\">Listing</button>\n  <button  mat-raised-button color=\"warn\" (click)=\"setJwtToken()\"> SetToken</button>\n\n\n\n<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n\n        <h2 *ngIf=\"formTitleValue != ''\" class=\"title\"> {{formTitleValue}}</h2>\n\n        <form class=\"example-container\" [formGroup]=\"contactUsForm\" (ngSubmit)=\"contactUsFormSubmit()\" novalidate>\n\n\n\n\n  <!-- Location Name field start here-->\n  <mat-form-field>\n      <input matInput placeholder=\"Location Name \" formControlName=\"locationname\" (blur)=\"inputUntouched('locationname')\" >\n      <mat-error *ngIf=\"!contactUsForm.controls['locationname'].valid && contactUsForm.controls['locationname'].errors.required && contactUsForm.controls['locationname'].touched\">Location Name field can not be blank</mat-error>\n    </mat-form-field>\n    <!-- Location Name field end here-->\n  \n  \n  \n    <!--  multiple emails fields added start here-->\n  <div formArrayName=\"multipleemails\" class=\"fromClass\" >\n  \n  \n    <mat-form-field *ngFor=\"let item of multipleemails.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n  \n  \n  \n      <input matInput placeholder=\"Email \"  formControlName=\"emails\" >\n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addEmail()\">add</i>\n        <i *ngIf=\"pointIndex != 0\" class=\"material-icons\"  (click)=\"removeEmail(pointIndex)\">remove</i>\n  \n      </span>\n  <!--    <mat-error  *ngIf=\"!item.valid && !item.errors.required\">Email is not valid</mat-error>-->\n      <mat-error *ngIf=\"!item.valid && contactUsForm.controls['locationname'].touched \">Email field can not be blank</mat-error>\n    </mat-form-field>\n  </div>\n    <!--  multiple emails fields added end here-->\n  \n  <!--  multiple Phone fields added start here-->\n  <div formArrayName=\"phones\" class=\"fromClass\">\n  \n  \n    <mat-form-field *ngFor=\"let item of phones.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n  \n  \n      <input matInput placeholder=\"Phone \"  formControlName=\"phone\" >\n  \n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addPhone()\">add</i>\n        <i *ngIf=\"pointIndex != 0\"  class=\"material-icons\"  (click)=\"removePhone(pointIndex)\">remove</i>\n  \n      </span>\n  \n  \n      <mat-error *ngIf=\"item.valid  \">Phone field can not be blank</mat-error>\n    </mat-form-field>\n  \n  </div>\n  \n    <!--  multiple Phone fields added end here-->\n  \n  <!--  multiple Addresses fields added start here-->\n  <div formArrayName=\"addresses\" class=\"fromClass\">\n  \n  \n    <mat-form-field *ngFor=\"let item of addresses.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n  \n      <textarea  matInput placeholder=\"Address {{pointIndex + 1}} \"  formControlName=\"address\" ></textarea>\n  \n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addAddress()\">add</i>\n        <i *ngIf=\"pointIndex != 0\" class=\"material-icons\"  (click)=\"removeAddress(pointIndex)\">remove</i>\n  \n      </span>\n  \n  <!--    <mat-error  *ngIf=\"!contactUsForm.controls['email'].valid && !contactUsForm.controls['email'].errors.required\">Email is not valid</mat-error>-->\n      <mat-error *ngIf=\"!item.valid \">Address field can not be blank</mat-error>\n  \n    </mat-form-field>\n  </div>\n    <!--  multiple Addresses fields added end here-->\n  \n    <!-- Address field start here-->\n    <!--<mat-form-field>\n      <textarea matInput placeholder=\"Address\" formControlName=\"address\" (blur)=\"inputblur('address')\"></textarea>\n      <mat-error *ngIf=\"!contactUsForm.controls['address'].valid && contactUsForm.controls['address'].errors.required\">Address field can not be blank</mat-error>\n    </mat-form-field>-->\n    <!-- Address field end here-->\n  \n  \n    <!-- Message field start here -->\n    <mat-form-field>\n      <textarea matInput placeholder=\"Message\" formControlName=\"message\" (blur)=\"inputUntouched('message')\"></textarea>\n  <!--    <mat-error *ngIf=\"!contactUsForm.controls['message'].valid && contactUsForm.controls['message'].errors.required\">Message field can not be blank</mat-error>-->\n    </mat-form-field>\n    <!-- Message field end here -->\n  \n    <button mat-raised-button color=\"primary\">Submit</button>\n\n        </form>\n\n    </mat-card>\n\n</div>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.from button{width:60px;height:40px;text-align:center;margin:0 auto}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.fromClass{display:flex;flex-direction:column;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    ContactusComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ApiService },
        { type: HttpClient },
        { type: Router },
        { type: CookieService }
    ]; };
    ContactusComponent.propDecorators = {
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
        formTitle: [{ type: Input }],
        serverUrl: [{ type: Input }],
        addEndpoint: [{ type: Input }],
        routeingUrl: [{ type: Input }]
    };
    return ContactusComponent;
}());
export { ContactusComponent };
if (false) {
    /** @type {?} */
    ContactusComponent.prototype.formDirective;
    /** @type {?} */
    ContactusComponent.prototype.formTitleValue;
    /** @type {?} */
    ContactusComponent.prototype.email;
    /** @type {?} */
    ContactusComponent.prototype.phone;
    /** @type {?} */
    ContactusComponent.prototype.address;
    /** @type {?} */
    ContactusComponent.prototype.serverURL;
    /** @type {?} */
    ContactusComponent.prototype.addEndpointData;
    /** @type {?} */
    ContactusComponent.prototype.routeingUrlValue;
    /** @type {?} */
    ContactusComponent.prototype.latitude;
    /** @type {?} */
    ContactusComponent.prototype.longitude;
    /** @type {?} */
    ContactusComponent.prototype.mapType;
    /** @type {?} */
    ContactusComponent.prototype.contactUsForm;
    /** @type {?} */
    ContactusComponent.prototype.fb;
    /** @type {?} */
    ContactusComponent.prototype.apiService;
    /** @type {?} */
    ContactusComponent.prototype.http;
    /** @type {?} */
    ContactusComponent.prototype.router;
    /** @type {?} */
    ContactusComponent.prototype.cookieService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbnRhY3R1cy8iLCJzb3VyY2VzIjpbImxpYi9jb250YWN0dXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQWEsV0FBVyxFQUFhLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25HLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLbkQ7SUFnRUUsNEJBQW1CLEVBQWUsRUFBUyxVQUFzQixFQUFTLElBQWdCLEVBQVMsTUFBYyxFQUFTLGFBQTRCO1FBQW5JLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTs7UUFwRC9JLFVBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBRXBCLGNBQVMsR0FBUSxFQUFFLENBQUMsQ0FBTSx1REFBdUQ7O1FBQ2pGLG9CQUFlLEdBQVEsRUFBRSxDQUFDO1FBQzFCLHFCQUFnQixHQUFRLEVBQUUsQ0FBQzs7UUF1Q2xDLGFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUNyQixjQUFTLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDdkIsWUFBTyxHQUFHLFdBQVcsQ0FBQztR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QUM7WUFDYixLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pELEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDOztnQkE5UEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qiw4NElBQXlDOztpQkFFMUM7Ozs7Z0JBYm1CLFdBQVc7Z0JBQ3RCLFVBQVU7Z0JBQ1YsVUFBVTtnQkFDVixNQUFNO2dCQUNOLGFBQWE7OztnQ0FjbkIsU0FBUyxTQUFDLGtCQUFrQjs0QkFXNUIsS0FBSzs0QkFVTCxLQUFLOzhCQVVMLEtBQUs7OEJBU0wsS0FBSzs7SUErTVIseUJBQUM7Q0FBQSxBQWhRRCxJQWdRQztTQXpQWSxrQkFBa0I7OztJQUU3QiwyQ0FBaUU7O0lBRWpFLDRDQUEyQjs7SUFDM0IsbUNBQXlCOztJQUN6QixtQ0FBeUI7O0lBQ3pCLHFDQUEyQjs7SUFFM0IsdUNBQTJCOztJQUMzQiw2Q0FBaUM7O0lBQ2pDLDhDQUFrQzs7SUF1Q2xDLHNDQUFxQjs7SUFDckIsdUNBQXVCOztJQUN2QixxQ0FBc0I7O0lBSXRCLDJDQUFnQzs7SUFDcEIsZ0NBQXNCOztJQUFFLHdDQUE2Qjs7SUFBRSxrQ0FBdUI7O0lBQUUsb0NBQXFCOztJQUFFLDJDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgUGlwZSwgUGlwZVRyYW5zZm9ybSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQXJyYXksIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jb250YWN0dXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGFjdHVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udGFjdHVzLmNvbXBvbmVudC5jc3MnXVxufSlcblxuXG5leHBvcnQgY2xhc3MgQ29udGFjdHVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKEZvcm1Hcm91cERpcmVjdGl2ZSkgZm9ybURpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlO1xuXG4gIHB1YmxpYyBmb3JtVGl0bGVWYWx1ZTogYW55OyAgICAgICAgLy8gVGhpcyB2YXJpYWJsZSBpcyB1c2UgZm9yIHNob3cgdGhlIEZvcm0gdGl0bGUgICBcbiAgcHVibGljIGVtYWlsOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgcGhvbmU6IGFueVtdID0gW107XG4gIHB1YmxpYyBhZGRyZXNzOiBhbnlbXSA9IFtdO1xuXG4gIHB1YmxpYyBzZXJ2ZXJVUkw6IGFueSA9ICcnOyAgICAgIC8vIHVybCB2YXJpYWJsZSB0byBmZXRjaCB0aGUgYWRkIGF2YWlsYWJpbGl0eSBmb3JtIHBhZ2VcbiAgcHVibGljIGFkZEVuZHBvaW50RGF0YTogYW55ID0gJyc7XG4gIHB1YmxpYyByb3V0ZWluZ1VybFZhbHVlOiBhbnkgPSAnJztcblxuICBASW5wdXQoKVxuICBcbiAgcHVibGljIHNldCBmb3JtVGl0bGUoZm9ybVRpdGxlVmFsIDogc3RyaW5nKSB7XG4gICAgdGhpcy5mb3JtVGl0bGVWYWx1ZSA9IGZvcm1UaXRsZVZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1UaXRsZVZhbHVlKVxuICB9XG5cbiAgXG5cblxuICBASW5wdXQoKSAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcblxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybHZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVUkwgPSAoc2VydmVyVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zZXJ2ZXJVUkwgPSBzZXJ2ZXJVcmx2YWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xuXG4gIH1cblxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIHVybCBhZGRFbmRwb2ludCBmcm9tIHByb2plY3RcbiAgc2V0IGFkZEVuZHBvaW50KGVuZHBvaW50VXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IChlbmRwb2ludFVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gZW5kcG9pbnRVcmx2YWw7XG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMuYWRkRW5kcG9pbnREYXRhJyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludERhdGEpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWRkRW5kcG9pbnREYXRhLmVuZHBvaW50KTtcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IFVybCBmcm9tIHByb2plY3RcbiAgc2V0IHJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJvdXRlaW5nVXJsVmFsdWUpO1xuICB9XG5cbiAgLypVc2luZyBmb3IgZ29vZ2xlIG1hcCBzdGFydCAtLS0tKi9cbiAgbGF0aXR1ZGUgPSAtMjguNjgzNTI7XG4gIGxvbmdpdHVkZSA9IC0xNDcuMjA3ODU7XG4gIG1hcFR5cGUgPSAnc2F0ZWxsaXRlJztcbiAgLypVc2luZyBmb3IgZ29vZ2xlIG1hcCBlbmQgLS0tLSovXG5cblxuICBwdWJsaWMgY29udGFjdFVzRm9ybTogRm9ybUdyb3VwO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSwgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgcHVibGljIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UpIHtcbiAgICB0aGlzLmNvbnRhY3RVc0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGxvY2F0aW9ubmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIG1lc3NhZ2U6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICBtdWx0aXBsZWVtYWlsczogdGhpcy5mYi5hcnJheShbdGhpcy5mYi5ncm91cCh7IGVtYWlsczogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0gfSldKSxcbiAgICAgIHBob25lczogdGhpcy5mYi5hcnJheShbdGhpcy5mYi5ncm91cCh7IHBob25lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdIH0pXSksXG4gICAgICBhZGRyZXNzZXM6IHRoaXMuZmIuYXJyYXkoW3RoaXMuZmIuZ3JvdXAoeyBhZGRyZXNzOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdIH0pXSlcblxuICAgIH0pO1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVUkwpO1xuICAgIH0sIDUwKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVSTCk7XG5cblxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludERhdGEuZW5kcG9pbnQpO1xuICAgIH0sIDUwKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50RGF0YS5lbmRwb2ludCk7XG5cbiAgfVxuICAvKiBNdWx0aXBsZSBlbWFpbHMgY3JlYXRlZCBzdGFydCBoZXJlKi9cbiAgZ2V0IG11bHRpcGxlZW1haWxzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRhY3RVc0Zvcm0uZ2V0KCdtdWx0aXBsZWVtYWlscycpIGFzIEZvcm1BcnJheTtcbiAgfVxuXG4gIC8qIEFkZCBlbWFpbCBmaWVsZCBzdGFydCBoZXJlICovXG4gIGFkZEVtYWlsKCkge1xuICAgIGNvbnNvbGUubG9nKCdva2snKTtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICB0aGlzLm11bHRpcGxlZW1haWxzLnB1c2godGhpcy5mYi5ncm91cCh7IGVtYWlsczogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0gfSkpO1xuICB9XG4gIC8qIEFkZCBlbWFpbCBmaWVsZCBlbmQgaGVyZSAqL1xuXG4gIC8qIFJlbW92ZSBlbWFpbCBmaWVsZCBzdGFydCBoZXJlICovXG4gIHJlbW92ZUVtYWlsKGluZGV4KSB7XG4gICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgIHRoaXMubXVsdGlwbGVlbWFpbHMucmVtb3ZlQXQoaW5kZXgpO1xuICB9XG4gIC8qIFJlbW92ZSBlbWFpbCBmaWVsZCBlbmQgaGVyZSAqL1xuICAvKiBNdWx0aXBsZSBlbWFpbHMgY3JlYXRlZCBlbmQgaGVyZSovXG5cblxuICAvKiBNdWx0aXBsZSBhZGRyZXNzZXMgY3JlYXRlZCBzdGFydCBoZXJlKi9cblxuICBnZXQgYWRkcmVzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRhY3RVc0Zvcm0uZ2V0KCdhZGRyZXNzZXMnKSBhcyBGb3JtQXJyYXk7XG4gIH1cbiAgLyogQWRkIGFkZHJlc3NlcyBmaWVsZCBzdGFydCBoZXJlICovXG4gIGFkZEFkZHJlc3MoKSB7XG4gICAgY29uc29sZS5sb2coJ29raycpO1xuICAgIHRoaXMuYWRkcmVzc2VzLnB1c2godGhpcy5mYi5ncm91cCh7IGFkZHJlc3M6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSkpO1xuICB9XG4gIC8qIEFkZCBhZGRyZXNzZXMgZmllbGQgZW5kIGhlcmUgKi9cblxuICAvKiBSZW1vdmUgYWRkcmVzc2VzIGZpZWxkIHN0YXJ0IGhlcmUgKi9cbiAgcmVtb3ZlQWRkcmVzcyhpbmRleCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICB0aGlzLmFkZHJlc3Nlcy5yZW1vdmVBdChpbmRleCk7XG4gIH1cbiAgLyogUmVtb3ZlIGFkZHJlc3NlcyBmaWVsZCBlbmQgaGVyZSAqL1xuICAvKiBNdWx0aXBsZSBhZGRyZXNzZXMgY3JlYXRlZCBlbmQgaGVyZSovXG5cblxuICAvKiBNdWx0aXBsZSBwaG9uZXMgY3JlYXRlZCBzdGFydCBoZXJlKi9cbiAgZ2V0IHBob25lcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWN0VXNGb3JtLmdldCgncGhvbmVzJykgYXMgRm9ybUFycmF5O1xuICB9XG5cbiAgLyogQWRkIGFkZHJlc3NlcyBmaWVsZCBzdGFydCBoZXJlICovXG5cbiAgYWRkUGhvbmUoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29raycpO1xuICAgIHRoaXMucGhvbmVzLnB1c2godGhpcy5mYi5ncm91cCh7IHBob25lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdIH0pKTtcbiAgfVxuXG4gIC8qIEFkZCBwaG9uZXMgZmllbGQgZW5kIGhlcmUgKi9cblxuICAvKiBSZW1vdmUgcGhvbmVzIGZpZWxkIHN0YXJ0IGhlcmUgKi9cbiAgcmVtb3ZlUGhvbmUoaW5kZXgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgdGhpcy5waG9uZXMucmVtb3ZlQXQoaW5kZXgpO1xuICB9XG4gIC8qIFJlbW92ZSBwaG9uZXMgZmllbGQgZW5kIGhlcmUgKi9cbiAgLyogTXVsdGlwbGUgcGhvbmVzIGNyZWF0ZWQgZW5kIGhlcmUqL1xuXG5cblxuXG4gIC8vIGNvbnRhY3RVc0Zvcm0gc3VibWl0IGZ1bmN0aW9uIHN0YXJ0IGhlcmVcbiAgY29udGFjdFVzRm9ybVN1Ym1pdCgpIHtcbiAgICBsZXQgeDogYW55O1xuICAgIGZvciAoeCBpbiB0aGlzLmNvbnRhY3RVc0Zvcm0uY29udHJvbHMpIHtcbiAgICAgIHRoaXMuY29udGFjdFVzRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG5cbiAgICB9XG4gICAgaWYgKHRoaXMuY29udGFjdFVzRm9ybS52YWxpZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ29rJyk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29udGFjdFVzRm9ybS52YWx1ZSk7XG5cblxuICAgICAgLy8gQWxsIGVtYWlscyBzaXRlcyBpbiBhIEFycmF5IHN0YXJ0IGhlcmVcblxuICAgICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5jb250YWN0VXNGb3JtLnZhbHVlLm11bHRpcGxlZW1haWxzKSB7XG4gICAgICAgIHRoaXMuZW1haWwucHVzaChrZXkuZW1haWxzKTtcblxuICAgICAgfVxuICAgICAgLy8gQWxsIGVtYWlscyBzaXRlcyBpbiBhIEFycmF5IGVuZCBoZXJlXG5cbiAgICAgIC8vIEFsbCBQaG9uZXMgc2l0ZXMgaW4gYSBBcnJheSBzdGFydCBoZXJlXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29udGFjdFVzRm9ybS52YWx1ZS5waG9uZXMpO1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5jb250YWN0VXNGb3JtLnZhbHVlLnBob25lcykge1xuICAgICAgICB0aGlzLnBob25lLnB1c2goa2V5LnBob25lKTtcblxuICAgICAgfVxuIC8vIEFsbCBQaG9uZXMgc2l0ZXMgaW4gYSBBcnJheSBlbmQgaGVyZVxuXG4gICAgICAvLyBBbGwgYWRkcmVzc2VzIHNpdGVzIGluIGEgQXJyYXkgc3RhcnQgaGVyZVxuXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLmNvbnRhY3RVc0Zvcm0udmFsdWUuYWRkcmVzc2VzKSB7XG4gICAgICAgIHRoaXMuYWRkcmVzcy5wdXNoKGtleS5hZGRyZXNzKTtcbiAgICAgIH1cbiAgICAgIC8vIEFsbCBhZGRyZXNzZXMgc2l0ZXMgaW4gYSBBcnJheSBlbmQgaGVyZVxuXG4gICAgICBsZXQgYWxsRGF0YTogYW55ID17fTtcbiAgICAgIGFsbERhdGEubG9jYXRpb25uYW1lID0gdGhpcy5jb250YWN0VXNGb3JtLnZhbHVlLmxvY2F0aW9ubmFtZTtcbiAgICAgIGFsbERhdGEuYWRkcmVzcyA9IHRoaXMuYWRkcmVzcztcbiAgICAgIGFsbERhdGEucGhvbmUgPSB0aGlzLnBob25lO1xuICAgICAgYWxsRGF0YS5lbWFpbCA9IHRoaXMuZW1haWw7XG4gICAgICBhbGxEYXRhLm1lc3NhZ2UgPSB0aGlzLmNvbnRhY3RVc0Zvcm0udmFsdWUubWVzc2FnZTsgXG4gICAgICAvLyBjb25zb2xlLmxvZyhhbGxEYXRhKTtcbiAgICAgIGxldCBkYXRhOiBhbnkgPSB7XG4gICAgICAgIFwic291cmNlXCI6IHRoaXMuYWRkRW5kcG9pbnREYXRhLnNvdXJjZSxcbiAgICAgICAgXCJkYXRhXCI6IGFsbERhdGEsXG4gICAgICAgIFwidG9rZW5cIjogdGhpcy5jb29raWVTZXJ2aWNlLmdldCgnand0VG9rZW4nKVxuICAgICAgfVxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmFkZERhdGEoZGF0YSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcblxuXG4gICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlc2V0Rm9ybSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH1cblxuXG5cbiAgfVxuXG4gIC8vIGNvbnRhY3RVc0Zvcm0gc3VibWl0IGZ1bmN0aW9uIGVuZCBoZXJlXG5cblxuXG4gIGlucHV0VW50b3VjaGVkKHZhbDogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ29rLS0tLScpO1xuICAgIHRoaXMuY29udGFjdFVzRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cblxuXG4gIGdvVG9MaXN0aW5nKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5yb3V0ZWluZ1VybFZhbHVlKTtcbiAgfVxuXG5cblxuICBzZXRKd3RUb2tlbigpIHtcbiAgICBsZXQgbGluazogYW55ID0gXCJodHRwczovL284MjBjdjJsdTguZXhlY3V0ZS1hcGkudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi9hcGkvdGVtcHRva2VuXCI7XG4gICAgbGV0IGRhdGE6IGFueTtcbiAgICB0aGlzLmh0dHAucG9zdChsaW5rLGRhdGEpLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAgIGxldCByZXN1bHQ6IGFueT17fTtcbiAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgIHRoaXMuY29va2llU2VydmljZS5zZXQoJ2p3dFRva2VuJywgcmVzdWx0LnRva2VuKTtcbiAgICAgIHRoaXMuY29va2llU2VydmljZS5nZXRBbGwoKTtcbiAgICB9KVxuICB9XG5cbn1cblxuIl19