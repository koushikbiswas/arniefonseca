/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';
export class BlogComponent {
    /**
     * @param {?} router
     * @param {?} apiService
     * @param {?} activeroute
     */
    constructor(router, apiService, activeroute) {
        this.router = router;
        this.apiService = apiService;
        this.activeroute = activeroute;
        this.ResolveLIstData = [];
        this.editRouteUrl = '';
        this.Blogtablename = '';
        this.deleteRouteUrl = '';
        this.addupdateRouteUrl = '';
        this.apiUrlviaApp = '';
        this.tokenViapp = '';
        /**
         * lib-listing start here*
         */
        this.blogDataarray = [];
        this.Bloglist_skip = ["_id", "description"];
        this.Bloglist_modify_header = { 'title': "Title", 'description': "Description",
            'parentcategoryname': "Parent Category", "status": "Status", "priority": "Priority" };
        this.status = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
    }
    /**
     * lib-listing end here*
     * @param {?} apivalue
     * @return {?}
     */
    set BlogapiUrl(apivalue) {
        this.apiUrlviaApp = (apivalue) || '<no name set>';
        this.apiUrlviaApp = apivalue;
    }
    /**
     * @param {?} token
     * @return {?}
     */
    set BlogToken(token) {
        this.tokenViapp = (token) || '<no name set>';
        this.tokenViapp = token;
    }
    /**
     * @param {?} addvalue
     * @return {?}
     */
    set addTeammember(addvalue) {
        this.addMemberviaUrl = (addvalue) || '<no name set>';
        this.addMemberviaUrl = addvalue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Blogtable(value) {
        this.Blogtablename = (value) || '<no name set>';
        this.Blogtablename = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set editblog(value) {
        this.editRouteUrl = (value) || '<no name set>';
        this.editRouteUrl = value;
    }
    /**
     * @param {?} addeditvalue
     * @return {?}
     */
    set AddEditBlog(addeditvalue) {
        this.addupdateRouteUrl = (addeditvalue) || '<no name set>';
        this.addupdateRouteUrl = addeditvalue;
    }
    /**
     * @param {?} delValue
     * @return {?}
     */
    set deleteBlog(delValue) {
        this.deleteRouteUrl = (delValue) || '<no name set>';
        this.deleteRouteUrl = delValue;
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
     * @param {?} serverUrlval
     * @return {?}
     */
    set getDataSource(serverUrlval) {
        this.getDataSourceData = (serverUrlval) || '<no name set>';
        this.getDataSourceData = serverUrlval;
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
    set addEndpoint(endpointUrlval) {
        this.addEndpointData = (endpointUrlval) || '<no name set>';
        this.addEndpointData = endpointUrlval;
    }
    /**
     * @param {?} listresolveUrlval
     * @return {?}
     */
    set listResolve(listresolveUrlval) {
        this.blogDataarray = (listresolveUrlval) || '<no name set>';
        this.blogDataarray = listresolveUrlval;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /**observable start here**/
        this.apiService.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setServerUrl(this.serverUrlData);
        }), 50);
        this.apiService.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setaddEndpoint(this.addEndpointData);
        }), 50);
        this.apiService.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setgetdataEndpoint(this.getDataEndpointData);
        }), 50);
        /**observable end here**/
    }
    /**
     * getting all the blog data function start here*
     * @return {?}
     */
    getData() {
        /** @type {?} */
        let data;
        data = {
            "source": "blog_category_view"
        };
        this.apiService.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            /** @type {?} */
            let result;
            result = response;
            this.blogDataarray = result.res;
        }));
    }
    /**
     * function end here*
     * @return {?}
     */
    addButton() {
        this.router.navigateByUrl('/' + this.addMemberviaUrl);
    }
}
BlogComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-Blog',
                template: "<!-- header start here -->\n<mat-card>\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n        <h2 class=\"headerSpan\">Blogs</h2>\n    </mat-toolbar>\n    <!-- header end here -->\n    <!-- add button start here -->\n    <mat-toolbar class=\"buttonsetToolbar\">\n        <button class=\"singleButton\" mat-raised-button color=\"primary\" (click)=\"addButton()\"> Add Blogs</button>\n    </mat-toolbar>\n    <!-- adding button end here -->\n    <!-- applying lib-listing start here -->\n    <mat-card-content class=\"listing-content-admin\">\n        <lib-listing class=\"formfilterdiv formfilterdivnew\" *ngIf=\"blogDataarray.length>0\" [datasource]=\"blogDataarray\"\n            [skip]=\"Bloglist_skip\" [modify_header_array]=\"Bloglist_modify_header\" [sourcedata]=\"Blogtablename\"\n            [statusarr]=\"status\" [editroute]=\"editRouteUrl\" [apiurl]=\"serverUrlData\" [jwttoken]=\"tokenViapp\"\n            [deleteendpoint]=\"deleteRouteUrl\" [updateendpoint]=\"addupdateRouteUrl\">\n        </lib-listing>\n        <!-- applying lib-listing end here -->\n\n    </mat-card-content>\n</mat-card>",
                styles: [".example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.headerSpan{text-align:center;display:block;margin:auto}.darkToolbar{background-color:#000}.gridListWrapper{padding:30px}.buttonsetToolbar{background-color:#f4f3f8;text-align:center;display:block;padding-top:10px}.singleButton{margin:5px;float:right}.example-form{min-width:150px;max-width:500px;width:100%}.example-full-width{width:100%}td{padding-right:8px}"]
            }] }
];
/** @nocollapse */
BlogComponent.ctorParameters = () => [
    { type: Router },
    { type: ApiService },
    { type: ActivatedRoute }
];
BlogComponent.propDecorators = {
    BlogapiUrl: [{ type: Input }],
    BlogToken: [{ type: Input }],
    addTeammember: [{ type: Input }],
    Blogtable: [{ type: Input }],
    editblog: [{ type: Input }],
    AddEditBlog: [{ type: Input }],
    deleteBlog: [{ type: Input }],
    getDataEndpoint: [{ type: Input }],
    getDataSource: [{ type: Input }],
    serverUrl: [{ type: Input }],
    addEndpoint: [{ type: Input }],
    listResolve: [{ type: Input }]
};
if (false) {
    /**
     * blog variables declaration*
     * @type {?}
     */
    BlogComponent.prototype.addMemberviaUrl;
    /** @type {?} */
    BlogComponent.prototype.ResolveLIstData;
    /** @type {?} */
    BlogComponent.prototype.editRouteUrl;
    /** @type {?} */
    BlogComponent.prototype.Blogtablename;
    /** @type {?} */
    BlogComponent.prototype.deleteRouteUrl;
    /** @type {?} */
    BlogComponent.prototype.addupdateRouteUrl;
    /** @type {?} */
    BlogComponent.prototype.serverUrlData;
    /** @type {?} */
    BlogComponent.prototype.getDataEndpointData;
    /** @type {?} */
    BlogComponent.prototype.getDataSourceData;
    /** @type {?} */
    BlogComponent.prototype.addEndpointData;
    /** @type {?} */
    BlogComponent.prototype.apiUrlviaApp;
    /** @type {?} */
    BlogComponent.prototype.tokenViapp;
    /**
     * lib-listing start here*
     * @type {?}
     */
    BlogComponent.prototype.blogDataarray;
    /** @type {?} */
    BlogComponent.prototype.Bloglist_skip;
    /** @type {?} */
    BlogComponent.prototype.Bloglist_modify_header;
    /** @type {?} */
    BlogComponent.prototype.status;
    /** @type {?} */
    BlogComponent.prototype.router;
    /** @type {?} */
    BlogComponent.prototype.apiService;
    /** @type {?} */
    BlogComponent.prototype.activeroute;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2Jsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQXdCLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzNDLE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUE2RnhCLFlBQW1CLE1BQWMsRUFDeEIsVUFBc0IsRUFBUyxXQUEyQjtRQURoRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUEzRjVELG9CQUFlLEdBQVEsRUFBRSxDQUFDO1FBQzFCLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBQ3hCLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLHNCQUFpQixHQUFRLEVBQUUsQ0FBQztRQUs1QixpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUN2QixlQUFVLEdBQUssRUFBRSxDQUFBOzs7O1FBRWpCLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBQ3hCLGtCQUFhLEdBQVEsQ0FBQyxLQUFLLEVBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0MsMkJBQXNCLEdBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhO1lBQ2pGLG9CQUFvQixFQUFFLGlCQUFpQixFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9FLFdBQU0sR0FBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFH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TCxLQUFLO3VCQU1MLEtBQUs7MEJBS0wsS0FBSzt5QkFLTCxLQUFLOzhCQU1MLEtBQUs7NEJBTUwsS0FBSzt3QkFNTCxLQUFLOzBCQU9MLEtBQUs7MEJBTUwsS0FBSzs7Ozs7OztJQW5GTix3Q0FBNEI7O0lBQzVCLHdDQUFpQzs7SUFDakMscUNBQThCOztJQUM5QixzQ0FBK0I7O0lBQy9CLHVDQUFnQzs7SUFDaEMsMENBQW1DOztJQUNuQyxzQ0FBMEI7O0lBQzFCLDRDQUFnQzs7SUFDaEMsMENBQThCOztJQUM5Qix3Q0FBNEI7O0lBQzVCLHFDQUE4Qjs7SUFDOUIsbUNBQXdCOzs7OztJQUV4QixzQ0FBK0I7O0lBQy9CLHNDQUFrRDs7SUFDbEQsK0NBQ3NGOztJQUN0RiwrQkFBb0Y7O0lBMEV4RSwrQkFBcUI7O0lBQy9CLG1DQUE2Qjs7SUFBRSxvQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzLCBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLUJsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2Jsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3R5bGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKmJsb2cgdmFyaWFibGVzIGRlY2xhcmF0aW9uKiovXG4gIHB1YmxpYyBhZGRNZW1iZXJ2aWFVcmw6IGFueTtcbiAgcHVibGljIFJlc29sdmVMSXN0RGF0YTogYW55ID0gW107XG4gIHB1YmxpYyBlZGl0Um91dGVVcmw6IGFueSA9ICcnO1xuICBwdWJsaWMgQmxvZ3RhYmxlbmFtZTogYW55ID0gJyc7XG4gIHB1YmxpYyBkZWxldGVSb3V0ZVVybDogYW55ID0gJyc7XG4gIHB1YmxpYyBhZGR1cGRhdGVSb3V0ZVVybDogYW55ID0gJyc7XG4gIHB1YmxpYyBzZXJ2ZXJVcmxEYXRhOiBhbnk7XG4gIHB1YmxpYyBnZXREYXRhRW5kcG9pbnREYXRhOiBhbnk7XG4gIHB1YmxpYyBnZXREYXRhU291cmNlRGF0YTogYW55O1xuICBwdWJsaWMgYWRkRW5kcG9pbnREYXRhOiBhbnk7XG4gIHB1YmxpYyBhcGlVcmx2aWFBcHA6IGFueSA9ICcnO1xuICBwdWJsaWMgdG9rZW5WaWFwcDphbnk9JydcbiAgLyoqbGliLWxpc3Rpbmcgc3RhcnQgaGVyZSoqL1xuICBwdWJsaWMgYmxvZ0RhdGFhcnJheTogYW55ID0gW107XG4gIHB1YmxpYyBCbG9nbGlzdF9za2lwOiBhbnkgPSBbXCJfaWRcIixcImRlc2NyaXB0aW9uXCJdO1xuICBwdWJsaWMgQmxvZ2xpc3RfbW9kaWZ5X2hlYWRlcjogYW55ID0geyAndGl0bGUnOiBcIlRpdGxlXCIsICdkZXNjcmlwdGlvbic6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICdwYXJlbnRjYXRlZ29yeW5hbWUnOiBcIlBhcmVudCBDYXRlZ29yeVwiLFwic3RhdHVzXCI6XCJTdGF0dXNcIixcInByaW9yaXR5XCI6XCJQcmlvcml0eVwiIH07XG4gIHB1YmxpYyBzdGF0dXM6IGFueSA9IFt7IHZhbDogMSwgJ25hbWUnOiAnQWN0aXZlJyB9LCB7IHZhbDogMCwgJ25hbWUnOiAnSW5hY3RpdmUnIH1dO1xuICAvKipsaWItbGlzdGluZyBlbmQgaGVyZSoqL1xuXG4gIEBJbnB1dCgpICAvL2ZvciBhcGlVcmwgdmlhIGFwcGxpY2F0aW9uXG4gIHNldCBCbG9nYXBpVXJsKGFwaXZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmFwaVVybHZpYUFwcCA9IChhcGl2YWx1ZSkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuYXBpVXJsdmlhQXBwID0gYXBpdmFsdWU7XG4gIH1cbiAgQElucHV0KCkgIC8vZm9yIHRva2VuIHZpYSBhcHBsaWNhdGlvblxuICBzZXQgQmxvZ1Rva2VuKHRva2VuOiBhbnkpIHtcbiAgICB0aGlzLnRva2VuVmlhcHAgPSAodG9rZW4pIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnRva2VuVmlhcHAgPSB0b2tlbjtcbiAgfVxuXG4gIEBJbnB1dCgpICAvL2ZvciBhZGQgYnV0dG9uXG4gIHNldCBhZGRUZWFtbWVtYmVyKGFkZHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmFkZE1lbWJlcnZpYVVybCA9IChhZGR2YWx1ZSkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuYWRkTWVtYmVydmlhVXJsID0gYWRkdmFsdWU7XG4gIH1cbiAgQElucHV0KCkgICAvL1RhYmxlbmFtZSBmcm9tIGFwcGxpY2F0aW9uXG4gIHNldCBCbG9ndGFibGUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuQmxvZ3RhYmxlbmFtZSA9ICh2YWx1ZSkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuQmxvZ3RhYmxlbmFtZSA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KCkgLy9mb3IgZWRpdCByb3V0ZVxuICBzZXQgZWRpdGJsb2codmFsdWU6IGFueSkge1xuICAgIHRoaXMuZWRpdFJvdXRlVXJsID0gKHZhbHVlKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5lZGl0Um91dGVVcmwgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKSAgLy9mb3IgYWRkIG9yIHVwZGF0ZSBlbmRwb2ludFxuICBzZXQgQWRkRWRpdEJsb2coYWRkZWRpdHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmFkZHVwZGF0ZVJvdXRlVXJsID0gKGFkZGVkaXR2YWx1ZSkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuYWRkdXBkYXRlUm91dGVVcmwgPSBhZGRlZGl0dmFsdWVcbiAgfVxuICBASW5wdXQoKSAgICAgLy9mb3IgZGVsZXRlRW5kcG9pbnRcbiAgc2V0IGRlbGV0ZUJsb2coZGVsVmFsdWU6IGFueSkge1xuICAgIHRoaXMuZGVsZXRlUm91dGVVcmwgPSAoZGVsVmFsdWUpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmRlbGV0ZVJvdXRlVXJsID0gZGVsVmFsdWVcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGdldERhdGFFbmRwb2ludChlbmRwb2ludFVybHZhbDogYW55KSB7XG4gICAgdGhpcy5nZXREYXRhRW5kcG9pbnREYXRhID0gKGVuZHBvaW50VXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5nZXREYXRhRW5kcG9pbnREYXRhID0gZW5kcG9pbnRVcmx2YWw7XG5cbiAgfVxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBnZXREYXRhU291cmNlKHNlcnZlclVybHZhbDogYW55KSB7XG4gICAgdGhpcy5nZXREYXRhU291cmNlRGF0YSA9IChzZXJ2ZXJVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmdldERhdGFTb3VyY2VEYXRhID0gc2VydmVyVXJsdmFsO1xuXG4gIH1cbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybHZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVcmxEYXRhID0gKHNlcnZlclVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuc2VydmVyVXJsRGF0YSA9IHNlcnZlclVybHZhbDtcblxuXG4gIH1cbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgYWRkRW5kcG9pbnQoZW5kcG9pbnRVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gKGVuZHBvaW50VXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5hZGRFbmRwb2ludERhdGEgPSBlbmRwb2ludFVybHZhbDtcblxuICB9XG4gIEBJbnB1dCgpICAgICAgICAgIC8vcmVzb2x2ZSBsaXN0XG4gIHNldCBsaXN0UmVzb2x2ZShsaXN0cmVzb2x2ZVVybHZhbDogYW55KSB7XG4gICAgdGhpcy5ibG9nRGF0YWFycmF5ID0gKGxpc3RyZXNvbHZlVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5ibG9nRGF0YWFycmF5ID0gbGlzdHJlc29sdmVVcmx2YWw7XG4gICAgXG4gICAgXG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHB1YmxpYyBhY3RpdmVyb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLyoqb2JzZXJ2YWJsZSBzdGFydCBoZXJlKiovXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVXJsRGF0YSk7XG4gICAgfSwgNTApO1xuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludERhdGEpO1xuICAgIH0sIDUwKTtcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJnZXRkYXRhRW5kcG9pbnQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRnZXRkYXRhRW5kcG9pbnQodGhpcy5nZXREYXRhRW5kcG9pbnREYXRhKTtcbiAgICB9LCA1MCk7XG4gICAgLyoqb2JzZXJ2YWJsZSBlbmQgaGVyZSoqL1xuICAgIFxuICB9XG4gIC8qKipnZXR0aW5nIGFsbCB0aGUgYmxvZyBkYXRhIGZ1bmN0aW9uIHN0YXJ0IGhlcmUqKi9cblxuICBnZXREYXRhKCkge1xuXG4gICAgbGV0IGRhdGE6IGFueTtcbiAgICBkYXRhID0ge1xuICAgICAgXCJzb3VyY2VcIjogXCJibG9nX2NhdGVnb3J5X3ZpZXdcIlxuICAgIH1cbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YShkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICB0aGlzLmJsb2dEYXRhYXJyYXkgPSByZXN1bHQucmVzO1xuICAgICAgXG5cbiAgICB9KVxuXG4gIH1cbiAgIC8qKmZ1bmN0aW9uIGVuZCBoZXJlKiovXG4gXG4gIGFkZEJ1dHRvbigpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nK3RoaXMuYWRkTWVtYmVydmlhVXJsKTtcbiAgfVxuIFxufVxuIl19