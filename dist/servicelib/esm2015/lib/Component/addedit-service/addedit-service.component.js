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
export class AddeditServiceComponent {
    // ==============================================================================================
    /**
     * @param {?} formBuilder
     * @param {?} servicehttp
     * @param {?} router
     * @param {?} dialog
     */
    constructor(formBuilder, servicehttp, router, dialog) {
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
        this.successMessage = "Service Added!!!";
        this.img_arr = [];
        this.ErrCode = false;
        this.img_missing = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loader = false;
        this.generateForm();
        if (this.configData.action != 'edit')
            this.addBulletList('', '');
        // =========================================SWITCH CASES==========================================
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                this.buttonText = "SUBMIT";
                this.flag = false;
                this.flag2 = false;
                this.header_name = "Add Service";
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.successMessage = "Service Edited!!!";
                this.setDefaultValue(this.configData.defaultData);
                this.header_name = "Edit Service";
                this.flag = true;
                this.flag2 = true;
                if (this.configData.defaultData.additional_img == false)
                    this.flag2 = false;
                break;
        }
        // ===============================================================================================
    }
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set config(getConfig) {
        this.configData = getConfig;
    }
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set imageUpload(getConfig) {
        this.imageConfigData = getConfig;
    }
    /**
     * @param {?} getConfig2
     * @return {?}
     */
    set imageUpload2(getConfig2) {
        this.imageConfigData2 = getConfig2;
    }
    // =============================================form generation====================================
    /**
     * @return {?}
     */
    generateForm() {
        this.serviceForm = this.formBuilder.group({
            service_title: ['', [Validators.required]],
            description: ['', [Validators.required]],
            priority: ['', [Validators.required]],
            status: [true,],
            bulletarr: this.formBuilder.array([]),
            service_img: ['',],
            additional_img: ['',]
        });
    }
    // =================================================================================================
    // ===============================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    setDefaultValue(defaultValue) {
        defaultValue.bulletarr.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            this.addBulletList(element.bullet_title, element.bullet_desc);
        }));
        this.serviceForm.patchValue({
            service_title: defaultValue.service_title,
            description: defaultValue.description,
            priority: defaultValue.priority,
            status: defaultValue.status,
            service_img: defaultValue.service_img,
            additional_img: defaultValue.additional_img,
        });
        /** Service image **/
        this.img_var = defaultValue.service_img.basepath + defaultValue.service_img.image;
        this.image_name = defaultValue.service_img.name;
        this.image_type = defaultValue.service_img.type;
        /** Additional image **/
        this.img_var2 = defaultValue.additional_img.basepath + defaultValue.additional_img.image;
        this.image_name2 = defaultValue.additional_img.name;
        this.image_type2 = defaultValue.additional_img.type;
    }
    // ==================================================================================================
    // ==========================================FORM ARRAY FUNCTIONS===================================
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    addBulletList(a, b) {
        /** @type {?} */
        const bl = (/** @type {?} */ (this.serviceForm.controls.bulletarr));
        bl.push(this.formBuilder.group({
            bullet_title: [a],
            bullet_desc: [b],
        }));
    }
    /**
     * @return {?}
     */
    deleteBulletList() {
        /** @type {?} */
        const bl = (/** @type {?} */ (this.serviceForm.controls.bulletarr));
        bl.removeAt(1);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    trackByFn(index) {
        return index;
    }
    // ==================================================================================================
    // ================================================SUBMIT============================================
    /**
     * @return {?}
     */
    onSubmit() {
        // Service File Upload Works 
        if (this.imageConfigData.files) {
            if (this.imageConfigData.files.length > 1) {
                this.ErrCode = true;
                return;
            }
            this.serviceForm.value.service_img =
                {
                    "basepath": this.imageConfigData.files[0].upload.data.basepath + '/' + this.imageConfigData.path + '/',
                    "image": this.imageConfigData.files[0].upload.data.data.fileservername,
                    "name": this.imageConfigData.files[0].name,
                    "type": this.imageConfigData.files[0].type
                };
            this.img_missing = false;
        }
        else {
            this.img_missing = true;
        }
        /** Additional Image  **/
        if (this.imageConfigData2.files) {
            if (this.imageConfigData2.files.length > 1) {
                this.ErrCode = true;
                return;
            }
            this.serviceForm.value.additional_img =
                {
                    "basepath": this.imageConfigData2.files[0].upload.data.basepath + '/' + this.imageConfigData2.path + '/',
                    "image": this.imageConfigData2.files[0].upload.data.data.fileservername,
                    "name": this.imageConfigData2.files[0].name,
                    "type": this.imageConfigData2.files[0].type
                };
        }
        for (let i in this.serviceForm.controls) {
            this.serviceForm.controls[i].markAsTouched();
        }
        this.loader = true;
        if (this.img_missing == true) {
            return;
        }
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
            let postData = {
                source: this.configData.source,
                data: Object.assign(this.serviceForm.value, this.configData.condition)
            };
            this.servicehttp.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                if (response.status == "success") {
                    this.openDialog(this.successMessage);
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.dialogRef.close();
                    }), 2000);
                    this.router.navigate([this.configData.callBack]);
                }
                else {
                    alert("Some error occurred. Please try again.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                alert("Some error occurred. Please try again.");
            }));
        }
    }
    // ================================================================================================== 
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    openDialog(x) {
        this.dialogRef = this.dialog.open(Modal, {
            width: '250px',
            data: { msg: x }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
        }));
    }
    // =================================================================================================
    /**
     * @return {?}
     */
    resetserviceForm() {
        this.serviceForm.reset();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputBlur(val) {
        this.serviceForm.controls[val].markAsUntouched();
    }
    // ================================================================================================
    /**
     * @return {?}
     */
    clear_image() {
        this.flag = false;
        this.img_missing = true;
    }
    /**
     * @return {?}
     */
    clear_image2() {
        this.flag2 = false;
        this.serviceForm.value.additional_img = false;
    }
}
AddeditServiceComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-addedit-service',
                template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n\n      <form [formGroup]=\"serviceForm\" autocomplete=\"off\">\n\n\n\n        <!-- ------------------------------service title------------------- -->\n        <mat-form-field>\n          <input matInput placeholder=\"Service title\" formControlName=\"service_title\"\n          >\n          <mat-error *ngIf=\"!serviceForm.controls['service_title'].valid\n        && serviceForm.controls['service_title'].errors.required\"> Service title is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n\n        <!-- --------------------------------description------------------- -->\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"description\"\n          ></ckeditor>\n          <mat-error *ngIf=\"!serviceForm.controls['description'].valid\n          && serviceForm.controls['description'].errors.required && serviceForm.controls['description'].touched\" > Please describe.</mat-error>\n        <br>\n        <!-- -------------------------------------------------------------- -->\n\n\n        <!-- --------------------------------priority------------------- -->\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\"\n           >\n           <mat-error *ngIf=\"!serviceForm.controls['priority'].valid\n           && serviceForm.controls['priority'].errors.required\"> Priority is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n        <!-- --------------------------------status------------------- -->\n        <mat-label>Status:</mat-label><br>\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Active</mat-checkbox><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n\n\n        <!-- ______________________________________________FORM ARRAY_________________________________________ -->\n\n        <div formArrayName=\"bulletarr\" class=\"bulletarr\"\n          *ngFor=\"let blist of serviceForm.controls.bulletarr?.value; let i = index; trackBy: trackByFn\">\n          <ng-container [formGroupName]=\"i\">\n            <div class=\"top_header\">\n              bullet list\n            </div>\n            <!-- ------------bullet title-----------  -->\n            <mat-form-field>\n              <input matInput formControlName=\"bullet_title\" placeholder=\"Bullet title\">\n              <mat-icon matSuffix>title</mat-icon>\n            </mat-form-field><br>\n            <!-- -----------------------------------  -->\n\n\n            <!-- --------------------bullet description-----------------  -->\n            <mat-form-field>\n              <textarea matInput formControlName=\"bullet_desc\" placeholder=\"Bullet description\"></textarea>\n              <mat-icon matSuffix>format_list_bulleted</mat-icon>\n            </mat-form-field><br>\n            <!-- ----------------------------------------------------------  -->\n          </ng-container>\n          <button (click)=\"addBulletList('','')\" type=\"button\">\n            <mat-icon>add</mat-icon>\n          </button>\n          <button (click)=\"deleteBulletList()\" *ngIf=\"i!=0\" type=\"button\">\n            <mat-icon>remove</mat-icon>\n          </button>\n        </div>\n        <!-- __________________________________________________________________________________________________________ -->\n\n        <h1>Service Image:</h1>\n        <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n        <mat-error *ngIf=\"ErrCode==true\">Please add just one service image.</mat-error>\n        <mat-error *ngIf=\"img_missing==true\">Please provide a service image.</mat-error>\n        <!-- <mat-error *ngIf=\"serviceForm.controls['service_img'].errors && serviceForm.controls['service_img'].errors.required\">Priority is required.</mat-error> -->\n\n\n\n        <mat-card-content class=\"files-view\" *ngIf=\"flag==true\">\n          <mat-card class=\"example-card\">\n            <img mat-card-image [attr.src]=\"img_var\">\n            <mat-card-title>{{ image_name }}</mat-card-title>\n            <mat-card-subtitle>{{ image_type }}</mat-card-subtitle>\n            <span class=\"closecard\" (click)=\"clear_image()\"><i class=\"material-icons\">clear</i></span>\n          </mat-card>\n        </mat-card-content>\n\n        <!-- ______________________________________________________________________________________________________________ -->\n        <!-- Additional Image  -->\n        <h1>Additional Image:</h1>\n        <lib-file-upload [config]=\"imageConfigData2\"></lib-file-upload>\n        <mat-error *ngIf=\"ErrCode==true\">Please add just one additional image.</mat-error>\n\n\n\n\n        <mat-card-content class=\"files-view\" *ngIf=\"flag2==true\">\n          <mat-card class=\"example-card\">\n            <img mat-card-image [attr.src]=\"img_var2\">\n            <mat-card-title>{{ image_name2 }}</mat-card-title>\n            <mat-card-subtitle>{{ image_type2 }}</mat-card-subtitle>\n            <span class=\"closecard\" (click)=\"clear_image2()\"><i class=\"material-icons\">clear</i></span>\n          </mat-card>\n        </mat-card-content>\n\n        <span><button type=\"button\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n            (click)=\"onSubmit()\">{{buttonText}}</button></span>\n        <span><button type=\"reset\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n            (click)=\"resetserviceForm()\">RESET</button></span>\n\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}.bulletarr{margin-top:20px;border:3px solid #3f50b4;box-sizing:border-box;margin-bottom:15px;padding:10px}.top_header{background:#3f50b4;padding:16px;color:#fff;font-weight:700;text-transform:capitalize}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
            }] }
];
/** @nocollapse */
AddeditServiceComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ServicelibService },
    { type: Router },
    { type: MatDialog }
];
AddeditServiceComponent.propDecorators = {
    config: [{ type: Input }],
    imageUpload: [{ type: Input }],
    imageUpload2: [{ type: Input }]
};
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
    AddeditServiceComponent.prototype.imageConfigData;
    /** @type {?} */
    AddeditServiceComponent.prototype.buttonText;
    /** @type {?} */
    AddeditServiceComponent.prototype.successMessage;
    /** @type {?} */
    AddeditServiceComponent.prototype.dialogRef;
    /** @type {?} */
    AddeditServiceComponent.prototype.img_arr;
    /** @type {?} */
    AddeditServiceComponent.prototype.ErrCode;
    /** @type {?} */
    AddeditServiceComponent.prototype.flag;
    /** @type {?} */
    AddeditServiceComponent.prototype.img_var;
    /** @type {?} */
    AddeditServiceComponent.prototype.header_name;
    /** @type {?} */
    AddeditServiceComponent.prototype.image_name;
    /** @type {?} */
    AddeditServiceComponent.prototype.image_type;
    /** @type {?} */
    AddeditServiceComponent.prototype.getConfig2;
    /** @type {?} */
    AddeditServiceComponent.prototype.imageConfigData2;
    /** @type {?} */
    AddeditServiceComponent.prototype.img_var2;
    /** @type {?} */
    AddeditServiceComponent.prototype.image_name2;
    /** @type {?} */
    AddeditServiceComponent.prototype.image_type2;
    /** @type {?} */
    AddeditServiceComponent.prototype.flag2;
    /** @type {?} */
    AddeditServiceComponent.prototype.img_missing;
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
export class Modal {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
Modal.decorators = [
    { type: Component, args: [{
                selector: 'app-modal',
                template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
            }] }
];
/** @nocollapse */
Modal.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    Modal.prototype.dialogRef;
    /** @type {?} */
    Modal.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC1zZXJ2aWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VsaWIvIiwic291cmNlcyI6WyJsaWIvQ29tcG9uZW50L2FkZGVkaXQtc2VydmljZS9hZGRlZGl0LXNlcnZpY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxLQUFLLGFBQWEsTUFBTSxtQ0FBbUMsQ0FBQztBQUNuRSxPQUFPLEVBQXFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFDcEYsZ0NBRUM7OztJQURDLHlCQUFZOztBQVNkLE1BQU0sT0FBTyx1QkFBdUI7Ozs7Ozs7O0lBNENsQyxZQUFvQixXQUF3QixFQUFVLFdBQThCLEVBQzFFLE1BQWMsRUFBUyxNQUFpQjtRQUQ5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUMxRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVzs7OztRQXRDM0MsV0FBTSxHQUFHLGFBQWEsQ0FBQyxDQUFFLGNBQWM7O1FBQzlDLGlCQUFZLEdBQUc7WUFDYixXQUFXLEVBQUUsc0JBQXNCO1NBQ3BDLENBQUM7UUFDSyxVQUFLLEdBQUc7WUFDYixVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUM7UUFPRixXQUFNLEdBQVksS0FBSyxDQUFDO1FBR3hCLGVBQVUsR0FBRyxRQUFRLENBQUM7UUFDdEIsbUJBQWMs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SUFDdEIsaURBQTRDOztJQUM1Qyw0Q0FBZTs7SUFDZiwwQ0FBa0I7O0lBQ2xCLDBDQUF5Qjs7SUFDekIsdUNBQWM7O0lBQ2QsMENBQWE7O0lBQ2IsOENBQWlCOztJQUNqQiw2Q0FBZ0I7O0lBQ2hCLDZDQUFnQjs7SUFDaEIsNkNBQWdCOztJQUNoQixtREFBc0I7O0lBQ3RCLDJDQUFjOztJQUNkLDhDQUFpQjs7SUFDakIsOENBQWlCOztJQUNqQix3Q0FBZTs7SUFDZiw4Q0FBNkI7Ozs7O0lBS2pCLDhDQUFnQzs7Ozs7SUFBRSw4Q0FBc0M7Ozs7O0lBQ2xGLHlDQUFzQjs7SUFBRSx5Q0FBd0I7OztBQXNQcEQsTUFBTSxPQUFPLEtBQUs7Ozs7O0lBRWhCLFlBQ1MsU0FBOEIsRUFDTCxJQUFnQjtRQUR6QyxjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQUNMLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDOzs7O0lBRXZELFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsNkdBQXlCO2FBQzFCOzs7O1lBN1NtQixZQUFZOzRDQWtUM0IsTUFBTSxTQUFDLGVBQWU7Ozs7SUFEdkIsMEJBQXFDOztJQUNyQyxxQkFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgQ2xhc3NpY0VkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFNlcnZpY2VsaWJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZWxpYi5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIG1zZzogc3RyaW5nO1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGRlZGl0LXNlcnZpY2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkZWRpdC1zZXJ2aWNlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkZWRpdC1zZXJ2aWNlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRlZGl0U2VydmljZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuXG5cblxuICAvKipja2VkaXRvciBzdGFydCBoZXJlKi9cbiAgcHVibGljIEVkaXRvciA9IENsYXNzaWNFZGl0b3I7ICAvL2ZvciBja2VkaXRvclxuICBlZGl0b3JDb25maWcgPSB7XG4gICAgcGxhY2Vob2xkZXI6ICdXcml0ZSBkZXNjcmlwdGlvbi4uLicsXG4gIH07XG4gIHB1YmxpYyBtb2RlbCA9IHtcbiAgICBlZGl0b3JEYXRhOiAnJ1xuICB9O1xuICAvKipja2VkaXRvciBlbmQgaGVyZSovXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1EZWNsYXJhdGlvbiBzZWN0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgc2VydmljZUZvcm06IEZvcm1Hcm91cDtcbiAgbG9hZGVyOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbmZpZ0RhdGE6IGFueTtcbiAgaW1hZ2VDb25maWdEYXRhOiBhbnk7XG4gIGJ1dHRvblRleHQgPSBcIlNVQk1JVFwiO1xuICBzdWNjZXNzTWVzc2FnZTogc3RyaW5nID0gXCJTZXJ2aWNlIEFkZGVkISEhXCI7XG4gIGRpYWxvZ1JlZjogYW55O1xuICBpbWdfYXJyOiBhbnkgPSBbXTtcbiAgRXJyQ29kZTogYm9vbGVhbiA9IGZhbHNlO1xuICBmbGFnOiBib29sZWFuO1xuICBpbWdfdmFyOiBhbnk7XG4gIGhlYWRlcl9uYW1lOiBhbnk7XG4gIGltYWdlX25hbWU6IGFueTtcbiAgaW1hZ2VfdHlwZTogYW55O1xuICBnZXRDb25maWcyOiBhbnk7XG4gIGltYWdlQ29uZmlnRGF0YTI6IGFueTtcbiAgaW1nX3ZhcjI6IGFueTtcbiAgaW1hZ2VfbmFtZTI6IGFueTtcbiAgaW1hZ2VfdHlwZTI6IGFueTtcbiAgZmxhZzI6IGJvb2xlYW47XG4gIGltZ19taXNzaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgc2VydmljZWh0dHA6IFNlcnZpY2VsaWJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnRGF0YS5hY3Rpb24gIT0gJ2VkaXQnKVxuICAgICAgdGhpcy5hZGRCdWxsZXRMaXN0KCcnLCAnJyk7XG5cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09U1dJVENIIENBU0VTPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uKSB7XG4gICAgICBjYXNlICdhZGQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlNVQk1JVFwiO1xuICAgICAgICB0aGlzLmZsYWcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mbGFnMiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJBZGQgU2VydmljZVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlVQREFURVwiO1xuICAgICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gXCJTZXJ2aWNlIEVkaXRlZCEhIVwiO1xuICAgICAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEpO1xuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJFZGl0IFNlcnZpY2VcIjtcbiAgICAgICAgdGhpcy5mbGFnID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mbGFnMiA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEuYWRkaXRpb25hbF9pbWcgPT0gZmFsc2UpXG4gICAgICAgICAgdGhpcy5mbGFnMiA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB9XG5cblxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBpbWFnZVVwbG9hZChnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuaW1hZ2VDb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBpbWFnZVVwbG9hZDIoZ2V0Q29uZmlnMjogYW55KSB7XG4gICAgdGhpcy5pbWFnZUNvbmZpZ0RhdGEyID0gZ2V0Q29uZmlnMjtcbiAgfVxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1mb3JtIGdlbmVyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZ2VuZXJhdGVGb3JtKCkge1xuICAgIHRoaXMuc2VydmljZUZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHNlcnZpY2VfdGl0bGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBwcmlvcml0eTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgc3RhdHVzOiBbdHJ1ZSxdLFxuICAgICAgYnVsbGV0YXJyOiB0aGlzLmZvcm1CdWlsZGVyLmFycmF5KFtdKSxcbiAgICAgIHNlcnZpY2VfaW1nOiBbJycsXSxcbiAgICAgIGFkZGl0aW9uYWxfaW1nOiBbJycsXVxuICAgIH0pO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVmYXVsdCB2YWx1ZT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHNldERlZmF1bHRWYWx1ZShkZWZhdWx0VmFsdWUpIHtcblxuICAgIGRlZmF1bHRWYWx1ZS5idWxsZXRhcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHRoaXMuYWRkQnVsbGV0TGlzdChlbGVtZW50LmJ1bGxldF90aXRsZSwgZWxlbWVudC5idWxsZXRfZGVzYyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlcnZpY2VGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgc2VydmljZV90aXRsZTogZGVmYXVsdFZhbHVlLnNlcnZpY2VfdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogZGVmYXVsdFZhbHVlLmRlc2NyaXB0aW9uLFxuICAgICAgcHJpb3JpdHk6IGRlZmF1bHRWYWx1ZS5wcmlvcml0eSxcbiAgICAgIHN0YXR1czogZGVmYXVsdFZhbHVlLnN0YXR1cyxcbiAgICAgIHNlcnZpY2VfaW1nOiBkZWZhdWx0VmFsdWUuc2VydmljZV9pbWcsXG4gICAgICBhZGRpdGlvbmFsX2ltZzogZGVmYXVsdFZhbHVlLmFkZGl0aW9uYWxfaW1nLFxuICAgIH0pO1xuICAgIC8qKiBTZXJ2aWNlIGltYWdlICoqL1xuICAgIHRoaXMuaW1nX3ZhciA9IGRlZmF1bHRWYWx1ZS5zZXJ2aWNlX2ltZy5iYXNlcGF0aCArIGRlZmF1bHRWYWx1ZS5zZXJ2aWNlX2ltZy5pbWFnZTtcbiAgICB0aGlzLmltYWdlX25hbWUgPSBkZWZhdWx0VmFsdWUuc2VydmljZV9pbWcubmFtZTtcbiAgICB0aGlzLmltYWdlX3R5cGUgPSBkZWZhdWx0VmFsdWUuc2VydmljZV9pbWcudHlwZVxuXG4gICAgLyoqIEFkZGl0aW9uYWwgaW1hZ2UgKiovXG4gICAgdGhpcy5pbWdfdmFyMiA9IGRlZmF1bHRWYWx1ZS5hZGRpdGlvbmFsX2ltZy5iYXNlcGF0aCArIGRlZmF1bHRWYWx1ZS5hZGRpdGlvbmFsX2ltZy5pbWFnZTtcbiAgICB0aGlzLmltYWdlX25hbWUyID0gZGVmYXVsdFZhbHVlLmFkZGl0aW9uYWxfaW1nLm5hbWU7XG4gICAgdGhpcy5pbWFnZV90eXBlMiA9IGRlZmF1bHRWYWx1ZS5hZGRpdGlvbmFsX2ltZy50eXBlXG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cblxuXG5cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Rk9STSBBUlJBWSBGVU5DVElPTlM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBhZGRCdWxsZXRMaXN0KGE6IGFueSwgYjogYW55KSB7XG4gICAgY29uc3QgYmwgPSB0aGlzLnNlcnZpY2VGb3JtLmNvbnRyb2xzLmJ1bGxldGFyciBhcyBGb3JtQXJyYXk7XG4gICAgYmwucHVzaCh0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGJ1bGxldF90aXRsZTogW2FdLFxuICAgICAgYnVsbGV0X2Rlc2M6IFtiXSxcbiAgICB9KSk7XG4gIH1cblxuICBkZWxldGVCdWxsZXRMaXN0KCkge1xuICAgIGNvbnN0IGJsID0gdGhpcy5zZXJ2aWNlRm9ybS5jb250cm9scy5idWxsZXRhcnIgYXMgRm9ybUFycmF5O1xuICAgIGJsLnJlbW92ZUF0KDEpO1xuICB9XG5cblxuICB0cmFja0J5Rm4oaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVNVQk1JVD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIG9uU3VibWl0KCkge1xuICAgIC8vIFNlcnZpY2UgRmlsZSBVcGxvYWQgV29ya3MgXG4gICAgaWYgKHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzKSB7XG5cbiAgICAgIGlmICh0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlcy5sZW5ndGggPiAxKSB7IHRoaXMuRXJyQ29kZSA9IHRydWU7IHJldHVybjsgfVxuXG4gICAgICB0aGlzLnNlcnZpY2VGb3JtLnZhbHVlLnNlcnZpY2VfaW1nID1cbiAgICAgICAge1xuICAgICAgICAgIFwiYmFzZXBhdGhcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0udXBsb2FkLmRhdGEuYmFzZXBhdGggKyAnLycgKyB0aGlzLmltYWdlQ29uZmlnRGF0YS5wYXRoICsgJy8nLFxuICAgICAgICAgIFwiaW1hZ2VcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0udXBsb2FkLmRhdGEuZGF0YS5maWxlc2VydmVybmFtZSxcbiAgICAgICAgICBcIm5hbWVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0ubmFtZSxcbiAgICAgICAgICBcInR5cGVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0udHlwZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmltZ19taXNzaW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW1nX21pc3NpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKiBBZGRpdGlvbmFsIEltYWdlICAqKi9cbiAgICBpZiAodGhpcy5pbWFnZUNvbmZpZ0RhdGEyLmZpbGVzKSB7XG5cbiAgICAgIGlmICh0aGlzLmltYWdlQ29uZmlnRGF0YTIuZmlsZXMubGVuZ3RoID4gMSkgeyB0aGlzLkVyckNvZGUgPSB0cnVlOyByZXR1cm47IH1cbiAgICAgIHRoaXMuc2VydmljZUZvcm0udmFsdWUuYWRkaXRpb25hbF9pbWcgPVxuICAgICAgICB7XG4gICAgICAgICAgXCJiYXNlcGF0aFwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YTIuZmlsZXNbMF0udXBsb2FkLmRhdGEuYmFzZXBhdGggKyAnLycgKyB0aGlzLmltYWdlQ29uZmlnRGF0YTIucGF0aCArICcvJyxcbiAgICAgICAgICBcImltYWdlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhMi5maWxlc1swXS51cGxvYWQuZGF0YS5kYXRhLmZpbGVzZXJ2ZXJuYW1lLFxuICAgICAgICAgIFwibmFtZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YTIuZmlsZXNbMF0ubmFtZSxcbiAgICAgICAgICBcInR5cGVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEyLmZpbGVzWzBdLnR5cGVcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGZvciAobGV0IGkgaW4gdGhpcy5zZXJ2aWNlRm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5zZXJ2aWNlRm9ybS5jb250cm9sc1tpXS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2FkZXIgPSB0cnVlO1xuICAgICBpZih0aGlzLmltZ19taXNzaW5nPT10cnVlKXtyZXR1cm47fVxuICAgIGlmICh0aGlzLnNlcnZpY2VGb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc2VydmljZUZvcm0udmFsdWUuc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuc2VydmljZUZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIxXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlRm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjBcIik7O1xuICAgICAgfVxuXG4gICAgICAvKiBzdGFydCBwcm9jZXNzIHRvIHN1Ym1pdGVkIGRhdGEgKi9cbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24odGhpcy5zZXJ2aWNlRm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbilcbiAgICAgIH07XG4gICAgICB0aGlzLnNlcnZpY2VodHRwLmFkZERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50LCBwb3N0RGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5zdWNjZXNzTWVzc2FnZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgICB9XG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1PREFMIGZ1bmN0aW9ucz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBvcGVuRGlhbG9nKHg6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihNb2RhbCwge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB7IG1zZzogeCB9XG4gICAgfSk7XG4gICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICB9KTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG4gIHJlc2V0c2VydmljZUZvcm0oKSB7XG4gICAgdGhpcy5zZXJ2aWNlRm9ybS5yZXNldCgpO1xuICB9XG5cbiAgaW5wdXRCbHVyKHZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2aWNlRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNsZWFyX2ltYWdlKCkge1xuICAgIHRoaXMuZmxhZyA9IGZhbHNlO1xuICAgIHRoaXMuaW1nX21pc3NpbmcgPSB0cnVlO1xuICB9XG5cbiAgY2xlYXJfaW1hZ2UyKCkge1xuICAgIHRoaXMuZmxhZzIgPSBmYWxzZTtcbiAgICB0aGlzLnNlcnZpY2VGb3JtLnZhbHVlLmFkZGl0aW9uYWxfaW1nID0gZmFsc2U7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG59XG5cblxuXG5cblxuXG5cblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgQ09NUE9ORU5UPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdtb2RhbC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWwge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNb2RhbD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7IH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiJdfQ==