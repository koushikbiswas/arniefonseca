/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NewsTitleService } from '../../../news-title.service';
import { DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
var AddEditNewsletterlibComponent = /** @class */ (function () {
    function AddEditNewsletterlibComponent(atp, newsService, datepipe, cookieService, formBuilder, router) {
        this.atp = atp;
        this.newsService = newsService;
        this.datepipe = datepipe;
        this.cookieService = cookieService;
        this.formBuilder = formBuilder;
        this.router = router;
        // =================declaration==================
        this.header_name = "Newsletter";
        this.buttonText = "SAVE";
        this.group_name_array = [];
        this.sender_name_array = [];
        // ==============================================
        /**
         * ckeditor start here
         */
        this.Editor = ClassicEditor; //for ckeditor
        //for ckeditor
        this.editorConfig = {
            placeholder: 'Content:',
        };
        this.model = {
            editorData: ''
        };
    }
    Object.defineProperty(AddEditNewsletterlibComponent.prototype, "config", {
        /**ckeditor end here*/
        set: /**
         * ckeditor end here
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.configData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.configData.action == 'add')
            this.time = this.datepipe.transform(new Date(), 'h:mm a');
        //Calling the group name
        this.getGroupName();
        //Get sender's getGroupName
        this.getSenderAddress();
        //Getting the cookie value
        this.cookieValue = this.cookieService.getAll();
        //  calling the form generation 
        this.generateForm();
        this.newsForm.value.cookiemail = this.cookieService.get('get_email');
        /*Switch case*/
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                this.buttonText = "SUBMIT";
                this.header_name = "Add a Newsletter";
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.time = "";
                this.setDefaultValue(this.configData.defaultData);
                break;
        }
    };
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var amazingTimePicker = this.atp.open();
        amazingTimePicker.afterClose().subscribe((/**
         * @param {?} time
         * @return {?}
         */
        function (time) {
        }));
    };
    /*getting the group name*/
    /*getting the group name*/
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.getGroupName = /*getting the group name*/
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = { 'source': this.configData.group_table };
        this.newsService.getData(this.configData.endpoint2 + 'datalist', data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result;
            result = response;
            _this.group_name_array = result.res;
        }));
    };
    /*getting the sender's email*/
    /*getting the sender's email*/
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.getSenderAddress = /*getting the sender's email*/
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = { 'source': this.configData.sender_table };
        this.newsService.getData(this.configData.endpoint2 + 'datalist', data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result;
            result = response;
            _this.sender_name_array = result.res;
        }));
    };
    //generate form
    //generate form
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.generateForm = 
    //generate form
    /**
     * @return {?}
     */
    function () {
        this.newsForm = this.formBuilder.group({
            newstitle: [],
            newssubject: [],
            share_news: [],
            senderaddress: [],
            publishdate: [],
            settime: [this.time],
            content: [],
            sendnews: [],
            newsfrequency: [],
            timeofday: [this.time],
            timezone: [],
            startdate: [],
            enddate: [],
            reply: [],
            status: [1]
        });
    };
    //setting the default value
    //setting the default value
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.setDefaultValue = 
    //setting the default value
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        this.newsForm.patchValue({
            newstitle: defaultValue.newstitle,
            newssubject: defaultValue.newssubject,
            share_news: defaultValue.share_news,
            senderaddress: defaultValue.senderaddress,
            publishdate: defaultValue.publishdate,
            settime: defaultValue.settime,
            content: defaultValue.content,
            sendnews: defaultValue.sendnews,
            newsfrequency: defaultValue.newsfrequency,
            timeofday: defaultValue.timeofday,
            timezone: defaultValue.timezone,
            startdate: defaultValue.startdate,
            enddate: defaultValue.enddate,
            reply: defaultValue.reply
        });
    };
    //submit function
    //submit function
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.onSubmit = 
    //submit function
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /* stop here if form is invalid */
        if (this.newsForm.invalid) {
            console.log("Invalid Form");
            return;
        }
        else {
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.newsForm.value, this.configData.condition),
                "sourceobj": ["share_news", "senderaddress"]
            };
            this.newsService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    console.log(response.status);
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
    AddEditNewsletterlibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-newsletterlib',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"newsForm\">\n\n\n\n        <!-- Newsletter title  -->\n        <mat-form-field>\n          <mat-label>Newsletter Title:</mat-label>\n          <input matInput formControlName=\"newstitle\">\n        </mat-form-field>\n\n        <!-- Newsletter Subject  -->\n        <mat-form-field>\n          <mat-label>Newsletter Subject:</mat-label>\n          <input matInput formControlName=\"newssubject\">\n        </mat-form-field>\n\n\n        <!-- share newsletter with -->\n        <mat-form-field>\n          <mat-label>Share newsletter with group:</mat-label>\n          <mat-select matNativeControl required formControlName=\"share_news\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- sender's address  -->\n        <mat-form-field>\n          <mat-label>Sender's address</mat-label>\n          <mat-select matNativeControl required formControlName=\"senderaddress\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array'>{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Set Publish Date  -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Set publish date:\" formControlName=\"publishdate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n\n        <!-- Time Picker  -->\n        <mat-form-field>\n          <mat-label>Set time:</mat-label>\n          <input matInput atp-time-picker  formControlName=\"settime\"/>\n        </mat-form-field>\n\n\n        <!-- Content  -->\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"content\"></ckeditor>\n\n\n\n        <h1> SET FREQUENCY </h1>\n        <hr>\n\n\n        <!-- Automatically send newsletters to -->\n        <mat-form-field>\n          <mat-label>Automatically send newsletter to members:</mat-label>\n          <mat-select matNativeControl required formControlName=\"sendnews\">\n            <mat-option value=0>Select a group</mat-option>\n            <mat-option value=\"{{i._id}}\" *ngFor=\"let i of group_name_array\">{{ i.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Newsletter frequency  -->\n        <mat-form-field>\n          <mat-label>Newsletter Frequency:</mat-label>\n          <mat-select matNativeControl required formControlName=\"newsfrequency\">\n            <mat-option value=\"daily\">Daily</mat-option>\n            <mat-option value=\"weekly\">Weekly</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- News letter Day of the week  -->\n        <div class=\"dayofweek\">\n          <h5>NewsLetter day of the week</h5>\n          <mat-card-content class=\"date_wrapper\">\n            <mat-checkbox>Sunday</mat-checkbox>\n            <mat-checkbox>Monday</mat-checkbox>\n            <mat-checkbox>Tuesday</mat-checkbox>\n            <mat-checkbox>Wednesday</mat-checkbox>\n            <mat-checkbox>Thursday</mat-checkbox>\n            <mat-checkbox>Friday</mat-checkbox>\n            <mat-checkbox>Saturday</mat-checkbox>\n          </mat-card-content>\n        </div>\n\n\n        <!-- News Letter time of the day -->\n        <mat-form-field>\n          <mat-label>News Letter time of the day:</mat-label>\n          <input matInput atp-time-picker formControlName=\"timeofday\" />\n        </mat-form-field>\n\n\n\n        <!-- News Letter Time Zone -->\n        <mat-form-field>\n          <mat-label>News Letter Time Zone</mat-label>\n          <mat-select matNativeControl required formControlName=\"timezone\">\n            <mat-option value=\"Central Standard Time\">Central Standard Time</mat-option>\n            <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\n            <mat-option value=\"Mountain Standard Time\">Mountain Standard Time</mat-option>\n            <mat-option value=\"Pacific Standard Time\">Pacific Standard Time</mat-option>\n            <mat-option value=\"Alaska Standard Time\">Alaska Standard Time</mat-option>\n            <mat-option value=\"Hawaii-Aleutian Standard Time\">Hawaii-Aleutian Standard Time</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- News letter start Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Newsletter start date\" formControlName=\"startdate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2></mat-datepicker>\n        </mat-form-field>\n\n        <!-- News letter end Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"Newsletter end date\" formControlName=\"enddate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n          <mat-datepicker #picker3></mat-datepicker>\n        </mat-form-field>\n\n        <!-- NewsLetter reply to email address  -->\n\n        <mat-form-field>\n          <mat-label>Reply address</mat-label>\n          <mat-select matNativeControl required formControlName=\"reply\">\n            <mat-option value=0>Select a sender</mat-option>\n            <mat-option value=\"{{ i._id }}\" *ngFor='let i of sender_name_array'>{{ i.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n\n\n\n\n        <!-- Buttons  -->\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">PREVIEW</button>\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\" (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.dayofweek{border:5px solid #663399;padding:10px}.closecard i{font-size:18px;line-height:27px}.date_wrapper .mat-checkbox{margin-right:15px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditNewsletterlibComponent.ctorParameters = function () { return [
        { type: AmazingTimePickerService },
        { type: NewsTitleService },
        { type: DatePipe },
        { type: CookieService },
        { type: FormBuilder },
        { type: Router }
    ]; };
    AddEditNewsletterlibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddEditNewsletterlibComponent;
}());
export { AddEditNewsletterlibComponent };
if (false) {
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.header_name;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.buttonText;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.group_name_array;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.sender_name_array;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.configData;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.time;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.cookieValue;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.newsForm;
    /**
     * ckeditor start here
     * @type {?}
     */
    AddEditNewsletterlibComponent.prototype.Editor;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.editorConfig;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.model;
    /**
     * @type {?}
     * @private
     */
    AddEditNewsletterlibComponent.prototype.atp;
    /**
     * @type {?}
     * @private
     */
    AddEditNewsletterlibComponent.prototype.newsService;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.datepipe;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.cookieService;
    /**
     * @type {?}
     * @private
     */
    AddEditNewsletterlibComponent.prototype.formBuilder;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvbmV3c2xldHRlci9hZGQtZWRpdC1uZXdzbGV0dGVybGliL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFTLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRCxPQUFPLEtBQUssYUFBYSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFxQyxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsTUFBTSxFQUFtQixNQUFNLGlCQUFpQixDQUFDO0FBRTFEO0lBbUNFLHVDQUFxQixHQUE4QixFQUFVLFdBQThCLEVBQ2xGLFFBQWtCLEVBQVUsYUFBNkIsRUFBVyxXQUF5QixFQUM3RixNQUFlO1FBRkgsUUFBRyxHQUFILEdBQUcsQ0FBMkI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDbEYsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUFXLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBQzdGLFdBQU0sR0FBTixNQUFNLENBQVM7O1FBNUJ4QixnQkFBVyxHQUFLLFlBQVksQ0FBQTtRQUM1QixlQUFVLEdBQUssTUFBTSxDQUFDO1FBQ3RCLHFCQUFnQixHQUFPLEVBQUUsQ0FBQztRQUMxQixzQkFB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QUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztpQkFDbEQ7WUFDSCxDQUFDOzs7O1lBQUUsVUFBQyxLQUFLO2dCQUNQLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1lBQ25ELENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkF2TEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLHM5TUFBc0Q7O2lCQUV2RDs7OztnQkFaUSx3QkFBd0I7Z0JBRXhCLGdCQUFnQjtnQkFDaEIsUUFBUTtnQkFDUixhQUFhO2dCQUNzQixXQUFXO2dCQUM5QyxNQUFNOzs7eUJBZ0NWLEtBQUs7O0lBMEpWLG9DQUFDO0NBQUEsQUF4TEQsSUF3TEM7U0FuTFksNkJBQTZCOzs7SUFJeEMsb0RBQTRCOztJQUM1QixtREFBc0I7O0lBQ3RCLHlEQUEwQjs7SUFDMUIsMERBQTJCOztJQUMzQixtREFBZTs7SUFDZiw2Q0FBVTs7SUFDVixvREFBZ0I7O0lBQ2hCLGlEQUFxQjs7Ozs7SUFJbkIsK0NBQThCOztJQUM5QixxREFFRTs7SUFDRiw4Q0FFRTs7Ozs7SUFTUyw0Q0FBc0M7Ozs7O0lBQUUsb0RBQXNDOztJQUN6RixpREFBeUI7O0lBQUcsc0RBQW9DOzs7OztJQUFHLG9EQUFpQzs7SUFDcEcsK0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsSW5wdXQsSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbWF6aW5nVGltZVBpY2tlclNlcnZpY2UgfSBmcm9tICdhbWF6aW5nLXRpbWUtcGlja2VyJztcbmltcG9ydCAqIGFzIENsYXNzaWNFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJztcbmltcG9ydCB7IE5ld3NUaXRsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9uZXdzLXRpdGxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQXJyYXksIEZvcm1CdWlsZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBSb3V0ZXIgLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGQtZWRpdC1uZXdzbGV0dGVybGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PVxuICBoZWFkZXJfbmFtZTphbnk9XCJOZXdzbGV0dGVyXCJcbiAgYnV0dG9uVGV4dDphbnk9XCJTQVZFXCI7XG4gIGdyb3VwX25hbWVfYXJyYXk6YW55ID0gW107XG4gIHNlbmRlcl9uYW1lX2FycmF5OmFueSA9IFtdO1xuICBjb25maWdEYXRhOmFueTtcbiAgdGltZTphbnkgO1xuICBjb29raWVWYWx1ZTphbnk7XG4gIG5ld3NGb3JtIDogRm9ybUdyb3VwO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipja2VkaXRvciBzdGFydCBoZXJlKi9cbiAgICBwdWJsaWMgRWRpdG9yID0gQ2xhc3NpY0VkaXRvcjsgIC8vZm9yIGNrZWRpdG9yXG4gICAgZWRpdG9yQ29uZmlnID0ge1xuICAgICAgcGxhY2Vob2xkZXI6ICdDb250ZW50OicsXG4gICAgfTtcbiAgICBwdWJsaWMgbW9kZWwgPSB7XG4gICAgICBlZGl0b3JEYXRhOiAnJ1xuICAgIH07XG4gICAgLyoqY2tlZGl0b3IgZW5kIGhlcmUqL1xuXG5cbiAgICBASW5wdXQoKVxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgYXRwIDogQW1hemluZ1RpbWVQaWNrZXJTZXJ2aWNlLCBwcml2YXRlIG5ld3NTZXJ2aWNlIDogTmV3c1RpdGxlU2VydmljZSxcbiAgICBwdWJsaWMgZGF0ZXBpcGU6IERhdGVQaXBlICwgcHVibGljIGNvb2tpZVNlcnZpY2UgOiBDb29raWVTZXJ2aWNlICwgcHJpdmF0ZSBmb3JtQnVpbGRlciA6IEZvcm1CdWlsZGVyLFxuICAgIHB1YmxpYyByb3V0ZXIgOiBSb3V0ZXIpIHsgXG5cbiAgICAgXG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYodGhpcy5jb25maWdEYXRhLmFjdGlvbj09J2FkZCcpXG4gICAgdGhpcy50aW1lID0gdGhpcy5kYXRlcGlwZS50cmFuc2Zvcm0obmV3IERhdGUoKSwnaDptbSBhJyk7ICBcblxuICAgICAgIC8vQ2FsbGluZyB0aGUgZ3JvdXAgbmFtZVxuICAgICAgIHRoaXMuZ2V0R3JvdXBOYW1lKCk7XG5cbiAgICAgICAvL0dldCBzZW5kZXIncyBnZXRHcm91cE5hbWVcbiAgICAgICB0aGlzLmdldFNlbmRlckFkZHJlc3MoKTtcbiAgICAgIFxuICAgICAgIC8vR2V0dGluZyB0aGUgY29va2llIHZhbHVlXG4gICAgICAgdGhpcy5jb29raWVWYWx1ZSA9IHRoaXMuY29va2llU2VydmljZS5nZXRBbGwoKTtcblxuICAgICAgLy8gIGNhbGxpbmcgdGhlIGZvcm0gZ2VuZXJhdGlvbiBcbiAgICAgIHRoaXMuZ2VuZXJhdGVGb3JtKCk7XG5cbiAgICAgICB0aGlzLm5ld3NGb3JtLnZhbHVlLmNvb2tpZW1haWwgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdnZXRfZW1haWwnKTtcblxuICAgICAgIC8qU3dpdGNoIGNhc2UqL1xuICAgICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xuICAgICAgICBjYXNlICdhZGQnOlxuICAgICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTVUJNSVRcIjtcbiAgICAgICAgICB0aGlzLmhlYWRlcl9uYW1lID0gXCJBZGQgYSBOZXdzbGV0dGVyXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVUERBVEVcIjsgIFxuICAgICAgICAgIHRoaXMudGltZT1cIlwiO1xuICAgICAgICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKHRoaXMuY29uZmlnRGF0YS5kZWZhdWx0RGF0YSk7ICAgICAgICBcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIFxuXG4gICAgICAgXG4gIH1cblxuICBvcGVuKClcbiAge1xuICAgIGNvbnN0IGFtYXppbmdUaW1lUGlja2VyID0gdGhpcy5hdHAub3BlbigpO1xuICAgIGFtYXppbmdUaW1lUGlja2VyLmFmdGVyQ2xvc2UoKS5zdWJzY3JpYmUodGltZT0+e1xuICAgIH0pO1xuICB9XG5cblxuICAvKmdldHRpbmcgdGhlIGdyb3VwIG5hbWUqL1xuICBnZXRHcm91cE5hbWUoKVxuICB7XG4gICAgdmFyIGRhdGE6YW55ID0geyAnc291cmNlJzp0aGlzLmNvbmZpZ0RhdGEuZ3JvdXBfdGFibGUgfTtcbiAgICB0aGlzLm5ld3NTZXJ2aWNlLmdldERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50MisnZGF0YWxpc3QnLGRhdGEpLnN1YnNjcmliZShyZXNwb25zZT0+e1xuICAgICAgIGxldCByZXN1bHQ6YW55O1xuICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgIHRoaXMuZ3JvdXBfbmFtZV9hcnJheSA9IHJlc3VsdC5yZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKmdldHRpbmcgdGhlIHNlbmRlcidzIGVtYWlsKi9cbiAgZ2V0U2VuZGVyQWRkcmVzcygpXG4gIHtcbiAgICB2YXIgZGF0YTphbnk9eyAnc291cmNlJzp0aGlzLmNvbmZpZ0RhdGEuc2VuZGVyX3RhYmxlfTtcbiAgICB0aGlzLm5ld3NTZXJ2aWNlLmdldERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50MisnZGF0YWxpc3QnLGRhdGEpLnN1YnNjcmliZShyZXNwb25zZT0+e1xuICAgICAgbGV0IHJlc3VsdDphbnk7XG4gICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgIHRoaXMuc2VuZGVyX25hbWVfYXJyYXkgPSByZXN1bHQucmVzO1xuICAgfSk7XG4gIH1cblxuXG4gIC8vZ2VuZXJhdGUgZm9ybVxuICBnZW5lcmF0ZUZvcm0oKXtcbiAgICB0aGlzLm5ld3NGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBuZXdzdGl0bGU6W10sXG4gICAgICBuZXdzc3ViamVjdDpbXSxcbiAgICAgIHNoYXJlX25ld3M6W10sXG4gICAgICBzZW5kZXJhZGRyZXNzOltdLFxuICAgICAgcHVibGlzaGRhdGU6W10sXG4gICAgICBzZXR0aW1lOlt0aGlzLnRpbWVdLFxuICAgICAgY29udGVudDpbXSxcbiAgICAgIHNlbmRuZXdzOltdLFxuICAgICAgbmV3c2ZyZXF1ZW5jeTpbXSxcbiAgICAgIHRpbWVvZmRheTpbdGhpcy50aW1lXSxcbiAgICAgIHRpbWV6b25lOltdLFxuICAgICAgc3RhcnRkYXRlOltdLFxuICAgICAgZW5kZGF0ZTpbXSxcbiAgICAgIHJlcGx5OltdLFxuICAgICAgc3RhdHVzOlsxXVxuICAgIH0pO1xuICB9XG5cblxuXG4gIC8vc2V0dGluZyB0aGUgZGVmYXVsdCB2YWx1ZVxuICBzZXREZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlKSB7XG4gICAgdGhpcy5uZXdzRm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIG5ld3N0aXRsZTpkZWZhdWx0VmFsdWUubmV3c3RpdGxlLFxuICAgICAgbmV3c3N1YmplY3Q6ZGVmYXVsdFZhbHVlLm5ld3NzdWJqZWN0LFxuICAgICAgc2hhcmVfbmV3czpkZWZhdWx0VmFsdWUuc2hhcmVfbmV3cyxcbiAgICAgIHNlbmRlcmFkZHJlc3M6ZGVmYXVsdFZhbHVlLnNlbmRlcmFkZHJlc3MsXG4gICAgICBwdWJsaXNoZGF0ZTpkZWZhdWx0VmFsdWUucHVibGlzaGRhdGUsXG4gICAgICBzZXR0aW1lOmRlZmF1bHRWYWx1ZS5zZXR0aW1lLFxuICAgICAgY29udGVudDpkZWZhdWx0VmFsdWUuY29udGVudCxcbiAgICAgIHNlbmRuZXdzOmRlZmF1bHRWYWx1ZS5zZW5kbmV3cyxcbiAgICAgIG5ld3NmcmVxdWVuY3k6ZGVmYXVsdFZhbHVlLm5ld3NmcmVxdWVuY3ksXG4gICAgICB0aW1lb2ZkYXk6ZGVmYXVsdFZhbHVlLnRpbWVvZmRheSxcbiAgICAgIHRpbWV6b25lOmRlZmF1bHRWYWx1ZS50aW1lem9uZSxcbiAgICAgIHN0YXJ0ZGF0ZTpkZWZhdWx0VmFsdWUuc3RhcnRkYXRlLFxuICAgICAgZW5kZGF0ZTpkZWZhdWx0VmFsdWUuZW5kZGF0ZSxcbiAgICAgIHJlcGx5OmRlZmF1bHRWYWx1ZS5yZXBseVxuICAgICAgXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vc3VibWl0IGZ1bmN0aW9uXG4gIG9uU3VibWl0KCkge1xuXG4gICAgLyogc3RvcCBoZXJlIGlmIGZvcm0gaXMgaW52YWxpZCAqL1xuICAgIGlmICh0aGlzLm5ld3NGb3JtLmludmFsaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBGb3JtXCIpO3JldHVybjtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAvKiBzdGFydCBwcm9jZXNzIHRvIHN1Ym1pdGVkIGRhdGEgKi9cbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24odGhpcy5uZXdzRm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbiksXG4gICAgICAgIFwic291cmNlb2JqXCI6IFtcInNoYXJlX25ld3NcIixcInNlbmRlcmFkZHJlc3NcIl1cbiAgICAgIH07XG4gICAgICB0aGlzLm5ld3NTZXJ2aWNlLmFkZERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50LCBwb3N0RGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICBcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jb25maWdEYXRhLmNhbGxCYWNrXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XG4gICAgICAgIH1cbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19