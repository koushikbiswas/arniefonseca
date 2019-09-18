/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
export class LoginComponent {
    /**
     * @param {?} fb
     * @param {?} http
     * @param {?} router
     * @param {?} apiService
     */
    constructor(fb, http, router, apiService) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.apiService = apiService;
        this.message = '';
        this.fromTitleValue = '';
        this.serverURL = '';
        this.signUpRouteingUrlValue = '';
        this.forgetRouteingUrlValue = '';
        this.routerStatusValue = '';
        this.logoValue = '';
        this.project_name = '';
        this.loginForm = this.fb.group({
            username: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
            password: ['', Validators.required]
        });
    }
    /**
     * @param {?} fromTitleVal
     * @return {?}
     */
    set fromTitle(fromTitleVal) {
        this.fromTitleValue = (fromTitleVal) || '<no name set>';
        this.fromTitleValue = fromTitleVal;
    }
    /**
     * @param {?} logoVal
     * @return {?}
     */
    set logo(logoVal) {
        this.logoValue = logoVal;
    }
    /**
     * @param {?} fullUrlVal
     * @return {?}
     */
    set fullUrl(fullUrlVal) {
        this.serverURL = (fullUrlVal) || '<no name set>';
        this.serverURL = fullUrlVal;
    }
    /**
     * @param {?} endpointVal
     * @return {?}
     */
    set endpoint(endpointVal) {
        this.endpointValue = endpointVal;
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
     * @param {?} routeingUrlval
     * @return {?}
     */
    set forgetRouteingUrl(routeingUrlval) {
        this.forgetRouteingUrlValue = (routeingUrlval) || '<no name set>';
        this.forgetRouteingUrlValue = routeingUrlval;
    }
    /**
     * @param {?} routerStatusval
     * @return {?}
     */
    set routerStatus(routerStatusval) {
        this.routerStatusValue = (routerStatusval) || '<no name set>';
        this.routerStatusValue = routerStatusval;
        console.log(this.routerStatusValue);
        console.log(this.routerStatusValue.data.length);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.apiService.clearServerUrl(); // Clear the server url
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setServerUrl(this.serverURL); // set the server url 
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); // clear the endpoint 
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setaddEndpoint(this.endpointValue); // set the endpoint
        }), 50);
        // console.log(this.addEndpointData.endpoint);
    }
    /**
     * ****** Login Form Submit start here********
     * @return {?}
     */
    loginFormSubmit() {
        /** @type {?} */
        let x;
        // use for validation checking
        for (x in this.loginForm.controls) {
            this.loginForm.controls[x].markAsTouched();
        }
        if (this.loginForm.valid) {
            /** @type {?} */
            let data = this.loginForm.value;
            this.apiService.addLogin(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                // console.log(response);
                /** @type {?} */
                let result = {};
                result = response;
                if (result.status == "success") {
                    for (const key in this.routerStatusValue.data) {
                        console.log(this.routerStatusValue.data[key].type);
                        if (result.type === this.routerStatusValue.data[key].type) {
                            this.router.navigateByUrl('/' + this.routerStatusValue.data[key].routerNav); // navigate to dashboard url 
                        }
                    }
                    // this is use for reset the from
                    this.formDirective.resetForm();
                }
                else {
                    // display error message on html
                    this.message = result.msg;
                }
            }));
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputUntouched(val) {
        this.loginForm.controls[val].markAsUntouched();
    }
    // This is use for navigate this component to forget component 
    /**
     * @return {?}
     */
    forgetpassword() {
        this.router.navigateByUrl('/' + this.forgetRouteingUrlValue);
    }
    // This is use for navigate this component to sign-Up component 
    /**
     * @return {?}
     */
    signup() {
        this.router.navigateByUrl('/' + this.signUpRouteingUrlValue);
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-login',
                template: "<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n            <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\n                    <img  [src]=\"logoValue\">\n                </span>\n\n        <h2 *ngIf=\"fromTitleValue != ''\"> {{fromTitleValue}}</h2>\n\n        <form class=\"example-container\" [formGroup]=\"loginForm\" (ngSubmit)=\"loginFormSubmit()\" novalidate>\n<mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Username\" formControlName=\"username\" (blur)=\"inputUntouched('username')\">\n                <mat-error\n                    *ngIf=\"!loginForm.controls['username'].valid && loginForm.controls['username'].errors.required && loginForm.controls['username'].touched\">\n                    Username field can not be blank</mat-error>\n            </mat-form-field>\n\n\n            <mat-form-field>\n                <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" (blur)=\"inputUntouched('password')\">\n                <mat-error\n                    *ngIf=\"!loginForm.controls['password'].valid && loginForm.controls['password'].errors.required && loginForm.controls['password'].touched\">\n                    Password field can not be blank</mat-error>\n            </mat-form-field>\n\n\n            <button mat-raised-button color=\"primary\">Login</button>\n            <span class=\"signupfooter\">\n                <a (click)=\"forgetpassword()\">Forgot password</a>\n                <a (click)=\"signup()\">Sign Up</a>\n            </span>\n        </form>\n\n    </mat-card>\n\n</div>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: HttpClient },
    { type: Router },
    { type: ApiService }
];
LoginComponent.propDecorators = {
    formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
    fromTitle: [{ type: Input }],
    logo: [{ type: Input }],
    fullUrl: [{ type: Input }],
    endpoint: [{ type: Input }],
    signUpRouteingUrl: [{ type: Input }],
    forgetRouteingUrl: [{ type: Input }],
    routerStatus: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LoginComponent.prototype.message;
    /** @type {?} */
    LoginComponent.prototype.formDirective;
    /** @type {?} */
    LoginComponent.prototype.fromTitleValue;
    /** @type {?} */
    LoginComponent.prototype.serverURL;
    /** @type {?} */
    LoginComponent.prototype.signUpRouteingUrlValue;
    /** @type {?} */
    LoginComponent.prototype.forgetRouteingUrlValue;
    /** @type {?} */
    LoginComponent.prototype.routerStatusValue;
    /** @type {?} */
    LoginComponent.prototype.endpointValue;
    /** @type {?} */
    LoginComponent.prototype.logoValue;
    /** @type {?} */
    LoginComponent.prototype.loginForm;
    /** @type {?} */
    LoginComponent.prototype.project_name;
    /** @type {?} */
    LoginComponent.prototype.fb;
    /** @type {?} */
    LoginComponent.prototype.http;
    /** @type {?} */
    LoginComponent.prototype.router;
    /** @type {?} */
    LoginComponent.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4vIiwic291cmNlcyI6WyJsaWIvbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFhLFdBQVcsRUFBYSxVQUFVLEVBQXNCLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzNDLE1BQU0sT0FBTyxjQUFjOzs7Ozs7O0lBa0V6QixZQUFtQixFQUFlLEVBQVMsSUFBZ0IsRUFBUyxNQUFjLEVBQVMsVUFBc0I7UUFBOUYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWpFMUcsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUlsQixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLDJCQUFzQixHQUFRLEVBQUUsQ0FBQztRQUNqQywyQkFBc0IsR0FBUSxFQUFFLENBQUM7UUFDakMsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBRTVCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFxRHBCLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBRzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDN0IsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENB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QyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7WUFuSkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQix1cURBQXFDOzthQUV0Qzs7OztZQVRtQixXQUFXO1lBQ3RCLFVBQVU7WUFDVixNQUFNO1lBQ04sVUFBVTs7OzRCQVVoQixTQUFTLFNBQUMsa0JBQWtCO3dCQVU1QixLQUFLO21CQU1MLEtBQUs7c0JBTUwsS0FBSzt1QkFNTCxLQUFLO2dDQVFMLEtBQUs7Z0NBT0wsS0FBSzsyQkFNTCxLQUFLOzs7O0lBbkROLGlDQUF5Qjs7SUFFekIsdUNBQWlFOztJQUVqRSx3Q0FBZ0M7O0lBQ2hDLG1DQUEyQjs7SUFDM0IsZ0RBQXdDOztJQUN4QyxnREFBd0M7O0lBQ3hDLDJDQUFtQzs7SUFDbkMsdUNBQTBCOztJQUMxQixtQ0FBMkI7O0lBb0QzQixtQ0FBNEI7O0lBQzVCLHNDQUE4Qjs7SUFFbEIsNEJBQXNCOztJQUFFLDhCQUF1Qjs7SUFBRSxnQ0FBcUI7O0lBQUUsb0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgTWluTGVuZ3RoVmFsaWRhdG9yLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIG1lc3NhZ2U6IGFueSA9ICcnO1xuICAvLyAgIEZvcm1Hcm91cERpcmVjdGl2ZTogSXQgaXMgYSBkaXJlY3RpdmUgdGhhdCBiaW5kcyBhbiBleGlzdGluZyBGb3JtR3JvdXAgdG8gYSBET00gZWxlbWVudC5cbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcblxuICBwdWJsaWMgZnJvbVRpdGxlVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgc2VydmVyVVJMOiBhbnkgPSAnJztcbiAgcHVibGljIHNpZ25VcFJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgZm9yZ2V0Um91dGVpbmdVcmxWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyByb3V0ZXJTdGF0dXNWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBlbmRwb2ludFZhbHVlOiBhbnk7XG4gIHB1YmxpYyBsb2dvVmFsdWU6IGFueSA9ICcnO1xuXG4gIEBJbnB1dCgpICAgICAgICAgLy8gU2V0IHRoZSBwcm9qZWN0IG5hbWVcbiAgc2V0IGZyb21UaXRsZShmcm9tVGl0bGVWYWw6IGFueSkge1xuICAgIHRoaXMuZnJvbVRpdGxlVmFsdWUgPSAoZnJvbVRpdGxlVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5mcm9tVGl0bGVWYWx1ZSA9IGZyb21UaXRsZVZhbDtcblxuICB9XG4gIEBJbnB1dCgpICAgICAgLy8gc2V0IHRoZSBmcm9tIGxvZ29cblxuc2V0IGxvZ28obG9nb1ZhbCA6IGFueSkge1xuICB0aGlzLmxvZ29WYWx1ZSA9IGxvZ29WYWw7XG59XG5cbiAgQElucHV0KCkgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBmdWxsVXJsKGZ1bGxVcmxWYWw6IGFueSkge1xuICAgIHRoaXMuc2VydmVyVVJMID0gKGZ1bGxVcmxWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNlcnZlclVSTCA9IGZ1bGxVcmxWYWw7XG5cbiAgfVxuICBASW5wdXQoKVxuXG4gIHNldCBlbmRwb2ludChlbmRwb2ludFZhbDogYW55KSB7XG4gICAgdGhpcy5lbmRwb2ludFZhbHVlID0gZW5kcG9pbnRWYWw7XG4gIH1cblxuXG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgU2lnbiBVcCBVcmwgZnJvbSBwcm9qZWN0XG4gIHNldCBzaWduVXBSb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XG4gICAgdGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlID0gcm91dGVpbmdVcmx2YWw7XG4gIH1cblxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IEZvcmdldCBQYXNzd29yZCBVcmwgZnJvbSBwcm9qZWN0XG4gIHNldCBmb3JnZXRSb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XG4gICAgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlID0gcm91dGVpbmdVcmx2YWw7XG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBGb3JnZXQgUGFzc3dvcmQgVXJsIGZyb20gcHJvamVjdFxuICBzZXQgcm91dGVyU3RhdHVzKHJvdXRlclN0YXR1c3ZhbDogYW55KSB7XG4gICAgdGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZSA9IChyb3V0ZXJTdGF0dXN2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnJvdXRlclN0YXR1c1ZhbHVlID0gcm91dGVyU3RhdHVzdmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucm91dGVyU3RhdHVzVmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YS5sZW5ndGgpO1xuICB9XG5cblxuXG5cbiAgcHVibGljIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgcHJvamVjdF9uYW1lOiBhbnkgPSAnJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSkge1xuICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB1c2VybmFtZTogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTsgICAgICAgLy8gQ2xlYXIgdGhlIHNlcnZlciB1cmxcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVUkwpOyAgICAgICAvLyBzZXQgdGhlIHNlcnZlciB1cmwgXG4gICAgfSwgNTApO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVVJMKTtcblxuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTsgICAgICAgLy8gY2xlYXIgdGhlIGVuZHBvaW50IFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuZW5kcG9pbnRWYWx1ZSk7ICAgICAgIC8vIHNldCB0aGUgZW5kcG9pbnRcbiAgICB9LCA1MCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludERhdGEuZW5kcG9pbnQpO1xuXG4gIH1cblxuLyoqKioqKioqKiBMb2dpbiBGb3JtIFN1Ym1pdCBzdGFydCBoZXJlKioqKioqKioqLyBcbiAgbG9naW5Gb3JtU3VibWl0KCkge1xuICAgIGxldCB4OiBhbnk7XG5cbiAgICAvLyB1c2UgZm9yIHZhbGlkYXRpb24gY2hlY2tpbmdcblxuICAgIGZvciAoeCBpbiB0aGlzLmxvZ2luRm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5sb2dpbkZvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxvZ2luRm9ybS52YWxpZCkge1xuICAgICAgbGV0IGRhdGE6IGFueSA9IHRoaXMubG9naW5Gb3JtLnZhbHVlO1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmFkZExvZ2luKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG5cblxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIFxuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZS5kYXRhW2tleV0udHlwZSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQudHlwZSA9PT0gdGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZS5kYXRhW2tleV0udHlwZSkge1xuICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YVtrZXldLnJvdXRlck5hdikgICAgIC8vIG5hdmlnYXRlIHRvIGRhc2hib2FyZCB1cmwgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvLyB0aGlzIGlzIHVzZSBmb3IgcmVzZXQgdGhlIGZyb21cbiAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZGlzcGxheSBlcnJvciBtZXNzYWdlIG9uIGh0bWxcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSByZXN1bHQubXNnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG5cbiAgaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcbiAgICB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cbiAgLy8gVGhpcyBpcyB1c2UgZm9yIG5hdmlnYXRlIHRoaXMgY29tcG9uZW50IHRvIGZvcmdldCBjb21wb25lbnQgXG4gIGZvcmdldHBhc3N3b3JkKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlKTtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgdXNlIGZvciBuYXZpZ2F0ZSB0aGlzIGNvbXBvbmVudCB0byBzaWduLVVwIGNvbXBvbmVudCBcbiAgc2lnbnVwKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlKTtcbiAgfVxuXG59XG4iXX0=