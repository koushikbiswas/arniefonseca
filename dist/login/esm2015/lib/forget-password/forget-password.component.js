/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
export class ForgetPasswordComponent {
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
        this.formTitleValue = '';
        this.serverUrlValue = '';
        this.signUpRouteingUrlValue = '';
        this.domanUrlValue = '';
        this.addEndpointValue = '';
        this.forgetPasswordForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
        });
    }
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
        for (x in this.forgetPasswordForm.controls) {
            this.forgetPasswordForm.controls[x].markAsTouched();
        }
        if (this.forgetPasswordForm.valid) {
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
                console.log(response);
                /** @type {?} */
                let result = {};
                result = response;
                if (result.status == "success") {
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
     * ****** Forget password  Form Submit end here********
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
                template: "<div class=\"main-div\">\n\n  <mat-card class=\"from\">\n\n    <h2 *ngIf=\"formTitleValue != ''\"> {{formTitleValue}}</h2>\n\n\n    <form class=\"example-container\" [formGroup]=\"forgetPasswordForm\" (ngSubmit)=\"forgetPasswordSubmit()\" novalidate>\n<mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Email\"  formControlName=\"email\" (blur)=\"inputUntouched('email')\">\n        <mat-error\n          *ngIf=\"!forgetPasswordForm.controls['email'].valid && forgetPasswordForm.controls['email'].errors.required && forgetPasswordForm.controls['email'].touched\">\n          Email field can not be blank</mat-error>\n        <mat-error\n          *ngIf=\"!forgetPasswordForm.controls['email'].valid && !forgetPasswordForm.controls['email'].errors.required\">\n          Email is not valid</mat-error>\n      </mat-form-field>\n\n      <button mat-raised-button color=\"primary\">Forget Password</button>\n      <span class=\"signupfooter\">\n        <a (click)=\"signup()\">Sign Up</a>\n      </span>\n    </form>\n  </mat-card>\n</div>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}"]
            }] }
];
/** @nocollapse */
ForgetPasswordComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: HttpClient },
    { type: Router },
    { type: ApiService }
];
ForgetPasswordComponent.propDecorators = {
    formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
    domanUrl: [{ type: Input }],
    formTitle: [{ type: Input }],
    serverUrl: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xvZ2luLyIsInNvdXJjZXMiOlsibGliL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBa0IsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPNUMsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7OztJQWdEbEMsWUFBbUIsRUFBZSxFQUFVLElBQWdCLEVBQVMsTUFBYyxFQUFTLFVBQXFCO1FBQTlGLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVc7UUEvQzFHLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFNbEIsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsMkJBQXNCLEdBQVEsRUFBRSxDQUFDO1FBQ2hDLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLHFCQUFnQixHQUFRLEVBQUUsQ0FBQztRQXlDaEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3RDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFB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TyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBRTNCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7OztJQUtELE1BQU07UUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFHRCxjQUFjLENBQUMsR0FBUTtRQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFELENBQUM7OztZQTFIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsZ25DQUErQzs7YUFFaEQ7Ozs7WUFUbUIsV0FBVztZQUN0QixVQUFVO1lBQ1YsTUFBTTtZQUNOLFVBQVU7Ozs0QkFXaEIsU0FBUyxTQUFDLGtCQUFrQjt1QkFVNUIsS0FBSzt3QkFPTCxLQUFLO3dCQU9MLEtBQUs7MEJBT0wsS0FBSztnQ0FPTCxLQUFLOzs7O0lBekNOLDBDQUF5Qjs7SUFHekIsZ0RBQWlFOztJQUVqRSxxREFBcUM7O0lBQ3JDLGlEQUFnQzs7SUFDaEMsaURBQWdDOztJQUNoQyx5REFBd0M7Ozs7O0lBQ3hDLGdEQUFnQzs7SUFDaEMsbURBQWtDOztJQXFDdEIscUNBQXNCOzs7OztJQUFFLHVDQUF3Qjs7SUFBRSx5Q0FBcUI7O0lBQUUsNkNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1mb3JnZXQtcGFzc3dvcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JnZXRQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBtZXNzYWdlOiBhbnkgPSAnJztcblxuICAvLyAgIEZvcm1Hcm91cERpcmVjdGl2ZTogSXQgaXMgYSBkaXJlY3RpdmUgdGhhdCBiaW5kcyBhbiBleGlzdGluZyBGb3JtR3JvdXAgdG8gYSBET00gZWxlbWVudC5cbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcblxuICBwdWJsaWMgZm9yZ2V0UGFzc3dvcmRGb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBmb3JtVGl0bGVWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBzZXJ2ZXJVcmxWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBzaWduVXBSb3V0ZWluZ1VybFZhbHVlOiBhbnkgPSAnJztcbiAgcHJpdmF0ZSBkb21hblVybFZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIGFkZEVuZHBvaW50VmFsdWU6IGFueSA9ICcnO1xuXG5cbiAgQElucHV0KCkgICAgICAgICAvLyBTZXQgdGhlIHByb2plY3QgZW1haWwgRG9tYW4gVVJMXG4gIHNldCBkb21hblVybChkb21hblVybFZhbDogYW55KSB7XG4gICAgdGhpcy5kb21hblVybFZhbHVlID0gKGRvbWFuVXJsVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5kb21hblVybFZhbHVlID0gZG9tYW5VcmxWYWw7XG4gICAgY29uc29sZS5sb2codGhpcy5kb21hblVybFZhbHVlKTtcblxuICB9XG4gIEBJbnB1dCgpICAgICAgICAgLy8gU2V0IHRoZSBwcm9qZWN0IG5hbWVcbiAgc2V0IGZvcm1UaXRsZShmb3JtVGl0bGVWYWw6IGFueSkge1xuICAgIHRoaXMuZm9ybVRpdGxlVmFsdWUgPSAoZm9ybVRpdGxlVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5mb3JtVGl0bGVWYWx1ZSA9IGZvcm1UaXRsZVZhbDtcblxuICB9XG5cbiAgQElucHV0KCkgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsVmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlclVybFZhbHVlID0gKHNlcnZlclVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSBzZXJ2ZXJVcmxWYWw7XG5cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIFxuICBzZXQgYWRkRW5kcG9pbnQoYWRkRW5kcG9pbnR2YWwgOiBhbnkpIHtcbiAgICB0aGlzLmFkZEVuZHBvaW50VmFsdWUgPSBhZGRFbmRwb2ludHZhbDtcbiAgfVxuICBcblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBTaWduIFVwIFVybCBmcm9tIHByb2plY3RcbiAgc2V0IHNpZ25VcFJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgYXBpU2VydmljZTpBcGlTZXJ2aWNlKSB7XG5cbiAgXG5cbiAgICB0aGlzLmZvcmdldFBhc3N3b3JkRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldLFxuXG4gICAgfSk7XG4gIFxuXG5cbiAgXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTsgICAgICAgLy8gIENsZWFyIHRoZSBzZXJ2ZXIgdXJsXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVXJsVmFsdWUpOyAgICAgICAgLy8gIHNldCB0aGUgc2VydmVyIHVybFxuICAgIH0sIDUwKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVSTCk7XG5cblxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7ICAgICAgIC8vICBDbGVhciB0aGUgZW5kcG9pbnRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmFkZEVuZHBvaW50VmFsdWUuZW5kcG9pbnQpOyAgIC8vICBzZXQgdGhlIGVuZHBvaW50XG4gICAgfSwgNTApO1xuICB9XG5cbi8qKioqKioqKiogRm9yZ2V0IHBhc3N3b3JkICBGb3JtIFN1Ym1pdCBzdGFydCBoZXJlKioqKioqKioqLyBcbiAgZm9yZ2V0UGFzc3dvcmRTdWJtaXQoKSB7XG4gICAgbGV0IHg6IGFueTtcbiAgICBmb3IgKHggaW4gdGhpcy5mb3JnZXRQYXNzd29yZEZvcm0uY29udHJvbHMpIHtcbiAgICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLnZhbGlkKSB7XG4gICAgICBsZXQgbGluazogYW55ID0gdGhpcy5zZXJ2ZXJVcmxWYWx1ZTtcbiAgICAgIGxldCBkYXRhOiBhbnkgPSB0aGlzLmZvcmdldFBhc3N3b3JkRm9ybS52YWx1ZTtcblxuICAgICAgZGF0YS5kb21hblVybCA9IHRoaXMuZG9tYW5VcmxWYWx1ZTtcblxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmZvcmdldFBhc3N3b3JkKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+e1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICByZXN1bHQgPSByZXNwb25zZTtcblxuICAgICAgICBcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIHVzZSBmb3IgcmVzZXQgdGhlIGZyb21cbiAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7XG4gICAgICAgIH0gZWxzZXtcblxuICAgICAgICAgICAvLyBkaXNwbGF5IGVycm9yIG1lc3NhZ2Ugb24gaHRtbFxuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHJlc3VsdC5tc2c7XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbi8qKioqKioqKiogRm9yZ2V0IHBhc3N3b3JkICBGb3JtIFN1Ym1pdCBlbmQgaGVyZSoqKioqKioqKi8gXG5cbiAgLy8gVGhpcyBpcyB1c2UgZm9yIG5hdmlnYXRlIHRoaXMgY29tcG9uZW50IHRvIHNpZ24tVXAgY29tcG9uZW50IFxuICBzaWdudXAoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUpO1xuICB9XG5cblxuICBpbnB1dFVudG91Y2hlZCh2YWw6IGFueSkge1xuICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxufVxuIl19