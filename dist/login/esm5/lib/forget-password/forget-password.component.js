/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material';
var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(fb, http, router, apiService, snackBar) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.apiService = apiService;
        this.snackBar = snackBar;
        this.message = '';
        this.formTitleValue = '';
        this.serverUrlValue = '';
        this.signUpRouteingUrlValue = '';
        this.domanUrlValue = '';
        this.addEndpointValue = '';
        this.logoValue = '';
        this.durationInSeconds = 50;
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
    Object.defineProperty(ForgetPasswordComponent.prototype, "logo", {
        set: /**
         * @param {?} logoVal
         * @return {?}
         */
        function (logoVal) {
            this.logoValue = logoVal;
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
            this.openSnackBar();
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
                    _this.openSnackBar();
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
    /********* openSnackBar function open start here*********/
    /********* Forget password  Form Submit end here*********/
    /**
     * ****** openSnackBar function open start here********
     * @return {?}
     */
    ForgetPasswordComponent.prototype.openSnackBar = /********* Forget password  Form Submit end here*********/
    /**
     * ****** openSnackBar function open start here********
     * @return {?}
     */
    function () {
        this.snackBar.openFromComponent(snackBarComponent, {
            duration: this.durationInSeconds * 1000,
        });
    };
    // This is use for navigate this component to sign-Up component 
    // This is use for navigate this component to sign-Up component 
    /**
     * @return {?}
     */
    ForgetPasswordComponent.prototype.signup = 
    // This is use for navigate this component to sign-Up component 
    /**
     * @return {?}
     */
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
                    template: "<div class=\"main-div\">\n\n  <mat-card class=\"from\">\n      <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\n          <img  [src]=\"logoValue\">\n      </span>\n\n    <h2 *ngIf=\"formTitleValue != ''\"> {{formTitleValue}}</h2>\n\n\n    <form class=\"example-container\" [formGroup]=\"forgetPasswordForm\" (ngSubmit)=\"forgetPasswordSubmit()\" novalidate>\n<mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n      <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"Email\"  formControlName=\"email\" (blur)=\"inputUntouched('email')\">\n        <mat-error\n          *ngIf=\"!forgetPasswordForm.controls['email'].valid && forgetPasswordForm.controls['email'].errors.required && forgetPasswordForm.controls['email'].touched\">\n          Email field can not be blank</mat-error>\n        <mat-error\n          *ngIf=\"!forgetPasswordForm.controls['email'].valid && !forgetPasswordForm.controls['email'].errors.required\">\n          Email is not valid</mat-error>\n      </mat-form-field>\n\n      <button mat-raised-button color=\"primary\">Forget Password</button>\n      <span class=\"signupfooter\">\n        <a (click)=\"signup()\">Sign Up</a>\n      </span>\n    </form>\n  </mat-card>\n</div>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    ForgetPasswordComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: HttpClient },
        { type: Router },
        { type: ApiService },
        { type: MatSnackBar }
    ]; };
    ForgetPasswordComponent.propDecorators = {
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
        domanUrl: [{ type: Input }],
        formTitle: [{ type: Input }],
        serverUrl: [{ type: Input }],
        logo: [{ type: Input }],
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
    ForgetPasswordComponent.prototype.logoValue;
    /** @type {?} */
    ForgetPasswordComponent.prototype.durationInSeconds;
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
    /**
     * @type {?}
     * @private
     */
    ForgetPasswordComponent.prototype.snackBar;
}
var snackBarComponent = /** @class */ (function () {
    function snackBarComponent() {
    }
    snackBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snack-bar-modale',
                    template: "<span class=\"example\">\n    We have e-mailed your password reset link!\n  </span>",
                    styles: ["\n    .example {\n      color: aliceblue;\n      background-color: yellowgreen;\n    }\n  "]
                }] }
    ];
    return snackBarComponent;
}());
export { snackBarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xvZ2luLyIsInNvdXJjZXMiOlsibGliL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBa0IsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhEO0lBNERFLGlDQUFtQixFQUFlLEVBQVUsSUFBZ0IsRUFBUyxNQUFjLEVBQVMsVUFBcUIsRUFBVSxRQUFxQjtRQUE3SCxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQXREekksWUFBTyxHQUFRLEVBQUUsQ0FBQztRQU1sQixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QiwyQkFBc0IsR0FBUSxFQUFFLENBQUM7UUFDaEMsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDekIscUJBQWdCLEdBQVEsRUFBRSxDQUFDO1FBQzNCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBOEM1QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsMEVBQTBFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FFdkosQ0FBQyxDQUFDO0lBS0wsQ0FBQztJQW5ERCxzQkFDSSw2Q0FBUTs7Ozs7UUFEWixVQUNhLFdBQWdCO1lBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxlQUFlLENBQUM7WUFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFDRCxzQkFDSSw4Q0FBUzs7Ozs7UUFEYixVQUNjLFlBQWlCO1lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUM7WUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUM7UUFFckMsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSw4Q0FBUzs7Ozs7UUFEYixVQUNjLFlBQWlCO1lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUM7WUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUM7UUFFckMsQ0FBQzs7O09BQUE7SUFFRCxzQkFFRSx5Q0FBSTs7Ozs7UUFGTixVQUVPLE9BQWE7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFQyxzQkFFSSxnREFBVzs7Ozs7UUFGZixVQUVnQixjQUFvQjtZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBR0Qsc0JBQ0ksc0RBQWlCOzs7OztRQURyQixVQUNzQixjQUFtQjtZQUN2QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxlQUFlLENBQUM7WUFDbEUsSUFBSSxDQUFDLHNCQUFzQixHQUFHLGNBQWMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTs7OztJQWdCRCwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBTyx3QkFBd0I7UUFDaEUsVUFBVTs7O1FBQUM7WUFDVCxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBUSxzQkFBc0I7UUFDbEYsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1AsK0JBQStCO1FBRy9CLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFPLHNCQUFzQjtRQUNoRSxVQUFVOzs7UUFBQztZQUNULEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFHLG9CQUFvQjtRQUN4RixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRUgsNERBQTREOzs7OztJQUMxRCxzREFBb0I7Ozs7SUFBcEI7UUFBQSxpQkFnQ0M7O1lBL0JLLENBQU07UUFDVixLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFO1lBQzFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDckQ7UUFDRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUU7WUFFakMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDOztnQkFFaEIsSUFBSSxHQUFRLElBQUksQ0FBQyxjQUFjOztnQkFDL0IsSUFBSSxHQUFRLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLO1lBRTdDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUVuQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxRQUFRO2dCQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztvQkFDbEIsTUFBTSxHQUFRLEVBQUU7Z0JBQ3BCLE1BQU0sR0FBRyxRQUFRLENBQUM7Z0JBR2xCLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7b0JBQzlCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDcEIsaUNBQWlDO29CQUNqQyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUNoQztxQkFBSztvQkFFSCxnQ0FBZ0M7b0JBQ2pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQkFFM0I7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVILDBEQUEwRDtJQUMxRCwwREFBMEQ7Ozs7OztJQUcxRCw4Q0FBWTs7Ozs7SUFBWjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUU7WUFDakQsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJO1NBQ3hDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHQyxnRUFBZ0U7Ozs7O0lBQ2hFLHdDQUFNOzs7OztJQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7O0lBR0QsZ0RBQWM7Ozs7SUFBZCxVQUFlLEdBQVE7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxRCxDQUFDOztnQkE5SUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGt2Q0FBK0M7O2lCQUVoRDs7OztnQkFWbUIsV0FBVztnQkFDdEIsVUFBVTtnQkFDVixNQUFNO2dCQUNOLFVBQVU7Z0JBQ1YsV0FBVzs7O2dDQVdqQixTQUFTLFNBQUMsa0JBQWtCOzJCQVk1QixLQUFLOzRCQU1MLEtBQUs7NEJBT0wsS0FBSzt1QkFPTCxLQUFLOzhCQU1MLEtBQUs7b0NBT0wsS0FBSzs7SUEwRlIsOEJBQUM7Q0FBQSxBQWhKRCxJQWdKQztTQTNJWSx1QkFBdUI7OztJQUNsQywwQ0FBeUI7O0lBR3pCLGdEQUFpRTs7SUFFakUscURBQXFDOztJQUNyQyxpREFBZ0M7O0lBQ2hDLGlEQUFnQzs7SUFDaEMseURBQXdDOzs7OztJQUN4QyxnREFBZ0M7O0lBQ2hDLG1EQUFrQzs7SUFDbEMsNENBQTJCOztJQUMzQixvREFBOEI7O0lBMENsQixxQ0FBc0I7Ozs7O0lBQUUsdUNBQXdCOztJQUFFLHlDQUFxQjs7SUFBRSw2Q0FBNEI7Ozs7O0lBQUUsMkNBQTZCOztBQXVGbEo7SUFBQTtJQVVnQyxDQUFDOztnQkFWaEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLCtGQUF5Qzs2QkFDaEMsNEZBS1I7aUJBQ0Y7O0lBQytCLHdCQUFDO0NBQUEsQUFWakMsSUFVaUM7U0FBcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWZvcmdldC1wYXNzd29yZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvcmdldFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIG1lc3NhZ2U6IGFueSA9ICcnO1xuXG4gIC8vICAgRm9ybUdyb3VwRGlyZWN0aXZlOiBJdCBpcyBhIGRpcmVjdGl2ZSB0aGF0IGJpbmRzIGFuIGV4aXN0aW5nIEZvcm1Hcm91cCB0byBhIERPTSBlbGVtZW50LlxuICBAVmlld0NoaWxkKEZvcm1Hcm91cERpcmVjdGl2ZSkgZm9ybURpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlO1xuXG4gIHB1YmxpYyBmb3JnZXRQYXNzd29yZEZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIGZvcm1UaXRsZVZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIHNlcnZlclVybFZhbHVlOiBhbnkgPSAnJztcbiAgcHVibGljIHNpZ25VcFJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnO1xuICBwcml2YXRlIGRvbWFuVXJsVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgYWRkRW5kcG9pbnRWYWx1ZTogYW55ID0gJyc7XG4gIHB1YmxpYyBsb2dvVmFsdWU6IGFueSA9ICcnO1xuICBwdWJsaWMgZHVyYXRpb25JblNlY29uZHMgPSA1MDtcblxuXG4gIEBJbnB1dCgpICAgICAgICAgLy8gU2V0IHRoZSBwcm9qZWN0IGVtYWlsIERvbWFuIFVSTFxuICBzZXQgZG9tYW5VcmwoZG9tYW5VcmxWYWw6IGFueSkge1xuICAgIHRoaXMuZG9tYW5VcmxWYWx1ZSA9IChkb21hblVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZG9tYW5VcmxWYWx1ZSA9IGRvbWFuVXJsVmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZG9tYW5VcmxWYWx1ZSk7XG4gIH1cbiAgQElucHV0KCkgICAgICAgICAvLyBTZXQgdGhlIHByb2plY3QgbmFtZVxuICBzZXQgZm9ybVRpdGxlKGZvcm1UaXRsZVZhbDogYW55KSB7XG4gICAgdGhpcy5mb3JtVGl0bGVWYWx1ZSA9IChmb3JtVGl0bGVWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmZvcm1UaXRsZVZhbHVlID0gZm9ybVRpdGxlVmFsO1xuXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IHNlcnZlclVybChzZXJ2ZXJVcmxWYWw6IGFueSkge1xuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSAoc2VydmVyVXJsVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zZXJ2ZXJVcmxWYWx1ZSA9IHNlcnZlclVybFZhbDtcblxuICB9XG5cbiAgQElucHV0KCkgICAgICAvLyBzZXQgdGhlIGZyb20gbG9nb1xuXG5zZXQgbG9nbyhsb2dvVmFsIDogYW55KSB7XG4gIHRoaXMubG9nb1ZhbHVlID0gbG9nb1ZhbDtcbn1cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXQgdGhlIGVuZHBvaW50IGFuZCBzb3VyY2VcbiAgXG4gIHNldCBhZGRFbmRwb2ludChhZGRFbmRwb2ludHZhbCA6IGFueSkge1xuICAgIHRoaXMuYWRkRW5kcG9pbnRWYWx1ZSA9IGFkZEVuZHBvaW50dmFsO1xuICB9XG4gIFxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IFNpZ24gVXAgVXJsIGZyb20gcHJvamVjdFxuICBzZXQgc2lnblVwUm91dGVpbmdVcmwocm91dGVpbmdVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuc2lnblVwUm91dGVpbmdVcmxWYWx1ZSA9IChyb3V0ZWluZ1VybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2lnblVwUm91dGVpbmdVcmxWYWx1ZSA9IHJvdXRlaW5nVXJsdmFsO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBhcGlTZXJ2aWNlOkFwaVNlcnZpY2UsIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7XG5cbiAgXG5cbiAgICB0aGlzLmZvcmdldFBhc3N3b3JkRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldLFxuXG4gICAgfSk7XG4gIFxuXG5cbiAgXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTsgICAgICAgLy8gIENsZWFyIHRoZSBzZXJ2ZXIgdXJsXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVXJsVmFsdWUpOyAgICAgICAgLy8gIHNldCB0aGUgc2VydmVyIHVybFxuICAgIH0sIDUwKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVSTCk7XG5cblxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7ICAgICAgIC8vICBDbGVhciB0aGUgZW5kcG9pbnRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmFkZEVuZHBvaW50VmFsdWUuZW5kcG9pbnQpOyAgIC8vICBzZXQgdGhlIGVuZHBvaW50XG4gICAgfSwgNTApO1xuICB9XG5cbi8qKioqKioqKiogRm9yZ2V0IHBhc3N3b3JkICBGb3JtIFN1Ym1pdCBzdGFydCBoZXJlKioqKioqKioqLyBcbiAgZm9yZ2V0UGFzc3dvcmRTdWJtaXQoKSB7XG4gICAgbGV0IHg6IGFueTtcbiAgICBmb3IgKHggaW4gdGhpcy5mb3JnZXRQYXNzd29yZEZvcm0uY29udHJvbHMpIHtcbiAgICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLnZhbGlkKSB7XG5cbiAgICAgIHRoaXMub3BlblNuYWNrQmFyKCk7XG5cbiAgICAgIGxldCBsaW5rOiBhbnkgPSB0aGlzLnNlcnZlclVybFZhbHVlO1xuICAgICAgbGV0IGRhdGE6IGFueSA9IHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLnZhbHVlO1xuXG4gICAgICBkYXRhLmRvbWFuVXJsID0gdGhpcy5kb21hblVybFZhbHVlO1xuXG4gICAgICB0aGlzLmFwaVNlcnZpY2UuZm9yZ2V0UGFzc3dvcmQoZGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuXG4gICAgICAgIFxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKCk7XG4gICAgICAgICAgLy8gdGhpcyBpcyB1c2UgZm9yIHJlc2V0IHRoZSBmcm9tXG4gICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlc2V0Rm9ybSgpO1xuICAgICAgICB9IGVsc2V7XG5cbiAgICAgICAgICAgLy8gZGlzcGxheSBlcnJvciBtZXNzYWdlIG9uIGh0bWxcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSByZXN1bHQubXNnO1xuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4vKioqKioqKioqIEZvcmdldCBwYXNzd29yZCAgRm9ybSBTdWJtaXQgZW5kIGhlcmUqKioqKioqKiovIFxuLyoqKioqKioqKiBvcGVuU25hY2tCYXIgZnVuY3Rpb24gb3BlbiBzdGFydCBoZXJlKioqKioqKioqLyBcblxuXG5vcGVuU25hY2tCYXIoKSB7XG4gIHRoaXMuc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoc25hY2tCYXJDb21wb25lbnQsIHtcbiAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbkluU2Vjb25kcyAqIDEwMDAsXG4gIH0pO1xufVxuXG5cbiAgLy8gVGhpcyBpcyB1c2UgZm9yIG5hdmlnYXRlIHRoaXMgY29tcG9uZW50IHRvIHNpZ24tVXAgY29tcG9uZW50IFxuICBzaWdudXAoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUpO1xuICB9XG5cblxuICBpbnB1dFVudG91Y2hlZCh2YWw6IGFueSkge1xuICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1tb2RhbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2ZvcmdldC1wYXNzd29yZE1vZGFsZS5odG1sJyxcbiAgc3R5bGVzOiBbYFxuICAgIC5leGFtcGxlIHtcbiAgICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcbiAgICB9XG4gIGBdLFxufSlcbmV4cG9ydCBjbGFzcyBzbmFja0JhckNvbXBvbmVudCB7fVxuIl19