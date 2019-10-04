/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
export class ListingBlogmanagementlibComponent {
    // ---------------------------------------------------------------------------------
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
        this.apiService = apiService;
        this.loader = true;
        // date_search_endpoint is use for All search endpoint
        this.date_search_endpoint = 'datalist';
        // this is a database All search collection or view name
        this.date_search_source = 'blogs_view';
    }
    // ----------------------------------------------------------------------------
    // --------------------------Lib Listing Input from App------------------------
    /**
     * @param {?} receivedCategoryData
     * @return {?}
     */
    set config(receivedCategoryData) {
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ListingBlogmanagementlibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-listing-blogmanagementlib',
                template: "\n<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\" >\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"blogListingConfig.datasource !=null && blogListingConfig.datasource.length > 0\"\n      [datasource]=\"blogListingConfig.datasource\" [skip]=\"blogListingConfig.listArray_skip\"\n      [modify_header_array]=\"blogListingConfig.listArray_modify_header\" [sourcedata]=\"blogListingConfig.tableName\"\n      [statusarr]=\"blogListingConfig.statusarr\" [jwttoken]=\"blogListingConfig.jwtToken\"\n      [apiurl]=\"blogListingConfig.apiUrl\" [editroute]=\"blogListingConfig.editUrl\"\n      [deleteendpoint]=\"blogListingConfig.deleteEndPoint\"\n      [search_settings]=\"blogListingConfig.search_settings\"\n      [date_search_source]=\"blogListingConfig.tableName2\"  \n      [date_search_endpoint]=\"blogListingConfig.listEndPoint\" >\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <h2 *ngIf=\"blogListingConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                styles: ["body{display:none!important}"]
            }] }
];
/** @nocollapse */
ListingBlogmanagementlibComponent.ctorParameters = () => [
    { type: ApiService }
];
ListingBlogmanagementlibComponent.propDecorators = {
    config: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIvbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVM1QyxNQUFNLE9BQU8saUNBQWlDOzs7OztJQXFFNUMsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWpFbkMsV0FBTSxHQUFZLElBQUksQ0FBQzs7UUFFaEMseUJBQW9CLEdBQU0sVUFBVSxDQUFDOztRQUlyQyx1QkFBa0IsR0FBTSxZQUFZLENBQUM7SUE2RG5DLENBQUM7Ozs7Ozs7SUFyREQsSUFDSSxNQUFNLENBQUMsb0JBQXlCO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHO1lBRXZCLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQyxVQUFVO1lBQ3ZDLFlBQVksRUFBRSxVQUFVO1lBQ3hCLFVBQVUsRUFBRSxvQkFBb0IsQ0FBQyxVQUFVO1lBQzNDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxTQUFTO1lBQ3pDLFVBQVUsRUFBQyxvQkFBb0IsQ0FBQyxVQUFVO1lBQzFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZO2dCQUNsRSxhQUFhLEVBQUMsV0FBVyxFQUFDLFVBQVUsQ0FBQztZQUNyQyx1QkFBdUIsRUFBRTtnQkFDdkIsV0FBVyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsZUFBZTtnQkFDMUQsYUFBYSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRO2dCQUN6RSxXQUFXLEVBQUUsWUFBWSxFQUFDLFVBQVUsRUFBQyxrQkFBa0IsRUFBQyxhQUFhLEVBQUMsYUFBYTtnQkFDbkYsTUFBTSxFQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLGtCQUFrQjthQUVoRjtZQUNELHVCQUF1QixFQUFFLE9BQU87WUFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO1lBQ3JFLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxjQUFjO1lBQzlDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxPQUFPO1lBQ3JDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxRQUFRO1lBQ3ZDLGNBQWMsRUFBRSxvQkFBb0IsQ0FBQyxjQUFjO1lBRWxELGVBQWUsRUFDbkI7Z0JBRUUsVUFBVSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtvQkFDN0QsRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtvQkFDdEQsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzNDO1NBVUMsQ0FBQTtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFXRCxRQUFRO0lBRVIsQ0FBQzs7O1lBaEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6Qyxvc0NBQXlEOzthQUUxRDs7OztZQVJRLFVBQVU7OztxQkEyQmhCLEtBQUs7Ozs7SUFoQk4scURBQXFCOztJQUNyQiw4REFBOEI7O0lBQzlCLG1EQUE4Qjs7SUFFaEMsaUVBQXFDOztJQUlyQywrREFBcUM7Ozs7O0lBMkR2Qix1REFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ0Jsb2dtYW5hZ2VtZW50bGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXZhcmlhYmxlIGRlY2xhcmF0aW9ucy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHB1YmxpYyBibG9nRGF0YTogYW55O1xuICBwdWJsaWMgYmxvZ0xpc3RpbmdDb25maWc6IGFueTtcbiAgcHVibGljIGxvYWRlcjogYm9vbGVhbiA9IHRydWU7XG4gIC8vIGRhdGVfc2VhcmNoX2VuZHBvaW50IGlzIHVzZSBmb3IgQWxsIHNlYXJjaCBlbmRwb2ludFxuZGF0ZV9zZWFyY2hfZW5kcG9pbnQ6IGFueT0nZGF0YWxpc3QnO1xuXG5cbi8vIHRoaXMgaXMgYSBkYXRhYmFzZSBBbGwgc2VhcmNoIGNvbGxlY3Rpb24gb3IgdmlldyBuYW1lXG5kYXRlX3NlYXJjaF9zb3VyY2U6IGFueT0nYmxvZ3Nfdmlldyc7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTGliIExpc3RpbmcgSW5wdXQgZnJvbSBBcHAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhyZWNlaXZlZENhdGVnb3J5RGF0YTogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJFTkRcIixyZWNlaXZlZENhdGVnb3J5RGF0YSk7XG4gICAgdGhpcy5ibG9nTGlzdGluZ0NvbmZpZyA9IHtcbiAgICAgIFxuICAgICAgYXBpVXJsOiByZWNlaXZlZENhdGVnb3J5RGF0YS5hcGlCYXNlVXJsLFxuICAgICAgbGlzdEVuZFBvaW50OiBcImRhdGFsaXN0XCIsXG4gICAgICBkYXRhc291cmNlOiByZWNlaXZlZENhdGVnb3J5RGF0YS5kYXRhc291cmNlLFxuICAgICAgdGFibGVOYW1lOiByZWNlaXZlZENhdGVnb3J5RGF0YS50YWJsZU5hbWUsXG4gICAgICB0YWJsZU5hbWUyOnJlY2VpdmVkQ2F0ZWdvcnlEYXRhLnRhYmxlTmFtZTIsXG4gICAgICBsaXN0QXJyYXlfc2tpcDogW1wiX2lkXCIsIFwidXNlcklkXCIsIFwiY3JlYXRlZF9hdFwiLCBcImlkXCIsIFwidXBkYXRlZF9hdFwiLFxuICAgICAgXCJibG9nY29udGVudFwiLFwibWV0YXRpdGxlXCIsXCJtZXRhZGVzY1wiXSxcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7XG4gICAgICAgIFwiYmxvZ3RpdGxlXCI6IFwiQmxvZyBUaXRsZVwiLCBcImJsb2djYXRlZ29yeVwiOiBcIkJsb2cgQ2F0ZWdvcnlcIixcbiAgICAgICAgXCJibG9nY29udGVudFwiOiBcIkJsb2cgQ29udGVudFwiLCBcInByaW9yaXR5XCI6IFwiUHJpb3JpdHlcIiwgXCJzdGF0dXNcIjogXCJTdGF0dXNcIixcbiAgICAgICAgXCJtZXRhdGl0bGVcIjogXCJNZXRhIFRpdGxlXCIsXCJtZXRhZGVzY1wiOlwiTWV0YSBEZXNjcmlwdGlvblwiLFwiY3JlZGVudGlhbHNcIjpcIkNyZWRlbnRpYWxzXCIsXG4gICAgICAgIFwidGFnc1wiOlwiTnVtYmVyIG9mIHRhZ3NcIixcInB1YmxpY2F0aW9uXCI6XCJQdWJsaWNhdGlvblwiLFwidmlkZW9zXCI6XCJOdW1iZXIgb2YgdmlkZW9zXCJcbiAgICAgICAgXG4gICAgICB9LCAgIFxuICAgICAgYWRtaW50YWJsZW5hbWVUYWJsZU5hbWU6IFwiYWRtaW5cIixcbiAgICAgIHN0YXR1c2FycjogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dLFxuICAgICAgdXBkYXRldXJsOiByZWNlaXZlZENhdGVnb3J5RGF0YS51cGRhdGVFbmRwb2ludCxcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkQ2F0ZWdvcnlEYXRhLmVkaXRVcmwsXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWRDYXRlZ29yeURhdGEuand0VG9rZW4sXG4gICAgICBkZWxldGVFbmRQb2ludDogcmVjZWl2ZWRDYXRlZ29yeURhdGEuZGVsZXRlRW5kUG9pbnQsXG4gICAgIFxuICAgICAgIHNlYXJjaF9zZXR0aW5nczogXG4gICB7XG4gICAgIFxuICAgICB0ZXh0c2VhcmNoOiBbeyBsYWJlbDogXCJTZWFyY2ggQnkgVGl0bGVcIiwgZmllbGQ6ICdibG9ndGl0bGUnIH0sXG4gICAgIHsgbGFiZWw6IFwiU2VhcmNoIEJ5IEJsb2cgQ2F0ZWdvcnlcIiwgZmllbGQ6ICdibG9nY2F0JyB9LFxuICAgICB7IGxhYmVsOiBcIlNlYXJjaCBCeSBUYWdzXCIsIGZpZWxkOid0YWdzJyB9XSxcbiAgIH0sXG4gICAgIFxuICAgIFxuICAgXG4gICAgLy8gICBzZWFyY2hfc2V0dGluZ3M6e1xuICAgIC8vICAgICB0ZXh0c2VhcmNoOlt7bGFiZWw6XCJTZWFyY2ggQnkgQmxvZyB0aXRsZVwiLGZpZWxkOidibG9ndGl0bGUnfSxcbiAgICAvLyAgICAge2xhYmVsOlwiU2VhcmNoIEJ5IEJsb2cgQ2F0ZWdvcnlcIixmaWVsZDonYmxvZ2NhdCd9LFxuICAgIC8vICAgICB7bGFiZWw6XCJTZWFyY2ggQnkgVGFnc1wiLGZpZWxkOid0YWdzJ31dLFxuICAgIC8vICAgICBkYXRlc2VhcmNoOlt7c3RhcnRkYXRlbGFiZWw6XCJTdGFydCBEYXRlXCIsZW5kZGF0ZWxhYmVsOlwiRW5kIERhdGVcIixzdWJtaXQ6XCJTZWFyY2ggQnkgRGF0ZVwiLCAgZmllbGQ6XCJjcmVhdGVkX2F0XCJ9XSwgICAgICAgICAgICAgICAgXG4gICAgLy8gfVxuICAgIH1cbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cbn0iXX0=