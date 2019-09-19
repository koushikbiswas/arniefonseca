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
var AddBlogComponent = /** @class */ (function () {
    function AddBlogComponent(fb, activeroute, apiservice, _http, router, dialog) {
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
    Object.defineProperty(AddBlogComponent.prototype, "listRoute", {
        set: /**
         * @param {?} listval
         * @return {?}
         */
        function (listval) {
            this.listUrl = (listval) || '<no name set>';
            this.listUrl = listval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddBlogComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlval
         * @return {?}
         */
        function (serverUrlval) {
            this.serverUrlData = (serverUrlval) || '<no name set>';
            this.serverUrlData = serverUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddBlogComponent.prototype, "getDataEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.getDataEndpointData = (endpointUrlval) || '<no name set>';
            this.getDataEndpointData = endpointUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddBlogComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.addEndpointData = (endpointUrlval) || '<no name set>';
            this.addEndpointData = endpointUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddBlogComponent.prototype, "singleData", {
        set: /**
         * @param {?} allData
         * @return {?}
         */
        function (allData) {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AddBlogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /**Observable start here**/
        this.apiservice.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiservice.setServerUrl(_this.serverUrlData);
        }), 50);
        this.apiservice.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiservice.setgetdataEndpoint(_this.getDataEndpointData);
        }), 50);
        this.apiservice.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiservice.setaddEndpoint(_this.addEndpointData);
        }), 50);
        /**Observable end here**/
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.getBlogData();
        }), 100);
    };
    /*modal start here*/
    /*modal start here*/
    /**
     * @param {?} x
     * @return {?}
     */
    AddBlogComponent.prototype.openDialog = /*modal start here*/
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Dialogtest, {
            width: '250px',
            data: { message: x }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
        }));
    };
    /**modal end here */
    /**validation untouch purpose **/
    /**modal end here */
    /**
     * validation untouch purpose *
     * @param {?} form
     * @param {?} val
     * @return {?}
     */
    AddBlogComponent.prototype.inputUntouch = /**modal end here */
    /**
     * validation untouch purpose *
     * @param {?} form
     * @param {?} val
     * @return {?}
     */
    function (form, val) {
        form.controls[val].markAsUntouched();
    };
    /*validation untouch purpose*/
    /** getting all blogs data start here **/
    /*validation untouch purpose*/
    /**
     * getting all blogs data start here *
     * @return {?}
     */
    AddBlogComponent.prototype.getBlogData = /*validation untouch purpose*/
    /**
     * getting all blogs data start here *
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = {
            "source": "blog_category_view"
        };
        this.apiservice.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result = response;
            _this.blogarray = result.res;
        }));
    };
    // /**getting all blogs data end here**/
    /**add & update* blogs submitting form start here**/
    // /**getting all blogs data end here**/
    /**
     * add & update* blogs submitting form start here*
     * @return {?}
     */
    AddBlogComponent.prototype.blogAddEditFormSubmit = 
    // /**getting all blogs data end here**/
    /**
     * add & update* blogs submitting form start here*
     * @return {?}
     */
    function () {
        var _this = this;
        this.blogAddEditForm.patchValue({
            description: this.model.editorData
        });
        this.isSubmitted = true;
        /** @type {?} */
        var x;
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
            function (response) {
                /** @type {?} */
                var result;
                result = response;
                _this.statusarray = result.status;
                if (result.status == "success")
                    _this.openDialog(_this.messageText);
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.dialogRef.close();
                }), 2000);
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.router.navigateByUrl('/' + _this.listUrl);
                }), 3000);
            }));
        }
    };
    AddBlogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-blog',
                    template: "<!-- Form Header -->\n<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{headerText}}</h2>\n  </mat-toolbar>\n\n  <!-- Blog Add or Edit Form Start Here -->\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form class=\"example-form\" autocomplete=\"off\" name=\"blogAddEditForm\" (ngSubmit)=\"blogAddEditFormSubmit()\"\n        [formGroup]=\"blogAddEditForm\">\n\n        <mat-form-field >\n          <input matInput type=\"text\" placeholder=\"Title\" [formControl]=\"blogAddEditForm.controls['title']\"\n            (blur)=\"inputUntouch(blogAddEditForm,'title')\">\n          <mat-error\n            *ngIf=\"blogAddEditForm.controls['title'].touched && !blogAddEditForm.controls['title'].valid && blogAddEditForm.controls['title'].errors.required\">\n            Category Name field can not be blank</mat-error>\n        </mat-form-field>\n  \n         <!-- -------------------------------priority--------------------------- -->\n         <mat-form-field>\n         <input matInput type=\"number\" placeholder=\"Priority\" [formControl]=\"blogAddEditForm.controls['priority']\"  (blur)=\"inputUntouch(blogAddEditForm,'priority')\">\n         <!-- ------------------------------------------------------------------ -->\n         <mat-error *ngIf=\"blogAddEditForm.controls['priority'].touched && !blogAddEditForm.controls['priority'].valid && blogAddEditForm.controls['priority'].errors.required\">\n          Priority field can not be blank</mat-error> <br>\n        </mat-form-field>\n          <!-- -------------------------------status--------------------------- -->          \n          <mat-checkbox [formControl]=\"blogAddEditForm.controls['status']\">Active</mat-checkbox><br>\n          <!-- ---------------------------------------------------------------- -->\n\n        <!-- ckeditor using start here -->\n        <mat-label>Description</mat-label>\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" [(ngModel)]=\"model.editorData\"\n          [ngModelOptions]=\"{standalone: true}\"></ckeditor>\n        <mat-error\n          *ngIf=\"blogAddEditForm.controls['description'].touched && !blogAddEditForm.controls['description'].valid && blogAddEditForm.controls['description'].errors.required\">\n          Description field can not be blank</mat-error>\n        <!-- ckeditor end here -->\n        <mat-form-field>\n\n          <mat-label>Parent Category</mat-label>\n          <mat-select formControlName=\"parent_id\">\n            <mat-option [value]=0>\n              Select a category\n            </mat-option>\n            <mat-option *ngFor=\" let f of blogarray\" [value]=\"f._id\">\n              {{f.title}}\n            </mat-option>\n          </mat-select>\n\n          <mat-error\n          *ngIf=\"blogAddEditForm.controls['parent_id'].touched && !blogAddEditForm.controls['parent_id'].valid && blogAddEditForm.controls['parent_id'].errors.required\">\n          Category cannot be blank</mat-error>\n        </mat-form-field>\n\n      \n\n\n\n        <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"submit\">{{buttonText}}</button>\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>\n<!-- Blog Add or Edit Form End Here -->",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}"]
                }] }
    ];
    /** @nocollapse */
    AddBlogComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ActivatedRoute },
        { type: ApiService },
        { type: HttpClient },
        { type: Router },
        { type: MatDialog }
    ]; };
    AddBlogComponent.propDecorators = {
        listRoute: [{ type: Input }],
        serverUrl: [{ type: Input }],
        getDataEndpoint: [{ type: Input }],
        addEndpoint: [{ type: Input }],
        singleData: [{ type: Input }]
    };
    return AddBlogComponent;
}());
export { AddBlogComponent };
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
var Dialogtest = /** @class */ (function () {
    function Dialogtest(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.is_error = data.message;
    }
    Dialogtest.decorators = [
        { type: Component, args: [{
                    selector: 'dialogtest',
                    template: "<div class=\"modal\">\n        <h1 mat-dialog-title>Message</h1>\n        <div mat-dialog-content>\n          \n         <p>{{ data.message }}</p>\n        </div>\n        </div>"
                }] }
    ];
    /** @nocollapse */
    Dialogtest.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return Dialogtest;
}());
export { Dialogtest };
if (false) {
    /** @type {?} */
    Dialogtest.prototype.is_error;
    /** @type {?} */
    Dialogtest.prototype.dialogRef;
    /** @type {?} */
    Dialogtest.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWJsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmxvZy8iLCJzb3VyY2VzIjpbImxpYi9hZGQtYmxvZy9hZGQtYmxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUEwQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0UsT0FBTyxLQUFLLGFBQWEsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUVuRSxnQ0FFQzs7O0lBREMsNkJBQWdCOztBQUVsQjtJQThFRSwwQkFBbUIsRUFBZSxFQUFTLFdBQTJCLEVBQzdELFVBQXNCLEVBQVMsS0FBaUIsRUFBUyxNQUFjLEVBQ3JFLE1BQWlCO1FBRTFCLDZCQUE2QjtRQUpaLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFDN0QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3JFLFdBQU0sR0FBTixNQUFNLENBQVc7Ozs7UUF4RXJCLFdBQU0sR0FBRyxhQUFhLENBQUMsQ0FBRSxjQUFjOztRQUM5QyxpQkFBWSxHQUFHO1lBQ2IsV0FBVyxFQUFFLHdCQUF3QjtTQUN0QyxDQUFDO1FBQ0ssVUFBSyxHQUFHO1lBQ2IsVUFBVSxFQUFFLEVB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dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYsIE1hdERpYWxvZyB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuaW1wb3J0ICogYXMgQ2xhc3NpY0VkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWRkLWJsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLWJsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtYmxvZy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkQmxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLyoqY2tlZGl0b3Igc3RhcnQgaGVyZSovXG4gIHB1YmxpYyBFZGl0b3IgPSBDbGFzc2ljRWRpdG9yOyAgLy9mb3IgY2tlZGl0b3JcbiAgZWRpdG9yQ29uZmlnID0ge1xuICAgIHBsYWNlaG9sZGVyOiAnVHlwZSB0aGUgY29udGVudCBoZXJlIScsXG4gIH07XG4gIHB1YmxpYyBtb2RlbCA9IHtcbiAgICBlZGl0b3JEYXRhOiAnJ1xuICB9O1xuICAvKipja2VkaXRvciBlbmQgaGVyZSovXG5cbiAgLyoqYmxvZyB2YXJpYmxlcyBkZWNsYXJhdGlvbiBzdGFydCBoZXJlKiovXG4gIHB1YmxpYyBkaWFsb2dSZWY6IGFueTtcbiAgcHVibGljIGdldERhdGFFbmRwb2ludERhdGE6IGFueTtcbiAgcHVibGljIGFkZEVuZHBvaW50RGF0YTogYW55O1xuICBwdWJsaWMgc2VydmVyVXJsRGF0YTogYW55O1xuICBwdWJsaWMgbGlzdFVybDogYW55O1xuICBwdWJsaWMgYmxvZ2FycmF5OiBhbnkgPSBbXTtcbiAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcbiAgYmxvZ0FkZEVkaXRGb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBwYXJhbXNfaWQ6IGFueTtcbiAgcHVibGljIGVkaXRhcnJheTogYW55ID0gW107XG4gIHB1YmxpYyBzdGF0dXNhcnJheTogYW55ID0gW107XG4gIHB1YmxpYyBhbGxEYXRhOiBhbnkgPSBbXTtcbiAgLyoqYmxvZyB2YXJpYmxlcyBkZWNsYXJhdGlvbiBlbmQgaGVyZSoqL1xuICBwdWJsaWMgaGVhZGVyVGV4dDogYW55ID0gJ0FkZCBCbG9ncyc7XG4gIHB1YmxpYyBidXR0b25UZXh0OiBhbnkgPSAnU3VibWl0JztcbiAgcHVibGljIG1lc3NhZ2VUZXh0OiBhbnkgPSAnU3VjY2Vzc2Z1bGx5IFN1Ym1pdHRlZCc7XG5cbiAgQElucHV0KCkgICAgICAgICAvL3NldHRpbmcgdGhlIGxpc3RpbmcgdXJsIGZvcm0gdGhlIGFwcGxpY2F0aW9uXG4gIHNldCBsaXN0Um91dGUobGlzdHZhbDogYW55KSB7XG4gICAgdGhpcy5saXN0VXJsID0gKGxpc3R2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmxpc3RVcmwgPSBsaXN0dmFsO1xuXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlclVybERhdGEgPSAoc2VydmVyVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zZXJ2ZXJVcmxEYXRhID0gc2VydmVyVXJsdmFsO1xuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgZ2V0RGF0YUVuZHBvaW50KGVuZHBvaW50VXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmdldERhdGFFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmdldERhdGFFbmRwb2ludERhdGEgPSBlbmRwb2ludFVybHZhbDtcblxuICB9XG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGFkZEVuZHBvaW50KGVuZHBvaW50VXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IChlbmRwb2ludFVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gZW5kcG9pbnRVcmx2YWw7XG5cbiAgfVxuICBASW5wdXQoKSAgICAgICAgICAvL3NpbmdsZSBkYXRhIGZyb20gcmVzb2x2ZSBjYWxsICAmIHNldCB0aGUgdmFsdWUgZm9yIGVkaXRcbiAgc2V0IHNpbmdsZURhdGEoYWxsRGF0YTogYW55KSB7XG4gICAgdGhpcy5hbGxEYXRhID0gYWxsRGF0YTtcbiAgICBpZiAodGhpcy5hY3RpdmVyb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQpIHtcbiAgICAgIHRoaXMucGFyYW1zX2lkID0gdGhpcy5hY3RpdmVyb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQ7XG4gICAgICB0aGlzLmhlYWRlclRleHQgPSBcIkVkaXQgQmxvZ3NcIjtcbiAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVXBkYXRlXCI7XG4gICAgICB0aGlzLmJsb2dBZGRFZGl0Rm9ybS5jb250cm9sc1sndGl0bGUnXS5wYXRjaFZhbHVlKGFsbERhdGFbMF0udGl0bGUpO1xuICAgICAgdGhpcy5ibG9nQWRkRWRpdEZvcm0uY29udHJvbHNbJ3ByaW9yaXR5J10ucGF0Y2hWYWx1ZShhbGxEYXRhWzBdLnByaW9yaXR5KTtcbiAgICAgIHRoaXMuYmxvZ0FkZEVkaXRGb3JtLmNvbnRyb2xzWydzdGF0dXMnXS5wYXRjaFZhbHVlKGFsbERhdGFbMF0uc3RhdHVzKTtcbiAgICAgIHRoaXMuYmxvZ0FkZEVkaXRGb3JtLmNvbnRyb2xzWydkZXNjcmlwdGlvbiddLnBhdGNoVmFsdWUoYWxsRGF0YVswXS5kZXNjcmlwdGlvbik7XG4gICAgICB0aGlzLm1vZGVsLmVkaXRvckRhdGEgPSBhbGxEYXRhWzBdLmRlc2NyaXB0aW9uO1xuICAgICBcbiAgICAgIHRoaXMuYmxvZ0FkZEVkaXRGb3JtLmNvbnRyb2xzWydwYXJlbnRfaWQnXS5wYXRjaFZhbHVlKGFsbERhdGFbMF0ucGFyZW50X2lkKTtcbiAgICB9XG4gIH1cblxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBhY3RpdmVyb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHVibGljIGFwaXNlcnZpY2U6IEFwaVNlcnZpY2UsIHB1YmxpYyBfaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJvdXRlcjogUm91dGVyXG4gICAgLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHtcblxuICAgIC8qKmNhdGNoIHRoZSBwYXJhbWV0ZXIgaWQqKiovXG5cbiAgICAvKmNhdGNoIHBhcmFtZXRlciBpZCBlbmQgaGVyZSoqL1xuXG4gICAgLyoqRm9ybWdyb3VwIGNyZWF0ZSBzdGFydCBoZXJlKiovXG4gICAgdGhpcy5ibG9nQWRkRWRpdEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHRpdGxlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBwcmlvcml0eTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHN0YXR1czogW3RydWUsXSxcbiAgICAgIHBhcmVudF9pZDogWzAsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG5cbiAgICB9KVxuICAgIC8qKkZvcm1ncm91cCBjcmVhdGUgZW5kIGhlcmUqKi9cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8qKk9ic2VydmFibGUgc3RhcnQgaGVyZSoqL1xuICAgIHRoaXMuYXBpc2VydmljZS5jbGVhclNlcnZlclVybCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlzZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLnNlcnZlclVybERhdGEpO1xuICAgIH0sIDUwKTtcbiAgICB0aGlzLmFwaXNlcnZpY2UuY2xlYXJnZXRkYXRhRW5kcG9pbnQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpc2VydmljZS5zZXRnZXRkYXRhRW5kcG9pbnQodGhpcy5nZXREYXRhRW5kcG9pbnREYXRhKTtcbiAgICB9LCA1MCk7XG4gICAgdGhpcy5hcGlzZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpc2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmFkZEVuZHBvaW50RGF0YSk7XG4gICAgfSwgNTApO1xuICAgIC8qKk9ic2VydmFibGUgZW5kIGhlcmUqKi9cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5nZXRCbG9nRGF0YSgpO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICAvKm1vZGFsIHN0YXJ0IGhlcmUqL1xuICBvcGVuRGlhbG9nKHg6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2d0ZXN0LCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcblxuICAgICAgZGF0YTogeyBtZXNzYWdlOiB4IH1cbiAgICB9KTtcblxuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICB9KTtcbiAgfVxuICAvKiptb2RhbCBlbmQgaGVyZSAqL1xuXG4gIC8qKnZhbGlkYXRpb24gdW50b3VjaCBwdXJwb3NlICoqL1xuICBpbnB1dFVudG91Y2goZm9ybTogYW55LCB2YWw6IGFueSkge1xuXG4gICAgZm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG4gIC8qdmFsaWRhdGlvbiB1bnRvdWNoIHB1cnBvc2UqL1xuXG4gIC8qKiBnZXR0aW5nIGFsbCBibG9ncyBkYXRhIHN0YXJ0IGhlcmUgKiovXG4gIGdldEJsb2dEYXRhKCkge1xuXG4gICAgbGV0IGRhdGE6IGFueSA9IHtcbiAgICAgIFwic291cmNlXCI6IFwiYmxvZ19jYXRlZ29yeV92aWV3XCJcbiAgICB9XG5cbiAgICB0aGlzLmFwaXNlcnZpY2UuZ2V0RGF0YShkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuXG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSByZXNwb25zZTtcbiAgICAgIHRoaXMuYmxvZ2FycmF5ID0gcmVzdWx0LnJlcztcbiAgICB9KVxuICB9XG4gIC8vIC8qKmdldHRpbmcgYWxsIGJsb2dzIGRhdGEgZW5kIGhlcmUqKi9cblxuICAvKiphZGQgJiB1cGRhdGUqIGJsb2dzIHN1Ym1pdHRpbmcgZm9ybSBzdGFydCBoZXJlKiovXG4gIGJsb2dBZGRFZGl0Rm9ybVN1Ym1pdCgpIHtcbiAgICB0aGlzLmJsb2dBZGRFZGl0Rm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLm1vZGVsLmVkaXRvckRhdGFcbiAgICB9KTtcbiAgICB0aGlzLmlzU3VibWl0dGVkID0gdHJ1ZTtcbiAgICBsZXQgeDogYW55O1xuICAgIGZvciAoeCBpbiB0aGlzLmJsb2dBZGRFZGl0Rm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5ibG9nQWRkRWRpdEZvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5ibG9nQWRkRWRpdEZvcm0udmFsaWQpIHtcbiAgICAgIGlmICh0aGlzLmJsb2dBZGRFZGl0Rm9ybS52YWx1ZS5zdGF0dXMpXG4gICAgICAgIHRoaXMuYmxvZ0FkZEVkaXRGb3JtLnZhbHVlLnN0YXR1cyA9IHBhcnNlSW50KFwiMVwiKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5ibG9nQWRkRWRpdEZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIwXCIpO1xuICAgICAgdmFyIGRhdGE6IGFueTtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZXJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZCAhPSBudWxsKSB7ICAgIC8vdXBkYXRlIHBhcnRcbiAgICAgICAgdGhpcy5tZXNzYWdlVGV4dCA9IFwiT25lIHJvdyB1cGRhdGVkISEhXCI7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgXCJzb3VyY2VcIjogXCJibG9nX2NhdGVnb3J5XCIsXG4gICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgIFwiaWRcIjogdGhpcy5wYXJhbXNfaWQsXG4gICAgICAgICAgICBcInBhcmVudF9pZFwiOiB0aGlzLmJsb2dBZGRFZGl0Rm9ybS52YWx1ZS5wYXJlbnRfaWQsXG4gICAgICAgICAgICAndGl0bGUnOiB0aGlzLmJsb2dBZGRFZGl0Rm9ybS52YWx1ZS50aXRsZSxcbiAgICAgICAgICAgICdwcmlvcml0eSc6IHRoaXMuYmxvZ0FkZEVkaXRGb3JtLnZhbHVlLnByaW9yaXR5LFxuICAgICAgICAgICAgJ3N0YXR1cyc6IHRoaXMuYmxvZ0FkZEVkaXRGb3JtLnZhbHVlLnN0YXR1cyxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IHRoaXMuYmxvZ0FkZEVkaXRGb3JtLnZhbHVlLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICBcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzb3VyY2VvYmpcIjogW1wicGFyZW50X2lkXCJdXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hZGQgcGFydFxuICAgICAgICAgIFwic291cmNlXCI6IFwiYmxvZ19jYXRlZ29yeVwiLFxuICAgICAgICAgIFwiZGF0YVwiOiB7XG4gICAgICAgICAgICBcInBhcmVudF9pZFwiOiB0aGlzLmJsb2dBZGRFZGl0Rm9ybS52YWx1ZS5wYXJlbnRfaWQsXG4gICAgICAgICAgICAndGl0bGUnOiB0aGlzLmJsb2dBZGRFZGl0Rm9ybS52YWx1ZS50aXRsZSxcbiAgICAgICAgICAgICdwcmlvcml0eSc6IHRoaXMuYmxvZ0FkZEVkaXRGb3JtLnZhbHVlLnByaW9yaXR5LFxuICAgICAgICAgICAgJ3N0YXR1cyc6IHRoaXMuYmxvZ0FkZEVkaXRGb3JtLnZhbHVlLnN0YXR1cyxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IHRoaXMuYmxvZ0FkZEVkaXRGb3JtLnZhbHVlLmRlc2NyaXB0aW9uXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNvdXJjZW9ialwiOiBbXCJwYXJlbnRfaWRcIl1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYXBpc2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICAgIHRoaXMuc3RhdHVzYXJyYXkgPSByZXN1bHQuc3RhdHVzO1xuXG5cblxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIilcbiAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5tZXNzYWdlVGV4dCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5saXN0VXJsKTtcbiAgICAgICAgfSwgMzAwMCk7XG5cblxuXG4gICAgICB9KTtcblxuXG4gICAgfVxuXG4gIH1cbiAgLyoqYWRkICYgdXBkYXRlKiBibG9ncyBzdWJtaXR0aW5nIGZvcm0gZW5kIGhlcmUqKi9cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2d0ZXN0JyxcbiAgdGVtcGxhdGVVcmw6ICdtb2RhbC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9ndGVzdCB7XG4gIHB1YmxpYyBpc19lcnJvcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEaWFsb2d0ZXN0PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHtcbiAgICB0aGlzLmlzX2Vycm9yID0gZGF0YS5tZXNzYWdlO1xuICB9XG59XG4iXX0=