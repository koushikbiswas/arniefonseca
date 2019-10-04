/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';
var BlogComponent = /** @class */ (function () {
    function BlogComponent(router, apiService, activeroute) {
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
    Object.defineProperty(BlogComponent.prototype, "BlogapiUrl", {
        /**lib-listing end here**/
        set: /**
         * lib-listing end here*
         * @param {?} apivalue
         * @return {?}
         */
        function (apivalue) {
            this.apiUrlviaApp = (apivalue) || '<no name set>';
            this.apiUrlviaApp = apivalue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "BlogToken", {
        set: /**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            this.tokenViapp = (token) || '<no name set>';
            this.tokenViapp = token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "addTeammember", {
        set: /**
         * @param {?} addvalue
         * @return {?}
         */
        function (addvalue) {
            this.addMemberviaUrl = (addvalue) || '<no name set>';
            this.addMemberviaUrl = addvalue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "Blogtable", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.Blogtablename = (value) || '<no name set>';
            this.Blogtablename = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "editblog", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.editRouteUrl = (value) || '<no name set>';
            this.editRouteUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "AddEditBlog", {
        set: /**
         * @param {?} addeditvalue
         * @return {?}
         */
        function (addeditvalue) {
            this.addupdateRouteUrl = (addeditvalue) || '<no name set>';
            this.addupdateRouteUrl = addeditvalue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "deleteBlog", {
        set: /**
         * @param {?} delValue
         * @return {?}
         */
        function (delValue) {
            this.deleteRouteUrl = (delValue) || '<no name set>';
            this.deleteRouteUrl = delValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "getDataEndpoint", {
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
    Object.defineProperty(BlogComponent.prototype, "getDataSource", {
        set: /**
         * @param {?} serverUrlval
         * @return {?}
         */
        function (serverUrlval) {
            this.getDataSourceData = (serverUrlval) || '<no name set>';
            this.getDataSourceData = serverUrlval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogComponent.prototype, "serverUrl", {
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
    Object.defineProperty(BlogComponent.prototype, "addEndpoint", {
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
    Object.defineProperty(BlogComponent.prototype, "listResolve", {
        set: /**
         * @param {?} listresolveUrlval
         * @return {?}
         */
        function (listresolveUrlval) {
            this.blogDataarray = (listresolveUrlval) || '<no name set>';
            this.blogDataarray = listresolveUrlval;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BlogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /**observable start here**/
        this.apiService.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.serverUrlData);
        }), 50);
        this.apiService.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.addEndpointData);
        }), 50);
        this.apiService.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setgetdataEndpoint(_this.getDataEndpointData);
        }), 50);
        /**observable end here**/
    };
    /***getting all the blog data function start here**/
    /**
     * getting all the blog data function start here*
     * @return {?}
     */
    BlogComponent.prototype.getData = /**
     * getting all the blog data function start here*
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data;
        data = {
            "source": "blog_category_view"
        };
        this.apiService.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var result;
            result = response;
            _this.blogDataarray = result.res;
        }));
    };
    /**function end here**/
    /**
     * function end here*
     * @return {?}
     */
    BlogComponent.prototype.addButton = /**
     * function end here*
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/' + this.addMemberviaUrl);
    };
    BlogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-Blog',
                    template: "<!-- header start here -->\n<mat-card>\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n        <h2 class=\"headerSpan\">Blogs</h2>\n    </mat-toolbar>\n    <!-- header end here -->\n    <!-- add button start here -->\n    <mat-toolbar class=\"buttonsetToolbar\">\n        <button class=\"singleButton\" mat-raised-button color=\"primary\" (click)=\"addButton()\"> Add Blogs</button>\n    </mat-toolbar>\n    <!-- adding button end here -->\n    <!-- applying lib-listing start here -->\n    <mat-card-content class=\"listing-content-admin\">\n        <lib-listing class=\"formfilterdiv formfilterdivnew\" *ngIf=\"blogDataarray.length>0\" [datasource]=\"blogDataarray\"\n            [skip]=\"Bloglist_skip\" [modify_header_array]=\"Bloglist_modify_header\" [sourcedata]=\"Blogtablename\"\n            [statusarr]=\"status\" [editroute]=\"editRouteUrl\" [apiurl]=\"serverUrlData\" [jwttoken]=\"tokenViapp\"\n            [deleteendpoint]=\"deleteRouteUrl\" [updateendpoint]=\"addupdateRouteUrl\">\n        </lib-listing>\n        <!-- applying lib-listing end here -->\n\n    </mat-card-content>\n</mat-card>",
                    styles: [".example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.headerSpan{text-align:center;display:block;margin:auto}.darkToolbar{background-color:#000}.gridListWrapper{padding:30px}.buttonsetToolbar{background-color:#f4f3f8;text-align:center;display:block;padding-top:10px}.singleButton{margin:5px;float:right}.example-form{min-width:150px;max-width:500px;width:100%}.example-full-width{width:100%}td{padding-right:8px}"]
                }] }
    ];
    /** @nocollapse */
    BlogComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ApiService },
        { type: ActivatedRoute }
    ]; };
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
    return BlogComponent;
}());
export { BlogComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2Jsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQXdCLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBa0dFLHVCQUFtQixNQUFjLEVBQ3hCLFVBQXNCLEVBQVMsV0FBMkI7UUFEaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN4QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBM0Y1RCxvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQUMxQixpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUN2QixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixzQkFBaUIsR0FBUSxFQUFFLENBQUM7UUFLNUIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsZUFBVSxHQUFLLEVBQUUsQ0FBQTs7OztRQUVqQixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixrQkFBYSxHQUFRLENBQUMsS0FBSyxFQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNDLDJCQUFzQixHQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYTtZQUNqRixvQkFBb0IsRUFBRSxpQkFBaUIsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUUsQ0FBQztRQUMvRSxXQUFNLEdBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFN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LENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQTdJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLDJvQ0FBa0M7O2lCQUVuQzs7OztnQkFQOEIsTUFBTTtnQkFDNUIsVUFBVTtnQkFEb0IsY0FBYzs7OzZCQThCbEQsS0FBSzs0QkFLTCxLQUFLO2dDQU1MLEtBQUs7NEJBS0wsS0FBSzsyQkFNTCxLQUFLOzhCQUtMLEtBQUs7NkJBS0wsS0FBSztrQ0FNTCxLQUFLO2dDQU1MLEtBQUs7NEJBTUwsS0FBSzs4QkFPTCxLQUFLOzhCQU1MLEtBQUs7O0lBcURSLG9CQUFDO0NBQUEsQUEvSUQsSUErSUM7U0ExSVksYUFBYTs7Ozs7O0lBRXhCLHdDQUE0Qjs7SUFDNUIsd0NBQWlDOztJQUNqQyxxQ0FBOEI7O0lBQzlCLHNDQUErQjs7SUFDL0IsdUNBQWdDOztJQUNoQywwQ0FBbUM7O0lBQ25DLHNDQUEwQjs7SUFDMUIsNENBQWdDOztJQUNoQywwQ0FBOEI7O0lBQzlCLHdDQUE0Qjs7SUFDNUIscUNBQThCOztJQUM5QixtQ0FBd0I7Ozs7O0lBRXhCLHNDQUErQjs7SUFDL0Isc0NBQWtEOztJQUNsRCwrQ0FDc0Y7O0lBQ3RGLCtCQUFvRjs7SUEwRXhFLCtCQUFxQjs7SUFDL0IsbUNBQTZCOztJQUFFLG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMsIFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItQmxvZycsXG4gIHRlbXBsYXRlVXJsOiAnYmxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdHlsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqYmxvZyB2YXJpYWJsZXMgZGVjbGFyYXRpb24qKi9cbiAgcHVibGljIGFkZE1lbWJlcnZpYVVybDogYW55O1xuICBwdWJsaWMgUmVzb2x2ZUxJc3REYXRhOiBhbnkgPSBbXTtcbiAgcHVibGljIGVkaXRSb3V0ZVVybDogYW55ID0gJyc7XG4gIHB1YmxpYyBCbG9ndGFibGVuYW1lOiBhbnkgPSAnJztcbiAgcHVibGljIGRlbGV0ZVJvdXRlVXJsOiBhbnkgPSAnJztcbiAgcHVibGljIGFkZHVwZGF0ZVJvdXRlVXJsOiBhbnkgPSAnJztcbiAgcHVibGljIHNlcnZlclVybERhdGE6IGFueTtcbiAgcHVibGljIGdldERhdGFFbmRwb2ludERhdGE6IGFueTtcbiAgcHVibGljIGdldERhdGFTb3VyY2VEYXRhOiBhbnk7XG4gIHB1YmxpYyBhZGRFbmRwb2ludERhdGE6IGFueTtcbiAgcHVibGljIGFwaVVybHZpYUFwcDogYW55ID0gJyc7XG4gIHB1YmxpYyB0b2tlblZpYXBwOmFueT0nJ1xuICAvKipsaWItbGlzdGluZyBzdGFydCBoZXJlKiovXG4gIHB1YmxpYyBibG9nRGF0YWFycmF5OiBhbnkgPSBbXTtcbiAgcHVibGljIEJsb2dsaXN0X3NraXA6IGFueSA9IFtcIl9pZFwiLFwiZGVzY3JpcHRpb25cIl07XG4gIHB1YmxpYyBCbG9nbGlzdF9tb2RpZnlfaGVhZGVyOiBhbnkgPSB7ICd0aXRsZSc6IFwiVGl0bGVcIiwgJ2Rlc2NyaXB0aW9uJzogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgJ3BhcmVudGNhdGVnb3J5bmFtZSc6IFwiUGFyZW50IENhdGVnb3J5XCIsXCJzdGF0dXNcIjpcIlN0YXR1c1wiLFwicHJpb3JpdHlcIjpcIlByaW9yaXR5XCIgfTtcbiAgcHVibGljIHN0YXR1czogYW55ID0gW3sgdmFsOiAxLCAnbmFtZSc6ICdBY3RpdmUnIH0sIHsgdmFsOiAwLCAnbmFtZSc6ICdJbmFjdGl2ZScgfV07XG4gIC8qKmxpYi1saXN0aW5nIGVuZCBoZXJlKiovXG5cbiAgQElucHV0KCkgIC8vZm9yIGFwaVVybCB2aWEgYXBwbGljYXRpb25cbiAgc2V0IEJsb2dhcGlVcmwoYXBpdmFsdWU6IGFueSkge1xuICAgIHRoaXMuYXBpVXJsdmlhQXBwID0gKGFwaXZhbHVlKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5hcGlVcmx2aWFBcHAgPSBhcGl2YWx1ZTtcbiAgfVxuICBASW5wdXQoKSAgLy9mb3IgdG9rZW4gdmlhIGFwcGxpY2F0aW9uXG4gIHNldCBCbG9nVG9rZW4odG9rZW46IGFueSkge1xuICAgIHRoaXMudG9rZW5WaWFwcCA9ICh0b2tlbikgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMudG9rZW5WaWFwcCA9IHRva2VuO1xuICB9XG5cbiAgQElucHV0KCkgIC8vZm9yIGFkZCBidXR0b25cbiAgc2V0IGFkZFRlYW1tZW1iZXIoYWRkdmFsdWU6IGFueSkge1xuICAgIHRoaXMuYWRkTWVtYmVydmlhVXJsID0gKGFkZHZhbHVlKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5hZGRNZW1iZXJ2aWFVcmwgPSBhZGR2YWx1ZTtcbiAgfVxuICBASW5wdXQoKSAgIC8vVGFibGVuYW1lIGZyb20gYXBwbGljYXRpb25cbiAgc2V0IEJsb2d0YWJsZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5CbG9ndGFibGVuYW1lID0gKHZhbHVlKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5CbG9ndGFibGVuYW1lID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSAvL2ZvciBlZGl0IHJvdXRlXG4gIHNldCBlZGl0YmxvZyh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5lZGl0Um91dGVVcmwgPSAodmFsdWUpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmVkaXRSb3V0ZVVybCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpICAvL2ZvciBhZGQgb3IgdXBkYXRlIGVuZHBvaW50XG4gIHNldCBBZGRFZGl0QmxvZyhhZGRlZGl0dmFsdWU6IGFueSkge1xuICAgIHRoaXMuYWRkdXBkYXRlUm91dGVVcmwgPSAoYWRkZWRpdHZhbHVlKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5hZGR1cGRhdGVSb3V0ZVVybCA9IGFkZGVkaXR2YWx1ZVxuICB9XG4gIEBJbnB1dCgpICAgICAvL2ZvciBkZWxldGVFbmRwb2ludFxuICBzZXQgZGVsZXRlQmxvZyhkZWxWYWx1ZTogYW55KSB7XG4gICAgdGhpcy5kZWxldGVSb3V0ZVVybCA9IChkZWxWYWx1ZSkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZGVsZXRlUm91dGVVcmwgPSBkZWxWYWx1ZVxuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy9zZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgZ2V0RGF0YUVuZHBvaW50KGVuZHBvaW50VXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmdldERhdGFFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmdldERhdGFFbmRwb2ludERhdGEgPSBlbmRwb2ludFVybHZhbDtcblxuICB9XG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGdldERhdGFTb3VyY2Uoc2VydmVyVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmdldERhdGFTb3VyY2VEYXRhID0gKHNlcnZlclVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZ2V0RGF0YVNvdXJjZURhdGEgPSBzZXJ2ZXJVcmx2YWw7XG5cbiAgfVxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlclVybERhdGEgPSAoc2VydmVyVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zZXJ2ZXJVcmxEYXRhID0gc2VydmVyVXJsdmFsO1xuXG5cbiAgfVxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBhZGRFbmRwb2ludChlbmRwb2ludFVybHZhbDogYW55KSB7XG4gICAgdGhpcy5hZGRFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IGVuZHBvaW50VXJsdmFsO1xuXG4gIH1cbiAgQElucHV0KCkgICAgICAgICAgLy9yZXNvbHZlIGxpc3RcbiAgc2V0IGxpc3RSZXNvbHZlKGxpc3RyZXNvbHZlVXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmJsb2dEYXRhYXJyYXkgPSAobGlzdHJlc29sdmVVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmJsb2dEYXRhYXJyYXkgPSBsaXN0cmVzb2x2ZVVybHZhbDtcbiAgICBcbiAgICBcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSwgcHVibGljIGFjdGl2ZXJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvKipvYnNlcnZhYmxlIHN0YXJ0IGhlcmUqKi9cbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJTZXJ2ZXJVcmwoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVcmxEYXRhKTtcbiAgICB9LCA1MCk7XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmFkZEVuZHBvaW50RGF0YSk7XG4gICAgfSwgNTApO1xuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmdldGRhdGFFbmRwb2ludCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldGdldGRhdGFFbmRwb2ludCh0aGlzLmdldERhdGFFbmRwb2ludERhdGEpO1xuICAgIH0sIDUwKTtcbiAgICAvKipvYnNlcnZhYmxlIGVuZCBoZXJlKiovXG4gICAgXG4gIH1cbiAgLyoqKmdldHRpbmcgYWxsIHRoZSBibG9nIGRhdGEgZnVuY3Rpb24gc3RhcnQgaGVyZSoqL1xuXG4gIGdldERhdGEoKSB7XG5cbiAgICBsZXQgZGF0YTogYW55O1xuICAgIGRhdGEgPSB7XG4gICAgICBcInNvdXJjZVwiOiBcImJsb2dfY2F0ZWdvcnlfdmlld1wiXG4gICAgfVxuICAgIHRoaXMuYXBpU2VydmljZS5nZXREYXRhKGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgIHRoaXMuYmxvZ0RhdGFhcnJheSA9IHJlc3VsdC5yZXM7XG4gICAgICBcblxuICAgIH0pXG5cbiAgfVxuICAgLyoqZnVuY3Rpb24gZW5kIGhlcmUqKi9cbiBcbiAgYWRkQnV0dG9uKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycrdGhpcy5hZGRNZW1iZXJ2aWFVcmwpO1xuICB9XG4gXG59XG4iXX0=