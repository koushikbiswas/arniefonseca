/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material';
export class ForgetPasswordComponent {
    /**
     * @param {?} fb
     * @param {?} router
     * @param {?} apiService
     * @param {?} snackBar
     */
    constructor(fb, router, apiService, snackBar) {
        this.fb = fb;
        this.router = router;
        this.apiService = apiService;
        this.snackBar = snackBar;
        this.message = '';
        this.formTitleValue = ''; // This is From title
        // This is From title
        this.serverUrlValue = ''; //  This is Server url
        //  This is Server url
        this.signUpRouteingUrlValue = ''; // setting the navigate By Sign Up Url from project
        // setting the navigate By Sign Up Url from project
        this.domanUrlValue = ''; // This is reset password url
        // This is reset password url
        this.addEndpointValue = ''; // This is endpoint url
        // This is endpoint url
        this.logoValue = ''; // This is from logo url
        // This is from logo url
        this.durationInSeconds = 5; // This is SnackBar set time
        this.forgetPasswordForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
        });
    }
    // This is SnackBar set time
    /**
     * @param {?} domanUrlVal
     * @return {?}
     */
    set domanUrl(domanUrlVal) {
        this.domanUrlValue = (domanUrlVal) || '<no name set>';
        this.domanUrlValue = domanUrlVal;
        console.log(this.domanUrlValue);
    }
    /**
     * @param {?} formTitleVal
     * @return {?}
     */
    set formTitle(formTitleVal) {
        this.formTitleValue = (formTitleVal) || '<no name set>';
        this.formTitleValue = formTitleVal;
    }
    /**
     * @param {?} serverUrlVal
     * @return {?}
     */
    set serverUrl(serverUrlVal) {
        this.serverUrlValue = (serverUrlVal) || '<no name set>';
        this.serverUrlValue = serverUrlVal;
    }
    /**
     * @param {?} logoVal
     * @return {?}
     */
    set logo(logoVal) {
        this.logoValue = logoVal;
    }
    /**
     * @param {?} addEndpointval
     * @return {?}
     */
    set addEndpoint(addEndpointval) {
        this.addEndpointValue = addEndpointval;
    }
    /**
     * @param {?} routeingUrlval
     * @return {?}
     */
    set signUpRouteingUrl(routeingUrlval) {
        this.signUpRouteingUrlValue = (routeingUrlval) || '<no name set>';
        this.signUpRouteingUrlValue = routeingUrlval;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.apiService.clearServerUrl(); //  Clear the server url
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setServerUrl(this.serverUrlValue); //  set the server url
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); //  Clear the endpoint
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setaddEndpoint(this.addEndpointValue.endpoint); //  set the endpoint
        }), 50);
    }
    /**
     * ****** Forget password  Form Submit start here********
     * @return {?}
     */
    forgetPasswordSubmit() {
        /** @type {?} */
        let x;
        //  This for-loop use for from blank or properly validated checking  
        for (x in this.forgetPasswordForm.controls) {
            this.forgetPasswordForm.controls[x].markAsTouched();
        }
        if (this.forgetPasswordForm.valid) { //    validation checking
            this.openSnackBar(); // open snack-bar function
            // open snack-bar function
            /** @type {?} */
            let link = this.serverUrlValue;
            /** @type {?} */
            let data = this.forgetPasswordForm.value;
            data.domanUrl = this.domanUrlValue;
            this.apiService.forgetPassword(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                // console.log(response);
                /** @type {?} */
                let result = {};
                result = response;
                if (result.status == "success") {
                    this.openSnackBar(); // open snack-bar function
                    // this is use for reset the from
                    this.formDirective.resetForm(); // clear the from
                }
                else {
                    // display error message on html
                    this.message = result.msg; // show the error message
                }
            }));
        }
    }
    /********* Forget password  Form Submit end here*********/
    /**
     * ****** openSnackBar function open start here********
     * @return {?}
     */
    openSnackBar() {
        this.snackBar.openFromComponent(snackBarComponent, {
            duration: this.durationInSeconds * 1000,
        });
    }
    /**
     * ****** openSnackBar function open end here********
     * @return {?}
     */
    // This is use for navigate this component to sign-Up component 
    signup() {
        this.router.navigateByUrl('/' + this.signUpRouteingUrlValue);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputUntouched(val) {
        this.forgetPasswordForm.controls[val].markAsUntouched();
    }
}
ForgetPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-forget-password',
                template: "<div class=\"main-div\">\n\n  <mat-card class=\"from\">\n      <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\n          <img  [src]=\"logoValue\">\n      </span>\n\n    <h2 *ngIf=\"formTitleValue != ''\"> {{formTitleValue}}</h2>\n\n\n    <form class=\"example-container\" [formGroup]=\"forgetPasswordForm\" (ngSubmit)=\"forgetPasswordSubmit()\" novalidate>\n<mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n      <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"Email\"  formControlName=\"email\" (blur)=\"inputUntouched('email')\">\n        <mat-error\n          *ngIf=\"!forgetPasswordForm.controls['email'].valid && forgetPasswordForm.controls['email'].errors.required && forgetPasswordForm.controls['email'].touched\">\n          Email field can not be blank</mat-error>\n        <mat-error\n          *ngIf=\"!forgetPasswordForm.controls['email'].valid && !forgetPasswordForm.controls['email'].errors.required\">\n          Email is not valid</mat-error>\n      </mat-form-field>\n\n      <button mat-raised-button color=\"primary\">Forget Password</button>\n      <span class=\"signupfooter\">\n        <a (click)=\"signup()\">Sign Up</a>\n      </span>\n    </form>\n  </mat-card>\n</div>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
            }] }
];
/** @nocollapse */
ForgetPasswordComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: Router },
    { type: ApiService },
    { type: MatSnackBar }
];
ForgetPasswordComponent.propDecorators = {
    formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
    domanUrl: [{ type: Input }],
    formTitle: [{ type: Input }],
    serverUrl: [{ type: Input }],
    logo: [{ type: Input }],
    addEndpoint: [{ type: Input }],
    signUpRouteingUrl: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ForgetPasswordComponent.prototype.message;
    /** @type {?} */
    ForgetPasswordComponent.prototype.formDirective;
    /** @type {?} */
    ForgetPasswordComponent.prototype.forgetPasswordForm;
    /** @type {?} */
    ForgetPasswordComponent.prototype.formTitleValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.serverUrlValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.signUpRouteingUrlValue;
    /**
     * @type {?}
     * @private
     */
    ForgetPasswordComponent.prototype.domanUrlValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.addEndpointValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.logoValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.durationInSeconds;
    /** @type {?} */
    ForgetPasswordComponent.prototype.fb;
    /** @type {?} */
    ForgetPasswordComponent.prototype.router;
    /** @type {?} */
    ForgetPasswordComponent.prototype.apiService;
    /**
     * @type {?}
     * @private
     */
    ForgetPasswordComponent.prototype.snackBar;
}
export class snackBarComponent {
}
snackBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-modale',
                template: "<span class=\"example\">\n    We have e-mailed your password reset link!\n  </span>",
                styles: [`
    .example {
      color: aliceblue;
      background-color: yellowgreen;
    }
  `]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xvZ2luLyIsInNvdXJjZXMiOlsibGliL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RixPQUFPLEVBQUUsTUFBTSxFQUFrQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPaEQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7OztJQXVEbEMsWUFDUyxFQUFlLEVBQ2YsTUFBYyxFQUNkLFVBQXNCLEVBQ3JCLFFBQXFCO1FBSHRCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBMUR4QixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBTWxCLG1CQUFjLEdBQVEsRUFBRSxDQUFDLENBQVUscUJBQXFCOztRQUN4RCxtQkFBYyxHQUFRLEVBQUUsQ0FBQyxDQUFVLHNCQUFzQjs7UUFDekQsMkJBQXNCLEdBQVEsRUFBRSxDQUFDLENBQUUsbURBQW1EOztRQUNyRixrQkFBYSxHQUFRLEVBQUUsQ0FBQyxDQUFVLDZCQUE2Qjs7UUFDaEUscUJBQWdCLEdBQVEsRUFBRSxDQUFDLENBQVEsdUJBQXVCOztRQUMxRCxjQUFTLEdBQVEsRUFBRSxDQUFDLENBQWUsd0JBQXdCOztRQUMzRCxzQkFBaUIsR0FBRyxDQUFDLENBQUMs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MEJBTUwsS0FBSztnQ0FPTCxLQUFLOzs7O0lBaEROLDBDQUF5Qjs7SUFHekIsZ0RBQWlFOztJQUVqRSxxREFBcUM7O0lBQ3JDLGlEQUFnQzs7SUFDaEMsaURBQWdDOztJQUNoQyx5REFBd0M7Ozs7O0lBQ3hDLGdEQUFnQzs7SUFDaEMsbURBQWtDOztJQUNsQyw0Q0FBMkI7O0lBQzNCLG9EQUE2Qjs7SUEyQzNCLHFDQUFzQjs7SUFDdEIseUNBQXFCOztJQUNyQiw2Q0FBNkI7Ozs7O0lBQzdCLDJDQUE2Qjs7QUFzR2pDLE1BQU0sT0FBTyxpQkFBaUI7OztZQVY3QixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsK0ZBQXlDO3lCQUNoQzs7Ozs7R0FLUjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWZvcmdldC1wYXNzd29yZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvcmdldFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIG1lc3NhZ2U6IGFueSA9ICcnO1xuXG4gIC8vICAgRm9ybUdyb3VwRGlyZWN0aXZlOiBJdCBpcyBhIGRpcmVjdGl2ZSB0aGF0IGJpbmRzIGFuIGV4aXN0aW5nIEZvcm1Hcm91cCB0byBhIERPTSBlbGVtZW50LlxuICBAVmlld0NoaWxkKEZvcm1Hcm91cERpcmVjdGl2ZSkgZm9ybURpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlO1xuXG4gIHB1YmxpYyBmb3JnZXRQYXNzd29yZEZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIGZvcm1UaXRsZVZhbHVlOiBhbnkgPSAnJzsgICAgICAgICAgLy8gVGhpcyBpcyBGcm9tIHRpdGxlXG4gIHB1YmxpYyBzZXJ2ZXJVcmxWYWx1ZTogYW55ID0gJyc7ICAgICAgICAgIC8vICBUaGlzIGlzIFNlcnZlciB1cmxcbiAgcHVibGljIHNpZ25VcFJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnOyAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgU2lnbiBVcCBVcmwgZnJvbSBwcm9qZWN0XG4gIHByaXZhdGUgZG9tYW5VcmxWYWx1ZTogYW55ID0gJyc7ICAgICAgICAgIC8vIFRoaXMgaXMgcmVzZXQgcGFzc3dvcmQgdXJsXG4gIHB1YmxpYyBhZGRFbmRwb2ludFZhbHVlOiBhbnkgPSAnJzsgICAgICAgIC8vIFRoaXMgaXMgZW5kcG9pbnQgdXJsXG4gIHB1YmxpYyBsb2dvVmFsdWU6IGFueSA9ICcnOyAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgZnJvbSBsb2dvIHVybFxuICBwdWJsaWMgZHVyYXRpb25JblNlY29uZHMgPSA1OyAgICAgICAgICAgICAvLyBUaGlzIGlzIFNuYWNrQmFyIHNldCB0aW1lXG5cblxuICBASW5wdXQoKSAgICAgICAgIC8vIFNldCB0aGUgcHJvamVjdCBlbWFpbCBEb21hbiBVUkxcbiAgc2V0IGRvbWFuVXJsKGRvbWFuVXJsVmFsOiBhbnkpIHtcbiAgICB0aGlzLmRvbWFuVXJsVmFsdWUgPSAoZG9tYW5VcmxWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmRvbWFuVXJsVmFsdWUgPSBkb21hblVybFZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRvbWFuVXJsVmFsdWUpO1xuICB9XG4gIEBJbnB1dCgpICAgICAgICAgLy8gU2V0IHRoZSBwcm9qZWN0IG5hbWVcbiAgc2V0IGZvcm1UaXRsZShmb3JtVGl0bGVWYWw6IGFueSkge1xuICAgIHRoaXMuZm9ybVRpdGxlVmFsdWUgPSAoZm9ybVRpdGxlVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5mb3JtVGl0bGVWYWx1ZSA9IGZvcm1UaXRsZVZhbDtcblxuICB9XG5cbiAgQElucHV0KCkgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsVmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlclVybFZhbHVlID0gKHNlcnZlclVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSBzZXJ2ZXJVcmxWYWw7XG5cbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgLy8gc2V0IHRoZSBmcm9tIGxvZ29cblxuICBzZXQgbG9nbyhsb2dvVmFsOiBhbnkpIHtcbiAgICB0aGlzLmxvZ29WYWx1ZSA9IGxvZ29WYWw7XG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXQgdGhlIGVuZHBvaW50IGFuZCBzb3VyY2VcblxuICBzZXQgYWRkRW5kcG9pbnQoYWRkRW5kcG9pbnR2YWw6IGFueSkge1xuICAgIHRoaXMuYWRkRW5kcG9pbnRWYWx1ZSA9IGFkZEVuZHBvaW50dmFsO1xuICB9XG5cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBTaWduIFVwIFVybCBmcm9tIHByb2plY3RcbiAgc2V0IHNpZ25VcFJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxuICAgIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyXG4gICkge1xuXG5cblxuICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0sXG5cbiAgICB9KTtcblxuXG5cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7ICAgICAgIC8vICBDbGVhciB0aGUgc2VydmVyIHVybFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLnNlcnZlclVybFZhbHVlKTsgICAgICAgIC8vICBzZXQgdGhlIHNlcnZlciB1cmxcbiAgICB9LCA1MCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xuXG5cbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpOyAgICAgICAvLyAgQ2xlYXIgdGhlIGVuZHBvaW50XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludFZhbHVlLmVuZHBvaW50KTsgICAvLyAgc2V0IHRoZSBlbmRwb2ludFxuICAgIH0sIDUwKTtcbiAgfVxuXG4gIC8qKioqKioqKiogRm9yZ2V0IHBhc3N3b3JkICBGb3JtIFN1Ym1pdCBzdGFydCBoZXJlKioqKioqKioqL1xuICBmb3JnZXRQYXNzd29yZFN1Ym1pdCgpIHtcbiAgICBsZXQgeDogYW55O1xuXG4gICAgLy8gIFRoaXMgZm9yLWxvb3AgdXNlIGZvciBmcm9tIGJsYW5rIG9yIHByb3Blcmx5IHZhbGlkYXRlZCBjaGVja2luZyAgXG4gICAgZm9yICh4IGluIHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLmZvcmdldFBhc3N3b3JkRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZvcmdldFBhc3N3b3JkRm9ybS52YWxpZCkgeyAgICAvLyAgICB2YWxpZGF0aW9uIGNoZWNraW5nXG5cbiAgICAgIHRoaXMub3BlblNuYWNrQmFyKCk7ICAgICAgICAgICAgICAvLyBvcGVuIHNuYWNrLWJhciBmdW5jdGlvblxuXG4gICAgICBsZXQgbGluazogYW55ID0gdGhpcy5zZXJ2ZXJVcmxWYWx1ZTtcbiAgICAgIGxldCBkYXRhOiBhbnkgPSB0aGlzLmZvcmdldFBhc3N3b3JkRm9ybS52YWx1ZTtcblxuICAgICAgZGF0YS5kb21hblVybCA9IHRoaXMuZG9tYW5VcmxWYWx1ZTtcblxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmZvcmdldFBhc3N3b3JkKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG5cblxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKCk7ICAgICAgICAgICAgIC8vIG9wZW4gc25hY2stYmFyIGZ1bmN0aW9uXG4gICAgICAgICAgLy8gdGhpcyBpcyB1c2UgZm9yIHJlc2V0IHRoZSBmcm9tXG4gICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlc2V0Rm9ybSgpOyAgICAgICAgIC8vIGNsZWFyIHRoZSBmcm9tXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAvLyBkaXNwbGF5IGVycm9yIG1lc3NhZ2Ugb24gaHRtbFxuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHJlc3VsdC5tc2c7ICAgICAgLy8gc2hvdyB0aGUgZXJyb3IgbWVzc2FnZVxuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKioqKioqKiogRm9yZ2V0IHBhc3N3b3JkICBGb3JtIFN1Ym1pdCBlbmQgaGVyZSoqKioqKioqKi9cblxuXG4gIC8qKioqKioqKiogb3BlblNuYWNrQmFyIGZ1bmN0aW9uIG9wZW4gc3RhcnQgaGVyZSoqKioqKioqKi9cblxuXG4gIG9wZW5TbmFja0JhcigpIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KHNuYWNrQmFyQ29tcG9uZW50LCB7XG4gICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbkluU2Vjb25kcyAqIDEwMDAsXG4gICAgfSk7XG4gIH1cbiAvKioqKioqKioqIG9wZW5TbmFja0JhciBmdW5jdGlvbiBvcGVuIGVuZCBoZXJlKioqKioqKioqL1xuXG5cbiAgLy8gVGhpcyBpcyB1c2UgZm9yIG5hdmlnYXRlIHRoaXMgY29tcG9uZW50IHRvIHNpZ24tVXAgY29tcG9uZW50IFxuICBzaWdudXAoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUpO1xuICB9XG5cbiAgaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcbiAgICB0aGlzLmZvcmdldFBhc3N3b3JkRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItbW9kYWxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JnZXQtcGFzc3dvcmRNb2RhbGUuaHRtbCcsXG4gIHN0eWxlczogW2BcbiAgICAuZXhhbXBsZSB7XG4gICAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XG4gICAgfVxuICBgXSxcbn0pXG5leHBvcnQgY2xhc3Mgc25hY2tCYXJDb21wb25lbnQgeyB9XG4iXX0=