/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var TestimonialComponent = /** @class */ (function () {
    // ====================================================================================================
    function TestimonialComponent() {
        this.loader = true;
    }
    Object.defineProperty(TestimonialComponent.prototype, "config", {
        // =====================================================================================================
        // ================================================Input For Lib Listing================================
        set: 
        // =====================================================================================================
        // ================================================Input For Lib Listing================================
        /**
         * @param {?} receivedData
         * @return {?}
         */
        function (receivedData) {
            this.testimonialListConfig = {
                apiUrl: receivedData.apiBaseUrl,
                listEndPoint: "datalist",
                datasource: receivedData.datasource,
                tableName: receivedData.tableName,
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
                listArray_modify_header: { "name": "Customer/User Name", "email": "Customer/User Email", "testimonial": "Testimonial", "priority": "Priority", "status": "Status" },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
                search_settings: {
                    textsearch: [{ label: "customer name...", field: 'name' }, { label: "customer email...", field: 'email' },
                        { label: "status...", field: 'status' }],
                }
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TestimonialComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TestimonialComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-testimonial',
                    template: "<mat-card *ngIf=\"loader==true\">\n        <mat-spinner class=\"spinner\"></mat-spinner>\n    </mat-card>\n    \n    \n    \n    <!-- ------------------------lib listing being called------------------------ -->\n    <mat-card *ngIf=\"loader==false\">\n        <lib-listing class=\"formfilterdiv\"\n            *ngIf=\"testimonialListConfig.datasource !=null && testimonialListConfig.datasource.length > 0\"\n            [datasource]=\"testimonialListConfig.datasource\" [skip]=\"testimonialListConfig.listArray_skip\"\n            [modify_header_array]=\"testimonialListConfig.listArray_modify_header\" [sourcedata]=\"testimonialListConfig.tableName\"\n            [statusarr]=\"testimonialListConfig.statusarr\" [jwttoken]=\"testimonialListConfig.jwtToken\"\n            [apiurl]=\"testimonialListConfig.apiUrl\" [editroute]=\"testimonialListConfig.editUrl\"\n            [deleteendpoint]=\"testimonialListConfig.deleteEndPoint\"\n            [date_search_source]=\"testimonialListConfig.view\"\n           [date_search_endpoint]=\"testimonialListConfig.listEndPoint\"\n           [search_settings]=\"testimonialListConfig.search_settings\">\n        </lib-listing>\n    <!-- ----------------------------------------------------------------------------->\n    \n        <h2 *ngIf=\"testimonialListConfig.datasource.length == 0\">No record found.</h2>\n    </mat-card>",
                    styles: [".addbtn{display:block;width:170px;margin:10px;background:#3f50b5!important;color:#fff;float:right}.btnwrapper{display:flex;justify-content:flex-end}"]
                }] }
    ];
    /** @nocollapse */
    TestimonialComponent.ctorParameters = function () { return []; };
    TestimonialComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return TestimonialComponent;
}());
export { TestimonialComponent };
if (false) {
    /** @type {?} */
    TestimonialComponent.prototype.testimonialListConfig;
    /** @type {?} */
    TestimonialComponent.prototype.loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGltb25pYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGVzdGltb25pYWwvIiwic291cmNlcyI6WyJsaWIvdGVzdGltb25pYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUdqRTtJQXdDRSx1R0FBdUc7SUFFdkc7UUFqQ08sV0FBTSxHQUFZLElBQUksQ0FBQztJQWlDZCxDQUFDO0lBMUJqQixzQkFDSSx3Q0FBTTtRQVBWLHdHQUF3RztRQUt4Ryx3R0FBd0c7Ozs7Ozs7O1FBQ3hHLFVBQ1csWUFBaUI7WUFFMUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHO2dCQUMzQixNQUFNLEVBQUUsWUFBWSxDQUFDLFVBQVU7Z0JBQy9CLFlBQVksRUFBRSxVQUFVO2dCQUN4QixVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7Z0JBQ25DLFNBQVMsRUFBRSxZQUFZLENBQUMsU0FBUztnQkFDakMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQztnQkFDbkUsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO2dCQUNuSyx1QkFBdUIsRUFBRSxPQUFPO2dCQUNoQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7Z0JBQ3JFLFNBQVMsRUFBRSxZQUFZLENBQUMsY0FBYztnQkFDdEMsT0FBTyxFQUFFLFlBQVksQ0FBQyxPQUFPO2dCQUM3QixRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVE7Z0JBQy9CLGNBQWMsRUFBRSxZQUFZLENBQUMsY0FBYztnQkFDM0MsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJO2dCQUN2QixlQUFlLEVBQUM7b0JBQ2QsVUFBVSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFDLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7d0JBQ3hHLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUM7aUJBQ3pDO2FBQ0YsQ0FBQTtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOzs7O0lBS0QsdUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBN0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixvMkNBQXlDOztpQkFFMUM7Ozs7O3lCQVlFLEtBQUs7O0lBK0JSLDJCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0ExQ1ksb0JBQW9COzs7SUFHL0IscURBQWtDOztJQUNsQyxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10ZXN0aW1vbmlhbCcsXG4gIHRlbXBsYXRlVXJsOiAndGVzdGltb25pYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGVzdGltb25pYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RpbW9uaWFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgdGVzdGltb25pYWxMaXN0Q29uZmlnOiBhbnk7XG4gIHB1YmxpYyBsb2FkZXI6IGJvb2xlYW4gPSB0cnVlO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcbiAgIFxuICAgIHRoaXMudGVzdGltb25pYWxMaXN0Q29uZmlnID0ge1xuICAgICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcbiAgICAgIGxpc3RFbmRQb2ludDogXCJkYXRhbGlzdFwiLFxuICAgICAgZGF0YXNvdXJjZTogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UsXG4gICAgICB0YWJsZU5hbWU6IHJlY2VpdmVkRGF0YS50YWJsZU5hbWUsXG4gICAgICBsaXN0QXJyYXlfc2tpcDogW1wiX2lkXCIsIFwidXNlcklkXCIsIFwiY3JlYXRlZF9hdFwiLCBcImlkXCIsIFwidXBkYXRlZF9hdFwiXSxcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7IFwibmFtZVwiOiBcIkN1c3RvbWVyL1VzZXIgTmFtZVwiLCBcImVtYWlsXCI6IFwiQ3VzdG9tZXIvVXNlciBFbWFpbFwiLCBcInRlc3RpbW9uaWFsXCI6IFwiVGVzdGltb25pYWxcIiwgXCJwcmlvcml0eVwiOiBcIlByaW9yaXR5XCIsIFwic3RhdHVzXCI6IFwiU3RhdHVzXCIgfSxcbiAgICAgIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXG4gICAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSxcbiAgICAgIHVwZGF0ZXVybDogcmVjZWl2ZWREYXRhLnVwZGF0ZUVuZHBvaW50LFxuICAgICAgZWRpdFVybDogcmVjZWl2ZWREYXRhLmVkaXRVcmwsXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWREYXRhLmp3dFRva2VuLFxuICAgICAgZGVsZXRlRW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5kZWxldGVFbmRQb2ludCxcbiAgICAgIHZpZXc6IHJlY2VpdmVkRGF0YS52aWV3LFxuICAgICAgc2VhcmNoX3NldHRpbmdzOntcbiAgICAgICAgdGV4dHNlYXJjaDogW3sgbGFiZWw6IFwiY3VzdG9tZXIgbmFtZS4uLlwiLCBmaWVsZDogJ25hbWUnIH0seyBsYWJlbDogXCJjdXN0b21lciBlbWFpbC4uLlwiLCBmaWVsZDogJ2VtYWlsJyB9LFxuICAgICAgICB7IGxhYmVsOiBcInN0YXR1cy4uLlwiLCBmaWVsZDogJ3N0YXR1cycgfV0sXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuXG5cbiJdfQ==