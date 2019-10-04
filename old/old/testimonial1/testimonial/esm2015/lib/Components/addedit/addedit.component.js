/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, Validators } from '@angular/forms';
import { TestimonialService } from '../../testimonial.service';
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
export class AddeditComponent {
    // ==================================================================================================
    /**
     * @param {?} formBuilder
     * @param {?} testiService
     * @param {?} router
     * @param {?} dialog
     */
    constructor(formBuilder, testiService, router, dialog) {
        this.formBuilder = formBuilder;
        this.testiService = testiService;
        this.router = router;
        this.dialog = dialog;
        /**
         * ckeditor start here
         */
        this.Editor = ClassicEditor; //for ckeditor
        //for ckeditor
        this.editorConfig = {
            placeholder: 'Write testimonial...',
        };
        this.model = {
            editorData: ''
        };
        /**
         * ckeditor end here
         */
        //  ========================================Declaration Section======================================
        this.buttonText = "SUBMIT";
        this.loader = false;
        this.successMessage = "Submitted Successfully";
        this.ErrCode = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loader = false;
        this.generateForm();
        // --------------------------------checking the cases------------------------ 
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                this.buttonText = "SUBMIT";
                this.flag = false;
                this.header_name = "ADD";
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.successMessage = "One row updated";
                this.setDefaultValue(this.configData.defaultData);
                this.header_name = "EDIT";
                this.flag = true;
                break;
        }
        // --------------------------------------------------------------------------
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
    // =====================================Form Validation/generation===================================
    /**
     * @return {?}
     */
    generateForm() {
        this.testimonialForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)]],
            testimonial: ['', [Validators.required]],
            priority: ['', Validators.required],
            status: [true,],
            testimonial_img: ['',],
            userId: [this.configData.userData.id, null]
        });
    }
    // =================================================================================================
    // ==========================================SUBMIT=================================================
    /**
     * @return {?}
     */
    onSubmit() {
        // Testimonial File Upload Works 
        if (this.imageConfigData.files) {
            if (this.imageConfigData.files.length > 1) {
                this.ErrCode = true;
                return;
            }
            this.testimonialForm.value.testimonial_img =
                {
                    "basepath": this.imageConfigData.files[0].upload.data.basepath + '/' + this.imageConfigData.path + '/',
                    "image": this.imageConfigData.files[0].upload.data.data.fileservername,
                    "name": this.imageConfigData.files[0].name,
                    "type": this.imageConfigData.files[0].type
                };
        }
        else {
            this.testimonialForm.value.testimonial_img = false;
        }
        this.testimonialForm.controls['testimonial'].markAsTouched();
        this.loader = true;
        /* stop here if form is invalid */
        if (this.testimonialForm.invalid) {
            return;
        }
        else {
            if (this.testimonialForm.value.status) {
                this.testimonialForm.value.status = parseInt("1");
            }
            else {
                this.testimonialForm.value.status = parseInt("0");
                ;
            }
            /* start process to submited data */
            /** @type {?} */
            let postData = {
                source: this.configData.source,
                data: Object.assign(this.testimonialForm.value, this.configData.condition)
            };
            this.testiService.addData(this.configData.endpoint, postData).subscribe((/**
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
                    alert("Some error occurred. Please try angain.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                alert("Some error occurred. Please try angain.");
            }));
        }
    }
    // =================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    setDefaultValue(defaultValue) {
        this.testimonialForm.patchValue({
            name: defaultValue.name,
            email: defaultValue.email,
            testimonial: defaultValue.testimonial,
            priority: defaultValue.priority,
            status: defaultValue.status,
            userId: null,
            testimonial_img: defaultValue.testimonial_img
        });
        this.img_var = defaultValue.testimonial_img.basepath + defaultValue.testimonial_img.image;
        this.image_name = defaultValue.testimonial_img.name;
        this.image_type = defaultValue.testimonial_img.type;
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
    // =====================================================================================================
    /**
     * @param {?} val
     * @return {?}
     */
    inputBlur(val) {
        this.testimonialForm.controls[val].markAsUntouched();
    }
    // ==========================================Clear MAT tag===================================
    /**
     * @return {?}
     */
    clear_image() {
        this.flag = false;
    }
}
AddeditComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-addedit',
                template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n\n      <!-- ---------------------------------FORM BEGINS--------------------------- -->\n      <form [formGroup]=\"testimonialForm\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n\n\n\n        <!-- -----------------------------------customer username---------------------------- -->\n        <mat-form-field>\n          <mat-label>Customer/User Name:</mat-label>\n          <input matInput type=\"text\" formControlName=\"name\" (blur)=\"inputBlur('name')\">\n          <mat-error *ngIf=\"testimonialForm.controls['name']?.touched || testimonialForm.controls['name'].errors \n          && testimonialForm.controls['name'].errors.required\">Name is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n\n        <!-- ----------------------------------------customer email-------------------------- -->\n        <mat-form-field>\n          <mat-label>Customer/User Email:</mat-label>\n          <input matInput type=\"email\" formControlName=\"email\" (blur)=\"inputBlur('email')\">\n          <mat-error *ngIf=\"testimonialForm.controls['email']?.touched || testimonialForm.controls['email'].errors \n          && testimonialForm.controls['email'].errors.required\">Email is required.</mat-error>\n          <mat-error\n            *ngIf=\"!testimonialForm.controls['email'].valid && !testimonialForm.controls['email'].errors.required\">Email\n            is not valid</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n        <!-- ----------------------------------testimonial----------------------------------- -->\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"testimonial\"\n          (blur)=\"inputBlur('testimonial')\"></ckeditor>\n        <mat-error *ngIf=\"testimonialForm.controls['testimonial']?.touched || testimonialForm.controls['testimonial']?.touched && testimonialForm.controls['testimonial'].errors \n          && testimonialForm.controls['testimonial'].errors.required\">Please write a testimonial.</mat-error>\n        <br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n\n        <!-- ------------------------------------------priority------------------------------ -->\n        <mat-form-field>\n          <mat-label>Priority:</mat-label>\n          <input matInput type=\"number\" formControlName=\"priority\" (blur)=\"inputBlur('priority')\">\n          <mat-error *ngIf=\"testimonialForm.controls['priority']?.touched || testimonialForm.controls['priority'].errors \n          && testimonialForm.controls['priority'].errors.required\">Priority is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n\n        <!-- ----------------------------------------status---------------------------------- -->\n        <mat-label>Status:</mat-label><br>\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Active</mat-checkbox><br>\n        <!-- -------------------------------------------------------------------------------  -->\n\n\n        <!-- ---------------------------------------------Image Uploader--------------------- -->\n        <h1>Testimonial Image:</h1>\n        <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n        <mat-error *ngIf=\"ErrCode==true\">Please add just one testimonial image.</mat-error>\n        <!-- -------------------------------------------------------------------------------- -->\n\n        <!-- CARD VIEW  -->\n        <mat-card-content class=\"files-view\" *ngIf=\"flag==true\">\n          <mat-card class=\"example-card\">\n            <img mat-card-image [attr.src]=\"img_var\">\n            <mat-card-title>{{ image_name }}</mat-card-title>\n            <mat-card-subtitle>{{ image_type }}</mat-card-subtitle>\n            <span class=\"closecard\" (click)=\"clear_image()\"><i class=\"material-icons\">clear</i></span>\n          </mat-card>\n        </mat-card-content>\n        <!-- ---------  -->\n\n\n\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
            }] }
];
/** @nocollapse */
AddeditComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: TestimonialService },
    { type: Router },
    { type: MatDialog }
];
AddeditComponent.propDecorators = {
    config: [{ type: Input }],
    imageUpload: [{ type: Input }]
};
if (false) {
    /**
     * ckeditor start here
     * @type {?}
     */
    AddeditComponent.prototype.Editor;
    /** @type {?} */
    AddeditComponent.prototype.editorConfig;
    /** @type {?} */
    AddeditComponent.prototype.model;
    /**
     * ckeditor end here
     * @type {?}
     */
    AddeditComponent.prototype.buttonText;
    /** @type {?} */
    AddeditComponent.prototype.testimonialForm;
    /** @type {?} */
    AddeditComponent.prototype.loader;
    /** @type {?} */
    AddeditComponent.prototype.configData;
    /** @type {?} */
    AddeditComponent.prototype.successMessage;
    /** @type {?} */
    AddeditComponent.prototype.dialogRef;
    /** @type {?} */
    AddeditComponent.prototype.imageConfigData;
    /** @type {?} */
    AddeditComponent.prototype.ErrCode;
    /** @type {?} */
    AddeditComponent.prototype.flag;
    /** @type {?} */
    AddeditComponent.prototype.img_var;
    /** @type {?} */
    AddeditComponent.prototype.header_name;
    /** @type {?} */
    AddeditComponent.prototype.image_name;
    /** @type {?} */
    AddeditComponent.prototype.image_type;
    /**
     * @type {?}
     * @private
     */
    AddeditComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    AddeditComponent.prototype.testiService;
    /**
     * @type {?}
     * @private
     */
    AddeditComponent.prototype.router;
    /** @type {?} */
    AddeditComponent.prototype.dialog;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90ZXN0aW1vbmlhbC8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL2FkZGVkaXQvYWRkZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEtBQUssYUFBYSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFlLE1BQU0sZ0JBQWdCLENBQUE7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBQ3BGLGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFTZCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7OztJQStCM0IsWUFBb0IsV0FBd0IsRUFBVSxZQUFnQyxFQUM1RSxNQUFjLEVBQVMsTUFBaUI7UUFEOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDNUUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7Ozs7UUE1QjNDLFdBQU0sR0FBRyxhQUFhLENBQUMsQ0FBRSxjQUFjOztRQUM5QyxpQkFBWSxHQUFHO1lBQ2IsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDO1FBQ0ssVUFBSyxHQUFHO1lBQ2IsVUFBVSxFQUFFLEVBQUU7U0FDZixDQUFDOzs7OztRQUtGLGVBQVUsR0FBRyxRQUFRLENBQUM7UUFFZixXQUFNLEdBQVksS0FBSyxDQUFDO1FBRS9CLG1CQUFjLEdBQVcsd0JBQXdCLENBQUM7UUFH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dkQsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw2R0FBeUI7YUFDMUI7Ozs7WUFwTm1CLFlBQVk7NENBeU4zQixNQUFNLFNBQUMsZUFBZTs7OztJQUR2QiwwQkFBcUM7O0lBQ3JDLHFCQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBDbGFzc2ljRWRpdG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYyc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHsgVGVzdGltb25pYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdGVzdGltb25pYWwuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBtc2c6IHN0cmluZztcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWRkZWRpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRlZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkZWRpdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkZWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICAvKipja2VkaXRvciBzdGFydCBoZXJlKi9cbiAgcHVibGljIEVkaXRvciA9IENsYXNzaWNFZGl0b3I7ICAvL2ZvciBja2VkaXRvclxuICBlZGl0b3JDb25maWcgPSB7XG4gICAgcGxhY2Vob2xkZXI6ICdXcml0ZSB0ZXN0aW1vbmlhbC4uLicsXG4gIH07XG4gIHB1YmxpYyBtb2RlbCA9IHtcbiAgICBlZGl0b3JEYXRhOiAnJ1xuICB9O1xuICAvKipja2VkaXRvciBlbmQgaGVyZSovXG5cblxuICAvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PURlY2xhcmF0aW9uIFNlY3Rpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBidXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgdGVzdGltb25pYWxGb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBsb2FkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uZmlnRGF0YTtcbiAgc3VjY2Vzc01lc3NhZ2U6IHN0cmluZyA9IFwiU3VibWl0dGVkIFN1Y2Nlc3NmdWxseVwiO1xuICBkaWFsb2dSZWY6IGFueTtcbiAgaW1hZ2VDb25maWdEYXRhOmFueTtcbiAgRXJyQ29kZTpib29sZWFuID0gZmFsc2U7XG4gIGZsYWc6IGJvb2xlYW47XG4gIGltZ192YXI6IGFueTtcbiAgaGVhZGVyX25hbWU6IGFueTtcbiAgaW1hZ2VfbmFtZTogYW55O1xuICBpbWFnZV90eXBlOiBhbnk7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSB0ZXN0aVNlcnZpY2U6IFRlc3RpbW9uaWFsU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNoZWNraW5nIHRoZSBjYXNlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcbiAgICBzd2l0Y2ggKHRoaXMuY29uZmlnRGF0YS5hY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiU1VCTUlUXCI7XG4gICAgICAgIHRoaXMuZmxhZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJBRERcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVUERBVEVcIjtcbiAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IFwiT25lIHJvdyB1cGRhdGVkXCI7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKHRoaXMuY29uZmlnRGF0YS5kZWZhdWx0RGF0YSk7XG4gICAgICAgIHRoaXMuaGVhZGVyX25hbWUgPSBcIkVESVRcIjtcbiAgICAgICAgdGhpcy5mbGFnID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaW1hZ2VVcGxvYWQoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmltYWdlQ29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1Gb3JtIFZhbGlkYXRpb24vZ2VuZXJhdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGdlbmVyYXRlRm9ybSgpIHtcbiAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgbmFtZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvXG4gICAgICApXV0sXG4gICAgICB0ZXN0aW1vbmlhbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcHJpb3JpdHk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBzdGF0dXM6IFt0cnVlLF0sXG4gICAgICB0ZXN0aW1vbmlhbF9pbWcgOiBbJycsXSxcbiAgICAgIHVzZXJJZDogW3RoaXMuY29uZmlnRGF0YS51c2VyRGF0YS5pZCwgbnVsbF1cbiAgICB9KVxuICAgIFxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09U1VCTUlUPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgb25TdWJtaXQoKSB7XG4gICAgLy8gVGVzdGltb25pYWwgRmlsZSBVcGxvYWQgV29ya3MgXG4gICAgaWYgKHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzKSB7XG4gICAgICAgICAgICBcbiAgICAgIGlmICh0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlcy5sZW5ndGggPiAxKSB7IHRoaXMuRXJyQ29kZSA9IHRydWU7IHJldHVybjsgfVxuICAgICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUudGVzdGltb25pYWxfaW1nID1cbiAgICAgICAge1xuICAgICAgICAgIFwiYmFzZXBhdGhcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0udXBsb2FkLmRhdGEuYmFzZXBhdGggKyAnLycgKyB0aGlzLmltYWdlQ29uZmlnRGF0YS5wYXRoICsgJy8nLFxuICAgICAgICAgIFwiaW1hZ2VcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0udXBsb2FkLmRhdGEuZGF0YS5maWxlc2VydmVybmFtZSxcbiAgICAgICAgICBcIm5hbWVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0ubmFtZSxcbiAgICAgICAgICBcInR5cGVcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbMF0udHlwZVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZS50ZXN0aW1vbmlhbF9pbWcgPSBmYWxzZTtcbiAgICB9XG5cblxuICAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS5jb250cm9sc1sndGVzdGltb25pYWwnXS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5sb2FkZXIgPSB0cnVlO1xuICAgIC8qIHN0b3AgaGVyZSBpZiBmb3JtIGlzIGludmFsaWQgKi9cbiAgICBpZiAodGhpcy50ZXN0aW1vbmlhbEZvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUuc3RhdHVzKSB7XG4gICAgICAgIHRoaXMudGVzdGltb25pYWxGb3JtLnZhbHVlLnN0YXR1cyA9IHBhcnNlSW50KFwiMVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGVzdGltb25pYWxGb3JtLnZhbHVlLnN0YXR1cyA9IHBhcnNlSW50KFwiMFwiKTs7XG4gICAgICB9XG5cbiAgICAgIC8qIHN0YXJ0IHByb2Nlc3MgdG8gc3VibWl0ZWQgZGF0YSAqL1xuICAgICAgbGV0IHBvc3REYXRhOiBhbnkgPSB7XG4gICAgICAgIHNvdXJjZTogdGhpcy5jb25maWdEYXRhLnNvdXJjZSxcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbilcbiAgICAgIH07XG4gICAgICB0aGlzLnRlc3RpU2VydmljZS5hZGREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludCwgcG9zdERhdGEpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMuc3VjY2Vzc01lc3NhZ2UpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jb25maWdEYXRhLmNhbGxCYWNrXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XG4gICAgICAgIH1cbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVmYXVsdCB2YWx1ZT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHNldERlZmF1bHRWYWx1ZShkZWZhdWx0VmFsdWUpIHtcbiAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIG5hbWU6IGRlZmF1bHRWYWx1ZS5uYW1lLFxuICAgICAgZW1haWw6IGRlZmF1bHRWYWx1ZS5lbWFpbCxcbiAgICAgIHRlc3RpbW9uaWFsOiBkZWZhdWx0VmFsdWUudGVzdGltb25pYWwsXG4gICAgICBwcmlvcml0eTogZGVmYXVsdFZhbHVlLnByaW9yaXR5LFxuICAgICAgc3RhdHVzOiBkZWZhdWx0VmFsdWUuc3RhdHVzLFxuICAgICAgdXNlcklkOiBudWxsLFxuICAgICAgdGVzdGltb25pYWxfaW1nOiBkZWZhdWx0VmFsdWUudGVzdGltb25pYWxfaW1nXG4gICAgfSk7XG4gICAgdGhpcy5pbWdfdmFyID0gZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2ltZy5iYXNlcGF0aCArIGRlZmF1bHRWYWx1ZS50ZXN0aW1vbmlhbF9pbWcuaW1hZ2U7XG4gICAgdGhpcy5pbWFnZV9uYW1lID0gZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2ltZy5uYW1lO1xuICAgIHRoaXMuaW1hZ2VfdHlwZSA9IGRlZmF1bHRWYWx1ZS50ZXN0aW1vbmlhbF9pbWcudHlwZVxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1PREFMIGZ1bmN0aW9ucz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBvcGVuRGlhbG9nKHg6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihNb2RhbCwge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB7IG1zZzogeCB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgfSk7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIGlucHV0Qmx1cih2YWw6IGFueSkge1xuICAgIHRoaXMudGVzdGltb25pYWxGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUNsZWFyIE1BVCB0YWc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjbGVhcl9pbWFnZSgpIHtcbiAgICB0aGlzLmZsYWcgPSBmYWxzZTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgQ09NUE9ORU5UPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdtb2RhbC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWwge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNb2RhbD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7IH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiJdfQ==