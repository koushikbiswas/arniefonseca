/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
export class ContactusComponent {
    /**
     * @param {?} fb
     * @param {?} apiService
     * @param {?} http
     * @param {?} router
     * @param {?} cookieService
     */
    constructor(fb, apiService, http, router, cookieService) {
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
    /**
     * @param {?} formTitleVal
     * @return {?}
     */
    set formTitle(formTitleVal) {
        this.formTitleValue = formTitleVal;
        console.log(this.formTitleValue);
    }
    /**
     * @param {?} serverUrlval
     * @return {?}
     */
    set serverUrl(serverUrlval) {
        this.serverURL = (serverUrlval) || '<no name set>';
        this.serverURL = serverUrlval;
        // console.log(this.serverURL);
    }
    /**
     * @param {?} endpointUrlval
     * @return {?}
     */
    set addEndpoint(endpointUrlval) {
        this.addEndpointData = (endpointUrlval) || '<no name set>';
        this.addEndpointData = endpointUrlval;
        // console.log('this.addEndpointData');
        // console.log(this.addEndpointData);
        // console.log(this.addEndpointData.endpoint);
    }
    /**
     * @param {?} routeingUrlval
     * @return {?}
     */
    set routeingUrl(routeingUrlval) {
        this.routeingUrlValue = (routeingUrlval) || '<no name set>';
        this.routeingUrlValue = routeingUrlval;
        // console.log(this.routeingUrlValue);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.apiService.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setServerUrl(this.serverURL);
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setaddEndpoint(this.addEndpointData.endpoint);
        }), 50);
        // console.log(this.addEndpointData.endpoint);
    }
    /* Multiple emails created start here*/
    /**
     * @return {?}
     */
    get multipleemails() {
        return (/** @type {?} */ (this.contactUsForm.get('multipleemails')));
    }
    /* Add email field start here */
    /**
     * @return {?}
     */
    addEmail() {
        console.log('okk');
        // tslint:disable-next-line:max-line-length
        this.multipleemails.push(this.fb.group({ emails: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])] }));
    }
    /* Add email field end here */
    /* Remove email field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    removeEmail(index) {
        console.log(index);
        this.multipleemails.removeAt(index);
    }
    /* Remove email field end here */
    /* Multiple emails created end here*/
    /* Multiple addresses created start here*/
    /**
     * @return {?}
     */
    get addresses() {
        return (/** @type {?} */ (this.contactUsForm.get('addresses')));
    }
    /* Add addresses field start here */
    /**
     * @return {?}
     */
    addAddress() {
        console.log('okk');
        this.addresses.push(this.fb.group({ address: ['', Validators.required] }));
    }
    /* Add addresses field end here */
    /* Remove addresses field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    removeAddress(index) {
        // console.log(index);
        this.addresses.removeAt(index);
    }
    /* Remove addresses field end here */
    /* Multiple addresses created end here*/
    /* Multiple phones created start here*/
    /**
     * @return {?}
     */
    get phones() {
        return (/** @type {?} */ (this.contactUsForm.get('phones')));
    }
    /* Add addresses field start here */
    /**
     * @return {?}
     */
    addPhone() {
        // console.log('okk');
        this.phones.push(this.fb.group({ phone: ['', Validators.required] }));
    }
    /* Add phones field end here */
    /* Remove phones field start here */
    /**
     * @param {?} index
     * @return {?}
     */
    removePhone(index) {
        // console.log(index);
        this.phones.removeAt(index);
    }
    /* Remove phones field end here */
    /* Multiple phones created end here*/
    // contactUsForm submit function start here
    /**
     * @return {?}
     */
    contactUsFormSubmit() {
        /** @type {?} */
        let x;
        for (x in this.contactUsForm.controls) {
            this.contactUsForm.controls[x].markAsTouched();
        }
        if (this.contactUsForm.valid) {
            // console.log('ok');
            // console.log(this.contactUsForm.value);
            // All emails sites in a Array start here
            for (const key of this.contactUsForm.value.multipleemails) {
                this.email.push(key.emails);
            }
            // All emails sites in a Array end here
            // All Phones sites in a Array start here
            // console.log(this.contactUsForm.value.phones);
            for (const key of this.contactUsForm.value.phones) {
                this.phone.push(key.phone);
            }
            // All Phones sites in a Array end here
            // All addresses sites in a Array start here
            for (const key of this.contactUsForm.value.addresses) {
                this.address.push(key.address);
            }
            // All addresses sites in a Array end here
            /** @type {?} */
            let allData = {};
            allData.locationname = this.contactUsForm.value.locationname;
            allData.address = this.address;
            allData.phone = this.phone;
            allData.email = this.email;
            allData.message = this.contactUsForm.value.message;
            // console.log(allData);
            /** @type {?} */
            let data = {
                "source": this.addEndpointData.source,
                "data": allData,
                "token": this.cookieService.get('jwtToken')
            };
            this.apiService.addData(data).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                /** @type {?} */
                let result;
                result = res;
                if (result.status === 'success') {
                    // console.log(result);
                    this.formDirective.resetForm();
                }
            }));
        }
    }
    // contactUsForm submit function end here
    /**
     * @param {?} val
     * @return {?}
     */
    inputUntouched(val) {
        console.log('ok----');
        this.contactUsForm.controls[val].markAsUntouched();
    }
    /**
     * @return {?}
     */
    goToListing() {
        this.router.navigateByUrl('/' + this.routeingUrlValue);
    }
    /**
     * @return {?}
     */
    setJwtToken() {
        /** @type {?} */
        let link = "https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/temptoken";
        /** @type {?} */
        let data;
        this.http.post(link, data).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            // console.log(res);
            /** @type {?} */
            let result = {};
            result = res;
            this.cookieService.set('jwtToken', result.token);
            this.cookieService.getAll();
        }));
    }
}
ContactusComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-contactus',
                template: "\n\n  <button class=\"listingButton\" mat-raised-button color=\"accent\" (click)=\"goToListing()\">Listing</button>\n  <button  mat-raised-button color=\"warn\" (click)=\"setJwtToken()\"> SetToken</button>\n\n\n\n<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n\n        <h2 *ngIf=\"formTitleValue != ''\" class=\"title\"> {{formTitleValue}}</h2>\n\n        <form class=\"example-container\" [formGroup]=\"contactUsForm\" (ngSubmit)=\"contactUsFormSubmit()\" novalidate>\n\n\n\n\n  <!-- Location Name field start here-->\n  <mat-form-field>\n      <input matInput placeholder=\"Location Name \" formControlName=\"locationname\" (blur)=\"inputUntouched('locationname')\" >\n      <mat-error *ngIf=\"!contactUsForm.controls['locationname'].valid && contactUsForm.controls['locationname'].errors.required && contactUsForm.controls['locationname'].touched\">Location Name field can not be blank</mat-error>\n    </mat-form-field>\n    <!-- Location Name field end here-->\n  \n  \n  \n    <!--  multiple emails fields added start here-->\n  <div formArrayName=\"multipleemails\" class=\"fromClass\" >\n  \n  \n    <mat-form-field *ngFor=\"let item of multipleemails.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n  \n  \n  \n      <input matInput placeholder=\"Email \"  formControlName=\"emails\" >\n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addEmail()\">add</i>\n        <i *ngIf=\"pointIndex != 0\" class=\"material-icons\"  (click)=\"removeEmail(pointIndex)\">remove</i>\n  \n      </span>\n  <!--    <mat-error  *ngIf=\"!item.valid && !item.errors.required\">Email is not valid</mat-error>-->\n      <mat-error *ngIf=\"!item.valid && contactUsForm.controls['locationname'].touched \">Email field can not be blank</mat-error>\n    </mat-form-field>\n  </div>\n    <!--  multiple emails fields added end here-->\n  \n  <!--  multiple Phone fields added start here-->\n  <div formArrayName=\"phones\" class=\"fromClass\">\n  \n  \n    <mat-form-field *ngFor=\"let item of phones.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n  \n  \n      <input matInput placeholder=\"Phone \"  formControlName=\"phone\" >\n  \n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addPhone()\">add</i>\n        <i *ngIf=\"pointIndex != 0\"  class=\"material-icons\"  (click)=\"removePhone(pointIndex)\">remove</i>\n  \n      </span>\n  \n  \n      <mat-error *ngIf=\"item.valid  \">Phone field can not be blank</mat-error>\n    </mat-form-field>\n  \n  </div>\n  \n    <!--  multiple Phone fields added end here-->\n  \n  <!--  multiple Addresses fields added start here-->\n  <div formArrayName=\"addresses\" class=\"fromClass\">\n  \n  \n    <mat-form-field *ngFor=\"let item of addresses.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n  \n      <textarea  matInput placeholder=\"Address {{pointIndex + 1}} \"  formControlName=\"address\" ></textarea>\n  \n      <span matSuffix>\n        <i class=\"material-icons\"  (click)=\"addAddress()\">add</i>\n        <i *ngIf=\"pointIndex != 0\" class=\"material-icons\"  (click)=\"removeAddress(pointIndex)\">remove</i>\n  \n      </span>\n  \n  <!--    <mat-error  *ngIf=\"!contactUsForm.controls['email'].valid && !contactUsForm.controls['email'].errors.required\">Email is not valid</mat-error>-->\n      <mat-error *ngIf=\"!item.valid \">Address field can not be blank</mat-error>\n  \n    </mat-form-field>\n  </div>\n    <!--  multiple Addresses fields added end here-->\n  \n    <!-- Address field start here-->\n    <!--<mat-form-field>\n      <textarea matInput placeholder=\"Address\" formControlName=\"address\" (blur)=\"inputblur('address')\"></textarea>\n      <mat-error *ngIf=\"!contactUsForm.controls['address'].valid && contactUsForm.controls['address'].errors.required\">Address field can not be blank</mat-error>\n    </mat-form-field>-->\n    <!-- Address field end here-->\n  \n  \n    <!-- Message field start here -->\n    <mat-form-field>\n      <textarea matInput placeholder=\"Message\" formControlName=\"message\" (blur)=\"inputUntouched('message')\"></textarea>\n  <!--    <mat-error *ngIf=\"!contactUsForm.controls['message'].valid && contactUsForm.controls['message'].errors.required\">Message field can not be blank</mat-error>-->\n    </mat-form-field>\n    <!-- Message field end here -->\n  \n    <button mat-raised-button color=\"primary\">Submit</button>\n\n        </form>\n\n    </mat-card>\n\n</div>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.from button{width:60px;height:40px;text-align:center;margin:0 auto}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.fromClass{display:flex;flex-direction:column;width:100%}"]
            }] }
];
/** @nocollapse */
ContactusComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ApiService },
    { type: HttpClient },
    { type: Router },
    { type: CookieService }
];
ContactusComponent.propDecorators = {
    formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
    formTitle: [{ type: Input }],
    serverUrl: [{ type: Input }],
    addEndpoint: [{ type: Input }],
    routeingUrl: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbnRhY3R1cy8iLCJzb3VyY2VzIjpbImxpYi9jb250YWN0dXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBK0IsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBYSxXQUFXLEVBQWEsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVluRCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7OztJQXlEN0IsWUFBbUIsRUFBZSxFQUFTLFVBQXNCLEVBQVMsSUFBZ0IsRUFBUyxNQUFjLEVBQVMsYUFBNEI7UUFBbkksT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFlOztRQXBEL0ksVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ2xCLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFFcEIsY0FBUyxHQUFRLEVBQUUsQ0FBQyxDQUFNLHVEQUF1RDs7UUFDakYsb0JBQWUsR0FBUSxFQUFFLENBQUM7UUFDMUIscUJBQWdCLEdBQVEsRUFBRSxDQUFDOztRQXVDbEMsYUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUN2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b3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBQaXBlLCBQaXBlVHJhbnNmb3JtLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvbnRhY3R1cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250YWN0dXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb250YWN0dXMuY29tcG9uZW50LmNzcyddXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBDb250YWN0dXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBWaWV3Q2hpbGQoRm9ybUdyb3VwRGlyZWN0aXZlKSBmb3JtRGlyZWN0aXZlOiBGb3JtR3JvdXBEaXJlY3RpdmU7XG5cbiAgcHVibGljIGZvcm1UaXRsZVZhbHVlOiBhbnk7ICAgICAgICAvLyBUaGlzIHZhcmlhYmxlIGlzIHVzZSBmb3Igc2hvdyB0aGUgRm9ybSB0aXRsZSAgIFxuICBwdWJsaWMgZW1haWw6IGFueVtdID0gW107XG4gIHB1YmxpYyBwaG9uZTogYW55W10gPSBbXTtcbiAgcHVibGljIGFkZHJlc3M6IGFueVtdID0gW107XG5cbiAgcHVibGljIHNlcnZlclVSTDogYW55ID0gJyc7ICAgICAgLy8gdXJsIHZhcmlhYmxlIHRvIGZldGNoIHRoZSBhZGQgYXZhaWxhYmlsaXR5IGZvcm0gcGFnZVxuICBwdWJsaWMgYWRkRW5kcG9pbnREYXRhOiBhbnkgPSAnJztcbiAgcHVibGljIHJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIFxuICBwdWJsaWMgc2V0IGZvcm1UaXRsZShmb3JtVGl0bGVWYWwgOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZvcm1UaXRsZVZhbHVlID0gZm9ybVRpdGxlVmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybVRpdGxlVmFsdWUpXG4gIH1cblxuICBcblxuXG4gIEBJbnB1dCgpICAgICAvLyBzZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuXG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlclVSTCA9IChzZXJ2ZXJVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNlcnZlclVSTCA9IHNlcnZlclVybHZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVSTCk7XG5cbiAgfVxuXG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgdXJsIGFkZEVuZHBvaW50IGZyb20gcHJvamVjdFxuICBzZXQgYWRkRW5kcG9pbnQoZW5kcG9pbnRVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gKGVuZHBvaW50VXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5hZGRFbmRwb2ludERhdGEgPSBlbmRwb2ludFVybHZhbDtcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5hZGRFbmRwb2ludERhdGEnKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50RGF0YSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludERhdGEuZW5kcG9pbnQpO1xuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgVXJsIGZyb20gcHJvamVjdFxuICBzZXQgcm91dGVpbmdVcmwocm91dGVpbmdVcmx2YWw6IGFueSkge1xuICAgIHRoaXMucm91dGVpbmdVcmxWYWx1ZSA9IChyb3V0ZWluZ1VybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMucm91dGVpbmdVcmxWYWx1ZSA9IHJvdXRlaW5nVXJsdmFsO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucm91dGVpbmdVcmxWYWx1ZSk7XG4gIH1cblxuICAvKlVzaW5nIGZvciBnb29nbGUgbWFwIHN0YXJ0IC0tLS0qL1xuICBsYXRpdHVkZSA9IC0yOC42ODM1MjtcbiAgbG9uZ2l0dWRlID0gLTE0Ny4yMDc4NTtcbiAgbWFwVHlwZSA9ICdzYXRlbGxpdGUnO1xuICAvKlVzaW5nIGZvciBnb29nbGUgbWFwIGVuZCAtLS0tKi9cblxuXG4gIHB1YmxpYyBjb250YWN0VXNGb3JtOiBGb3JtR3JvdXA7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgY29va2llU2VydmljZTogQ29va2llU2VydmljZSkge1xuICAgIHRoaXMuY29udGFjdFVzRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgbG9jYXRpb25uYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbWVzc2FnZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgIG11bHRpcGxlZW1haWxzOiB0aGlzLmZiLmFycmF5KFt0aGlzLmZiLmdyb3VwKHsgZW1haWxzOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvKV0pXSB9KV0pLFxuICAgICAgcGhvbmVzOiB0aGlzLmZiLmFycmF5KFt0aGlzLmZiLmdyb3VwKHsgcGhvbmU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSldKSxcbiAgICAgIGFkZHJlc3NlczogdGhpcy5mYi5hcnJheShbdGhpcy5mYi5ncm91cCh7IGFkZHJlc3M6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSldKVxuXG4gICAgfSk7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhclNlcnZlclVybCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLnNlcnZlclVSTCk7XG4gICAgfSwgNTApO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVVJMKTtcblxuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmFkZEVuZHBvaW50RGF0YS5lbmRwb2ludCk7XG4gICAgfSwgNTApO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWRkRW5kcG9pbnREYXRhLmVuZHBvaW50KTtcblxuICB9XG4gIC8qIE11bHRpcGxlIGVtYWlscyBjcmVhdGVkIHN0YXJ0IGhlcmUqL1xuICBnZXQgbXVsdGlwbGVlbWFpbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFjdFVzRm9ybS5nZXQoJ211bHRpcGxlZW1haWxzJykgYXMgRm9ybUFycmF5O1xuICB9XG5cbiAgLyogQWRkIGVtYWlsIGZpZWxkIHN0YXJ0IGhlcmUgKi9cbiAgYWRkRW1haWwoKSB7XG4gICAgY29uc29sZS5sb2coJ29raycpO1xuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIHRoaXMubXVsdGlwbGVlbWFpbHMucHVzaCh0aGlzLmZiLmdyb3VwKHsgZW1haWxzOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvKV0pXSB9KSk7XG4gIH1cbiAgLyogQWRkIGVtYWlsIGZpZWxkIGVuZCBoZXJlICovXG5cbiAgLyogUmVtb3ZlIGVtYWlsIGZpZWxkIHN0YXJ0IGhlcmUgKi9cbiAgcmVtb3ZlRW1haWwoaW5kZXgpIHtcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgdGhpcy5tdWx0aXBsZWVtYWlscy5yZW1vdmVBdChpbmRleCk7XG4gIH1cbiAgLyogUmVtb3ZlIGVtYWlsIGZpZWxkIGVuZCBoZXJlICovXG4gIC8qIE11bHRpcGxlIGVtYWlscyBjcmVhdGVkIGVuZCBoZXJlKi9cblxuXG4gIC8qIE11bHRpcGxlIGFkZHJlc3NlcyBjcmVhdGVkIHN0YXJ0IGhlcmUqL1xuXG4gIGdldCBhZGRyZXNzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFjdFVzRm9ybS5nZXQoJ2FkZHJlc3NlcycpIGFzIEZvcm1BcnJheTtcbiAgfVxuICAvKiBBZGQgYWRkcmVzc2VzIGZpZWxkIHN0YXJ0IGhlcmUgKi9cbiAgYWRkQWRkcmVzcygpIHtcbiAgICBjb25zb2xlLmxvZygnb2trJyk7XG4gICAgdGhpcy5hZGRyZXNzZXMucHVzaCh0aGlzLmZiLmdyb3VwKHsgYWRkcmVzczogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KSk7XG4gIH1cbiAgLyogQWRkIGFkZHJlc3NlcyBmaWVsZCBlbmQgaGVyZSAqL1xuXG4gIC8qIFJlbW92ZSBhZGRyZXNzZXMgZmllbGQgc3RhcnQgaGVyZSAqL1xuICByZW1vdmVBZGRyZXNzKGluZGV4KSB7XG4gICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xuICAgIHRoaXMuYWRkcmVzc2VzLnJlbW92ZUF0KGluZGV4KTtcbiAgfVxuICAvKiBSZW1vdmUgYWRkcmVzc2VzIGZpZWxkIGVuZCBoZXJlICovXG4gIC8qIE11bHRpcGxlIGFkZHJlc3NlcyBjcmVhdGVkIGVuZCBoZXJlKi9cblxuXG4gIC8qIE11bHRpcGxlIHBob25lcyBjcmVhdGVkIHN0YXJ0IGhlcmUqL1xuICBnZXQgcGhvbmVzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRhY3RVc0Zvcm0uZ2V0KCdwaG9uZXMnKSBhcyBGb3JtQXJyYXk7XG4gIH1cblxuICAvKiBBZGQgYWRkcmVzc2VzIGZpZWxkIHN0YXJ0IGhlcmUgKi9cblxuICBhZGRQaG9uZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb2trJyk7XG4gICAgdGhpcy5waG9uZXMucHVzaCh0aGlzLmZiLmdyb3VwKHsgcGhvbmU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSkpO1xuICB9XG5cbiAgLyogQWRkIHBob25lcyBmaWVsZCBlbmQgaGVyZSAqL1xuXG4gIC8qIFJlbW92ZSBwaG9uZXMgZmllbGQgc3RhcnQgaGVyZSAqL1xuICByZW1vdmVQaG9uZShpbmRleCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICB0aGlzLnBob25lcy5yZW1vdmVBdChpbmRleCk7XG4gIH1cbiAgLyogUmVtb3ZlIHBob25lcyBmaWVsZCBlbmQgaGVyZSAqL1xuICAvKiBNdWx0aXBsZSBwaG9uZXMgY3JlYXRlZCBlbmQgaGVyZSovXG5cblxuXG5cbiAgLy8gY29udGFjdFVzRm9ybSBzdWJtaXQgZnVuY3Rpb24gc3RhcnQgaGVyZVxuICBjb250YWN0VXNGb3JtU3VibWl0KCkge1xuICAgIGxldCB4OiBhbnk7XG4gICAgZm9yICh4IGluIHRoaXMuY29udGFjdFVzRm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5jb250YWN0VXNGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcblxuICAgIH1cbiAgICBpZiAodGhpcy5jb250YWN0VXNGb3JtLnZhbGlkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnb2snKTtcblxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jb250YWN0VXNGb3JtLnZhbHVlKTtcblxuXG4gICAgICAvLyBBbGwgZW1haWxzIHNpdGVzIGluIGEgQXJyYXkgc3RhcnQgaGVyZVxuXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLmNvbnRhY3RVc0Zvcm0udmFsdWUubXVsdGlwbGVlbWFpbHMpIHtcbiAgICAgICAgdGhpcy5lbWFpbC5wdXNoKGtleS5lbWFpbHMpO1xuXG4gICAgICB9XG4gICAgICAvLyBBbGwgZW1haWxzIHNpdGVzIGluIGEgQXJyYXkgZW5kIGhlcmVcblxuICAgICAgLy8gQWxsIFBob25lcyBzaXRlcyBpbiBhIEFycmF5IHN0YXJ0IGhlcmVcblxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jb250YWN0VXNGb3JtLnZhbHVlLnBob25lcyk7XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLmNvbnRhY3RVc0Zvcm0udmFsdWUucGhvbmVzKSB7XG4gICAgICAgIHRoaXMucGhvbmUucHVzaChrZXkucGhvbmUpO1xuXG4gICAgICB9XG4gLy8gQWxsIFBob25lcyBzaXRlcyBpbiBhIEFycmF5IGVuZCBoZXJlXG5cbiAgICAgIC8vIEFsbCBhZGRyZXNzZXMgc2l0ZXMgaW4gYSBBcnJheSBzdGFydCBoZXJlXG5cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuY29udGFjdFVzRm9ybS52YWx1ZS5hZGRyZXNzZXMpIHtcbiAgICAgICAgdGhpcy5hZGRyZXNzLnB1c2goa2V5LmFkZHJlc3MpO1xuICAgICAgfVxuICAgICAgLy8gQWxsIGFkZHJlc3NlcyBzaXRlcyBpbiBhIEFycmF5IGVuZCBoZXJlXG5cbiAgICAgIGxldCBhbGxEYXRhOiBhbnkgPXt9O1xuICAgICAgYWxsRGF0YS5sb2NhdGlvbm5hbWUgPSB0aGlzLmNvbnRhY3RVc0Zvcm0udmFsdWUubG9jYXRpb25uYW1lO1xuICAgICAgYWxsRGF0YS5hZGRyZXNzID0gdGhpcy5hZGRyZXNzO1xuICAgICAgYWxsRGF0YS5waG9uZSA9IHRoaXMucGhvbmU7XG4gICAgICBhbGxEYXRhLmVtYWlsID0gdGhpcy5lbWFpbDtcbiAgICAgIGFsbERhdGEubWVzc2FnZSA9IHRoaXMuY29udGFjdFVzRm9ybS52YWx1ZS5tZXNzYWdlOyBcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFsbERhdGEpO1xuICAgICAgbGV0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgXCJzb3VyY2VcIjogdGhpcy5hZGRFbmRwb2ludERhdGEuc291cmNlLFxuICAgICAgICBcImRhdGFcIjogYWxsRGF0YSxcbiAgICAgICAgXCJ0b2tlblwiOiB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdqd3RUb2tlbicpXG4gICAgICB9XG4gICAgICB0aGlzLmFwaVNlcnZpY2UuYWRkRGF0YShkYXRhKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG5cbiAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfVxuXG5cblxuICB9XG5cbiAgLy8gY29udGFjdFVzRm9ybSBzdWJtaXQgZnVuY3Rpb24gZW5kIGhlcmVcblxuXG5cbiAgaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnb2stLS0tJyk7XG4gICAgdGhpcy5jb250YWN0VXNGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxuXG5cbiAgZ29Ub0xpc3RpbmcoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLnJvdXRlaW5nVXJsVmFsdWUpO1xuICB9XG5cblxuXG4gIHNldEp3dFRva2VuKCkge1xuICAgIGxldCBsaW5rOiBhbnkgPSBcImh0dHBzOi8vbzgyMGN2Mmx1OC5leGVjdXRlLWFwaS51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uL2FwaS90ZW1wdG9rZW5cIjtcbiAgICBsZXQgZGF0YTogYW55O1xuICAgIHRoaXMuaHR0cC5wb3N0KGxpbmssZGF0YSkuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgbGV0IHJlc3VsdDogYW55PXt9O1xuICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnNldCgnand0VG9rZW4nLCByZXN1bHQudG9rZW4pO1xuICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLmdldEFsbCgpO1xuICAgIH0pXG4gIH1cblxufVxuXG4iXX0=