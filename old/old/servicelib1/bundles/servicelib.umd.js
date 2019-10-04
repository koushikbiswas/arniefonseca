(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('ngx-cookie-service'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/core'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slider'), require('@angular/material/slide-toggle'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('@angular/core'), require('@ckeditor/ckeditor5-build-classic'), require('@angular/material/dialog'), require('@angular/common/http'), require('@angular/router'), require('@ckeditor/ckeditor5-angular'), require('@angular/forms'), require('@angular/common'), require('@angular/platform-browser'), require('lib-listing')) :
    typeof define === 'function' && define.amd ? define('servicelib', ['exports', 'rxjs/operators', 'ngx-cookie-service', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material/divider', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/core', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slider', '@angular/material/slide-toggle', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', '@angular/core', '@ckeditor/ckeditor5-build-classic', '@angular/material/dialog', '@angular/common/http', '@angular/router', '@ckeditor/ckeditor5-angular', '@angular/forms', '@angular/common', '@angular/platform-browser', 'lib-listing'], factory) :
    (factory((global.servicelib = {}),global.rxjs.operators,global.i2,global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material.autocomplete,global.ng.material.badge,global.ng.material['bottom-sheet'],global.ng.material.button,global.ng.material['button-toggle'],global.ng.material.card,global.ng.material.checkbox,global.ng.material.chips,global.ng.material.stepper,global.ng.material.datepicker,global.ng.material.divider,global.ng.material.expansion,global.ng.material['grid-list'],global.ng.material.icon,global.ng.material.input,global.ng.material.list,global.ng.material.menu,global.ng.material.core,global.ng.material.paginator,global.ng.material['progress-bar'],global.ng.material['progress-spinner'],global.ng.material.radio,global.ng.material.select,global.ng.material.sidenav,global.ng.material.slider,global.ng.material['slide-toggle'],global.ng.material['snack-bar'],global.ng.material.sort,global.ng.material.table,global.ng.material.tabs,global.ng.material.toolbar,global.ng.material.tooltip,global.ng.material.tree,global.ng.core,global.ClassicEditor,global.ng.material.dialog,global.ng.common.http,global.ng.router,global.ckeditor5Angular,global.ng.forms,global.ng.common,global.ng.platformBrowser,global.libListing));
}(this, (function (exports,operators,i2,a11y,dragDrop,portal,scrolling,stepper,table,tree,autocomplete,badge,bottomSheet,button,buttonToggle,card,checkbox,chips,stepper$1,datepicker,divider,expansion,gridList,icon,input,list,menu,core,paginator,progressBar,progressSpinner,radio,select,sidenav,slider,slideToggle,snackBar,sort,table$1,tabs,toolbar,tooltip,tree$1,i0,ClassicEditor,dialog,i1,router,ckeditor5Angular,forms,common,platformBrowser,libListing) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ServicelibService = /** @class */ (function () {
        function ServicelibService(_http, _authHttp, cookieService) {
            this._http = _http;
            this._authHttp = _authHttp;
            this.cookieService = cookieService;
            this.progress = [];
            this.uploaderror = '';
            this.accesstoken = this.cookieService.get('jwtToken');
            this.fileservername = [];
            this.serverUrl = '';
            this.getdata_endpointUrl = 'datalist';
        }
        /**
         * @return {?}
         */
        ServicelibService.prototype.isTokenExpired = /**
         * @return {?}
         */
            function () {
                // const helper = new JwtHelperService();
                // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
                // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
                // console.log('refresh_token',localStorage.getItem('refresh_token'))
                // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
                // console.log('id_token isExpired:',isIdTokenExpired)
                // console.log('refresh_token isExpired:',isRefreshTokenExpired)
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        ServicelibService.prototype.addData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        ServicelibService.prototype.UpdateData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        ServicelibService.prototype.getData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        ServicelibService.prototype.deleteSingleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        ServicelibService.prototype.deleteMultipleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        ServicelibService.prototype.UpdateStatusForSingleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        ServicelibService.prototype.UpdateStatusForMultipleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint + 'many', JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        ServicelibService.prototype.CustomRequest = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        ServicelibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ServicelibService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i1.HttpClient },
                { type: i2.CookieService }
            ];
        };
        /** @nocollapse */ ServicelibService.ngInjectableDef = i0.defineInjectable({ factory: function ServicelibService_Factory() { return new ServicelibService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient), i0.inject(i2.CookieService)); }, token: ServicelibService, providedIn: "root" });
        return ServicelibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ServicelibComponent = /** @class */ (function () {
        // ====================================================================================================
        function ServicelibComponent() {
            this.loader = true;
        }
        Object.defineProperty(ServicelibComponent.prototype, "config", {
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
                console.log("+++", receivedData.view);
                this.serviceListConfig = {
                    apiUrl: receivedData.apiBaseUrl,
                    listEndPoint: "datalist",
                    datasource: receivedData.datasource,
                    tableName: receivedData.tableName,
                    listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
                    listArray_modify_header: { "service title": "Service title", "service desc": "Service Description", "priority": "Priority", "status": "Status", "bulletarr": "Number of bullets" },
                    admintablenameTableName: "admin",
                    statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                    updateurl: receivedData.updateEndpoint,
                    editUrl: receivedData.editUrl,
                    jwtToken: receivedData.jwtToken,
                    deleteEndPoint: receivedData.deleteEndPoint,
                    view: receivedData.view,
                    search_settings: {
                        textsearch: [{ label: "title...", field: 'service_title' }, { label: "status...", field: 'status' }],
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
        ServicelibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ServicelibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-servicelib',
                        template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"serviceListConfig.datasource !=null && serviceListConfig.datasource.length > 0\"\n        [datasource]=\"serviceListConfig.datasource\" [skip]=\"serviceListConfig.listArray_skip\"\n        [modify_header_array]=\"serviceListConfig.listArray_modify_header\" [sourcedata]=\"serviceListConfig.tableName\"\n        [statusarr]=\"serviceListConfig.statusarr\" [jwttoken]=\"serviceListConfig.jwtToken\"\n        [apiurl]=\"serviceListConfig.apiUrl\" [editroute]=\"serviceListConfig.editUrl\"\n        [deleteendpoint]=\"serviceListConfig.deleteEndPoint\" [date_search_source]=\"serviceListConfig.view\"\n        [date_search_endpoint]=\"serviceListConfig.listEndPoint\" [search_settings]=\"serviceListConfig.search_settings\">\n    </lib-listing>\n    <!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"serviceListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>\n\n<!-- \n    [date_search_source]=\"serviceListConfig.tableName\"\n    [date_search_endpoint]=\"serviceListConfig.listEndPoint\"\n    [search_settings]=\"serviceListConfig.search_settings\" -->",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ServicelibComponent.ctorParameters = function () { return []; };
        ServicelibComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return ServicelibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DemoMaterialModule = /** @class */ (function () {
        function DemoMaterialModule() {
        }
        DemoMaterialModule.decorators = [
            { type: i0.NgModule, args: [{
                        exports: [
                            a11y.A11yModule,
                            stepper.CdkStepperModule,
                            table.CdkTableModule,
                            tree.CdkTreeModule,
                            dragDrop.DragDropModule,
                            autocomplete.MatAutocompleteModule,
                            badge.MatBadgeModule,
                            bottomSheet.MatBottomSheetModule,
                            button.MatButtonModule,
                            buttonToggle.MatButtonToggleModule,
                            card.MatCardModule,
                            checkbox.MatCheckboxModule,
                            chips.MatChipsModule,
                            stepper$1.MatStepperModule,
                            datepicker.MatDatepickerModule,
                            dialog.MatDialogModule,
                            divider.MatDividerModule,
                            expansion.MatExpansionModule,
                            gridList.MatGridListModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            list.MatListModule,
                            menu.MatMenuModule,
                            core.MatNativeDateModule,
                            paginator.MatPaginatorModule,
                            progressBar.MatProgressBarModule,
                            progressSpinner.MatProgressSpinnerModule,
                            radio.MatRadioModule,
                            core.MatRippleModule,
                            select.MatSelectModule,
                            sidenav.MatSidenavModule,
                            slider.MatSliderModule,
                            slideToggle.MatSlideToggleModule,
                            snackBar.MatSnackBarModule,
                            sort.MatSortModule,
                            table$1.MatTableModule,
                            tabs.MatTabsModule,
                            toolbar.MatToolbarModule,
                            tooltip.MatTooltipModule,
                            tree$1.MatTreeModule,
                            portal.PortalModule,
                            scrolling.ScrollingModule,
                        ]
                    },] }
        ];
        return DemoMaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddeditServiceComponent = /** @class */ (function () {
        // ==============================================================================================
        function AddeditServiceComponent(formBuilder, servicehttp, router$$1, dialog$$1) {
            this.formBuilder = formBuilder;
            this.servicehttp = servicehttp;
            this.router = router$$1;
            this.dialog = dialog$$1;
            /**
             * ckeditor start here
             */
            this.Editor = ClassicEditor; //for ckeditor
            //for ckeditor
            this.editorConfig = {
                placeholder: 'Write description...',
            };
            this.model = {
                editorData: ''
            };
            this.loader = false;
            this.buttonText = "SUBMIT";
            this.successMessage = "Submitted Successfully";
            this.flag = false;
        }
        /**
         * @return {?}
         */
        AddeditServiceComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.loader = false;
                this.generateForm();
                if (this.configData.action != 'edit')
                    this.addBulletList('', '');
                // ============================================SWITCH CASES==========================================
                switch (this.configData.action) {
                    case 'add':
                        /* Button text */
                        this.buttonText = "SUBMIT";
                        break;
                    case 'edit':
                        /* Button text */
                        this.buttonText = "UPDATE";
                        this.successMessage = "One row updated";
                        this.setDefaultValue(this.configData.defaultData);
                        this.flag = true;
                        break;
                }
                // ===============================================================================================
            };
        Object.defineProperty(AddeditServiceComponent.prototype, "config", {
            set: /**
             * @param {?} getConfig
             * @return {?}
             */ function (getConfig) {
                this.configData = getConfig;
            },
            enumerable: true,
            configurable: true
        });
        // =============================================form generation====================================
        // =============================================form generation====================================
        /**
         * @return {?}
         */
        AddeditServiceComponent.prototype.generateForm =
            // =============================================form generation====================================
            /**
             * @return {?}
             */
            function () {
                this.serviceForm = this.formBuilder.group({
                    service_title: ['', [forms.Validators.required]],
                    service_desc: ['', [forms.Validators.required]],
                    priority: ['', [forms.Validators.required]],
                    status: [true,],
                    bulletarr: this.formBuilder.array([]),
                    userId: ['',]
                });
            };
        // =================================================================================================
        // ================================================Default value======================================
        // =================================================================================================
        // ================================================Default value======================================
        /**
         * @param {?} defaultValue
         * @return {?}
         */
        AddeditServiceComponent.prototype.setDefaultValue =
            // =================================================================================================
            // ================================================Default value======================================
            /**
             * @param {?} defaultValue
             * @return {?}
             */
            function (defaultValue) {
                var _this = this;
                defaultValue.bulletarr.forEach(( /**
                 * @param {?} element
                 * @return {?}
                 */function (element) {
                    _this.addBulletList(element.bullet_title, element.bullet_desc);
                }));
                this.serviceForm.patchValue({
                    service_title: defaultValue.service_title,
                    service_desc: defaultValue.service_desc,
                    priority: defaultValue.priority,
                    status: defaultValue.status,
                    // bulletarr: '',
                    userId: null
                });
            };
        // ==================================================================================================
        // ==========================================FORM ARRAY FUNCTIONS===================================
        // ==================================================================================================
        // ==========================================FORM ARRAY FUNCTIONS===================================
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        AddeditServiceComponent.prototype.addBulletList =
            // ==================================================================================================
            // ==========================================FORM ARRAY FUNCTIONS===================================
            /**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                /** @type {?} */
                var bl = ( /** @type {?} */(this.serviceForm.controls.bulletarr));
                bl.push(this.formBuilder.group({
                    bullet_title: [a],
                    bullet_desc: [b],
                }));
            };
        /**
         * @return {?}
         */
        AddeditServiceComponent.prototype.deleteBulletList = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var bl = ( /** @type {?} */(this.serviceForm.controls.bulletarr));
                bl.removeAt(1);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        AddeditServiceComponent.prototype.trackByFn = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                return index;
            };
        // ==================================================================================================
        // ================================================SUBMIT============================================
        // ==================================================================================================
        // ================================================SUBMIT============================================
        /**
         * @return {?}
         */
        AddeditServiceComponent.prototype.onSubmit =
            // ==================================================================================================
            // ================================================SUBMIT============================================
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                this.loader = true;
                this.serviceForm.controls['service_desc'].markAsTouched();
                if (this.serviceForm.invalid) {
                    return;
                }
                else {
                    if (this.serviceForm.value.status) {
                        this.serviceForm.value.status = parseInt("1");
                    }
                    else {
                        this.serviceForm.value.status = parseInt("0");
                    }
                    /* start process to submited data */
                    /** @type {?} */
                    var postData = {
                        source: this.configData.source,
                        data: Object.assign(this.serviceForm.value, this.configData.condition)
                    };
                    this.servicehttp.addData(this.configData.endpoint, postData).subscribe(( /**
                     * @param {?} response
                     * @return {?}
                     */function (response) {
                        if (response.status == "success") {
                            _this.openDialog(_this.successMessage);
                            setTimeout(( /**
                             * @return {?}
                             */function () {
                                _this.dialogRef.close();
                            }), 2000);
                            _this.router.navigate([_this.configData.callBack]);
                        }
                        else {
                            alert("Some error occurred. Please try angain.");
                        }
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        alert("Some error occurred. Please try angain.");
                    }));
                }
            };
        // ================================================================================================== 
        // =========================================MODAL functions==========================================
        // ================================================================================================== 
        // =========================================MODAL functions==========================================
        /**
         * @param {?} x
         * @return {?}
         */
        AddeditServiceComponent.prototype.openDialog =
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
                this.dialogRef.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                }));
            };
        // =================================================================================================
        // =================================================================================================
        /**
         * @return {?}
         */
        AddeditServiceComponent.prototype.resetserviceForm =
            // =================================================================================================
            /**
             * @return {?}
             */
            function () {
                this.serviceForm.reset();
            };
        /**
         * @param {?} val
         * @return {?}
         */
        AddeditServiceComponent.prototype.inputBlur = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                console.log('Blur');
                this.serviceForm.controls[val].markAsUntouched();
            };
        AddeditServiceComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-addedit-service',
                        template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">Add Service</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n\n      <form [formGroup]=\"serviceForm\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n\n\n\n        <!-- ------------------------------service title------------------- -->\n        <mat-form-field>\n          <input matInput placeholder=\"Service title\" formControlName=\"service_title\"\n            (blur)=\"inputBlur('service_title')\">\n          <mat-error *ngIf=\"serviceForm.controls['service_title']?.touched || serviceForm.controls['service_title'].errors \n          && serviceForm.controls['service_title'].errors.required\">Service title is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n\n        <!-- --------------------------------description------------------- -->\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"service_desc\"\n          (blur)=\"inputBlur('service_desc')\"></ckeditor>\n        <mat-error *ngIf=\"serviceForm.controls['service_desc']?.touched || serviceForm.controls['service_desc']?.touched && \n        serviceForm.controls['service_desc'].errors \n          && serviceForm.controls['service_desc'].errors.required\">Please write a testimonial.</mat-error>\n        <br>\n        <!-- -------------------------------------------------------------- -->\n\n\n        <!-- --------------------------------priority------------------- -->\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\"\n            (blur)=\"inputBlur('priority')\">\n          <mat-error *ngIf=\"serviceForm.controls['priority']?.touched || serviceForm.controls['priority'].errors \n          && serviceForm.controls['priority'].errors.required\">Priority is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n        <!-- --------------------------------status------------------- -->\n        <mat-label>Status:</mat-label><br>\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Active</mat-checkbox><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n\n\n        <!-- ______________________________________________FORM ARRAY_________________________________________ -->\n\n        <div formArrayName=\"bulletarr\" class=\"bulletarr\"\n          *ngFor=\"let blist of serviceForm.controls.bulletarr?.value; let i = index; trackBy: trackByFn\">\n          <ng-container [formGroupName]=\"i\">\n            <div class=\"top_header\">\n              bullet list\n            </div>\n            <!-- ------------bullet title-----------  -->\n            <mat-form-field>\n              <input matInput formControlName=\"bullet_title\" placeholder=\"Bullet title\">\n              <mat-icon matSuffix>create</mat-icon>\n            </mat-form-field><br>\n            <!-- -----------------------------------  -->\n\n\n            <!-- --------------------bullet description-----------------  -->\n            <mat-form-field>\n              <textarea matInput formControlName=\"bullet_desc\" placeholder=\"Bullet description\"></textarea>\n              <mat-icon matSuffix>format_list_bulleted</mat-icon>\n            </mat-form-field><br>\n            <!-- ----------------------------------------------------------  -->\n          </ng-container>\n          <button (click)=\"addBulletList('','')\" type=\"button\">\n            <mat-icon>add</mat-icon>\n          </button>\n          <button (click)=\"deleteBulletList()\" *ngIf=\"i!=0\" type=\"button\">\n            <mat-icon>remove</mat-icon>\n          </button>\n        </div>\n        <!-- __________________________________________________________________________________________________________ -->\n\n        <span><button type=\"submit\" class=\"submitbtn\" mat-raised-button color=\"primary\">{{buttonText}}</button></span>\n        <span><button type=\"reset\" class=\"submitbtn\" mat-raised-button color=\"primary\" (click)=\"resetserviceForm()\">RESET</button></span>\n\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}.bulletarr{margin-top:20px;border:3px solid #3f50b4;box-sizing:border-box;margin-bottom:15px;padding:10px}.top_header{background:#3f50b4;padding:16px;color:#fff;font-weight:700;text-transform:capitalize}"]
                    }] }
        ];
        /** @nocollapse */
        AddeditServiceComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: ServicelibService },
                { type: router.Router },
                { type: dialog.MatDialog }
            ];
        };
        AddeditServiceComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return AddeditServiceComponent;
    }());
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
            { type: i0.Component, args: [{
                        selector: 'app-modal',
                        template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
                    }] }
        ];
        /** @nocollapse */
        Modal.ctorParameters = function () {
            return [
                { type: dialog.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [dialog.MAT_DIALOG_DATA,] }] }
            ];
        };
        return Modal;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ServicelibModule = /** @class */ (function () {
        function ServicelibModule() {
        }
        ServicelibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ServicelibComponent, AddeditServiceComponent, Modal],
                        imports: [
                            DemoMaterialModule,
                            i1.HttpClientModule,
                            router.RouterModule,
                            ckeditor5Angular.CKEditorModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            common.CommonModule,
                            platformBrowser.BrowserModule,
                            libListing.ListingModule
                        ],
                        exports: [ServicelibComponent, AddeditServiceComponent, Modal],
                        entryComponents: [Modal]
                    },] }
        ];
        return ServicelibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ServicelibService = ServicelibService;
    exports.ServicelibComponent = ServicelibComponent;
    exports.ServicelibModule = ServicelibModule;
    exports.ɵa = AddeditServiceComponent;
    exports.ɵb = Modal;
    exports.ɵc = DemoMaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=servicelib.umd.js.map