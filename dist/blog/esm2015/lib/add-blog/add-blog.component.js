/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.message;
}
export class AddBlogComponent {
    /**
     * @param {?} fb
     * @param {?} activeroute
     * @param {?} apiservice
     * @param {?} _http
     * @param {?} router
     * @param {?} dialog
     */
    constructor(fb, activeroute, apiservice, _http, router, dialog) {
        /**catch the parameter id***/
        this.fb = fb;
        this.activeroute = activeroute;
        this.apiservice = apiservice;
        this._http = _http;
        this.router = router;
        this.dialog = dialog;
        /**
         * ckeditor start here
         */
        this.Editor = ClassicEditor; //for ckeditor
        //for ckeditor
        this.editorConfig = {
            placeholder: 'Type the content here!',
        };
        this.model = {
            editorData: ''
        };
        this.blogarray = [];
        this.isSubmitted = false;
        this.editarray = [];
        this.statusarray = [];
        this.allData = [];
        /**
         * blog varibles declaration end here*
         */
        this.headerText = 'Add Blogs';
        this.buttonText = 'Submit';
        this.messageText = 'Successfully Submitted';
        /*catch parameter id end here**/
        /**Formgroup create start here**/
        this.blogAddEditForm = this.fb.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            priority: ['', Validators.required],
            status: [true,],
            parent_id: [0, Validators.required]
        });
        /**Formgroup create end here**/
    }
    /**
     * @param {?} listval
     * @return {?}
     */
    set listRoute(listval) {
        this.listUrl = (listval) || '<no name set>';
        this.listUrl = listval;
    }
    /**
     * @param {?} serverUrlval
     * @return {?}
     */
    set serverUrl(serverUrlval) {
        this.serverUrlData = (serverUrlval) || '<no name set>';
        this.serverUrlData = serverUrlval;
    }
    /**
     * @param {?} endpointUrlval
     * @return {?}
     */
    set getDataEndpoint(endpointUrlval) {
        this.getDataEndpointData = (endpointUrlval) || '<no name set>';
        this.getDataEndpointData = endpointUrlval;
    }
    /**
     * @param {?} endpointUrlval
     * @return {?}
     */
    set addEndpoint(endpointUrlval) {
        this.addEndpointData = (endpointUrlval) || '<no name set>';
        this.addEndpointData = endpointUrlval;
    }
    /**
     * @param {?} allData
     * @return {?}
     */
    set singleData(allData) {
        this.allData = allData;
        if (this.activeroute.snapshot.params.id) {
            this.params_id = this.activeroute.snapshot.params.id;
            this.headerText = "Edit Blogs";
            this.buttonText = "Update";
            this.blogAddEditForm.controls['title'].patchValue(allData[0].title);
            this.blogAddEditForm.controls['priority'].patchValue(allData[0].priority);
            this.blogAddEditForm.controls['status'].patchValue(allData[0].status);
            this.blogAddEditForm.controls['description'].patchValue(allData[0].description);
            this.model.editorData = allData[0].description;
            this.blogAddEditForm.controls['parent_id'].patchValue(allData[0].parent_id);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /**Observable start here**/
        this.apiservice.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiservice.setServerUrl(this.serverUrlData);
        }), 50);
        this.apiservice.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiservice.setgetdataEndpoint(this.getDataEndpointData);
        }), 50);
        this.apiservice.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiservice.setaddEndpoint(this.addEndpointData);
        }), 50);
        /**Observable end here**/
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.getBlogData();
        }), 100);
    }
    /*modal start here*/
    /**
     * @param {?} x
     * @return {?}
     */
    openDialog(x) {
        this.dialogRef = this.dialog.open(Dialogtest, {
            width: '250px',
            data: { message: x }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
        }));
    }
    /**modal end here */
    /**
     * validation untouch purpose *
     * @param {?} form
     * @param {?} val
     * @return {?}
     */
    inputUntouch(form, val) {
        form.controls[val].markAsUntouched();
    }
    /*validation untouch purpose*/
    /**
     * getting all blogs data start here *
     * @return {?}
     */
    getBlogData() {
        /** @type {?} */
        let data = {
            "source": "blog_category_view"
        };
        this.apiservice.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            /** @type {?} */
            let result = response;
            this.blogarray = result.res;
        }));
    }
    // /**getting all blogs data end here**/
    /**
     * add & update* blogs submitting form start here*
     * @return {?}
     */
    blogAddEditFormSubmit() {
        this.blogAddEditForm.patchValue({
            description: this.model.editorData
        });
        this.isSubmitted = true;
        /** @type {?} */
        let x;
        for (x in this.blogAddEditForm.controls) {
            this.blogAddEditForm.controls[x].markAsTouched();
        }
        if (this.blogAddEditForm.valid) {
            if (this.blogAddEditForm.value.status)
                this.blogAddEditForm.value.status = parseInt("1");
            else
                this.blogAddEditForm.value.status = parseInt("0");
            /** @type {?} */
            var data;
            if (this.activeroute.snapshot.params.id != null) { //update part
                this.messageText = "One row updated!!!";
                data = {
                    "source": "blog_category",
                    "data": {
                        "id": this.params_id,
                        "parent_id": this.blogAddEditForm.value.parent_id,
                        'title': this.blogAddEditForm.value.title,
                        'priority': this.blogAddEditForm.value.priority,
                        'status': this.blogAddEditForm.value.status,
                        'description': this.blogAddEditForm.value.description
                    },
                    "sourceobj": ["parent_id"]
                };
            }
            else {
                data = {
                    //add part
                    "source": "blog_category",
                    "data": {
                        "parent_id": this.blogAddEditForm.value.parent_id,
                        'title': this.blogAddEditForm.value.title,
                        'priority': this.blogAddEditForm.value.priority,
                        'status': this.blogAddEditForm.value.status,
                        'description': this.blogAddEditForm.value.description
                    },
                    "sourceobj": ["parent_id"]
                };
            }
            this.apiservice.addData(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            response => {
                /** @type {?} */
                let result;
                result = response;
                this.statusarray = result.status;
                if (result.status == "success")
                    this.openDialog(this.messageText);
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.dialogRef.close();
                }), 2000);
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.router.navigateByUrl('/' + this.listUrl);
                }), 3000);
            }));
        }
    }
}
AddBlogComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-add-blog',
                template: "<!-- Form Header -->\n<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{headerText}}</h2>\n  </mat-toolbar>\n\n  <!-- Blog Add or Edit Form Start Here -->\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form class=\"example-form\" autocomplete=\"off\" name=\"blogAddEditForm\" (ngSubmit)=\"blogAddEditFormSubmit()\"\n        [formGroup]=\"blogAddEditForm\">\n\n        <mat-form-field >\n          <input matInput type=\"text\" placeholder=\"Title\" [formControl]=\"blogAddEditForm.controls['title']\"\n            (blur)=\"inputUntouch(blogAddEditForm,'title')\">\n          <mat-error\n            *ngIf=\"blogAddEditForm.controls['title'].touched && !blogAddEditForm.controls['title'].valid && blogAddEditForm.controls['title'].errors.required\">\n            Category Name field can not be blank</mat-error>\n        </mat-form-field>\n  \n         <!-- -------------------------------priority--------------------------- -->\n         <mat-form-field>\n         <input matInput type=\"number\" placeholder=\"Priority\" [formControl]=\"blogAddEditForm.controls['priority']\"  (blur)=\"inputUntouch(blogAddEditForm,'priority')\">\n         <!-- ------------------------------------------------------------------ -->\n         <mat-error *ngIf=\"blogAddEditForm.controls['priority'].touched && !blogAddEditForm.controls['priority'].valid && blogAddEditForm.controls['priority'].errors.required\">\n          Priority field can not be blank</mat-error> <br>\n        </mat-form-field>\n          <!-- -------------------------------status--------------------------- -->          \n          <mat-checkbox [formControl]=\"blogAddEditForm.controls['status']\">Active</mat-checkbox><br>\n          <!-- ---------------------------------------------------------------- -->\n\n        <!-- ckeditor using start here -->\n        <mat-label>Description</mat-label>\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" [(ngModel)]=\"model.editorData\"\n          [ngModelOptions]=\"{standalone: true}\"></ckeditor>\n        <mat-error\n          *ngIf=\"blogAddEditForm.controls['description'].touched && !blogAddEditForm.controls['description'].valid && blogAddEditForm.controls['description'].errors.required\">\n          Description field can not be blank</mat-error>\n        <!-- ckeditor end here -->\n        <mat-form-field>\n\n          <mat-label>Parent Category</mat-label>\n          <mat-select formControlName=\"parent_id\">\n            <mat-option [value]=0>\n              Select a category\n            </mat-option>\n            <mat-option *ngFor=\" let f of blogarray\" [value]=\"f._id\">\n              {{f.title}}\n            </mat-option>\n          </mat-select>\n\n          <mat-error\n          *ngIf=\"blogAddEditForm.controls['parent_id'].touched && !blogAddEditForm.controls['parent_id'].valid && blogAddEditForm.controls['parent_id'].errors.required\">\n          Category cannot be blank</mat-error>\n        </mat-form-field>\n\n      \n\n\n\n        <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"submit\">{{buttonText}}</button>\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>\n<!-- Blog Add or Edit Form End Here -->",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}"]
            }] }
];
/** @nocollapse */
AddBlogComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ActivatedRoute },
    { type: ApiService },
    { type: HttpClient },
    { type: Router },
    { type: MatDialog }
];
AddBlogComponent.propDecorators = {
    listRoute: [{ type: Input }],
    serverUrl: [{ type: Input }],
    getDataEndpoint: [{ type: Input }],
    addEndpoint: [{ type: Input }],
    singleData: [{ type: Input }]
};
if (false) {
    /**
     * ckeditor start here
     * @type {?}
     */
    AddBlogComponent.prototype.Editor;
    /** @type {?} */
    AddBlogComponent.prototype.editorConfig;
    /** @type {?} */
    AddBlogComponent.prototype.model;
    /**
     * blog varibles declaration start here*
     * @type {?}
     */
    AddBlogComponent.prototype.dialogRef;
    /** @type {?} */
    AddBlogComponent.prototype.getDataEndpointData;
    /** @type {?} */
    AddBlogComponent.prototype.addEndpointData;
    /** @type {?} */
    AddBlogComponent.prototype.serverUrlData;
    /** @type {?} */
    AddBlogComponent.prototype.listUrl;
    /** @type {?} */
    AddBlogComponent.prototype.blogarray;
    /** @type {?} */
    AddBlogComponent.prototype.isSubmitted;
    /** @type {?} */
    AddBlogComponent.prototype.blogAddEditForm;
    /** @type {?} */
    AddBlogComponent.prototype.params_id;
    /** @type {?} */
    AddBlogComponent.prototype.editarray;
    /** @type {?} */
    AddBlogComponent.prototype.statusarray;
    /** @type {?} */
    AddBlogComponent.prototype.allData;
    /**
     * blog varibles declaration end here*
     * @type {?}
     */
    AddBlogComponent.prototype.headerText;
    /** @type {?} */
    AddBlogComponent.prototype.buttonText;
    /** @type {?} */
    AddBlogComponent.prototype.messageText;
    /** @type {?} */
    AddBlogComponent.prototype.fb;
    /** @type {?} */
    AddBlogComponent.prototype.activeroute;
    /** @type {?} */
    AddBlogComponent.prototype.apiservice;
    /** @type {?} */
    AddBlogComponent.prototype._http;
    /** @type {?} */
    AddBlogComponent.prototype.router;
    /** @type {?} */
    AddBlogComponent.prototype.dialog;
}
export class Dialogtest {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.is_error = data.message;
    }
}
Dialogtest.decorators = [
    { type: Component, args: [{
                selector: 'dialogtest',
                template: "<div class=\"modal\">\n        <h1 mat-dialog-title>Message</h1>\n        <div mat-dialog-content>\n          \n         <p>{{ data.message }}</p>\n        </div>\n        </div>"
            }] }
];
/** @nocollapse */
Dialogtest.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    Dialogtest.prototype.is_error;
    /** @type {?} */
    Dialogtest.prototype.dialogRef;
    /** @type {?} */
    Dialogtest.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWJsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmxvZy8iLCJzb3VyY2VzIjpbImxpYi9hZGQtYmxvZy9hZGQtYmxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUEwQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0UsT0FBTyxLQUFLLGFBQWEsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUVuRSxnQ0FFQzs7O0lBREMsNkJBQWdCOztBQU9sQixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7SUF5RTNCLFlBQW1CLEVBQWUsRUFBUyxXQUEyQixFQUM3RCxVQUFzQixFQUFTLEtBQWlCLEVBQVMsTUFBYyxFQUNyRSxNQUFpQjtRQUUxQiw2QkFBNkI7UUFKWixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQzdELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNyRSxXQUFNLEdBQU4sTUFBTSxDQUFXOzs7O1FBeEVyQixXQUFNLEdBQUcsYUFBYSxDQUFDLENBQUUsY0FBYzs7UUFDOUMsaUJBQVksR0FBRztZQUNiLFdBQVcsRUFBRSx3QkFBd0I7U0FDdEMsQ0FBQztRQUNLLFVB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RixpQ0FFRTs7Ozs7SUFJRixxQ0FBc0I7O0lBQ3RCLCtDQUFnQzs7SUFDaEMsMkNBQTRCOztJQUM1Qix5Q0FBMEI7O0lBQzFCLG1DQUFvQjs7SUFDcEIscUNBQTJCOztJQUMzQix1Q0FBb0I7O0lBQ3BCLDJDQUEyQjs7SUFDM0IscUNBQXNCOztJQUN0QixxQ0FBMkI7O0lBQzNCLHVDQUE2Qjs7SUFDN0IsbUNBQXlCOzs7OztJQUV6QixzQ0FBcUM7O0lBQ3JDLHNDQUFrQzs7SUFDbEMsdUNBQW1EOztJQTZDdkMsOEJBQXNCOztJQUFFLHVDQUFrQzs7SUFDcEUsc0NBQTZCOztJQUFFLGlDQUF3Qjs7SUFBRSxrQ0FBcUI7O0lBQzVFLGtDQUF3Qjs7QUF5SjlCLE1BQU0sT0FBTyxVQUFVOzs7OztJQUdyQixZQUFtQixTQUFtQyxFQUNwQixJQUFnQjtRQUQvQixjQUFTLEdBQVQsU0FBUyxDQUEwQjtRQUNwQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUMvQixDQUFDOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDhMQUF5QjthQUMxQjs7OztZQTlPeUIsWUFBWTs0Q0FtUGpDLE1BQU0sU0FBQyxlQUFlOzs7O0lBSHpCLDhCQUFxQjs7SUFFVCwrQkFBMEM7O0lBQ3BELDBCQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiwgTWF0RGlhbG9nIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5pbXBvcnQgKiBhcyBDbGFzc2ljRWRpdG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGQtYmxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtYmxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZC1ibG9nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRCbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvKipja2VkaXRvciBzdGFydCBoZXJlKi9cbiAgcHVibGljIEVkaXRvciA9IENsYXNzaWNFZGl0b3I7ICAvL2ZvciBja2VkaXRvclxuICBlZGl0b3JDb25maWcgPSB7XG4gICAgcGxhY2Vob2xkZXI6ICdUeXBlIHRoZSBjb250ZW50IGhlcmUhJyxcbiAgfTtcbiAgcHVibGljIG1vZGVsID0ge1xuICAgIGVkaXRvckRhdGE6ICcnXG4gIH07XG4gIC8qKmNrZWRpdG9yIGVuZCBoZXJlKi9cblxuICAvKipibG9nIHZhcmlibGVzIGRlY2xhcmF0aW9uIHN0YXJ0IGhlcmUqKi9cbiAgcHVibGljIGRpYWxvZ1JlZjogYW55O1xuICBwdWJsaWMgZ2V0RGF0YUVuZHBvaW50RGF0YTogYW55O1xuICBwdWJsaWMgYWRkRW5kcG9pbnREYXRhOiBhbnk7XG4gIHB1YmxpYyBzZXJ2ZXJVcmxEYXRhOiBhbnk7XG4gIHB1YmxpYyBsaXN0VXJsOiBhbnk7XG4gIHB1YmxpYyBibG9nYXJyYXk6IGFueSA9IFtdO1xuICBpc1N1Ym1pdHRlZCA9IGZhbHNlO1xuICBibG9nQWRkRWRpdEZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIHBhcmFtc19pZDogYW55O1xuICBwdWJsaWMgZWRpdGFycmF5OiBhbnkgPSBbXTtcbiAgcHVibGljIHN0YXR1c2FycmF5OiBhbnkgPSBbXTtcbiAgcHVibGljIGFsbERhdGE6IGFueSA9IFtdO1xuICAvKipibG9nIHZhcmlibGVzIGRlY2xhcmF0aW9uIGVuZCBoZXJlKiovXG4gIHB1YmxpYyBoZWFkZXJUZXh0OiBhbnkgPSAnQWRkIEJsb2dzJztcbiAgcHVibGljIGJ1dHRvblRleHQ6IGFueSA9ICdTdWJtaXQnO1xuICBwdWJsaWMgbWVzc2FnZVRleHQ6IGFueSA9ICdTdWNjZXNzZnVsbHkgU3VibWl0dGVkJztcblxuICBASW5wdXQoKSAgICAgICAgIC8vc2V0dGluZyB0aGUgbGlzdGluZyB1cmwgZm9ybSB0aGUgYXBwbGljYXRpb25cbiAgc2V0IGxpc3RSb3V0ZShsaXN0dmFsOiBhbnkpIHtcbiAgICB0aGlzLmxpc3RVcmwgPSAobGlzdHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMubGlzdFVybCA9IGxpc3R2YWw7XG5cbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IHNlcnZlclVybChzZXJ2ZXJVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuc2VydmVyVXJsRGF0YSA9IChzZXJ2ZXJVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNlcnZlclVybERhdGEgPSBzZXJ2ZXJVcmx2YWw7XG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBnZXREYXRhRW5kcG9pbnQoZW5kcG9pbnRVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSA9IChlbmRwb2ludFVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSA9IGVuZHBvaW50VXJsdmFsO1xuXG4gIH1cbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgYWRkRW5kcG9pbnQoZW5kcG9pbnRVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gKGVuZHBvaW50VXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5hZGRFbmRwb2ludERhdGEgPSBlbmRwb2ludFVybHZhbDtcblxuICB9XG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2luZ2xlIGRhdGEgZnJvbSByZXNvbHZlIGNhbGwgICYgc2V0IHRoZSB2YWx1ZSBmb3IgZWRpdFxuICBzZXQgc2luZ2xlRGF0YShhbGxEYXRhOiBhbnkpIHtcbiAgICB0aGlzLmFsbERhdGEgPSBhbGxEYXRhO1xuICAgIGlmICh0aGlzLmFjdGl2ZXJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZCkge1xuICAgICAgdGhpcy5wYXJhbXNfaWQgPSB0aGlzLmFjdGl2ZXJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZDtcbiAgICAgIHRoaXMuaGVhZGVyVGV4dCA9IFwiRWRpdCBCbG9nc1wiO1xuICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVcGRhdGVcIjtcbiAgICAgIHRoaXMuYmxvZ0FkZEVkaXRGb3JtLmNvbnRyb2xzWyd0aXRsZSddLnBhdGNoVmFsdWUoYWxsRGF0YVswXS50aXRsZSk7XG4gICAgICB0aGlzLmJsb2dBZGRFZGl0Rm9ybS5jb250cm9sc1sncHJpb3JpdHknXS5wYXRjaFZhbHVlKGFsbERhdGFbMF0ucHJpb3JpdHkpO1xuICAgICAgdGhpcy5ibG9nQWRkRWRpdEZvcm0uY29udHJvbHNbJ3N0YXR1cyddLnBhdGNoVmFsdWUoYWxsRGF0YVswXS5zdGF0dXMpO1xuICAgICAgdGhpcy5ibG9nQWRkRWRpdEZvcm0uY29udHJvbHNbJ2Rlc2NyaXB0aW9uJ10ucGF0Y2hWYWx1ZShhbGxEYXRhWzBdLmRlc2NyaXB0aW9uKTtcbiAgICAgIHRoaXMubW9kZWwuZWRpdG9yRGF0YSA9IGFsbERhdGFbMF0uZGVzY3JpcHRpb247XG4gICAgIFxuICAgICAgdGhpcy5ibG9nQWRkRWRpdEZvcm0uY29udHJvbHNbJ3BhcmVudF9pZCddLnBhdGNoVmFsdWUoYWxsRGF0YVswXS5wYXJlbnRfaWQpO1xuICAgIH1cbiAgfVxuXG5cbiAgY29uc3RydWN0b3IocHVibGljIGZiOiBGb3JtQnVpbGRlciwgcHVibGljIGFjdGl2ZXJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgYXBpc2VydmljZTogQXBpU2VydmljZSwgcHVibGljIF9odHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgcm91dGVyOiBSb3V0ZXJcbiAgICAsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge1xuXG4gICAgLyoqY2F0Y2ggdGhlIHBhcmFtZXRlciBpZCoqKi9cblxuICAgIC8qY2F0Y2ggcGFyYW1ldGVyIGlkIGVuZCBoZXJlKiovXG5cbiAgICAvKipGb3JtZ3JvdXAgY3JlYXRlIHN0YXJ0IGhlcmUqKi9cbiAgICB0aGlzLmJsb2dBZGRFZGl0Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgdGl0bGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBkZXNjcmlwdGlvbjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHByaW9yaXR5OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgc3RhdHVzOiBbdHJ1ZSxdLFxuICAgICAgcGFyZW50X2lkOiBbMCwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cblxuICAgIH0pXG4gICAgLyoqRm9ybWdyb3VwIGNyZWF0ZSBlbmQgaGVyZSoqL1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLyoqT2JzZXJ2YWJsZSBzdGFydCBoZXJlKiovXG4gICAgdGhpcy5hcGlzZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaXNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVXJsRGF0YSk7XG4gICAgfSwgNTApO1xuICAgIHRoaXMuYXBpc2VydmljZS5jbGVhcmdldGRhdGFFbmRwb2ludCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlzZXJ2aWNlLnNldGdldGRhdGFFbmRwb2ludCh0aGlzLmdldERhdGFFbmRwb2ludERhdGEpO1xuICAgIH0sIDUwKTtcbiAgICB0aGlzLmFwaXNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlzZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuYWRkRW5kcG9pbnREYXRhKTtcbiAgICB9LCA1MCk7XG4gICAgLyoqT2JzZXJ2YWJsZSBlbmQgaGVyZSoqL1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmdldEJsb2dEYXRhKCk7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIC8qbW9kYWwgc3RhcnQgaGVyZSovXG4gIG9wZW5EaWFsb2coeDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ3Rlc3QsIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuXG4gICAgICBkYXRhOiB7IG1lc3NhZ2U6IHggfVxuICAgIH0pO1xuXG4gICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblxuICAgIH0pO1xuICB9XG4gIC8qKm1vZGFsIGVuZCBoZXJlICovXG5cbiAgLyoqdmFsaWRhdGlvbiB1bnRvdWNoIHB1cnBvc2UgKiovXG4gIGlucHV0VW50b3VjaChmb3JtOiBhbnksIHZhbDogYW55KSB7XG5cbiAgICBmb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cbiAgLyp2YWxpZGF0aW9uIHVudG91Y2ggcHVycG9zZSovXG5cbiAgLyoqIGdldHRpbmcgYWxsIGJsb2dzIGRhdGEgc3RhcnQgaGVyZSAqKi9cbiAgZ2V0QmxvZ0RhdGEoKSB7XG5cbiAgICBsZXQgZGF0YTogYW55ID0ge1xuICAgICAgXCJzb3VyY2VcIjogXCJibG9nX2NhdGVnb3J5X3ZpZXdcIlxuICAgIH1cblxuICAgIHRoaXMuYXBpc2VydmljZS5nZXREYXRhKGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG5cbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5ibG9nYXJyYXkgPSByZXN1bHQucmVzO1xuICAgIH0pXG4gIH1cbiAgLy8gLyoqZ2V0dGluZyBhbGwgYmxvZ3MgZGF0YSBlbmQgaGVyZSoqL1xuXG4gIC8qKmFkZCAmIHVwZGF0ZSogYmxvZ3Mgc3VibWl0dGluZyBmb3JtIHN0YXJ0IGhlcmUqKi9cbiAgYmxvZ0FkZEVkaXRGb3JtU3VibWl0KCkge1xuICAgIHRoaXMuYmxvZ0FkZEVkaXRGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgZGVzY3JpcHRpb246IHRoaXMubW9kZWwuZWRpdG9yRGF0YVxuICAgIH0pO1xuICAgIHRoaXMuaXNTdWJtaXR0ZWQgPSB0cnVlO1xuICAgIGxldCB4OiBhbnk7XG4gICAgZm9yICh4IGluIHRoaXMuYmxvZ0FkZEVkaXRGb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLmJsb2dBZGRFZGl0Rm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmJsb2dBZGRFZGl0Rm9ybS52YWxpZCkge1xuICAgICAgaWYgKHRoaXMuYmxvZ0FkZEVkaXRGb3JtLnZhbHVlLnN0YXR1cylcbiAgICAgICAgdGhpcy5ibG9nQWRkRWRpdEZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIxXCIpO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmJsb2dBZGRFZGl0Rm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjBcIik7XG4gICAgICB2YXIgZGF0YTogYW55O1xuICAgICAgaWYgKHRoaXMuYWN0aXZlcm91dGUuc25hcHNob3QucGFyYW1zLmlkICE9IG51bGwpIHsgICAgLy91cGRhdGUgcGFydFxuICAgICAgICB0aGlzLm1lc3NhZ2VUZXh0ID0gXCJPbmUgcm93IHVwZGF0ZWQhISFcIjtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICBcInNvdXJjZVwiOiBcImJsb2dfY2F0ZWdvcnlcIixcbiAgICAgICAgICBcImRhdGFcIjoge1xuICAgICAgICAgICAgXCJpZFwiOiB0aGlzLnBhcmFtc19pZCxcbiAgICAgICAgICAgIFwicGFyZW50X2lkXCI6IHRoaXMuYmxvZ0FkZEVkaXRGb3JtLnZhbHVlLnBhcmVudF9pZCxcbiAgICAgICAgICAgICd0aXRsZSc6IHRoaXMuYmxvZ0FkZEVkaXRGb3JtLnZhbHVlLnRpdGxlLFxuICAgICAgICAgICAgJ3ByaW9yaXR5JzogdGhpcy5ibG9nQWRkRWRpdEZvcm0udmFsdWUucHJpb3JpdHksXG4gICAgICAgICAgICAnc3RhdHVzJzogdGhpcy5ibG9nQWRkRWRpdEZvcm0udmFsdWUuc3RhdHVzLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogdGhpcy5ibG9nQWRkRWRpdEZvcm0udmFsdWUuZGVzY3JpcHRpb25cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNvdXJjZW9ialwiOiBbXCJwYXJlbnRfaWRcIl1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FkZCBwYXJ0XG4gICAgICAgICAgXCJzb3VyY2VcIjogXCJibG9nX2NhdGVnb3J5XCIsXG4gICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgIFwicGFyZW50X2lkXCI6IHRoaXMuYmxvZ0FkZEVkaXRGb3JtLnZhbHVlLnBhcmVudF9pZCxcbiAgICAgICAgICAgICd0aXRsZSc6IHRoaXMuYmxvZ0FkZEVkaXRGb3JtLnZhbHVlLnRpdGxlLFxuICAgICAgICAgICAgJ3ByaW9yaXR5JzogdGhpcy5ibG9nQWRkRWRpdEZvcm0udmFsdWUucHJpb3JpdHksXG4gICAgICAgICAgICAnc3RhdHVzJzogdGhpcy5ibG9nQWRkRWRpdEZvcm0udmFsdWUuc3RhdHVzLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogdGhpcy5ibG9nQWRkRWRpdEZvcm0udmFsdWUuZGVzY3JpcHRpb25cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic291cmNlb2JqXCI6IFtcInBhcmVudF9pZFwiXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdGhpcy5hcGlzZXJ2aWNlLmFkZERhdGEoZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgICAgdGhpcy5zdGF0dXNhcnJheSA9IHJlc3VsdC5zdGF0dXM7XG5cblxuXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwic3VjY2Vzc1wiKVxuICAgICAgICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLm1lc3NhZ2VUZXh0KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLmxpc3RVcmwpO1xuICAgICAgICB9LCAzMDAwKTtcblxuXG5cbiAgICAgIH0pO1xuXG5cbiAgICB9XG5cbiAgfVxuICAvKiphZGQgJiB1cGRhdGUqIGJsb2dzIHN1Ym1pdHRpbmcgZm9ybSBlbmQgaGVyZSoqL1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZ3Rlc3QnLFxuICB0ZW1wbGF0ZVVybDogJ21vZGFsLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2d0ZXN0IHtcbiAgcHVibGljIGlzX2Vycm9yOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ3Rlc3Q+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkge1xuICAgIHRoaXMuaXNfZXJyb3IgPSBkYXRhLm1lc3NhZ2U7XG4gIH1cbn1cbiJdfQ==