/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { map, startWith } from 'rxjs/operators';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.msg;
    /** @type {?} */
    DialogData.prototype.videourl;
}
export class AddeditBlogmanagementComponent {
    // -----------------------------------------------------------------------------------------
    /**
     * @param {?} http
     * @param {?} apiservice
     * @param {?} activatedRoute
     * @param {?} router
     * @param {?} formBuilder
     * @param {?} dialog
     * @param {?} snackBar
     */
    constructor(http, apiservice, activatedRoute, router, formBuilder, dialog, snackBar) {
        this.http = http;
        this.apiservice = apiservice;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.snackBar = snackBar;
        /**
         * ckeditor start here
         */
        this.Editor = ClassicEditor; //for ckeditor
        //for ckeditor
        this.editorConfig = {
            placeholder: 'Description...',
        };
        this.model = {
            editorData: ''
        };
        /**
         * ckeditor end here
         */
        // ---------------------declarations-------------------------------------
        this.headerText = 'Add Blog Management Data';
        this.buttonText = 'SUBMIT';
        this.blogCategoryArray = [];
        this.isSubmitted = false;
        this.video_prefix = 'https://www.youtube.com/watch?v=';
        this.options = [];
        this.myControl = new FormControl();
        this.tags_array = [];
        this.testTag = [];
        this.blogManagementForm = this.formBuilder.group({
            blogtitle: ['', Validators.required],
            blogcat: ['', Validators.required],
            blogcontent: ['', Validators.required],
            priority: ['', Validators.required],
            status: ['true', Validators.required],
            metatitle: ['', Validators.required],
            metadesc: ['', Validators.required],
            credentials: this.formBuilder.array([]),
            tags: ['',],
        });
    }
    // -----------------------------------------------------------------------
    // ----------------------------------------------Input Section-----------------------
    // Input receiving from add/edit app 
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set config(getConfig) {
        this.configData = getConfig;
    }
    /**
     * @param {?} serverUrl
     * @return {?}
     */
    set serverUrl(serverUrl) {
        this.serverUrlData = (serverUrl) || '<no name set>';
        this.serverUrlData = serverUrl;
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
     * @param {?} listval
     * @return {?}
     */
    set listRoute(listval) {
        this.listUrl = (listval) || '<no name set>';
        this.listUrl = listval;
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
        if (!this.activatedRoute.snapshot.params.id)
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.addYoutubeVideo('');
            }), 500);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.getBlogCategory();
        }), 50);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.getTagsCount();
        }), 50);
        if (this.activatedRoute.snapshot.params.id) {
            this.params_id = this.activatedRoute.snapshot.params.id;
            this.buttonText = "Update";
            this.blogManagementForm.controls['blogtitle'].patchValue(this.setData.blogtitle);
            this.blogManagementForm.controls['blogcat'].patchValue(this.setData.blogcat);
            this.blogManagementForm.controls['blogcontent'].patchValue(this.setData.blogcontent);
            this.blogManagementForm.controls['priority'].patchValue(this.setData.priority);
            this.blogManagementForm.controls['status'].patchValue(this.setData.status);
            this.blogManagementForm.controls['metatitle'].patchValue(this.setData.metatitle);
            this.blogManagementForm.controls['metadesc'].patchValue(this.setData.metadesc);
            for (const vid in this.setData.credentials) {
                this.addYoutubeVideo(this.setData.credentials[vid].video_url);
            }
            if (this.setData.tags != "")
                this.setData.tags.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                element => {
                    this.tags_array.push(element);
                }));
        }
        // ------------------------------Auticomplete Functions----------------------------------
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        value => this._filter(value))));
        // ------------------------------------------------------------------------------------------
    }
    // ------------------------------------_Filter FUnction----------------------------------
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        option => option.toLowerCase().indexOf(filterValue) === 0));
    }
    // --------------------------------------------------------------------------------------------
    // ------------------------------------MODAL Function--------------------------------------------
    /**
     * @param {?} x
     * @return {?}
     */
    openDialog(x) {
        this.dialogRef = this.dialog.open(Modal, {
            width: '45%',
            height: '500px',
            data: { msg: x }
        });
        // this.sanitizer.bypassSecurityTrustResourceUrl
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
        }));
    }
    // ----------------------------------------------------------------------------------------------
    // ----------------------------Ediatble material Form Array-------------------
    /**
     * @param {?} index
     * @return {?}
     */
    trackByFn(index) {
        return index;
    }
    // -----------------------------------------------------------------------------
    // ----------------------------------Add Credential Fucntions-----------------
    /**
     * @param {?} val
     * @return {?}
     */
    addYoutubeVideo(val) {
        /** @type {?} */
        const creds = (/** @type {?} */ (this.blogManagementForm.controls.credentials));
        creds.push(this.formBuilder.group({
            video_url: [val]
        }));
    }
    // ---------------------------------------------------------------------------
    // ---------------------------------Delete Credetial Fucntions----------------
    /**
     * @return {?}
     */
    deleteCreds() {
        /** @type {?} */
        const creds = (/** @type {?} */ (this.blogManagementForm.controls.credentials));
        creds.removeAt(1);
    }
    // ----------------------------------------------------------------------------
    // ----------------------------------Get Blog Category Function-------------------
    /**
     * @return {?}
     */
    getBlogCategory() {
        /** @type {?} */
        var data;
        data = {
            'source': 'blog_category'
        };
        this.apiservice.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            /** @type {?} */
            let result;
            result = response;
            result = response;
            this.blogCategoryArray = result.res;
        }));
    }
    // ----------------------------------------------------------------------------------
    // ----------------------------------TAGS view Function-------------------
    /**
     * @return {?}
     */
    getTagsCount() {
        /** @type {?} */
        var data;
        data = {
            'source': 'tags_view'
        };
        this.apiservice.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            /** @type {?} */
            let result;
            result = response;
            if (result != null && result.res != null && result.res[0] != null)
                this.options = result.res[0].tags;
        }));
    }
    // ----------------------------------------------------------------------------------
    //  -----------------------------EDIT RESOLVE FUNCTION------------------------------
    /**
     * @param {?} editDatavals
     * @return {?}
     */
    set singleData(editDatavals) {
        this.setData = editDatavals;
        console.log("Library te", this.setData);
    }
    // -----------------------------------------------------------------------------------
    // ---------------------------------SUBMIT----------------------------------------
    /**
     * @return {?}
     */
    onSubmit() {
        this.blogManagementForm.value.tags = this.tags_array;
        console.log("test", this.blogManagementForm.value.tags);
        this.blogManagementForm.controls['blogcontent'].markAsTouched();
        if (this.blogManagementForm.valid) {
            if (this.blogManagementForm.value.status)
                this.blogManagementForm.value.status = parseInt("1");
            else
                this.blogManagementForm.value.status = parseInt("0");
            if (this.activatedRoute.snapshot.params.id != null) { //update part
                this.messageText = "One row updated!!!";
                this.blogManagementForm.value.tags = this.tags_array;
                data = {
                    "source": "blogs",
                    "data": {
                        "id": this.params_id,
                        "blogtitle": this.blogManagementForm.value.blogtitle,
                        "blogcat": this.blogManagementForm.value.blogcat,
                        "blogcontent": this.blogManagementForm.value.blogcontent,
                        "priority": this.blogManagementForm.value.priority,
                        "status": this.blogManagementForm.value.status,
                        "metatitle": this.blogManagementForm.value.metatitle,
                        "metadesc": this.blogManagementForm.value.metadesc,
                        "tags": this.blogManagementForm.value.tags,
                        "credentials": this.blogManagementForm.value.credentials
                    },
                    "sourceobj": ["blogcat"]
                };
            }
            else {
                this.isSubmitted = true;
                /** @type {?} */
                var data;
                data = {
                    //add part
                    "source": "blogs",
                    "data": this.blogManagementForm.value,
                    "sourceobj": ["blogcat"]
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
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.router.navigateByUrl('/' + this.listUrl);
                }), 3000);
            }));
        }
    }
    // -----------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    get onSignUpValidate() {
        return this.blogManagementForm.controls;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputBlur(val) {
        this.blogManagementForm.controls[val].markAsUntouched();
    }
    // -------------------------------Select Tags AutoComplete Field-----------------------
    /**
     * @param {?} event
     * @return {?}
     */
    showval(event) {
        if (event.keyCode == 13) {
            this.tags_array.push(event.target.value);
            this.blogManagementForm.controls['tags'].patchValue("");
            return;
        }
    }
    // ------------------------------------------------------------------------------------
    // ---------------------------------------VIDEO URL PREVIEW-----------------------------
    /**
     * @param {?} video_index
     * @return {?}
     */
    preview_video(video_index) {
        this.openDialog(this.blogManagementForm.value.credentials[video_index].video_url);
    }
    // -------------------------------------------------------------------------------------
    // --------------------------------------------CLEAR TAGS---------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    clearTags(index) {
        this.tags_array.splice(index, 1);
    }
    // -------------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    openSnackBar() {
        this.snackBar.openFromComponent(YoutubeComponent, {
            // duration: 1500,
            panelClass: ['snackbar-color']
        });
    }
}
AddeditBlogmanagementComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-addedit-blogmanagement',
                template: "<mat-card>\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n        <h2 class=\"headerSpan\">{{headerText}}</h2>\n    </mat-toolbar>\n\n\n\n    <span class=\"formspan\">\n        <mat-card-content class=\"example-container\">\n            <form [formGroup]=\"blogManagementForm\">\n                <!-- ----------------------------Blog title---------------------------- -->\n                <mat-form-field>\n                    <input matInput placeholder=\"Blog title\" formControlName=\"blogtitle\"\n                        (ngClass)=\"{'is-invalid':isSubmitted && onSignUpValidate.blogtitle.errors}\"\n                        (blur)=\"inputBlur('blogtitle')\">\n                    <mat-error *ngIf=\"onSignUpValidate.blogtitle.errors && onSignUpValidate.blogtitle.errors.required\">\n                        Blog title cannot be blank</mat-error>\n                </mat-form-field><br>\n                <!-- ------------------------------------------------------------------ -->\n\n\n                <!-- -------------------------Blog Category---------------------------- -->\n                <mat-form-field>\n                    <mat-label>Blog Category</mat-label>\n                    <select matNativeControl formControlName=\"blogcat\"\n                        (ngClass)=\"{'is-invalid':isSubmitted && onSignUpValidate.blogcat.errors}\"\n                        (blur)=\"inputBlur('blogcat')\">\n                        <option *ngFor=\"let item of blogCategoryArray\" [value]=\"item._id\">{{ item.title}}</option>\n                    </select>\n                    <mat-error *ngIf=\"onSignUpValidate.blogcat.errors && onSignUpValidate.blogcat.errors.required\">Blog\n                        Category cannot be blank</mat-error>\n                </mat-form-field><br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n\n                <!-- ------------------------------------Blog Content------------------ -->\n\n                <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"blogcontent\"\n                    (ngClass)=\"{'is-invalid':isSubmitted && onSignUpValidate.blogcontent.errors}\"></ckeditor>\n                <mat-error\n                    *ngIf=\"onSignUpValidate.blogcontent.errors && onSignUpValidate.blogcontent.errors.required && onSignUpValidate.blogcontent.touched\">\n                    Blog Content cannot be blank</mat-error><br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n\n\n                <!-- -----------------------------------Priority------------------------ -->\n                <mat-form-field>\n                    <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\"\n                        (ngClass)=\"{'is-invalid':isSubmitted && onSignUpValidate.priority.errors}\"\n                        (blur)=\"inputBlur('priority')\">\n                    <mat-error *ngIf=\"onSignUpValidate.priority.errors && onSignUpValidate.priority.errors.required\">\n                        Priority cannot be blank</mat-error>\n                </mat-form-field><br>\n                <!-- ------------------------------------------------------------------- -->\n\n\n\n                <!-- ----------------------------------Status---------------------------- -->\n                <mat-checkbox formControlName=\"status\">Active</mat-checkbox><br>\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n\n\n                <!-- --------------------------------Meta title-------------------------  -->\n                <mat-form-field>\n                    <input matInput placeholder=\"Meta title\" formControlName=\"metatitle\"\n                        (ngClass)=\"{'is-invalid':isSubmitted && onSignUpValidate.metatitle.errors}\"\n                        (blur)=\"inputBlur('metatitle')\">\n                    <mat-error *ngIf=\"onSignUpValidate.metatitle.errors && onSignUpValidate.metatitle.errors.required\">\n                        Meta title cannot be blank</mat-error>\n                </mat-form-field>\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n                <!-- ----------------------------------Meta Description------------------ -->\n                <mat-form-field>\n                    <textarea matInput placeholder=\"Meta Description\" formControlName=\"metadesc\"\n                        (ngClass)=\"{'is-invalid':isSubmitted && onSignUpValidate.metadesc.errors}\"\n                        (blur)=\"inputBlur('metadesc')\"></textarea>\n                    <mat-error *ngIf=\"onSignUpValidate.metadesc.errors && onSignUpValidate.metadesc.errors.required\">\n                        Meta description cannot be blank</mat-error>\n                </mat-form-field><br>\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n                <!-- --------------------------------------Video URL--------------------- -->\n                <mat-label>Embed Video URL:</mat-label>\n                <div formArrayName=\"credentials\"\n                    *ngFor=\"let creds of blogManagementForm.controls.credentials?.value; let i = index; trackBy: trackByFn\">\n                    <ng-container [formGroupName]=\"i\">\n\n                        <mat-form-field class=\"video_embed\">\n                            <input type=\"text\" matInput formControlName=\"video_url\">\n                            <span matPrefix>{{ video_prefix }}</span>\n                           \n                            <mat-icon matSuffix class=\"clickable\" (click)=\"preview_video(i)\">remove_red_eye</mat-icon>\n                            <i style=\"position: absolute; cursor: pointer;                           right: 4px;\n                            bottom: 7px;\" class=\"material-icons\" (click)=\"openSnackBar()\">\n                                contact_support\n                            </i>\n                        </mat-form-field>\n                       \n                        <button type=\"button\" (click)=\"addYoutubeVideo('')\">\n                            <mat-icon matSuffix>add_box</mat-icon>\n                        </button>\n                        <span *ngIf=\"i!=0\"><button type=\"button\" (click)=\"deleteCreds()\">\n                                <mat-icon matSuffix>delete</mat-icon>\n                            </button></span>\n                    </ng-container>\n                </div><br>\n                <!-- ------------------------------------------------------------------- -->\n\n\n                <!-- -----------------------------Multi Tags---------------------------- -->\n                <div>\n                    <mat-label>Tags:</mat-label>\n                    <mat-form-field class=\"example-full-width\">\n                        <input type=\"text\" placeholder=\"Tag something\" formControlName=\"tags\" matInput\n                            [formControl]=\"myControl\" [matAutocomplete]=\"auto\" (keyup)=\"showval($event)\">\n\n                        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                                {{option}}\n                            </mat-option>\n                        </mat-autocomplete>\n\n                    </mat-form-field>\n                    <div>\n\n                        <mat-chip-list class=\"mat_chip\">\n                            <!-- <li *ngFor=\"let item of tags_array;let j = index\">{{ item }}<mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon></li> -->\n                            <mat-chip color=\"primary\" selected *ngFor=\"let item of tags_array;let j = index\">{{ item }}\n                                <mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon>\n                            </mat-chip>\n                        </mat-chip-list>\n\n                    </div>\n                </div>\n                <!-- ----------------------------------------------------------------- -->\n\n\n                <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"button\"\n                    (click)=\"onSubmit()\">{{buttonText}}</button>\n\n            </form>\n        </mat-card-content>\n    </span>\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.clickable{cursor:pointer}.mat_chip{padding:10px}.video_embed{position:relative}.video_embed .link_action{position:absolute;right:20px}.snackbar-color{background:#f01d40}.log_image{width:100%;display:block}.log_image img{max-width:100%}"]
            }] }
];
/** @nocollapse */
AddeditBlogmanagementComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: ApiService },
    { type: ActivatedRoute },
    { type: Router },
    { type: FormBuilder },
    { type: MatDialog },
    { type: MatSnackBar }
];
AddeditBlogmanagementComponent.propDecorators = {
    config: [{ type: Input }],
    serverUrl: [{ type: Input }],
    getDataEndpoint: [{ type: Input }],
    addEndpoint: [{ type: Input }],
    listRoute: [{ type: Input }],
    singleData: [{ type: Input }]
};
if (false) {
    /**
     * ckeditor start here
     * @type {?}
     */
    AddeditBlogmanagementComponent.prototype.Editor;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.editorConfig;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.model;
    /**
     * ckeditor end here
     * @type {?}
     */
    AddeditBlogmanagementComponent.prototype.headerText;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.buttonText;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.blogCategoryArray;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.configData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.blogManagementForm;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.serverUrlData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.getDataEndpointData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.addEndpointData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.isSubmitted;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.video_prefix;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.options;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.filteredOptions;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.myControl;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.tags_array;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.dialogRef;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.params_id;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.setData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.messageText;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.listUrl;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.testTag;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.apiservice;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.formBuilder;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.dialog;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.snackBar;
}
// ------------------------------------Modal Component Works------------------------------
export class Modal {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.videoid = '';
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
                template: "<h1 mat-dialog-title>YOUTUBE VIDEO PREVIEW</h1>\n<div mat-dialog-content>\n \n   <p>https://www.youtube.com/embed/{{ (data.msg) }}</p> \n  \n   <lib-youtubeplayer [videoid]=\"data.msg\"></lib-youtubeplayer>\n\n</div>\n\n\n\n\n "
            }] }
];
/** @nocollapse */
Modal.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    Modal.prototype.videoid;
    /** @type {?} */
    Modal.prototype.dialogRef;
    /** @type {?} */
    Modal.prototype.data;
}
// ---------------------------------------------------------------------------------------
export class YoutubeComponent {
}
YoutubeComponent.decorators = [
    { type: Component, args: [{
                template: "<span class=\"log_image\">\n    <img src=\"/assets/images/youtube-link.jpg\">\n</span>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.clickable{cursor:pointer}.mat_chip{padding:10px}.video_embed{position:relative}.video_embed .link_action{position:absolute;right:20px}.snackbar-color{background:#f01d40}.log_image{width:100%;display:block}.log_image img{max-width:100%}"]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQvYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzFGLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxLQUFLLGFBQWEsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUluRSxnQ0FHQzs7O0lBRkMseUJBQVM7O0lBQ1QsOEJBQWM7O0FBV2hCLE1BQU0sT0FBTyw4QkFBOEI7Ozs7Ozs7Ozs7O0lBa0Z6QyxZQUFvQixJQUFnQixFQUFVLFVBQXNCLEVBQzFELGNBQThCLEVBQVUsTUFBYyxFQUN0RCxXQUF3QixFQUFTLE1BQWlCLEVBQ25ELFFBQXFCO1FBSFYsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDMUQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN0RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDbkQsYUFBUSxHQUFSLFFBQVEsQ0FBYTs7OztRQWxGdkIsV0FBTSxHQUFHLGFBQWEsQ0FBQyxDQUFFLGNBQWM7O1FBQzlDLGlCQUFZLEdBQUc7WUFDYixXQUFXLEVBQUUsZ0JBQWdCO1NBQzlCLENBQUM7UUFDSyxVQUFLLEdBQUc7WUFDYixVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUM7Ozs7O1FBUUssZUFBVSxHQUFRLDBCQUEwQixDQUFDO1FBQzdDLGVBQVUsR0FBUSxRQUFRLENBQUM7UUFDM0Isc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBTW5DLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGlCQUFZLEdBQVEsa0NBQWtDLENBQUM7UUFDdkQsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUVsQixjQUFTLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM5QixlQUFVLEdBQVEsRUFBRSxDQUFDO1FBTXJCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFrRGhCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUN0QyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNyQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3ZDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtTQUNaLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7O0lBbERELElBQ0ksTUFBTSxDQUFDLFNBQWM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFFOUIsQ0FBQzs7Ozs7SUFFRCxJQUNJLFNBQVMsQ0FBQyxTQUFjO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxlQUFlLENBQUM7UUFDcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxJQUNJLGVBQWUsQ0FBQyxjQUFtQjtRQUNyQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxlQUFlLENBQUM7UUFDL0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGNBQWMsQ0FBQztJQUc1QyxDQUFDOzs7OztJQUNELElBQ0ksV0FBVyxDQUFDLGNBQW1CO1FBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxlQUFlLENBQUM7UUFDM0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7SUFFeEMsQ0FBQzs7Ozs7SUFHRCxJQUNJLFNBQVMsQ0FBQyxPQUFZO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxlQUFlLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFFekIsQ0FBQzs7OztJQXFCRCxRQUFRO1FBQ04sMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakMsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztRQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUN2QyxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQy9ELENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztRQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQyxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1AseUJBQXlCO1FBRXpCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6QyxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMzQixDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUE7UUFFVCxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFBO1FBR04sVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQTtRQUdOLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckYsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUcvRSxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQy9EO1lBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsQ0FBQyxFQUFDLENBQUM7U0FHTjtRQU1ELHlGQUF5RjtRQUV6RixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDckQsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FDbEMsQ0FBQztRQUNGLDZGQUE2RjtJQUMvRixDQUFDOzs7Ozs7O0lBSU8sT0FBTyxDQUFDLEtBQWE7O2NBQ3JCLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFO1FBRXZDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQ3hGLENBQUM7Ozs7Ozs7SUFXRCxVQUFVLENBQUMsQ0FBTTtRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3ZDLEtBQUssRUFBRSxLQUFLO1lBQ1osTUFBTSxFQUFFLE9BQU87WUFDZixJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO1NBRWpCLENBQUMsQ0FBQztRQUVILGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtRQUVoRCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFjRCxTQUFTLENBQUMsS0FBSztRQUNiLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7OztJQVVELGVBQWUsQ0FBQyxHQUFROztjQUNoQixLQUFLLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQWE7UUFDdkUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNoQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUM7U0FDakIsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDOzs7Ozs7SUFVRCxXQUFXOztjQUNILEtBQUssR0FBRyxtQkFBQSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBYTtRQUN2RSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Ozs7OztJQVVELGVBQWU7O1lBQ1QsSUFBUztRQUNiLElBQUksR0FBRztZQUNMLFFBQVEsRUFBRSxlQUFlO1NBQzFCLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUU7O2dCQUM3QyxNQUFXO1lBQ2YsTUFBTSxHQUFHLFFBQVEsQ0FBQztZQUNsQixNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBU0QsWUFBWTs7WUFDTixJQUFTO1FBQ2IsSUFBSSxHQUFHO1lBQ0wsUUFBUSxFQUFFLFdBQVc7U0FDdEIsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRTs7Z0JBQzdDLE1BQVc7WUFDZixNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ2xCLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUk7Z0JBQy9ELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFHdEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBUUQsSUFDSSxVQUFVLENBQUMsWUFBaUI7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRzFDLENBQUM7Ozs7OztJQUtELFFBQVE7UUFDTixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVoRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUU7WUFDakMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLE1BQU07Z0JBQ3RDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Z0JBRXJELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2RCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUssYUFBYTtnQkFDcEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDckQsSUFBSSxHQUFHO29CQUNMLFFBQVEsRUFBRSxPQUFPO29CQUNqQixNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTO3dCQUNwQixXQUFXLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxTQUFTO3dCQUNwRCxTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxPQUFPO3dCQUNoRCxhQUFhLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXO3dCQUN4RCxVQUFVLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxRQUFRO3dCQUNsRCxRQUFRLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxNQUFNO3dCQUM5QyxXQUFXLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxTQUFTO3dCQUNwRCxVQUFVLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxRQUFRO3dCQUNsRCxNQUFNLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFJO3dCQUMxQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXO3FCQUV6RDtvQkFDRCxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUM7aUJBQ3pCLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7b0JBQ3BCLElBQVM7Z0JBQ2IsSUFBSSxHQUFHOztvQkFDTCxRQUFRLEVBQUUsT0FBTztvQkFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLO29CQUNyQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUM7aUJBQ3pCLENBQUM7YUFDSDtZQUVELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxRQUFRLENBQUMsRUFBRTs7b0JBQzdDLE1BQVc7Z0JBQ2YsTUFBTSxHQUFHLFFBQVEsQ0FBQztnQkFJbEIsVUFBVTs7O2dCQUFDLEdBQUcsRUFBRTtvQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRCxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7WUFFWCxDQUFDLEVBQUMsQ0FBQztTQUlKO0lBQ0gsQ0FBQzs7Ozs7SUFRRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFHRCxTQUFTLENBQUMsR0FBUTtRQUNoQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFELENBQUM7Ozs7OztJQVFELE9BQU8sQ0FBQyxLQUFVO1FBQ2hCLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4RCxPQUFPO1NBQ1I7SUFFSCxDQUFDOzs7Ozs7O0lBT0QsYUFBYSxDQUFDLFdBQVc7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7Ozs7O0lBUUQsU0FBUyxDQUFDLEtBQUs7UUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFHRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRTs7WUFFaEQsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBcmFGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxzM1FBQXNEOzthQUV2RDs7OztZQXJCUSxVQUFVO1lBRVYsVUFBVTtZQUhWLGNBQWM7WUFBRSxNQUFNO1lBRXRCLFdBQVc7WUFHb0IsU0FBUztZQUFFLFdBQVc7OztxQkFrRTNELEtBQUs7d0JBTUwsS0FBSzs4QkFNTCxLQUFLOzBCQU9MLEtBQUs7d0JBUUwsS0FBSzt5QkEwTkwsS0FBSzs7Ozs7OztJQWpTTixnREFBOEI7O0lBQzlCLHNEQUVFOztJQUNGLCtDQUVFOzs7OztJQVFGLG9EQUFvRDs7SUFDcEQsb0RBQWtDOztJQUNsQywyREFBbUM7O0lBQ25DLG9EQUF1Qjs7SUFDdkIsNERBQThCOztJQUM5Qix1REFBMEI7O0lBQzFCLDZEQUFnQzs7SUFDaEMseURBQTRCOztJQUM1QixxREFBb0I7O0lBQ3BCLHNEQUF1RDs7SUFDdkQsaURBQWtCOztJQUNsQix5REFBc0M7O0lBQ3RDLG1EQUE4Qjs7SUFDOUIsb0RBQXFCOztJQUNyQixtREFBZTs7SUFDZixtREFBc0I7O0lBQ3RCLGlEQUFhOztJQUNiLHFEQUFpQjs7SUFDakIsaURBQWE7O0lBQ2IsaURBQWtCOzs7OztJQThDTiw4Q0FBd0I7Ozs7O0lBQUUsb0RBQThCOzs7OztJQUNsRSx3REFBc0M7Ozs7O0lBQUUsZ0RBQXNCOzs7OztJQUM5RCxxREFBZ0M7O0lBQUUsZ0RBQXdCOztJQUMxRCxrREFBNEI7OztBQTBWaEMsTUFBTSxPQUFPLEtBQUs7Ozs7O0lBR2hCLFlBQ1MsU0FBOEIsRUFDTCxJQUFnQjtRQUR6QyxjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQUNMLFNBQUksR0FBSixJQUFJLENBQVk7UUFKbEQsWUFBTyxHQUFRLEVBQUUsQ0FBQztJQU9sQixDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsK09BQXlCO2FBQzFCOzs7O1lBamN5QixZQUFZOzRDQXVjakMsTUFBTSxTQUFDLGVBQWU7Ozs7SUFKekIsd0JBQWtCOztJQUdoQiwwQkFBcUM7O0lBQ3JDLHFCQUFnRDs7O0FBY3BELE1BQU0sT0FBTyxnQkFBZ0I7OztZQUo1QixTQUFTLFNBQUM7Z0JBQ1Qsa0dBQThCOzthQUUvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2csIE1hdFNuYWNrQmFyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIENsYXNzaWNFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJztcblxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIG1zZzogYW55O1xuICB2aWRlb3VybDogYW55O1xufVxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFkZGVkaXQtYmxvZ21hbmFnZW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQWRkZWRpdEJsb2dtYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvKipja2VkaXRvciBzdGFydCBoZXJlKi9cbiAgcHVibGljIEVkaXRvciA9IENsYXNzaWNFZGl0b3I7ICAvL2ZvciBja2VkaXRvclxuICBlZGl0b3JDb25maWcgPSB7XG4gICAgcGxhY2Vob2xkZXI6ICdEZXNjcmlwdGlvbi4uLicsXG4gIH07XG4gIHB1YmxpYyBtb2RlbCA9IHtcbiAgICBlZGl0b3JEYXRhOiAnJ1xuICB9O1xuICAvKipja2VkaXRvciBlbmQgaGVyZSovXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1kZWNsYXJhdGlvbnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHB1YmxpYyBoZWFkZXJUZXh0OiBhbnkgPSAnQWRkIEJsb2cgTWFuYWdlbWVudCBEYXRhJztcbiAgcHVibGljIGJ1dHRvblRleHQ6IGFueSA9ICdTVUJNSVQnO1xuICBwdWJsaWMgYmxvZ0NhdGVnb3J5QXJyYXk6IGFueSA9IFtdO1xuICBwdWJsaWMgY29uZmlnRGF0YTogYW55O1xuICBibG9nTWFuYWdlbWVudEZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIHNlcnZlclVybERhdGE6IGFueTtcbiAgcHVibGljIGdldERhdGFFbmRwb2ludERhdGE6IGFueTtcbiAgcHVibGljIGFkZEVuZHBvaW50RGF0YTogYW55O1xuICBpc1N1Ym1pdHRlZCA9IGZhbHNlO1xuICB2aWRlb19wcmVmaXg6IGFueSA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PSc7XG4gIG9wdGlvbnM6IGFueSA9IFtdO1xuICBmaWx0ZXJlZE9wdGlvbnM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICBteUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgdGFnc19hcnJheTogYW55ID0gW107XG4gIGRpYWxvZ1JlZjogYW55O1xuICBwdWJsaWMgcGFyYW1zX2lkOiBhbnk7XG4gIHNldERhdGE6IGFueTtcbiAgbWVzc2FnZVRleHQ6IGFueTtcbiAgbGlzdFVybDogYW55O1xuICB0ZXN0VGFnOiBhbnkgPSBbXTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUlucHV0IFNlY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIElucHV0IHJlY2VpdmluZyBmcm9tIGFkZC9lZGl0IGFwcCBcbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcblxuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVcmxEYXRhID0gKHNlcnZlclVybCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVXJsRGF0YSA9IHNlcnZlclVybDtcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGdldERhdGFFbmRwb2ludChlbmRwb2ludFVybHZhbDogYW55KSB7XG4gICAgdGhpcy5nZXREYXRhRW5kcG9pbnREYXRhID0gKGVuZHBvaW50VXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5nZXREYXRhRW5kcG9pbnREYXRhID0gZW5kcG9pbnRVcmx2YWw7XG5cblxuICB9XG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGFkZEVuZHBvaW50KGVuZHBvaW50VXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IChlbmRwb2ludFVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gZW5kcG9pbnRVcmx2YWw7XG5cbiAgfVxuXG5cbiAgQElucHV0KCkgICAgICAgICAvL3NldHRpbmcgdGhlIGxpc3RpbmcgdXJsIGZvcm0gdGhlIGFwcGxpY2F0aW9uXG4gIHNldCBsaXN0Um91dGUobGlzdHZhbDogYW55KSB7XG4gICAgdGhpcy5saXN0VXJsID0gKGxpc3R2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmxpc3RVcmwgPSBsaXN0dmFsO1xuXG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgYXBpc2VydmljZTogQXBpU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIpIHtcbiAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgYmxvZ3RpdGxlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgYmxvZ2NhdDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGJsb2djb250ZW50OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgcHJpb3JpdHk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBzdGF0dXM6IFsndHJ1ZScsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbWV0YXRpdGxlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbWV0YWRlc2M6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBjcmVkZW50aWFsczogdGhpcy5mb3JtQnVpbGRlci5hcnJheShbXSksXG4gICAgICB0YWdzOiBbJycsXSxcbiAgICB9KTtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLyoqT2JzZXJ2YWJsZSBzdGFydCBoZXJlKiovXG4gICAgdGhpcy5hcGlzZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaXNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVXJsRGF0YSk7XG4gICAgfSwgNTApO1xuICAgIHRoaXMuYXBpc2VydmljZS5jbGVhcmdldGRhdGFFbmRwb2ludCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlzZXJ2aWNlLnNldGdldGRhdGFFbmRwb2ludCh0aGlzLmdldERhdGFFbmRwb2ludERhdGEpO1xuICAgIH0sIDUwKTtcbiAgICB0aGlzLmFwaXNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlzZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuYWRkRW5kcG9pbnREYXRhKTtcbiAgICB9LCA1MCk7XG4gICAgLyoqT2JzZXJ2YWJsZSBlbmQgaGVyZSoqL1xuXG4gICAgaWYgKCF0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZClcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkZFlvdXR1YmVWaWRlbygnJyk7XG4gICAgICB9LCA1MDApXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZ2V0QmxvZ0NhdGVnb3J5KCk7XG4gICAgfSwgNTApXG5cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5nZXRUYWdzQ291bnQoKTtcbiAgICB9LCA1MClcblxuXG4gICAgaWYgKHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucGFyYW1zLmlkKSB7XG4gICAgICB0aGlzLnBhcmFtc19pZCA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucGFyYW1zLmlkO1xuICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVcGRhdGVcIjtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydibG9ndGl0bGUnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5ibG9ndGl0bGUpO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2Jsb2djYXQnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5ibG9nY2F0KTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydibG9nY29udGVudCddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLmJsb2djb250ZW50KTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydwcmlvcml0eSddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLnByaW9yaXR5KTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydzdGF0dXMnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5zdGF0dXMpO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ21ldGF0aXRsZSddLnBhdGNoVmFsdWUodGhpcy5zZXREYXRhLm1ldGF0aXRsZSk7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snbWV0YWRlc2MnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5tZXRhZGVzYyk7XG5cblxuICAgICAgZm9yIChjb25zdCB2aWQgaW4gdGhpcy5zZXREYXRhLmNyZWRlbnRpYWxzKSB7XG4gICAgICAgIHRoaXMuYWRkWW91dHViZVZpZGVvKHRoaXMuc2V0RGF0YS5jcmVkZW50aWFsc1t2aWRdLnZpZGVvX3VybCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNldERhdGEudGFncyAhPSBcIlwiKVxuICAgICAgICB0aGlzLnNldERhdGEudGFncy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIHRoaXMudGFnc19hcnJheS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG5cblxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BdXRpY29tcGxldGUgRnVuY3Rpb25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyKHZhbHVlKSlcbiAgICApO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB9XG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1fRmlsdGVyIEZVbmN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcml2YXRlIF9maWx0ZXIodmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPT09IDApO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1NT0RBTCBGdW5jdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG9wZW5EaWFsb2coeDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsLCB7XG4gICAgICB3aWR0aDogJzQ1JScsXG4gICAgICBoZWlnaHQ6ICc1MDBweCcsXG4gICAgICBkYXRhOiB7IG1zZzogeCB9XG5cbiAgICB9KTtcblxuICAgIC8vIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybFxuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICB9KTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRWRpYXRibGUgbWF0ZXJpYWwgRm9ybSBBcnJheS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdHJhY2tCeUZuKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFkZCBDcmVkZW50aWFsIEZ1Y250aW9ucy0tLS0tLS0tLS0tLS0tLS0tXG4gIGFkZFlvdXR1YmVWaWRlbyh2YWw6IGFueSkge1xuICAgIGNvbnN0IGNyZWRzID0gdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHMuY3JlZGVudGlhbHMgYXMgRm9ybUFycmF5O1xuICAgIGNyZWRzLnB1c2godGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICB2aWRlb191cmw6IFt2YWxdXG4gICAgfSkpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLURlbGV0ZSBDcmVkZXRpYWwgRnVjbnRpb25zLS0tLS0tLS0tLS0tLS0tLVxuICBkZWxldGVDcmVkcygpIHtcbiAgICBjb25zdCBjcmVkcyA9IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzLmNyZWRlbnRpYWxzIGFzIEZvcm1BcnJheTtcbiAgICBjcmVkcy5yZW1vdmVBdCgxKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1HZXQgQmxvZyBDYXRlZ29yeSBGdW5jdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBnZXRCbG9nQ2F0ZWdvcnkoKSB7XG4gICAgdmFyIGRhdGE6IGFueTtcbiAgICBkYXRhID0ge1xuICAgICAgJ3NvdXJjZSc6ICdibG9nX2NhdGVnb3J5J1xuICAgIH07XG4gICAgdGhpcy5hcGlzZXJ2aWNlLmdldERhdGEoZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICB0aGlzLmJsb2dDYXRlZ29yeUFycmF5ID0gcmVzdWx0LnJlcztcbiAgICB9KTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVEFHUyB2aWV3IEZ1bmN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldFRhZ3NDb3VudCgpIHtcbiAgICB2YXIgZGF0YTogYW55O1xuICAgIGRhdGEgPSB7XG4gICAgICAnc291cmNlJzogJ3RhZ3NfdmlldydcbiAgICB9O1xuICAgIHRoaXMuYXBpc2VydmljZS5nZXREYXRhKGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCAmJiByZXN1bHQucmVzICE9IG51bGwgJiYgcmVzdWx0LnJlc1swXSAhPSBudWxsKVxuICAgICAgICB0aGlzLm9wdGlvbnMgPSByZXN1bHQucmVzWzBdLnRhZ3M7XG5cblxuICAgIH0pO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG4gIC8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUVESVQgUkVTT0xWRSBGVU5DVElPTi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBASW5wdXQoKSAgICAgICAgICAvL3NpbmdsZSBkYXRhIGZyb20gcmVzb2x2ZSBjYWxsICAmIHNldCB0aGUgdmFsdWUgZm9yIGVkaXRcbiAgc2V0IHNpbmdsZURhdGEoZWRpdERhdGF2YWxzOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEgPSBlZGl0RGF0YXZhbHM7XG4gICAgY29uc29sZS5sb2coXCJMaWJyYXJ5IHRlXCIsIHRoaXMuc2V0RGF0YSk7XG5cblxuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TVUJNSVQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG9uU3VibWl0KCkge1xuICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnRhZ3MgPSB0aGlzLnRhZ3NfYXJyYXk7XG4gICAgY29uc29sZS5sb2coXCJ0ZXN0XCIsIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnRhZ3MpO1xuICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydibG9nY29udGVudCddLm1hcmtBc1RvdWNoZWQoKTtcblxuICAgIGlmICh0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWxpZCkge1xuICAgICAgaWYgKHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnN0YXR1cylcbiAgICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIxXCIpO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjBcIik7XG4gICAgICBpZiAodGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQgIT0gbnVsbCkgeyAgICAvL3VwZGF0ZSBwYXJ0XG4gICAgICAgIHRoaXMubWVzc2FnZVRleHQgPSBcIk9uZSByb3cgdXBkYXRlZCEhIVwiO1xuICAgICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS50YWdzID0gdGhpcy50YWdzX2FycmF5O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIFwic291cmNlXCI6IFwiYmxvZ3NcIixcbiAgICAgICAgICBcImRhdGFcIjoge1xuICAgICAgICAgICAgXCJpZFwiOiB0aGlzLnBhcmFtc19pZCxcbiAgICAgICAgICAgIFwiYmxvZ3RpdGxlXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2d0aXRsZSxcbiAgICAgICAgICAgIFwiYmxvZ2NhdFwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nY2F0LFxuICAgICAgICAgICAgXCJibG9nY29udGVudFwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5ibG9nY29udGVudCxcbiAgICAgICAgICAgIFwicHJpb3JpdHlcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUucHJpb3JpdHksXG4gICAgICAgICAgICBcInN0YXR1c1wiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5zdGF0dXMsXG4gICAgICAgICAgICBcIm1ldGF0aXRsZVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5tZXRhdGl0bGUsXG4gICAgICAgICAgICBcIm1ldGFkZXNjXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLm1ldGFkZXNjLFxuICAgICAgICAgICAgXCJ0YWdzXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnRhZ3MsXG4gICAgICAgICAgICBcImNyZWRlbnRpYWxzXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmNyZWRlbnRpYWxzXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic291cmNlb2JqXCI6IFtcImJsb2djYXRcIl1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNTdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICB2YXIgZGF0YTogYW55O1xuICAgICAgICBkYXRhID0geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hZGQgcGFydFxuICAgICAgICAgIFwic291cmNlXCI6IFwiYmxvZ3NcIixcbiAgICAgICAgICBcImRhdGFcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUsXG4gICAgICAgICAgXCJzb3VyY2VvYmpcIjogW1wiYmxvZ2NhdFwiXVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFwaXNlcnZpY2UuYWRkRGF0YShkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuXG5cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMubGlzdFVybCk7XG4gICAgICAgIH0sIDMwMDApO1xuXG4gICAgICB9KTtcblxuXG5cbiAgICB9XG4gIH1cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cbiAgZ2V0IG9uU2lnblVwVmFsaWRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzO1xuICB9XG5cblxuICBpbnB1dEJsdXIodmFsOiBhbnkpIHtcbiAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cblxuXG5cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TZWxlY3QgVGFncyBBdXRvQ29tcGxldGUgRmllbGQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzaG93dmFsKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xuICAgICAgdGhpcy50YWdzX2FycmF5LnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWyd0YWdzJ10ucGF0Y2hWYWx1ZShcIlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1WSURFTyBVUkwgUFJFVklFVy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByZXZpZXdfdmlkZW8odmlkZW9faW5kZXgpIHtcbiAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuY3JlZGVudGlhbHNbdmlkZW9faW5kZXhdLnZpZGVvX3VybCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1DTEVBUiBUQUdTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsZWFyVGFncyhpbmRleCkge1xuICAgIHRoaXMudGFnc19hcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBvcGVuU25hY2tCYXIoKSB7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChZb3V0dWJlQ29tcG9uZW50LCB7XG4gICAgICAvLyBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBhbmVsQ2xhc3M6IFsnc25hY2tiYXItY29sb3InXVxuICAgIH0pO1xuICB9XG5cbn1cblxuXG5cblxuXG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Nb2RhbCBDb21wb25lbnQgV29ya3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnbW9kYWwuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsIHtcbiAgdmlkZW9pZDogYW55ID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHtcblxuXG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICd5b3V0dWJldGlwLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGRlZGl0LWJsb2dtYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBZb3V0dWJlQ29tcG9uZW50IHtcblxufVxuXG4iXX0=