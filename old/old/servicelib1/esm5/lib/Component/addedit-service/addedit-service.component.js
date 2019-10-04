/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicelibService } from '../../servicelib.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.msg;
}
var AddeditServiceComponent = /** @class */ (function () {
    // ==============================================================================================
    function AddeditServiceComponent(formBuilder, servicehttp, router, dialog) {
        this.formBuilder = formBuilder;
        this.servicehttp = servicehttp;
        this.router = router;
        this.dialog = dialog;
        /**
         * ckeditor start here
         */
        this.Editor = ClassicEditor; //for ckeditor
        //for ckeditor
        this.editorConfig = {
            placeholder: 'Write description...',
        };
        this.model = {
            editorData: ''
        };
        this.loader = false;
        this.buttonText = "SUBMIT";
        this.successMessage = "Submitted Successfully";
        this.flag = false;
    }
    /**
     * @return {?}
     */
    AddeditServiceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.loader = false;
        this.generateForm();
        if (this.configData.action != 'edit')
            this.addBulletList('', '');
        // ============================================SWITCH CASES==========================================
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                this.buttonText = "SUBMIT";
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.successMessage = "One row updated";
                this.setDefaultValue(this.configData.defaultData);
                this.flag = true;
                break;
        }
        // ===============================================================================================
    };
    Object.defineProperty(AddeditServiceComponent.prototype, "config", {
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
    // =============================================form generation====================================
    // =============================================form generation====================================
    /**
     * @return {?}
     */
    AddeditServiceComponent.prototype.generateForm = 
    // =============================================form generation====================================
    /**
     * @return {?}
     */
    function () {
        this.serviceForm = this.formBuilder.group({
            service_title: ['', [Validators.required]],
            service_desc: ['', [Validators.required]],
            priority: ['', [Validators.required]],
            status: [true,],
            bulletarr: this.formBuilder.array([]),
            userId: ['',]
        });
    };
    // =================================================================================================
    // ================================================Default value======================================
    // =================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddeditServiceComponent.prototype.setDefaultValue = 
    // =================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        var _this = this;
        defaultValue.bulletarr.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            _this.addBulletList(element.bullet_title, element.bullet_desc);
        }));
        this.serviceForm.patchValue({
            service_title: defaultValue.service_title,
            service_desc: defaultValue.service_desc,
            priority: defaultValue.priority,
            status: defaultValue.status,
            // bulletarr: '',
            userId: null
        });
    };
    // ==================================================================================================
    // ==========================================FORM ARRAY FUNCTIONS===================================
    // ==================================================================================================
    // ==========================================FORM ARRAY FUNCTIONS===================================
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    AddeditServiceComponent.prototype.addBulletList = 
    // ==================================================================================================
    // ==========================================FORM ARRAY FUNCTIONS===================================
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        /** @type {?} */
        var bl = (/** @type {?} */ (this.serviceForm.controls.bulletarr));
        bl.push(this.formBuilder.group({
            bullet_title: [a],
            bullet_desc: [b],
        }));
    };
    /**
     * @return {?}
     */
    AddeditServiceComponent.prototype.deleteBulletList = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var bl = (/** @type {?} */ (this.serviceForm.controls.bulletarr));
        bl.removeAt(1);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    AddeditServiceComponent.prototype.trackByFn = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index;
    };
    // ==================================================================================================
    // ================================================SUBMIT============================================
    // ==================================================================================================
    // ================================================SUBMIT============================================
    /**
     * @return {?}
     */
    AddeditServiceComponent.prototype.onSubmit = 
    // ==================================================================================================
    // ================================================SUBMIT============================================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loader = true;
        this.serviceForm.controls['service_desc'].markAsTouched();
        if (this.serviceForm.invalid) {
            return;
        }
        else {
            if (this.serviceForm.value.status) {
                this.serviceForm.value.status = parseInt("1");
            }
            else {
                this.serviceForm.value.status = parseInt("0");
                ;
            }
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.serviceForm.value, this.configData.condition)
            };
            this.servicehttp.addData(this.configData.endpoint, postData).subscribe((/**
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
    // ================================================================================================== 
    // =========================================MODAL functions==========================================
    // ================================================================================================== 
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    AddeditServiceComponent.prototype.openDialog = 
    // ================================================================================================== 
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
    // =================================================================================================
    // =================================================================================================
    /**
     * @return {?}
     */
    AddeditServiceComponent.prototype.resetserviceForm = 
    // =================================================================================================
    /**
     * @return {?}
     */
    function () {
        this.serviceForm.reset();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    AddeditServiceComponent.prototype.inputBlur = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        console.log('Blur');
        this.serviceForm.controls[val].markAsUntouched();
    };
    AddeditServiceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-addedit-service',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">Add Service</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n\n      <form [formGroup]=\"serviceForm\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n\n\n\n        <!-- ------------------------------service title------------------- -->\n        <mat-form-field>\n          <input matInput placeholder=\"Service title\" formControlName=\"service_title\"\n            (blur)=\"inputBlur('service_title')\">\n          <mat-error *ngIf=\"serviceForm.controls['service_title']?.touched || serviceForm.controls['service_title'].errors \n          && serviceForm.controls['service_title'].errors.required\">Service title is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n\n        <!-- --------------------------------description------------------- -->\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"service_desc\"\n          (blur)=\"inputBlur('service_desc')\"></ckeditor>\n        <mat-error *ngIf=\"serviceForm.controls['service_desc']?.touched || serviceForm.controls['service_desc']?.touched && \n        serviceForm.controls['service_desc'].errors \n          && serviceForm.controls['service_desc'].errors.required\">Please write a testimonial.</mat-error>\n        <br>\n        <!-- -------------------------------------------------------------- -->\n\n\n        <!-- --------------------------------priority------------------- -->\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\"\n            (blur)=\"inputBlur('priority')\">\n          <mat-error *ngIf=\"serviceForm.controls['priority']?.touched || serviceForm.controls['priority'].errors \n          && serviceForm.controls['priority'].errors.required\">Priority is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n        <!-- --------------------------------status------------------- -->\n        <mat-label>Status:</mat-label><br>\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Active</mat-checkbox><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n\n\n        <!-- ______________________________________________FORM ARRAY_________________________________________ -->\n\n        <div formArrayName=\"bulletarr\" class=\"bulletarr\"\n          *ngFor=\"let blist of serviceForm.controls.bulletarr?.value; let i = index; trackBy: trackByFn\">\n          <ng-container [formGroupName]=\"i\">\n            <div class=\"top_header\">\n              bullet list\n            </div>\n            <!-- ------------bullet title-----------  -->\n            <mat-form-field>\n              <input matInput formControlName=\"bullet_title\" placeholder=\"Bullet title\">\n              <mat-icon matSuffix>create</mat-icon>\n            </mat-form-field><br>\n            <!-- -----------------------------------  -->\n\n\n            <!-- --------------------bullet description-----------------  -->\n            <mat-form-field>\n              <textarea matInput formControlName=\"bullet_desc\" placeholder=\"Bullet description\"></textarea>\n              <mat-icon matSuffix>format_list_bulleted</mat-icon>\n            </mat-form-field><br>\n            <!-- ----------------------------------------------------------  -->\n          </ng-container>\n          <button (click)=\"addBulletList('','')\" type=\"button\">\n            <mat-icon>add</mat-icon>\n          </button>\n          <button (click)=\"deleteBulletList()\" *ngIf=\"i!=0\" type=\"button\">\n            <mat-icon>remove</mat-icon>\n          </button>\n        </div>\n        <!-- __________________________________________________________________________________________________________ -->\n\n        <span><button type=\"submit\" class=\"submitbtn\" mat-raised-button color=\"primary\">{{buttonText}}</button></span>\n        <span><button type=\"reset\" class=\"submitbtn\" mat-raised-button color=\"primary\" (click)=\"resetserviceForm()\">RESET</button></span>\n\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}.bulletarr{margin-top:20px;border:3px solid #3f50b4;box-sizing:border-box;margin-bottom:15px;padding:10px}.top_header{background:#3f50b4;padding:16px;color:#fff;font-weight:700;text-transform:capitalize}"]
                }] }
    ];
    /** @nocollapse */
    AddeditServiceComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ServicelibService },
        { type: Router },
        { type: MatDialog }
    ]; };
    AddeditServiceComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddeditServiceComponent;
}());
export { AddeditServiceComponent };
if (false) {
    /**
     * ckeditor start here
     * @type {?}
     */
    AddeditServiceComponent.prototype.Editor;
    /** @type {?} */
    AddeditServiceComponent.prototype.editorConfig;
    /** @type {?} */
    AddeditServiceComponent.prototype.model;
    /**
     * ckeditor end here
     * @type {?}
     */
    AddeditServiceComponent.prototype.serviceForm;
    /** @type {?} */
    AddeditServiceComponent.prototype.loader;
    /** @type {?} */
    AddeditServiceComponent.prototype.configData;
    /** @type {?} */
    AddeditServiceComponent.prototype.buttonText;
    /** @type {?} */
    AddeditServiceComponent.prototype.successMessage;
    /** @type {?} */
    AddeditServiceComponent.prototype.dialogRef;
    /** @type {?} */
    AddeditServiceComponent.prototype.flag;
    /**
     * @type {?}
     * @private
     */
    AddeditServiceComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    AddeditServiceComponent.prototype.servicehttp;
    /**
     * @type {?}
     * @private
     */
    AddeditServiceComponent.prototype.router;
    /** @type {?} */
    AddeditServiceComponent.prototype.dialog;
}
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
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return Modal;
}());
export { Modal };
if (false) {
    /** @type {?} */
    Modal.prototype.dialogRef;
    /** @type {?} */
    Modal.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC1zZXJ2aWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VsaWIvIiwic291cmNlcyI6WyJsaWIvQ29tcG9uZW50L2FkZGVkaXQtc2VydmljZS9hZGRlZGl0LXNlcnZpY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxLQUFLLGFBQWEsTUFBTSxtQ0FBbUMsQ0FBQztBQUNuRSxPQUFPLEVBQXFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFDcEYsZ0NBRUM7OztJQURDLHlCQUFZOztBQUlkO0lBK0JFLGlHQUFpRztJQUlqRyxpQ0FBb0IsV0FBd0IsRUFBVSxXQUE4QixFQUMxRSxNQUFjLEVBQVMsTUFBaUI7UUFEOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDMUUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7Ozs7UUF4QjNDLFdBQU0sR0FBRyxhQUFhLENBQUMsQ0FBRSxjQUFjOztRQUM5QyxpQkFBWSxHQUFHO1lBQ2IsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDO1FBQ0ssVUFBSyxHQUFHO1lBQ2IsVUFBVSxFQUFFLEVBQUU7U0FDZixDQUFDO1FBT0YsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixlQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLG1CQUFjLEdBQVcsd0JBQXdCLENBQUM7UUFFbEQsU0FBSSxHQUFZLEtBQUssQ0FBQztJQU1nQyxDQUFDOzs7O0lBRXZELDBDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLE1BQU07WUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFHN0IscUdBQXFHO1FBQ3JHLFFBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDOUIsS0FBSyxLQUFLO2dCQUNSLGlCQUFpQjtnQkFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7Z0JBQzNCLE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsaUJBQWlCO2dCQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDakIsTUFBTTtTQUNUO1FBQ0Qsa0dBQWtHO0lBRXBHLENBQUM7SUFHRCxzQkFDSSwyQ0FBTTs7Ozs7UUFEVixVQUNXLFNBQWM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFLRCxtR0FBbUc7Ozs7O0lBQ25HLDhDQUFZOzs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN4QyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUMsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3JDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxvR0FBb0c7SUFNcEcsc0dBQXNHOzs7Ozs7O0lBQ3RHLGlEQUFlOzs7Ozs7O0lBQWYsVUFBZ0IsWUFBWTtRQUE1QixpQkFjQztRQVpDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsT0FBTztZQUNwQyxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7WUFDMUIsYUFBYSxFQUFFLFlBQVksQ0FBQyxhQUFhO1lBQ3pDLFlBQVksRUFBRSxZQUFZLENBQUMsWUFBWTtZQUN2QyxRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVE7WUFDL0IsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNOztZQUUzQixNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxxR0FBcUc7SUFVckcsb0dBQW9HOzs7Ozs7OztJQUNwRywrQ0FBYTs7Ozs7Ozs7SUFBYixVQUFjLENBQU0sRUFBRSxDQUFNOztZQUNwQixFQUFFLEdBQUcsbUJBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFhO1FBQzNELEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDN0IsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqQixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Ozs7SUFFRCxrREFBZ0I7OztJQUFoQjs7WUFDUSxFQUFFLEdBQUcsbUJBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFhO1FBQzNELEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFHRCwyQ0FBUzs7OztJQUFULFVBQVUsS0FBSztRQUNiLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELHFHQUFxRztJQUdyRyxxR0FBcUc7Ozs7OztJQUNyRywwQ0FBUTs7Ozs7O0lBQVI7UUFBQSxpQkFnQ0M7UUEvQkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUM1QixPQUFPO1NBQ1I7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQy9DO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQUEsQ0FBQzthQUNoRDs7O2dCQUdHLFFBQVEsR0FBUTtnQkFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTTtnQkFDOUIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7YUFDdkU7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxRQUFhO2dCQUNuRixJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO29CQUNoQyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDckMsVUFBVTs7O29CQUFDO3dCQUNULEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3pCLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDbEQ7cUJBQU07b0JBQ0wsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7aUJBQ2xEO1lBQ0gsQ0FBQzs7OztZQUFFLFVBQUMsS0FBSztnQkFDUCxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztZQUNuRCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBRUgsQ0FBQztJQUNELHNHQUFzRztJQUl0RyxxR0FBcUc7Ozs7Ozs7SUFDckcsNENBQVU7Ozs7Ozs7SUFBVixVQUFXLENBQU07UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN2QyxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7U0FDakIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxNQUFNO1FBRTdDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELG9HQUFvRzs7Ozs7SUFJcEcsa0RBQWdCOzs7OztJQUFoQjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCwyQ0FBUzs7OztJQUFULFVBQVUsR0FBUTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ25ELENBQUM7O2dCQXJNRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsZzBJQUErQzs7aUJBRWhEOzs7O2dCQWIyQyxXQUFXO2dCQUM5QyxpQkFBaUI7Z0JBQ2pCLE1BQU07Z0JBQ04sU0FBUzs7O3lCQXVFZixLQUFLOztJQXFJUiw4QkFBQztDQUFBLEFBdE1ELElBc01DO1NBak1ZLHVCQUF1Qjs7Ozs7O0lBT2xDLHlDQUE4Qjs7SUFDOUIsK0NBRUU7O0lBQ0Ysd0NBRUU7Ozs7O0lBTUYsOENBQXVCOztJQUN2Qix5Q0FBd0I7O0lBQ3hCLDZDQUFnQjs7SUFDaEIsNkNBQXNCOztJQUN0QixpREFBa0Q7O0lBQ2xELDRDQUFlOztJQUNmLHVDQUFzQjs7Ozs7SUFLViw4Q0FBZ0M7Ozs7O0lBQUUsOENBQXNDOzs7OztJQUNsRix5Q0FBc0I7O0lBQUUseUNBQXdCOzs7QUE4S3BEO0lBTUUsZUFDUyxTQUE4QixFQUNMLElBQWdCO1FBRHpDLGNBQVMsR0FBVCxTQUFTLENBQXFCO1FBQ0wsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7SUFFdkQseUJBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDZHQUF5QjtpQkFDMUI7Ozs7Z0JBM05tQixZQUFZO2dEQWdPM0IsTUFBTSxTQUFDLGVBQWU7O0lBTTNCLFlBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSxLQUFLOzs7SUFHZCwwQkFBcUM7O0lBQ3JDLHFCQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBDbGFzc2ljRWRpdG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQXJyYXksIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2VydmljZWxpYlNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlbGliLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgbXNnOiBzdHJpbmc7XG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFkZGVkaXQtc2VydmljZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRlZGl0LXNlcnZpY2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGRlZGl0LXNlcnZpY2UuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkZGVkaXRTZXJ2aWNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG5cblxuXG4gIC8qKmNrZWRpdG9yIHN0YXJ0IGhlcmUqL1xuICBwdWJsaWMgRWRpdG9yID0gQ2xhc3NpY0VkaXRvcjsgIC8vZm9yIGNrZWRpdG9yXG4gIGVkaXRvckNvbmZpZyA9IHtcbiAgICBwbGFjZWhvbGRlcjogJ1dyaXRlIGRlc2NyaXB0aW9uLi4uJyxcbiAgfTtcbiAgcHVibGljIG1vZGVsID0ge1xuICAgIGVkaXRvckRhdGE6ICcnXG4gIH07XG4gIC8qKmNrZWRpdG9yIGVuZCBoZXJlKi9cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWRlY2xhcmF0aW9uIHNlY3Rpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBzZXJ2aWNlRm9ybTogRm9ybUdyb3VwO1xuICBsb2FkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uZmlnRGF0YTogYW55O1xuICBidXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgc3VjY2Vzc01lc3NhZ2U6IHN0cmluZyA9IFwiU3VibWl0dGVkIFN1Y2Nlc3NmdWxseVwiO1xuICBkaWFsb2dSZWY6IGFueTtcbiAgZmxhZzogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHNlcnZpY2VodHRwOiBTZXJ2aWNlbGliU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uICE9ICdlZGl0JylcbiAgICAgIHRoaXMuYWRkQnVsbGV0TGlzdCgnJywgJycpO1xuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVNXSVRDSCBDQVNFUz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xuICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVUERBVEVcIjtcbiAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IFwiT25lIHJvdyB1cGRhdGVkXCI7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKHRoaXMuY29uZmlnRGF0YS5kZWZhdWx0RGF0YSk7XG4gICAgICAgIHRoaXMuZmxhZyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIH1cblxuXG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1mb3JtIGdlbmVyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZ2VuZXJhdGVGb3JtKCkge1xuICAgIHRoaXMuc2VydmljZUZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHNlcnZpY2VfdGl0bGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHNlcnZpY2VfZGVzYzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcHJpb3JpdHk6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHN0YXR1czogW3RydWUsXSxcbiAgICAgIGJ1bGxldGFycjogdGhpcy5mb3JtQnVpbGRlci5hcnJheShbXSksXG4gICAgICB1c2VySWQ6IFsnJyxdXG4gICAgfSk7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVmYXVsdCB2YWx1ZT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHNldERlZmF1bHRWYWx1ZShkZWZhdWx0VmFsdWUpIHtcblxuICAgIGRlZmF1bHRWYWx1ZS5idWxsZXRhcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHRoaXMuYWRkQnVsbGV0TGlzdChlbGVtZW50LmJ1bGxldF90aXRsZSwgZWxlbWVudC5idWxsZXRfZGVzYyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlcnZpY2VGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgc2VydmljZV90aXRsZTogZGVmYXVsdFZhbHVlLnNlcnZpY2VfdGl0bGUsXG4gICAgICBzZXJ2aWNlX2Rlc2M6IGRlZmF1bHRWYWx1ZS5zZXJ2aWNlX2Rlc2MsXG4gICAgICBwcmlvcml0eTogZGVmYXVsdFZhbHVlLnByaW9yaXR5LFxuICAgICAgc3RhdHVzOiBkZWZhdWx0VmFsdWUuc3RhdHVzLFxuICAgICAgLy8gYnVsbGV0YXJyOiAnJyxcbiAgICAgIHVzZXJJZDogbnVsbFxuICAgIH0pO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG5cblxuXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUZPUk0gQVJSQVkgRlVOQ1RJT05TPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgYWRkQnVsbGV0TGlzdChhOiBhbnksIGI6IGFueSkge1xuICAgIGNvbnN0IGJsID0gdGhpcy5zZXJ2aWNlRm9ybS5jb250cm9scy5idWxsZXRhcnIgYXMgRm9ybUFycmF5O1xuICAgIGJsLnB1c2godGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBidWxsZXRfdGl0bGU6IFthXSxcbiAgICAgIGJ1bGxldF9kZXNjOiBbYl0sXG4gICAgfSkpO1xuICB9XG5cbiAgZGVsZXRlQnVsbGV0TGlzdCgpIHtcbiAgICBjb25zdCBibCA9IHRoaXMuc2VydmljZUZvcm0uY29udHJvbHMuYnVsbGV0YXJyIGFzIEZvcm1BcnJheTtcbiAgICBibC5yZW1vdmVBdCgxKTtcbiAgfVxuXG5cbiAgdHJhY2tCeUZuKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1TVUJNSVQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLmxvYWRlciA9IHRydWU7XG4gICAgdGhpcy5zZXJ2aWNlRm9ybS5jb250cm9sc1snc2VydmljZV9kZXNjJ10ubWFya0FzVG91Y2hlZCgpO1xuICAgIGlmICh0aGlzLnNlcnZpY2VGb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc2VydmljZUZvcm0udmFsdWUuc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuc2VydmljZUZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIxXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlRm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjBcIik7O1xuICAgICAgfVxuXG4gICAgICAvKiBzdGFydCBwcm9jZXNzIHRvIHN1Ym1pdGVkIGRhdGEgKi9cbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24odGhpcy5zZXJ2aWNlRm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbilcbiAgICAgIH07XG4gICAgICB0aGlzLnNlcnZpY2VodHRwLmFkZERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50LCBwb3N0RGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5zdWNjZXNzTWVzc2FnZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgZnVuY3Rpb25zPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIG9wZW5EaWFsb2coeDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsLCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICAgIGRhdGE6IHsgbXNnOiB4IH1cbiAgICB9KTtcblxuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICB9KTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG4gIHJlc2V0c2VydmljZUZvcm0oKXtcbiAgICAgIHRoaXMuc2VydmljZUZvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIGlucHV0Qmx1cih2YWw6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdCbHVyJyk7XG4gICAgdGhpcy5zZXJ2aWNlRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgQ09NUE9ORU5UPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdtb2RhbC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWwge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNb2RhbD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7IH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiJdfQ==