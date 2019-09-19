/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
var ListingBlogmanagementlibComponent = /** @class */ (function () {
    // ---------------------------------------------------------------------------------
    function ListingBlogmanagementlibComponent(apiService) {
        this.apiService = apiService;
        this.loader = true;
        // date_search_endpoint is use for All search endpoint
        this.date_search_endpoint = 'datalist';
        // this is a database All search collection or view name
        this.date_search_source = 'blogs_view';
    }
    Object.defineProperty(ListingBlogmanagementlibComponent.prototype, "config", {
        // ----------------------------------------------------------------------------
        // --------------------------Lib Listing Input from App------------------------
        set: 
        // ----------------------------------------------------------------------------
        // --------------------------Lib Listing Input from App------------------------
        /**
         * @param {?} receivedCategoryData
         * @return {?}
         */
        function (receivedCategoryData) {
            console.log("END", receivedCategoryData);
            this.blogListingConfig = {
                apiUrl: receivedCategoryData.apiBaseUrl,
                listEndPoint: "datalist",
                datasource: receivedCategoryData.datasource,
                tableName: receivedCategoryData.tableName,
                tableName2: receivedCategoryData.tableName2,
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at",
                    "blogcontent", "metatitle", "metadesc"],
                listArray_modify_header: {
                    "blogtitle": "Blog Title", "blogcategory": "Blog Category",
                    "blogcontent": "Blog Content", "priority": "Priority", "status": "Status",
                    "metatitle": "Meta Title", "metadesc": "Meta Description", "credentials": "Credentials",
                    "tags": "Number of tags", "publication": "Publication", "videos": "Number of videos"
                },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedCategoryData.updateEndpoint,
                editUrl: receivedCategoryData.editUrl,
                jwtToken: receivedCategoryData.jwtToken,
                deleteEndPoint: receivedCategoryData.deleteEndPoint,
                search_settings: {
                    textsearch: [{ label: "Search By Title", field: 'blogtitle' },
                        { label: "Search By Blog Category", field: 'blogcat' },
                        { label: "Search By Tags", field: 'tags' }],
                },
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListingBlogmanagementlibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ListingBlogmanagementlibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing-blogmanagementlib',
                    template: "\n<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\" >\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"blogListingConfig.datasource !=null && blogListingConfig.datasource.length > 0\"\n      [datasource]=\"blogListingConfig.datasource\" [skip]=\"blogListingConfig.listArray_skip\"\n      [modify_header_array]=\"blogListingConfig.listArray_modify_header\" [sourcedata]=\"blogListingConfig.tableName\"\n      [statusarr]=\"blogListingConfig.statusarr\" [jwttoken]=\"blogListingConfig.jwtToken\"\n      [apiurl]=\"blogListingConfig.apiUrl\" [editroute]=\"blogListingConfig.editUrl\"\n      [deleteendpoint]=\"blogListingConfig.deleteEndPoint\"\n      [search_settings]=\"blogListingConfig.search_settings\"\n      [date_search_source]=\"blogListingConfig.tableName2\"  \n      [date_search_endpoint]=\"blogListingConfig.listEndPoint\" >\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <h2 *ngIf=\"blogListingConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: ["body{display:none!important}"]
                }] }
    ];
    /** @nocollapse */
    ListingBlogmanagementlibComponent.ctorParameters = function () { return [
        { type: ApiService }
    ]; };
    ListingBlogmanagementlibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListingBlogmanagementlibComponent;
}());
export { ListingBlogmanagementlibComponent };
if (false) {
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.blogData;
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.blogListingConfig;
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.loader;
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.date_search_endpoint;
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.date_search_source;
    /**
     * @type {?}
     * @private
     */
    ListingBlogmanagementlibComponent.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIvbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk1QztJQW9FRSxvRkFBb0Y7SUFNcEYsMkNBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFqRW5DLFdBQU0sR0FBWSxJQUFJLENBQUM7O1FBRWhDLHlCQUFvQixHQUFNLFVBQVUsQ0FBQzs7UUFJckMsdUJBQWtCLEdBQU0sWUFBWSxDQUFDO0lBNkRuQyxDQUFDO0lBckRELHNCQUNJLHFEQUFNO1FBUlYsK0VBQStFO1FBTS9FLCtFQUErRTs7Ozs7Ozs7UUFDL0UsVUFDVyxvQkFBeUI7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUc7Z0JBRXZCLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQyxVQUFVO2dCQUN2QyxZQUFZLEVBQUUsVUFBVTtnQkFDeEIsVUFBVSxFQUFFLG9CQUFvQixDQUFDLFVBQVU7Z0JBQzNDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxTQUFTO2dCQUN6QyxVQUFVLEVBQUMsb0JBQW9CLENBQUMsVUFBVTtnQkFDMUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVk7b0JBQ2xFLGFBQWEsRUFBQyxXQUFXLEVBQUMsVUFBVSxDQUFDO2dCQUNyQyx1QkFBdUIsRUFBRTtvQkFDdkIsV0FBVyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsZUFBZTtvQkFDMUQsYUFBYSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRO29CQUN6RSxXQUFXLEVBQUUsWUFBWSxFQUFDLFVBQVUsRUFBQyxrQkFBa0IsRUFBQyxhQUFhLEVBQUMsYUFBYTtvQkFDbkYsTUFBTSxFQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLGtCQUFrQjtpQkFFaEY7Z0JBQ0QsdUJBQXVCLEVBQUUsT0FBTztnQkFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO2dCQUNyRSxTQUFTLEVBQUUsb0JBQW9CLENBQUMsY0FBYztnQkFDOUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLE9BQU87Z0JBQ3JDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxRQUFRO2dCQUN2QyxjQUFjLEVBQUUsb0JBQW9CLENBQUMsY0FBYztnQkFFbEQsZUFBZSxFQUNuQjtvQkFFRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO3dCQUM3RCxFQUFFLEtBQUssRUFBRSx5QkFBeUIsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO3dCQUN0RCxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUMsTUFBTSxFQUFFLENBQUM7aUJBQzNDO2FBVUMsQ0FBQTtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOzs7O0lBV0Qsb0RBQVE7OztJQUFSO0lBRUEsQ0FBQzs7Z0JBaEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6Qyxvc0NBQXlEOztpQkFFMUQ7Ozs7Z0JBUlEsVUFBVTs7O3lCQTJCaEIsS0FBSzs7SUEwRFIsd0NBQUM7Q0FBQSxBQWpGRCxJQWlGQztTQTVFWSxpQ0FBaUM7OztJQUU1QyxxREFBcUI7O0lBQ3JCLDhEQUE4Qjs7SUFDOUIsbURBQThCOztJQUVoQyxpRUFBcUM7O0lBSXJDLCtEQUFxQzs7Ozs7SUEyRHZCLHVEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nQmxvZ21hbmFnZW1lbnRsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tdmFyaWFibGUgZGVjbGFyYXRpb25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHVibGljIGJsb2dEYXRhOiBhbnk7XG4gIHB1YmxpYyBibG9nTGlzdGluZ0NvbmZpZzogYW55O1xuICBwdWJsaWMgbG9hZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgLy8gZGF0ZV9zZWFyY2hfZW5kcG9pbnQgaXMgdXNlIGZvciBBbGwgc2VhcmNoIGVuZHBvaW50XG5kYXRlX3NlYXJjaF9lbmRwb2ludDogYW55PSdkYXRhbGlzdCc7XG5cblxuLy8gdGhpcyBpcyBhIGRhdGFiYXNlIEFsbCBzZWFyY2ggY29sbGVjdGlvbiBvciB2aWV3IG5hbWVcbmRhdGVfc2VhcmNoX3NvdXJjZTogYW55PSdibG9nc192aWV3JztcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MaWIgTGlzdGluZyBJbnB1dCBmcm9tIEFwcC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHJlY2VpdmVkQ2F0ZWdvcnlEYXRhOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcIkVORFwiLHJlY2VpdmVkQ2F0ZWdvcnlEYXRhKTtcbiAgICB0aGlzLmJsb2dMaXN0aW5nQ29uZmlnID0ge1xuICAgICAgXG4gICAgICBhcGlVcmw6IHJlY2VpdmVkQ2F0ZWdvcnlEYXRhLmFwaUJhc2VVcmwsXG4gICAgICBsaXN0RW5kUG9pbnQ6IFwiZGF0YWxpc3RcIixcbiAgICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkQ2F0ZWdvcnlEYXRhLmRhdGFzb3VyY2UsXG4gICAgICB0YWJsZU5hbWU6IHJlY2VpdmVkQ2F0ZWdvcnlEYXRhLnRhYmxlTmFtZSxcbiAgICAgIHRhYmxlTmFtZTI6cmVjZWl2ZWRDYXRlZ29yeURhdGEudGFibGVOYW1lMixcbiAgICAgIGxpc3RBcnJheV9za2lwOiBbXCJfaWRcIiwgXCJ1c2VySWRcIiwgXCJjcmVhdGVkX2F0XCIsIFwiaWRcIiwgXCJ1cGRhdGVkX2F0XCIsXG4gICAgICBcImJsb2djb250ZW50XCIsXCJtZXRhdGl0bGVcIixcIm1ldGFkZXNjXCJdLFxuICAgICAgbGlzdEFycmF5X21vZGlmeV9oZWFkZXI6IHtcbiAgICAgICAgXCJibG9ndGl0bGVcIjogXCJCbG9nIFRpdGxlXCIsIFwiYmxvZ2NhdGVnb3J5XCI6IFwiQmxvZyBDYXRlZ29yeVwiLFxuICAgICAgICBcImJsb2djb250ZW50XCI6IFwiQmxvZyBDb250ZW50XCIsIFwicHJpb3JpdHlcIjogXCJQcmlvcml0eVwiLCBcInN0YXR1c1wiOiBcIlN0YXR1c1wiLFxuICAgICAgICBcIm1ldGF0aXRsZVwiOiBcIk1ldGEgVGl0bGVcIixcIm1ldGFkZXNjXCI6XCJNZXRhIERlc2NyaXB0aW9uXCIsXCJjcmVkZW50aWFsc1wiOlwiQ3JlZGVudGlhbHNcIixcbiAgICAgICAgXCJ0YWdzXCI6XCJOdW1iZXIgb2YgdGFnc1wiLFwicHVibGljYXRpb25cIjpcIlB1YmxpY2F0aW9uXCIsXCJ2aWRlb3NcIjpcIk51bWJlciBvZiB2aWRlb3NcIlxuICAgICAgICBcbiAgICAgIH0sICAgXG4gICAgICBhZG1pbnRhYmxlbmFtZVRhYmxlTmFtZTogXCJhZG1pblwiLFxuICAgICAgc3RhdHVzYXJyOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV0sXG4gICAgICB1cGRhdGV1cmw6IHJlY2VpdmVkQ2F0ZWdvcnlEYXRhLnVwZGF0ZUVuZHBvaW50LFxuICAgICAgZWRpdFVybDogcmVjZWl2ZWRDYXRlZ29yeURhdGEuZWRpdFVybCxcbiAgICAgIGp3dFRva2VuOiByZWNlaXZlZENhdGVnb3J5RGF0YS5qd3RUb2tlbixcbiAgICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZENhdGVnb3J5RGF0YS5kZWxldGVFbmRQb2ludCxcbiAgICAgXG4gICAgICAgc2VhcmNoX3NldHRpbmdzOiBcbiAgIHtcbiAgICAgXG4gICAgIHRleHRzZWFyY2g6IFt7IGxhYmVsOiBcIlNlYXJjaCBCeSBUaXRsZVwiLCBmaWVsZDogJ2Jsb2d0aXRsZScgfSxcbiAgICAgeyBsYWJlbDogXCJTZWFyY2ggQnkgQmxvZyBDYXRlZ29yeVwiLCBmaWVsZDogJ2Jsb2djYXQnIH0sXG4gICAgIHsgbGFiZWw6IFwiU2VhcmNoIEJ5IFRhZ3NcIiwgZmllbGQ6J3RhZ3MnIH1dLFxuICAgfSxcbiAgICAgXG4gICAgXG4gICBcbiAgICAvLyAgIHNlYXJjaF9zZXR0aW5nczp7XG4gICAgLy8gICAgIHRleHRzZWFyY2g6W3tsYWJlbDpcIlNlYXJjaCBCeSBCbG9nIHRpdGxlXCIsZmllbGQ6J2Jsb2d0aXRsZSd9LFxuICAgIC8vICAgICB7bGFiZWw6XCJTZWFyY2ggQnkgQmxvZyBDYXRlZ29yeVwiLGZpZWxkOidibG9nY2F0J30sXG4gICAgLy8gICAgIHtsYWJlbDpcIlNlYXJjaCBCeSBUYWdzXCIsZmllbGQ6J3RhZ3MnfV0sXG4gICAgLy8gICAgIGRhdGVzZWFyY2g6W3tzdGFydGRhdGVsYWJlbDpcIlN0YXJ0IERhdGVcIixlbmRkYXRlbGFiZWw6XCJFbmQgRGF0ZVwiLHN1Ym1pdDpcIlNlYXJjaCBCeSBEYXRlXCIsICBmaWVsZDpcImNyZWF0ZWRfYXRcIn1dLCAgICAgICAgICAgICAgICBcbiAgICAvLyB9XG4gICAgfVxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxufSJdfQ==