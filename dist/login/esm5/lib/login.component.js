/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, http, router, apiService) {
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
        this.project_name = '';
        this.loginForm = this.fb.group({
            username: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
            password: ['', Validators.required]
        });
    }
    Object.defineProperty(LoginComponent.prototype, "fromTitle", {
        set: /**
         * @param {?} fromTitleVal
         * @return {?}
         */
        function (fromTitleVal) {
            this.fromTitleValue = (fromTitleVal) || '<no name set>';
            this.fromTitleValue = fromTitleVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "fullUrl", {
        set: /**
         * @param {?} fullUrlVal
         * @return {?}
         */
        function (fullUrlVal) {
            this.serverURL = (fullUrlVal) || '<no name set>';
            this.serverURL = fullUrlVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "endpoint", {
        set: /**
         * @param {?} endpointVal
         * @return {?}
         */
        function (endpointVal) {
            this.endpointValue = endpointVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "signUpRouteingUrl", {
        set: /**
         * @param {?} routeingUrlval
         * @return {?}
         */
        function (routeingUrlval) {
            this.signUpRouteingUrlValue = (routeingUrlval) || '<no name set>';
            this.signUpRouteingUrlValue = routeingUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "forgetRouteingUrl", {
        set: /**
         * @param {?} routeingUrlval
         * @return {?}
         */
        function (routeingUrlval) {
            this.forgetRouteingUrlValue = (routeingUrlval) || '<no name set>';
            this.forgetRouteingUrlValue = routeingUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "routerStatus", {
        set: /**
         * @param {?} routerStatusval
         * @return {?}
         */
        function (routerStatusval) {
            this.routerStatusValue = (routerStatusval) || '<no name set>';
            this.routerStatusValue = routerStatusval;
            console.log(this.routerStatusValue);
            console.log(this.routerStatusValue.data.length);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiService.clearServerUrl(); // Clear the server url
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.serverURL); // set the server url 
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); // clear the endpoint 
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.endpointValue); // set the endpoint
        }), 50);
        // console.log(this.addEndpointData.endpoint);
    };
    /********* Login Form Submit start here*********/
    /**
     * ****** Login Form Submit start here********
     * @return {?}
     */
    LoginComponent.prototype.loginFormSubmit = /**
     * ****** Login Form Submit start here********
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var x;
        // use for validation checking
        for (x in this.loginForm.controls) {
            this.loginForm.controls[x].markAsTouched();
        }
        if (this.loginForm.valid) {
            /** @type {?} */
            var data = this.loginForm.value;
            this.apiService.addLogin(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                // console.log(response);
                /** @type {?} */
                var result = {};
                result = response;
                if (result.status == "success") {
                    for (var key in _this.routerStatusValue.data) {
                        console.log(_this.routerStatusValue.data[key].type);
                        if (result.type === _this.routerStatusValue.data[key].type) {
                            _this.router.navigateByUrl('/' + _this.routerStatusValue.data[key].routerNav); // navigate to dashboard url 
                        }
                    }
                    // this is use for reset the from
                    _this.formDirective.resetForm();
                }
                else {
                    // display error message on html
                    _this.message = result.msg;
                }
            }));
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    LoginComponent.prototype.inputUntouched = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.loginForm.controls[val].markAsUntouched();
    };
    // This is use for navigate this component to forget component 
    // This is use for navigate this component to forget component 
    /**
     * @return {?}
     */
    LoginComponent.prototype.forgetpassword = 
    // This is use for navigate this component to forget component 
    /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/' + this.forgetRouteingUrlValue);
    };
    // This is use for navigate this component to sign-Up component 
    // This is use for navigate this component to sign-Up component 
    /**
     * @return {?}
     */
    LoginComponent.prototype.signup = 
    // This is use for navigate this component to sign-Up component 
    /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/' + this.signUpRouteingUrlValue);
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-login',
                    template: "<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n\n        <h2 *ngIf=\"fromTitleValue != ''\"> {{fromTitleValue}}</h2>\n\n        <form class=\"example-container\" [formGroup]=\"loginForm\" (ngSubmit)=\"loginFormSubmit()\" novalidate>\n<mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n            <mat-form-field>\n                <input matInput placeholder=\"Username\" formControlName=\"username\" (blur)=\"inputUntouched('username')\">\n                <mat-error\n                    *ngIf=\"!loginForm.controls['username'].valid && loginForm.controls['username'].errors.required && loginForm.controls['username'].touched\">\n                    Username field can not be blank</mat-error>\n            </mat-form-field>\n\n\n            <mat-form-field>\n                <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" (blur)=\"inputUntouched('password')\">\n                <mat-error\n                    *ngIf=\"!loginForm.controls['password'].valid && loginForm.controls['password'].errors.required && loginForm.controls['password'].touched\">\n                    Password field can not be blank</mat-error>\n            </mat-form-field>\n\n\n            <button mat-raised-button color=\"primary\">Login</button>\n            <span class=\"signupfooter\">\n                <a (click)=\"forgetpassword()\">Forgot password</a>\n                <a (click)=\"signup()\">Sign Up</a>\n            </span>\n        </form>\n\n    </mat-card>\n\n</div>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: HttpClient },
        { type: Router },
        { type: ApiService }
    ]; };
    LoginComponent.propDecorators = {
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
        fromTitle: [{ type: Input }],
        fullUrl: [{ type: Input }],
        endpoint: [{ type: Input }],
        signUpRouteingUrl: [{ type: Input }],
        forgetRouteingUrl: [{ type: Input }],
        routerStatus: [{ type: Input }]
    };
    return LoginComponent;
}());
export { LoginComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4vIiwic291cmNlcyI6WyJsaWIvbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFhLFdBQVcsRUFBYSxVQUFVLEVBQXNCLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBaUVFLHdCQUFtQixFQUFlLEVBQVMsSUFBZ0IsRUFBUyxNQUFjLEVBQVMsVUFBc0I7UUFBOUYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQTNEMUcsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUlsQixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLDJCQUFzQixHQUFRLEVBQUUsQ0FBQztRQUNqQywyQkFBc0IsR0FBUSxFQUFFLENBQUM7UUFDakMsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBaUQ1QixpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUc1QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzdCLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLDBFQUEwRSxDQUFDLENB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RUFBZ0U7Ozs7O0lBQ2hFLCtCQUFNOzs7OztJQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQy9ELENBQUM7O2dCQTdJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDJnREFBcUM7O2lCQUV0Qzs7OztnQkFUbUIsV0FBVztnQkFDdEIsVUFBVTtnQkFDVixNQUFNO2dCQUNOLFVBQVU7OztnQ0FVaEIsU0FBUyxTQUFDLGtCQUFrQjs0QkFTNUIsS0FBSzswQkFPTCxLQUFLOzJCQU1MLEtBQUs7b0NBUUwsS0FBSztvQ0FPTCxLQUFLOytCQU1MLEtBQUs7O0lBNEZSLHFCQUFDO0NBQUEsQUEvSUQsSUErSUM7U0ExSVksY0FBYzs7O0lBQ3pCLGlDQUF5Qjs7SUFFekIsdUNBQWlFOztJQUVqRSx3Q0FBZ0M7O0lBQ2hDLG1DQUEyQjs7SUFDM0IsZ0RBQXdDOztJQUN4QyxnREFBd0M7O0lBQ3hDLDJDQUFtQzs7SUFDbkMsdUNBQTBCOztJQStDMUIsbUNBQTRCOztJQUM1QixzQ0FBOEI7O0lBRWxCLDRCQUFzQjs7SUFBRSw4QkFBdUI7O0lBQUUsZ0NBQXFCOztJQUFFLG9DQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQXJyYXksIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIE1pbkxlbmd0aFZhbGlkYXRvciwgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBtZXNzYWdlOiBhbnkgPSAnJztcbiAgLy8gICBGb3JtR3JvdXBEaXJlY3RpdmU6IEl0IGlzIGEgZGlyZWN0aXZlIHRoYXQgYmluZHMgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIHRvIGEgRE9NIGVsZW1lbnQuXG4gIEBWaWV3Q2hpbGQoRm9ybUdyb3VwRGlyZWN0aXZlKSBmb3JtRGlyZWN0aXZlOiBGb3JtR3JvdXBEaXJlY3RpdmU7XG5cbiAgcHVibGljIGZyb21UaXRsZVZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIHNlcnZlclVSTDogYW55ID0gJyc7XG4gIHB1YmxpYyBzaWduVXBSb3V0ZWluZ1VybFZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIGZvcmdldFJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgcm91dGVyU3RhdHVzVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgZW5kcG9pbnRWYWx1ZTogYW55O1xuXG4gIEBJbnB1dCgpICAgICAgICAgLy8gU2V0IHRoZSBwcm9qZWN0IG5hbWVcbiAgc2V0IGZyb21UaXRsZShmcm9tVGl0bGVWYWw6IGFueSkge1xuICAgIHRoaXMuZnJvbVRpdGxlVmFsdWUgPSAoZnJvbVRpdGxlVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5mcm9tVGl0bGVWYWx1ZSA9IGZyb21UaXRsZVZhbDtcblxuICB9XG5cbiAgQElucHV0KCkgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBmdWxsVXJsKGZ1bGxVcmxWYWw6IGFueSkge1xuICAgIHRoaXMuc2VydmVyVVJMID0gKGZ1bGxVcmxWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNlcnZlclVSTCA9IGZ1bGxVcmxWYWw7XG5cbiAgfVxuICBASW5wdXQoKVxuXG4gIHNldCBlbmRwb2ludChlbmRwb2ludFZhbDogYW55KSB7XG4gICAgdGhpcy5lbmRwb2ludFZhbHVlID0gZW5kcG9pbnRWYWw7XG4gIH1cblxuXG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgU2lnbiBVcCBVcmwgZnJvbSBwcm9qZWN0XG4gIHNldCBzaWduVXBSb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XG4gICAgdGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlID0gcm91dGVpbmdVcmx2YWw7XG4gIH1cblxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IEZvcmdldCBQYXNzd29yZCBVcmwgZnJvbSBwcm9qZWN0XG4gIHNldCBmb3JnZXRSb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XG4gICAgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlID0gcm91dGVpbmdVcmx2YWw7XG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBGb3JnZXQgUGFzc3dvcmQgVXJsIGZyb20gcHJvamVjdFxuICBzZXQgcm91dGVyU3RhdHVzKHJvdXRlclN0YXR1c3ZhbDogYW55KSB7XG4gICAgdGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZSA9IChyb3V0ZXJTdGF0dXN2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnJvdXRlclN0YXR1c1ZhbHVlID0gcm91dGVyU3RhdHVzdmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucm91dGVyU3RhdHVzVmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YS5sZW5ndGgpO1xuICB9XG5cblxuXG5cbiAgcHVibGljIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgcHJvamVjdF9uYW1lOiBhbnkgPSAnJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSkge1xuICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB1c2VybmFtZTogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTsgICAgICAgLy8gQ2xlYXIgdGhlIHNlcnZlciB1cmxcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVUkwpOyAgICAgICAvLyBzZXQgdGhlIHNlcnZlciB1cmwgXG4gICAgfSwgNTApO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVVJMKTtcblxuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTsgICAgICAgLy8gY2xlYXIgdGhlIGVuZHBvaW50IFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuZW5kcG9pbnRWYWx1ZSk7ICAgICAgIC8vIHNldCB0aGUgZW5kcG9pbnRcbiAgICB9LCA1MCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludERhdGEuZW5kcG9pbnQpO1xuXG4gIH1cblxuLyoqKioqKioqKiBMb2dpbiBGb3JtIFN1Ym1pdCBzdGFydCBoZXJlKioqKioqKioqLyBcbiAgbG9naW5Gb3JtU3VibWl0KCkge1xuICAgIGxldCB4OiBhbnk7XG5cbiAgICAvLyB1c2UgZm9yIHZhbGlkYXRpb24gY2hlY2tpbmdcblxuICAgIGZvciAoeCBpbiB0aGlzLmxvZ2luRm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5sb2dpbkZvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxvZ2luRm9ybS52YWxpZCkge1xuICAgICAgbGV0IGRhdGE6IGFueSA9IHRoaXMubG9naW5Gb3JtLnZhbHVlO1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmFkZExvZ2luKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG5cblxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIFxuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZS5kYXRhW2tleV0udHlwZSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQudHlwZSA9PT0gdGhpcy5yb3V0ZXJTdGF0dXNWYWx1ZS5kYXRhW2tleV0udHlwZSkge1xuICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMucm91dGVyU3RhdHVzVmFsdWUuZGF0YVtrZXldLnJvdXRlck5hdikgICAgIC8vIG5hdmlnYXRlIHRvIGRhc2hib2FyZCB1cmwgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvLyB0aGlzIGlzIHVzZSBmb3IgcmVzZXQgdGhlIGZyb21cbiAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZGlzcGxheSBlcnJvciBtZXNzYWdlIG9uIGh0bWxcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSByZXN1bHQubXNnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG5cbiAgaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcbiAgICB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cbiAgLy8gVGhpcyBpcyB1c2UgZm9yIG5hdmlnYXRlIHRoaXMgY29tcG9uZW50IHRvIGZvcmdldCBjb21wb25lbnQgXG4gIGZvcmdldHBhc3N3b3JkKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlKTtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgdXNlIGZvciBuYXZpZ2F0ZSB0aGlzIGNvbXBvbmVudCB0byBzaWduLVVwIGNvbXBvbmVudCBcbiAgc2lnbnVwKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlKTtcbiAgfVxuXG59XG4iXX0=