/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(fb, http, router, apiService) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.apiService = apiService;
        this.message = '';
        this.formTitleValue = '';
        this.serverUrlValue = '';
        this.signUpRouteingUrlValue = '';
        this.domanUrlValue = '';
        this.addEndpointValue = '';
        this.forgetPasswordForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
        });
    }
    Object.defineProperty(ForgetPasswordComponent.prototype, "domanUrl", {
        set: /**
         * @param {?} domanUrlVal
         * @return {?}
         */
        function (domanUrlVal) {
            this.domanUrlValue = (domanUrlVal) || '<no name set>';
            this.domanUrlValue = domanUrlVal;
            console.log(this.domanUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForgetPasswordComponent.prototype, "formTitle", {
        set: /**
         * @param {?} formTitleVal
         * @return {?}
         */
        function (formTitleVal) {
            this.formTitleValue = (formTitleVal) || '<no name set>';
            this.formTitleValue = formTitleVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForgetPasswordComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlVal
         * @return {?}
         */
        function (serverUrlVal) {
            this.serverUrlValue = (serverUrlVal) || '<no name set>';
            this.serverUrlValue = serverUrlVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForgetPasswordComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} addEndpointval
         * @return {?}
         */
        function (addEndpointval) {
            this.addEndpointValue = addEndpointval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForgetPasswordComponent.prototype, "signUpRouteingUrl", {
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
    /**
     * @return {?}
     */
    ForgetPasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiService.clearServerUrl(); //  Clear the server url
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.serverUrlValue); //  set the server url
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); //  Clear the endpoint
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.addEndpointValue.endpoint); //  set the endpoint
        }), 50);
    };
    /********* Forget password  Form Submit start here*********/
    /**
     * ****** Forget password  Form Submit start here********
     * @return {?}
     */
    ForgetPasswordComponent.prototype.forgetPasswordSubmit = /**
     * ****** Forget password  Form Submit start here********
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var x;
        for (x in this.forgetPasswordForm.controls) {
            this.forgetPasswordForm.controls[x].markAsTouched();
        }
        if (this.forgetPasswordForm.valid) {
            /** @type {?} */
            var link = this.serverUrlValue;
            /** @type {?} */
            var data = this.forgetPasswordForm.value;
            data.domanUrl = this.domanUrlValue;
            this.apiService.forgetPassword(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                console.log(response);
                /** @type {?} */
                var result = {};
                result = response;
                if (result.status == "success") {
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
    /********* Forget password  Form Submit end here*********/
    // This is use for navigate this component to sign-Up component 
    /**
     * ****** Forget password  Form Submit end here********
     * @return {?}
     */
    // This is use for navigate this component to sign-Up component 
    ForgetPasswordComponent.prototype.signup = /**
     * ****** Forget password  Form Submit end here********
     * @return {?}
     */
    // This is use for navigate this component to sign-Up component 
    function () {
        this.router.navigateByUrl('/' + this.signUpRouteingUrlValue);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ForgetPasswordComponent.prototype.inputUntouched = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.forgetPasswordForm.controls[val].markAsUntouched();
    };
    ForgetPasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-forget-password',
                    template: "<div class=\"main-div\">\n\n  <mat-card class=\"from\">\n\n    <h2 *ngIf=\"formTitleValue != ''\"> {{formTitleValue}}</h2>\n\n\n    <form class=\"example-container\" [formGroup]=\"forgetPasswordForm\" (ngSubmit)=\"forgetPasswordSubmit()\" novalidate>\n<mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Email\"  formControlName=\"email\" (blur)=\"inputUntouched('email')\">\n        <mat-error\n          *ngIf=\"!forgetPasswordForm.controls['email'].valid && forgetPasswordForm.controls['email'].errors.required && forgetPasswordForm.controls['email'].touched\">\n          Email field can not be blank</mat-error>\n        <mat-error\n          *ngIf=\"!forgetPasswordForm.controls['email'].valid && !forgetPasswordForm.controls['email'].errors.required\">\n          Email is not valid</mat-error>\n      </mat-form-field>\n\n      <button mat-raised-button color=\"primary\">Forget Password</button>\n      <span class=\"signupfooter\">\n        <a (click)=\"signup()\">Sign Up</a>\n      </span>\n    </form>\n  </mat-card>\n</div>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    ForgetPasswordComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: HttpClient },
        { type: Router },
        { type: ApiService }
    ]; };
    ForgetPasswordComponent.propDecorators = {
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
        domanUrl: [{ type: Input }],
        formTitle: [{ type: Input }],
        serverUrl: [{ type: Input }],
        addEndpoint: [{ type: Input }],
        signUpRouteingUrl: [{ type: Input }]
    };
    return ForgetPasswordComponent;
}());
export { ForgetPasswordComponent };
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
    ForgetPasswordComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    ForgetPasswordComponent.prototype.http;
    /** @type {?} */
    ForgetPasswordComponent.prototype.router;
    /** @type {?} */
    ForgetPasswordComponent.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xvZ2luLyIsInNvdXJjZXMiOlsibGliL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBa0IsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUM7SUFxREUsaUNBQW1CLEVBQWUsRUFBVSxJQUFnQixFQUFTLE1BQWMsRUFBUyxVQUFxQjtRQUE5RixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBL0MxRyxZQUFPLEdBQVEsRUFBRSxDQUFDO1FBTWxCLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLDJCQUFzQixHQUFRLEVBQUUsQ0FBQztRQUNoQyxrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN6QixxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUF5Q2hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN0QyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyww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QyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ2hDO3FCQUFLO29CQUVILGdDQUFnQztvQkFDakMsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUUzQjtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUgsMERBQTBEO0lBRXhELGdFQUFnRTs7Ozs7O0lBQ2hFLHdDQUFNOzs7OztJQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7O0lBR0QsZ0RBQWM7Ozs7SUFBZCxVQUFlLEdBQVE7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxRCxDQUFDOztnQkExSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGduQ0FBK0M7O2lCQUVoRDs7OztnQkFUbUIsV0FBVztnQkFDdEIsVUFBVTtnQkFDVixNQUFNO2dCQUNOLFVBQVU7OztnQ0FXaEIsU0FBUyxTQUFDLGtCQUFrQjsyQkFVNUIsS0FBSzs0QkFPTCxLQUFLOzRCQU9MLEtBQUs7OEJBT0wsS0FBSztvQ0FPTCxLQUFLOztJQTZFUiw4QkFBQztDQUFBLEFBNUhELElBNEhDO1NBdkhZLHVCQUF1Qjs7O0lBQ2xDLDBDQUF5Qjs7SUFHekIsZ0RBQWlFOztJQUVqRSxxREFBcUM7O0lBQ3JDLGlEQUFnQzs7SUFDaEMsaURBQWdDOztJQUNoQyx5REFBd0M7Ozs7O0lBQ3hDLGdEQUFnQzs7SUFDaEMsbURBQWtDOztJQXFDdEIscUNBQXNCOzs7OztJQUFFLHVDQUF3Qjs7SUFBRSx5Q0FBcUI7O0lBQUUsNkNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1mb3JnZXQtcGFzc3dvcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JnZXRQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBtZXNzYWdlOiBhbnkgPSAnJztcblxuICAvLyAgIEZvcm1Hcm91cERpcmVjdGl2ZTogSXQgaXMgYSBkaXJlY3RpdmUgdGhhdCBiaW5kcyBhbiBleGlzdGluZyBGb3JtR3JvdXAgdG8gYSBET00gZWxlbWVudC5cbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcblxuICBwdWJsaWMgZm9yZ2V0UGFzc3dvcmRGb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBmb3JtVGl0bGVWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBzZXJ2ZXJVcmxWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBzaWduVXBSb3V0ZWluZ1VybFZhbHVlOiBhbnkgPSAnJztcbiAgcHJpdmF0ZSBkb21hblVybFZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIGFkZEVuZHBvaW50VmFsdWU6IGFueSA9ICcnO1xuXG5cbiAgQElucHV0KCkgICAgICAgICAvLyBTZXQgdGhlIHByb2plY3QgZW1haWwgRG9tYW4gVVJMXG4gIHNldCBkb21hblVybChkb21hblVybFZhbDogYW55KSB7XG4gICAgdGhpcy5kb21hblVybFZhbHVlID0gKGRvbWFuVXJsVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5kb21hblVybFZhbHVlID0gZG9tYW5VcmxWYWw7XG4gICAgY29uc29sZS5sb2codGhpcy5kb21hblVybFZhbHVlKTtcblxuICB9XG4gIEBJbnB1dCgpICAgICAgICAgLy8gU2V0IHRoZSBwcm9qZWN0IG5hbWVcbiAgc2V0IGZvcm1UaXRsZShmb3JtVGl0bGVWYWw6IGFueSkge1xuICAgIHRoaXMuZm9ybVRpdGxlVmFsdWUgPSAoZm9ybVRpdGxlVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5mb3JtVGl0bGVWYWx1ZSA9IGZvcm1UaXRsZVZhbDtcblxuICB9XG5cbiAgQElucHV0KCkgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsVmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlclVybFZhbHVlID0gKHNlcnZlclVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSBzZXJ2ZXJVcmxWYWw7XG5cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIFxuICBzZXQgYWRkRW5kcG9pbnQoYWRkRW5kcG9pbnR2YWwgOiBhbnkpIHtcbiAgICB0aGlzLmFkZEVuZHBvaW50VmFsdWUgPSBhZGRFbmRwb2ludHZhbDtcbiAgfVxuICBcblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBTaWduIFVwIFVybCBmcm9tIHByb2plY3RcbiAgc2V0IHNpZ25VcFJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgYXBpU2VydmljZTpBcGlTZXJ2aWNlKSB7XG5cbiAgXG5cbiAgICB0aGlzLmZvcmdldFBhc3N3b3JkRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldLFxuXG4gICAgfSk7XG4gIFxuXG5cbiAgXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTsgICAgICAgLy8gIENsZWFyIHRoZSBzZXJ2ZXIgdXJsXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVXJsVmFsdWUpOyAgICAgICAgLy8gIHNldCB0aGUgc2VydmVyIHVybFxuICAgIH0sIDUwKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVSTCk7XG5cblxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7ICAgICAgIC8vICBDbGVhciB0aGUgZW5kcG9pbnRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmFkZEVuZHBvaW50VmFsdWUuZW5kcG9pbnQpOyAgIC8vICBzZXQgdGhlIGVuZHBvaW50XG4gICAgfSwgNTApO1xuICB9XG5cbi8qKioqKioqKiogRm9yZ2V0IHBhc3N3b3JkICBGb3JtIFN1Ym1pdCBzdGFydCBoZXJlKioqKioqKioqLyBcbiAgZm9yZ2V0UGFzc3dvcmRTdWJtaXQoKSB7XG4gICAgbGV0IHg6IGFueTtcbiAgICBmb3IgKHggaW4gdGhpcy5mb3JnZXRQYXNzd29yZEZvcm0uY29udHJvbHMpIHtcbiAgICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLnZhbGlkKSB7XG4gICAgICBsZXQgbGluazogYW55ID0gdGhpcy5zZXJ2ZXJVcmxWYWx1ZTtcbiAgICAgIGxldCBkYXRhOiBhbnkgPSB0aGlzLmZvcmdldFBhc3N3b3JkRm9ybS52YWx1ZTtcblxuICAgICAgZGF0YS5kb21hblVybCA9IHRoaXMuZG9tYW5VcmxWYWx1ZTtcblxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmZvcmdldFBhc3N3b3JkKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+e1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICByZXN1bHQgPSByZXNwb25zZTtcblxuICAgICAgICBcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIHVzZSBmb3IgcmVzZXQgdGhlIGZyb21cbiAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7XG4gICAgICAgIH0gZWxzZXtcblxuICAgICAgICAgICAvLyBkaXNwbGF5IGVycm9yIG1lc3NhZ2Ugb24gaHRtbFxuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHJlc3VsdC5tc2c7XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbi8qKioqKioqKiogRm9yZ2V0IHBhc3N3b3JkICBGb3JtIFN1Ym1pdCBlbmQgaGVyZSoqKioqKioqKi8gXG5cbiAgLy8gVGhpcyBpcyB1c2UgZm9yIG5hdmlnYXRlIHRoaXMgY29tcG9uZW50IHRvIHNpZ24tVXAgY29tcG9uZW50IFxuICBzaWdudXAoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUpO1xuICB9XG5cblxuICBpbnB1dFVudG91Y2hlZCh2YWw6IGFueSkge1xuICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxufVxuIl19