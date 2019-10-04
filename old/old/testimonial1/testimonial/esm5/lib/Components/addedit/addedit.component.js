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
var AddeditComponent = /** @class */ (function () {
    // ==================================================================================================
    function AddeditComponent(formBuilder, testiService, router, dialog) {
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
    AddeditComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    Object.defineProperty(AddeditComponent.prototype, "config", {
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
    Object.defineProperty(AddeditComponent.prototype, "imageUpload", {
        set: /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.imageConfigData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    // =====================================Form Validation/generation===================================
    // =====================================Form Validation/generation===================================
    /**
     * @return {?}
     */
    AddeditComponent.prototype.generateForm = 
    // =====================================Form Validation/generation===================================
    /**
     * @return {?}
     */
    function () {
        this.testimonialForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)]],
            testimonial: ['', [Validators.required]],
            priority: ['', Validators.required],
            status: [true,],
            testimonial_img: ['',],
            userId: [this.configData.userData.id, null]
        });
    };
    // =================================================================================================
    // ==========================================SUBMIT=================================================
    // =================================================================================================
    // ==========================================SUBMIT=================================================
    /**
     * @return {?}
     */
    AddeditComponent.prototype.onSubmit = 
    // =================================================================================================
    // ==========================================SUBMIT=================================================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
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
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.testimonialForm.value, this.configData.condition)
            };
            this.testiService.addData(this.configData.endpoint, postData).subscribe((/**
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
    // =================================================================================================
    // ================================================Default value======================================
    // =================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddeditComponent.prototype.setDefaultValue = 
    // =================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
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
    };
    // ==================================================================================================
    // =========================================MODAL functions==========================================
    // ==================================================================================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    AddeditComponent.prototype.openDialog = 
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
    // =====================================================================================================
    // =====================================================================================================
    /**
     * @param {?} val
     * @return {?}
     */
    AddeditComponent.prototype.inputBlur = 
    // =====================================================================================================
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.testimonialForm.controls[val].markAsUntouched();
    };
    // ==========================================Clear MAT tag===================================
    // ==========================================Clear MAT tag===================================
    /**
     * @return {?}
     */
    AddeditComponent.prototype.clear_image = 
    // ==========================================Clear MAT tag===================================
    /**
     * @return {?}
     */
    function () {
        this.flag = false;
    };
    AddeditComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-addedit',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n\n      <!-- ---------------------------------FORM BEGINS--------------------------- -->\n      <form [formGroup]=\"testimonialForm\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n\n\n\n        <!-- -----------------------------------customer username---------------------------- -->\n        <mat-form-field>\n          <mat-label>Customer/User Name:</mat-label>\n          <input matInput type=\"text\" formControlName=\"name\" (blur)=\"inputBlur('name')\">\n          <mat-error *ngIf=\"testimonialForm.controls['name']?.touched || testimonialForm.controls['name'].errors \n          && testimonialForm.controls['name'].errors.required\">Name is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n\n        <!-- ----------------------------------------customer email-------------------------- -->\n        <mat-form-field>\n          <mat-label>Customer/User Email:</mat-label>\n          <input matInput type=\"email\" formControlName=\"email\" (blur)=\"inputBlur('email')\">\n          <mat-error *ngIf=\"testimonialForm.controls['email']?.touched || testimonialForm.controls['email'].errors \n          && testimonialForm.controls['email'].errors.required\">Email is required.</mat-error>\n          <mat-error\n            *ngIf=\"!testimonialForm.controls['email'].valid && !testimonialForm.controls['email'].errors.required\">Email\n            is not valid</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n        <!-- ----------------------------------testimonial----------------------------------- -->\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"testimonial\"\n          (blur)=\"inputBlur('testimonial')\"></ckeditor>\n        <mat-error *ngIf=\"testimonialForm.controls['testimonial']?.touched || testimonialForm.controls['testimonial']?.touched && testimonialForm.controls['testimonial'].errors \n          && testimonialForm.controls['testimonial'].errors.required\">Please write a testimonial.</mat-error>\n        <br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n\n        <!-- ------------------------------------------priority------------------------------ -->\n        <mat-form-field>\n          <mat-label>Priority:</mat-label>\n          <input matInput type=\"number\" formControlName=\"priority\" (blur)=\"inputBlur('priority')\">\n          <mat-error *ngIf=\"testimonialForm.controls['priority']?.touched || testimonialForm.controls['priority'].errors \n          && testimonialForm.controls['priority'].errors.required\">Priority is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------------------------- -->\n\n\n\n\n\n\n        <!-- ----------------------------------------status---------------------------------- -->\n        <mat-label>Status:</mat-label><br>\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Active</mat-checkbox><br>\n        <!-- -------------------------------------------------------------------------------  -->\n\n\n        <!-- ---------------------------------------------Image Uploader--------------------- -->\n        <h1>Testimonial Image:</h1>\n        <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n        <mat-error *ngIf=\"ErrCode==true\">Please add just one testimonial image.</mat-error>\n        <!-- -------------------------------------------------------------------------------- -->\n\n        <!-- CARD VIEW  -->\n        <mat-card-content class=\"files-view\" *ngIf=\"flag==true\">\n          <mat-card class=\"example-card\">\n            <img mat-card-image [attr.src]=\"img_var\">\n            <mat-card-title>{{ image_name }}</mat-card-title>\n            <mat-card-subtitle>{{ image_type }}</mat-card-subtitle>\n            <span class=\"closecard\" (click)=\"clear_image()\"><i class=\"material-icons\">clear</i></span>\n          </mat-card>\n        </mat-card-content>\n        <!-- ---------  -->\n\n\n\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddeditComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: TestimonialService },
        { type: Router },
        { type: MatDialog }
    ]; };
    AddeditComponent.propDecorators = {
        config: [{ type: Input }],
        imageUpload: [{ type: Input }]
    };
    return AddeditComponent;
}());
export { AddeditComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90ZXN0aW1vbmlhbC8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL2FkZGVkaXQvYWRkZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEtBQUssYUFBYSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFlLE1BQU0sZ0JBQWdCLENBQUE7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBQ3BGLGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFJZDtJQWlDRSxxR0FBcUc7SUFHckcsMEJBQW9CLFdBQXdCLEVBQVUsWUFBZ0MsRUFDNUUsTUFBYyxFQUFTLE1BQWlCO1FBRDlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQzVFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFXOzs7O1FBNUIzQyxXQUFNLEdBQUcsYUFBYSxDQUFDLENBQUUsY0FBYzs7UUFDOUMsaUJBQVksR0FBRztZQUNiLFdBQVcsRUFBRSxzQkFBc0I7U0FDcEMsQ0FBQztRQUNLLFVBQUssR0FBRztZQUNiLFVBQVUsRUFBRSxFQUFFO1NBQ2YsQ0FBQzs7Ozs7UUFLRixlQUFVLEdBQUcsUUFBUSxDQUFDO1FBRWYsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUUvQixtQkFBYyxHQUFXLHdCQUF3QixDQUFDO1FBR2xELFlBQU8sR0FB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ZCxtQ0FBYTs7SUFDYix1Q0FBaUI7O0lBQ2pCLHNDQUFnQjs7SUFDaEIsc0NBQWdCOzs7OztJQUlKLHVDQUFnQzs7Ozs7SUFBRSx3Q0FBd0M7Ozs7O0lBQ3BGLGtDQUFzQjs7SUFBRSxrQ0FBd0I7OztBQXNLcEQ7SUFNRSxlQUNTLFNBQThCLEVBQ0wsSUFBZ0I7UUFEekMsY0FBUyxHQUFULFNBQVMsQ0FBcUI7UUFDTCxTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQzs7OztJQUV2RCx5QkFBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsNkdBQXlCO2lCQUMxQjs7OztnQkFwTm1CLFlBQVk7Z0RBeU4zQixNQUFNLFNBQUMsZUFBZTs7SUFNM0IsWUFBQztDQUFBLEFBZEQsSUFjQztTQVZZLEtBQUs7OztJQUdkLDBCQUFxQzs7SUFDckMscUJBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIENsYXNzaWNFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQgeyBUZXN0aW1vbmlhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi90ZXN0aW1vbmlhbC5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIG1zZzogc3RyaW5nO1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGRlZGl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZGVkaXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGRlZGl0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRlZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIC8qKmNrZWRpdG9yIHN0YXJ0IGhlcmUqL1xuICBwdWJsaWMgRWRpdG9yID0gQ2xhc3NpY0VkaXRvcjsgIC8vZm9yIGNrZWRpdG9yXG4gIGVkaXRvckNvbmZpZyA9IHtcbiAgICBwbGFjZWhvbGRlcjogJ1dyaXRlIHRlc3RpbW9uaWFsLi4uJyxcbiAgfTtcbiAgcHVibGljIG1vZGVsID0ge1xuICAgIGVkaXRvckRhdGE6ICcnXG4gIH07XG4gIC8qKmNrZWRpdG9yIGVuZCBoZXJlKi9cblxuXG4gIC8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RGVjbGFyYXRpb24gU2VjdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGJ1dHRvblRleHQgPSBcIlNVQk1JVFwiO1xuICB0ZXN0aW1vbmlhbEZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIGxvYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBjb25maWdEYXRhO1xuICBzdWNjZXNzTWVzc2FnZTogc3RyaW5nID0gXCJTdWJtaXR0ZWQgU3VjY2Vzc2Z1bGx5XCI7XG4gIGRpYWxvZ1JlZjogYW55O1xuICBpbWFnZUNvbmZpZ0RhdGE6YW55O1xuICBFcnJDb2RlOmJvb2xlYW4gPSBmYWxzZTtcbiAgZmxhZzogYm9vbGVhbjtcbiAgaW1nX3ZhcjogYW55O1xuICBoZWFkZXJfbmFtZTogYW55O1xuICBpbWFnZV9uYW1lOiBhbnk7XG4gIGltYWdlX3R5cGU6IGFueTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHRlc3RpU2VydmljZTogVGVzdGltb25pYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY2hlY2tpbmcgdGhlIGNhc2VzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxuICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xuICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgICAgICAgdGhpcy5mbGFnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGVhZGVyX25hbWUgPSBcIkFERFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlVQREFURVwiO1xuICAgICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gXCJPbmUgcm93IHVwZGF0ZWRcIjtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWUodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhKTtcbiAgICAgICAgdGhpcy5oZWFkZXJfbmFtZSA9IFwiRURJVFwiO1xuICAgICAgICB0aGlzLmZsYWcgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpbWFnZVVwbG9hZChnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuaW1hZ2VDb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUZvcm0gVmFsaWRhdGlvbi9nZW5lcmF0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZ2VuZXJhdGVGb3JtKCkge1xuICAgIHRoaXMudGVzdGltb25pYWxGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBuYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC9cbiAgICAgICldXSxcbiAgICAgIHRlc3RpbW9uaWFsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBwcmlvcml0eTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHN0YXR1czogW3RydWUsXSxcbiAgICAgIHRlc3RpbW9uaWFsX2ltZyA6IFsnJyxdLFxuICAgICAgdXNlcklkOiBbdGhpcy5jb25maWdEYXRhLnVzZXJEYXRhLmlkLCBudWxsXVxuICAgIH0pXG4gICAgXG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1TVUJNSVQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICBvblN1Ym1pdCgpIHtcbiAgICAvLyBUZXN0aW1vbmlhbCBGaWxlIFVwbG9hZCBXb3JrcyBcbiAgICBpZiAodGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXMpIHtcbiAgICAgICAgICAgIFxuICAgICAgaWYgKHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzLmxlbmd0aCA+IDEpIHsgdGhpcy5FcnJDb2RlID0gdHJ1ZTsgcmV0dXJuOyB9XG4gICAgICB0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZS50ZXN0aW1vbmlhbF9pbWcgPVxuICAgICAgICB7XG4gICAgICAgICAgXCJiYXNlcGF0aFwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1swXS51cGxvYWQuZGF0YS5iYXNlcGF0aCArICcvJyArIHRoaXMuaW1hZ2VDb25maWdEYXRhLnBhdGggKyAnLycsXG4gICAgICAgICAgXCJpbWFnZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1swXS51cGxvYWQuZGF0YS5kYXRhLmZpbGVzZXJ2ZXJuYW1lLFxuICAgICAgICAgIFwibmFtZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1swXS5uYW1lLFxuICAgICAgICAgIFwidHlwZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1swXS50eXBlXG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGVzdGltb25pYWxGb3JtLnZhbHVlLnRlc3RpbW9uaWFsX2ltZyA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgIHRoaXMudGVzdGltb25pYWxGb3JtLmNvbnRyb2xzWyd0ZXN0aW1vbmlhbCddLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB0aGlzLmxvYWRlciA9IHRydWU7XG4gICAgLyogc3RvcCBoZXJlIGlmIGZvcm0gaXMgaW52YWxpZCAqL1xuICAgIGlmICh0aGlzLnRlc3RpbW9uaWFsRm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnRlc3RpbW9uaWFsRm9ybS52YWx1ZS5zdGF0dXMpIHtcbiAgICAgICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIxXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIwXCIpOztcbiAgICAgIH1cblxuICAgICAgLyogc3RhcnQgcHJvY2VzcyB0byBzdWJtaXRlZCBkYXRhICovXG4gICAgICBsZXQgcG9zdERhdGE6IGFueSA9IHtcbiAgICAgICAgc291cmNlOiB0aGlzLmNvbmZpZ0RhdGEuc291cmNlLFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHRoaXMudGVzdGltb25pYWxGb3JtLnZhbHVlLCB0aGlzLmNvbmZpZ0RhdGEuY29uZGl0aW9uKVxuICAgICAgfTtcbiAgICAgIHRoaXMudGVzdGlTZXJ2aWNlLmFkZERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50LCBwb3N0RGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5zdWNjZXNzTWVzc2FnZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1EZWZhdWx0IHZhbHVlPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgc2V0RGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZSkge1xuICAgIHRoaXMudGVzdGltb25pYWxGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgbmFtZTogZGVmYXVsdFZhbHVlLm5hbWUsXG4gICAgICBlbWFpbDogZGVmYXVsdFZhbHVlLmVtYWlsLFxuICAgICAgdGVzdGltb25pYWw6IGRlZmF1bHRWYWx1ZS50ZXN0aW1vbmlhbCxcbiAgICAgIHByaW9yaXR5OiBkZWZhdWx0VmFsdWUucHJpb3JpdHksXG4gICAgICBzdGF0dXM6IGRlZmF1bHRWYWx1ZS5zdGF0dXMsXG4gICAgICB1c2VySWQ6IG51bGwsXG4gICAgICB0ZXN0aW1vbmlhbF9pbWc6IGRlZmF1bHRWYWx1ZS50ZXN0aW1vbmlhbF9pbWdcbiAgICB9KTtcbiAgICB0aGlzLmltZ192YXIgPSBkZWZhdWx0VmFsdWUudGVzdGltb25pYWxfaW1nLmJhc2VwYXRoICsgZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2ltZy5pbWFnZTtcbiAgICB0aGlzLmltYWdlX25hbWUgPSBkZWZhdWx0VmFsdWUudGVzdGltb25pYWxfaW1nLm5hbWU7XG4gICAgdGhpcy5pbWFnZV90eXBlID0gZGVmYXVsdFZhbHVlLnRlc3RpbW9uaWFsX2ltZy50eXBlXG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgZnVuY3Rpb25zPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIG9wZW5EaWFsb2coeDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsLCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICAgIGRhdGE6IHsgbXNnOiB4IH1cbiAgICB9KTtcblxuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICB9KTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgaW5wdXRCbHVyKHZhbDogYW55KSB7XG4gICAgdGhpcy50ZXN0aW1vbmlhbEZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Q2xlYXIgTUFUIHRhZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNsZWFyX2ltYWdlKCkge1xuICAgIHRoaXMuZmxhZyA9IGZhbHNlO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NT0RBTCBDT01QT05FTlQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJ21vZGFsLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHsgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIl19