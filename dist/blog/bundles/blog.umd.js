(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('ngx-cookie-service'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/core'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slider'), require('@angular/material/slide-toggle'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('lib-listing'), require('@ckeditor/ckeditor5-angular'), require('@angular/router'), require('@angular/common/http'), require('@angular/forms'), require('@angular/material'), require('rxjs/operators'), require('@ckeditor/ckeditor5-build-classic'), require('@angular/platform-browser'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('blog', ['exports', 'rxjs', 'ngx-cookie-service', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/divider', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/core', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slider', '@angular/material/slide-toggle', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', 'lib-listing', '@ckeditor/ckeditor5-angular', '@angular/router', '@angular/common/http', '@angular/forms', '@angular/material', 'rxjs/operators', '@ckeditor/ckeditor5-build-classic', '@angular/platform-browser', '@angular/core'], factory) :
    (factory((global.blog = {}),global.rxjs,global.i2,global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material.autocomplete,global.ng.material.badge,global.ng.material['bottom-sheet'],global.ng.material.button,global.ng.material['button-toggle'],global.ng.material.card,global.ng.material.checkbox,global.ng.material.chips,global.ng.material.stepper,global.ng.material.datepicker,global.ng.material.dialog,global.ng.material.divider,global.ng.material.expansion,global.ng.material['grid-list'],global.ng.material.icon,global.ng.material.input,global.ng.material.list,global.ng.material.menu,global.ng.material.core,global.ng.material.paginator,global.ng.material['progress-bar'],global.ng.material['progress-spinner'],global.ng.material.radio,global.ng.material.select,global.ng.material.sidenav,global.ng.material.slider,global.ng.material['slide-toggle'],global.ng.material['snack-bar'],global.ng.material.sort,global.ng.material.table,global.ng.material.tabs,global.ng.material.toolbar,global.ng.material.tooltip,global.ng.material.tree,global.libListing,global.ckeditor5Angular,global.ng.router,global.ng.common.http,global.ng.forms,global.ng.material,global.rxjs.operators,global.ClassicEditor,global.ng.platformBrowser,global.ng.core));
}(this, (function (exports,rxjs,i2,a11y,dragDrop,portal,scrolling,stepper,table,tree,autocomplete,badge,bottomSheet,button,buttonToggle,card,checkbox,chips,stepper$1,datepicker,dialog,divider,expansion,gridList,icon,input,list,menu,core,paginator,progressBar,progressSpinner,radio,select,sidenav,slider,slideToggle,snackBar,sort,table$1,tabs,toolbar,tooltip,tree$1,libListing,ckeditor5Angular,router,i1,forms,material,operators,ClassicEditor,platformBrowser,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BlogService = /** @class */ (function () {
        function BlogService() {
        }
        BlogService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        BlogService.ctorParameters = function () { return []; };
        /** @nocollapse */ BlogService.ngInjectableDef = i0.defineInjectable({ factory: function BlogService_Factory() { return new BlogService(); }, token: BlogService, providedIn: "root" });
        return BlogService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ApiService = /** @class */ (function () {
        function ApiService(_http, _authHttp, cookieService) {
            var _this = this;
            this._http = _http;
            this._authHttp = _authHttp;
            this.cookieService = cookieService;
            this.progress = [];
            this.uploaderror = '';
            this.accesstoken = this.cookieService.get('jwtToken');
            this.fileservername = [];
            this.subjectForServerUrl = new rxjs.Subject();
            this.subjectForaddEndpointUrl = new rxjs.Subject();
            this.subjectForuploadEndpointUrl = new rxjs.Subject(); //added by souresh
            //added by souresh
            this.subjectForupdateEndpointUrl = new rxjs.Subject();
            this.subjectFordeletesingleEndpointUrl = new rxjs.Subject();
            this.subjectForupdatestatusSingleEndpointUrl = new rxjs.Subject();
            this.subjectForGetdataEndpointUrl = new rxjs.Subject();
            this.subscriptionServer = this.getServerUrl().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.serverUrl = result;
                }
                else {
                    _this.serverUrl = null;
                }
            }));
            this.subscriptionaddEndpoint = this.getaddEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.addendpointUrl = result;
                }
                else {
                    _this.addendpointUrl = null;
                }
            }));
            /*********added by souresh***********/
            this.subscriptionuploadEndpoint = this.getuploadEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.uploadEndpointUrl = result;
                }
                else {
                    _this.uploadEndpointUrl = null;
                }
            }));
            /************souresh end here**************/
            this.subscriptionupdateEndpoint = this.getupdateEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.updateendpointUrl = result;
                }
                else {
                    _this.updateendpointUrl = null;
                }
            }));
            this.subscriptiondeletesingleEndpoint = this.getdeletesingleEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.deletesingle_endpointUrl = result;
                }
                else {
                    _this.deletesingle_endpointUrl = null;
                }
            }));
            this.subscriptionupdatestatusSingleEndpoint = this.getupdatestatus_singleEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.updatestatus_single_endpointUrl = result;
                }
                else {
                    _this.updatestatus_single_endpointUrl = null;
                }
            }));
            this.subscriptionGetdataEndpoint = this.getdataEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.getdata_endpointUrl = result;
                }
                else {
                    _this.getdata_endpointUrl = null;
                }
            }));
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setServerUrl = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForServerUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearServerUrl = /**
         * @return {?}
         */
            function () {
                this.subjectForServerUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getServerUrl = /**
         * @return {?}
         */
            function () {
                return this.subjectForServerUrl.asObservable();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setaddEndpoint = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForaddEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearaddEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForaddEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getaddEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForaddEndpointUrl.asObservable();
            };
        /*****added by souresh******/
        /**
         * **added by souresh*****
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setuploadEndpont = /**
         * **added by souresh*****
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForuploadEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearuploadEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForuploadEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getuploadEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForuploadEndpointUrl.asObservable();
            };
        /********souresh end here********/
        /**
         * *****souresh end here*******
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setupdateEndpoint = /**
         * *****souresh end here*******
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForupdateEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearupdateEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForupdateEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getupdateEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForupdateEndpointUrl.asObservable();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setdeletesingleEndpoint = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectFordeletesingleEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.cleardeletesingleEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectFordeletesingleEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getdeletesingleEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectFordeletesingleEndpointUrl.asObservable();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setupdatestatus_singleEndpoint = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForupdatestatusSingleEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearupdatestatus_singleEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForupdatestatusSingleEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getupdatestatus_singleEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForupdatestatusSingleEndpointUrl.asObservable();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setgetdataEndpoint = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForGetdataEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.cleargetdataEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForGetdataEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getdataEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForGetdataEndpointUrl.asObservable();
            };
        /**
         * @return {?}
         */
        ApiService.prototype.isTokenExpired = /**
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
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.addData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                console.log('in adddata apiservice');
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken //hard code written access-token(temp)
                    })
                };
                console.log('httpoptions', httpOptions, this.serverUrl, requestdata);
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /*******added by souresh************/
        /**
         * ****added by souresh***********
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.uploadFile = /**
         * ****added by souresh***********
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken //hard code written access-token(temp)
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.uploadEndpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /*******souresh end here********/
        /**
         * ****souresh end here*******
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.UpdateData = /**
         * ****souresh end here*******
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken //hard code written access-token(temp)
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.updateendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.getData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.getdata_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.deleteSingleData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.deleteMultipleData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.UpdateStatusForSingleData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.UpdateStatusForMultipleData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @param {?} endpoint
         * @return {?}
         */
        ApiService.prototype.CustomRequest = /**
         * @param {?} requestdata
         * @param {?} endpoint
         * @return {?}
         */
            function (requestdata, endpoint) {
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
        ApiService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ApiService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i1.HttpClient },
                { type: i2.CookieService }
            ];
        };
        /** @nocollapse */ ApiService.ngInjectableDef = i0.defineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient), i0.inject(i2.CookieService)); }, token: ApiService, providedIn: "root" });
        return ApiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BlogComponent = /** @class */ (function () {
        function BlogComponent(router$$1, apiService, activeroute) {
            this.router = router$$1;
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
             */ function (apivalue) {
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
             */ function (token) {
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
             */ function (addvalue) {
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
             */ function (value) {
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
             */ function (value) {
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
             */ function (addeditvalue) {
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
             */ function (delValue) {
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
             */ function (endpointUrlval) {
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
             */ function (serverUrlval) {
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
             */ function (serverUrlval) {
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
             */ function (endpointUrlval) {
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
             */ function (listresolveUrlval) {
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
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiService.setServerUrl(_this.serverUrlData);
                }), 50);
                this.apiService.clearaddEndpoint();
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiService.setaddEndpoint(_this.addEndpointData);
                }), 50);
                this.apiService.cleargetdataEndpoint();
                setTimeout(( /**
                 * @return {?}
                 */function () {
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
                this.apiService.getData(data).subscribe(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) {
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
            { type: i0.Component, args: [{
                        selector: 'lib-Blog',
                        template: "<!-- header start here -->\n<mat-card>\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n        <h2 class=\"headerSpan\">Blogs</h2>\n    </mat-toolbar>\n    <!-- header end here -->\n    <!-- add button start here -->\n    <mat-toolbar class=\"buttonsetToolbar\">\n        <button class=\"singleButton\" mat-raised-button color=\"primary\" (click)=\"addButton()\"> Add Blogs</button>\n    </mat-toolbar>\n    <!-- adding button end here -->\n    <!-- applying lib-listing start here -->\n    <mat-card-content class=\"listing-content-admin\">\n        <lib-listing class=\"formfilterdiv formfilterdivnew\" *ngIf=\"blogDataarray.length>0\" [datasource]=\"blogDataarray\"\n            [skip]=\"Bloglist_skip\" [modify_header_array]=\"Bloglist_modify_header\" [sourcedata]=\"Blogtablename\"\n            [statusarr]=\"status\" [editroute]=\"editRouteUrl\" [apiurl]=\"serverUrlData\" [jwttoken]=\"tokenViapp\"\n            [deleteendpoint]=\"deleteRouteUrl\" [updateendpoint]=\"addupdateRouteUrl\">\n        </lib-listing>\n        <!-- applying lib-listing end here -->\n\n    </mat-card-content>\n</mat-card>",
                        styles: [".example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.headerSpan{text-align:center;display:block;margin:auto}.darkToolbar{background-color:#000}.gridListWrapper{padding:30px}.buttonsetToolbar{background-color:#f4f3f8;text-align:center;display:block;padding-top:10px}.singleButton{margin:5px;float:right}.example-form{min-width:150px;max-width:500px;width:100%}.example-full-width{width:100%}td{padding-right:8px}"]
                    }] }
        ];
        /** @nocollapse */
        BlogComponent.ctorParameters = function () {
            return [
                { type: router.Router },
                { type: ApiService },
                { type: router.ActivatedRoute }
            ];
        };
        BlogComponent.propDecorators = {
            BlogapiUrl: [{ type: i0.Input }],
            BlogToken: [{ type: i0.Input }],
            addTeammember: [{ type: i0.Input }],
            Blogtable: [{ type: i0.Input }],
            editblog: [{ type: i0.Input }],
            AddEditBlog: [{ type: i0.Input }],
            deleteBlog: [{ type: i0.Input }],
            getDataEndpoint: [{ type: i0.Input }],
            getDataSource: [{ type: i0.Input }],
            serverUrl: [{ type: i0.Input }],
            addEndpoint: [{ type: i0.Input }],
            listResolve: [{ type: i0.Input }]
        };
        return BlogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //import { MatFileUploadModule } from 'angular-material-fileupload';
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
    var AddBlogComponent = /** @class */ (function () {
        function AddBlogComponent(fb, activeroute, apiservice, _http, router$$1, dialog$$1) {
            /**catch the parameter id***/
            this.fb = fb;
            this.activeroute = activeroute;
            this.apiservice = apiservice;
            this._http = _http;
            this.router = router$$1;
            this.dialog = dialog$$1;
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
                title: ['', forms.Validators.required],
                description: ['', forms.Validators.required],
                priority: ['', forms.Validators.required],
                status: [true,],
                parent_id: [0, forms.Validators.required]
            });
            /**Formgroup create end here**/
        }
        Object.defineProperty(AddBlogComponent.prototype, "listRoute", {
            set: /**
             * @param {?} listval
             * @return {?}
             */ function (listval) {
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
             */ function (serverUrlval) {
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
             */ function (endpointUrlval) {
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
             */ function (endpointUrlval) {
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
             */ function (allData) {
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
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiservice.setServerUrl(_this.serverUrlData);
                }), 50);
                this.apiservice.cleargetdataEndpoint();
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiservice.setgetdataEndpoint(_this.getDataEndpointData);
                }), 50);
                this.apiservice.clearaddEndpoint();
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiservice.setaddEndpoint(_this.addEndpointData);
                }), 50);
                /**Observable end here**/
                setTimeout(( /**
                 * @return {?}
                 */function () {
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
                this.dialogRef.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
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
                this.apiservice.getData(data).subscribe(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) {
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
                    this.apiservice.addData(data).subscribe(( /**
                     * @param {?} response
                     * @return {?}
                     */function (response) {
                        /** @type {?} */
                        var result;
                        result = response;
                        _this.statusarray = result.status;
                        if (result.status == "success")
                            _this.openDialog(_this.messageText);
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            _this.dialogRef.close();
                        }), 2000);
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            _this.router.navigateByUrl('/' + _this.listUrl);
                        }), 3000);
                    }));
                }
            };
        AddBlogComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-add-blog',
                        template: "<!-- Form Header -->\n<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{headerText}}</h2>\n  </mat-toolbar>\n\n  <!-- Blog Add or Edit Form Start Here -->\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form class=\"example-form\" autocomplete=\"off\" name=\"blogAddEditForm\" (ngSubmit)=\"blogAddEditFormSubmit()\"\n        [formGroup]=\"blogAddEditForm\">\n\n        <mat-form-field >\n          <input matInput type=\"text\" placeholder=\"Title\" [formControl]=\"blogAddEditForm.controls['title']\"\n            (blur)=\"inputUntouch(blogAddEditForm,'title')\">\n          <mat-error\n            *ngIf=\"blogAddEditForm.controls['title'].touched && !blogAddEditForm.controls['title'].valid && blogAddEditForm.controls['title'].errors.required\">\n            Category Name field can not be blank</mat-error>\n        </mat-form-field>\n  \n         <!-- -------------------------------priority--------------------------- -->\n         <mat-form-field>\n         <input matInput type=\"number\" placeholder=\"Priority\" [formControl]=\"blogAddEditForm.controls['priority']\"  (blur)=\"inputUntouch(blogAddEditForm,'priority')\">\n         <!-- ------------------------------------------------------------------ -->\n         <mat-error *ngIf=\"blogAddEditForm.controls['priority'].touched && !blogAddEditForm.controls['priority'].valid && blogAddEditForm.controls['priority'].errors.required\">\n          Priority field can not be blank</mat-error> <br>\n        </mat-form-field>\n          <!-- -------------------------------status--------------------------- -->          \n          <mat-checkbox [formControl]=\"blogAddEditForm.controls['status']\">Active</mat-checkbox><br>\n          <!-- ---------------------------------------------------------------- -->\n\n        <!-- ckeditor using start here -->\n        <mat-label>Description</mat-label>\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" [(ngModel)]=\"model.editorData\"\n          [ngModelOptions]=\"{standalone: true}\"></ckeditor>\n        <mat-error\n          *ngIf=\"blogAddEditForm.controls['description'].touched && !blogAddEditForm.controls['description'].valid && blogAddEditForm.controls['description'].errors.required\">\n          Description field can not be blank</mat-error>\n        <!-- ckeditor end here -->\n        <mat-form-field>\n\n          <mat-label>Parent Category</mat-label>\n          <mat-select formControlName=\"parent_id\">\n            <mat-option [value]=0>\n              Select a category\n            </mat-option>\n            <mat-option *ngFor=\" let f of blogarray\" [value]=\"f._id\">\n              {{f.title}}\n            </mat-option>\n          </mat-select>\n\n          <mat-error\n          *ngIf=\"blogAddEditForm.controls['parent_id'].touched && !blogAddEditForm.controls['parent_id'].valid && blogAddEditForm.controls['parent_id'].errors.required\">\n          Category cannot be blank</mat-error>\n        </mat-form-field>\n\n      \n\n\n\n        <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"submit\">{{buttonText}}</button>\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>\n<!-- Blog Add or Edit Form End Here -->",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}"]
                    }] }
        ];
        /** @nocollapse */
        AddBlogComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: router.ActivatedRoute },
                { type: ApiService },
                { type: i1.HttpClient },
                { type: router.Router },
                { type: material.MatDialog }
            ];
        };
        AddBlogComponent.propDecorators = {
            listRoute: [{ type: i0.Input }],
            serverUrl: [{ type: i0.Input }],
            getDataEndpoint: [{ type: i0.Input }],
            addEndpoint: [{ type: i0.Input }],
            singleData: [{ type: i0.Input }]
        };
        return AddBlogComponent;
    }());
    var Dialogtest = /** @class */ (function () {
        function Dialogtest(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.is_error = data.message;
        }
        Dialogtest.decorators = [
            { type: i0.Component, args: [{
                        selector: 'dialogtest',
                        template: "<div class=\"modal\">\n        <h1 mat-dialog-title>Message</h1>\n        <div mat-dialog-content>\n          \n         <p>{{ data.message }}</p>\n        </div>\n        </div>"
                    }] }
        ];
        /** @nocollapse */
        Dialogtest.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        return Dialogtest;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var appRoutes = [
        { path: 'add', component: AddBlogComponent },
        { path: 'edit/:id', component: AddBlogComponent },
    ];
    var AppRoutingModule = /** @class */ (function () {
        function AppRoutingModule() {
        }
        AppRoutingModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [router.RouterModule.forRoot(appRoutes)],
                        exports: [router.RouterModule]
                    },] }
        ];
        return AppRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddeditBlogmanagementComponent = /** @class */ (function () {
        // -----------------------------------------------------------------------------------------
        function AddeditBlogmanagementComponent(http, apiservice, activatedRoute, router$$1, formBuilder, dialog$$1, snackBar$$1) {
            this.http = http;
            this.apiservice = apiservice;
            this.activatedRoute = activatedRoute;
            this.router = router$$1;
            this.formBuilder = formBuilder;
            this.dialog = dialog$$1;
            this.snackBar = snackBar$$1;
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
            this.myControl = new forms.FormControl();
            this.tags_array = [];
            this.testTag = [];
            this.blogManagementForm = this.formBuilder.group({
                blogtitle: ['', forms.Validators.required],
                blogcat: ['', forms.Validators.required],
                blogcontent: ['', forms.Validators.required],
                priority: ['', forms.Validators.required],
                status: ['true', forms.Validators.required],
                metatitle: ['', forms.Validators.required],
                metadesc: ['', forms.Validators.required],
                credentials: this.formBuilder.array([]),
                tags: ['',],
            });
        }
        Object.defineProperty(AddeditBlogmanagementComponent.prototype, "config", {
            // -----------------------------------------------------------------------
            // ----------------------------------------------Input Section-----------------------
            // Input receiving from add/edit app 
            set: 
            // -----------------------------------------------------------------------
            // ----------------------------------------------Input Section-----------------------
            // Input receiving from add/edit app 
            /**
             * @param {?} getConfig
             * @return {?}
             */
            function (getConfig) {
                this.configData = getConfig;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditBlogmanagementComponent.prototype, "serverUrl", {
            set: /**
             * @param {?} serverUrl
             * @return {?}
             */ function (serverUrl) {
                this.serverUrlData = (serverUrl) || '<no name set>';
                this.serverUrlData = serverUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditBlogmanagementComponent.prototype, "getDataEndpoint", {
            set: /**
             * @param {?} endpointUrlval
             * @return {?}
             */ function (endpointUrlval) {
                this.getDataEndpointData = (endpointUrlval) || '<no name set>';
                this.getDataEndpointData = endpointUrlval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditBlogmanagementComponent.prototype, "addEndpoint", {
            set: /**
             * @param {?} endpointUrlval
             * @return {?}
             */ function (endpointUrlval) {
                this.addEndpointData = (endpointUrlval) || '<no name set>';
                this.addEndpointData = endpointUrlval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditBlogmanagementComponent.prototype, "listRoute", {
            set: /**
             * @param {?} listval
             * @return {?}
             */ function (listval) {
                this.listUrl = (listval) || '<no name set>';
                this.listUrl = listval;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /**Observable start here**/
                this.apiservice.clearServerUrl();
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiservice.setServerUrl(_this.serverUrlData);
                }), 50);
                this.apiservice.cleargetdataEndpoint();
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiservice.setgetdataEndpoint(_this.getDataEndpointData);
                }), 50);
                this.apiservice.clearaddEndpoint();
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiservice.setaddEndpoint(_this.addEndpointData);
                }), 50);
                /**Observable end here**/
                if (!this.activatedRoute.snapshot.params.id)
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.addYoutubeVideo('');
                    }), 500);
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.getBlogCategory();
                }), 50);
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.getTagsCount();
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
                    for (var vid in this.setData.credentials) {
                        this.addYoutubeVideo(this.setData.credentials[vid].video_url);
                    }
                    if (this.setData.tags != "")
                        this.setData.tags.forEach(( /**
                         * @param {?} element
                         * @return {?}
                         */function (element) {
                            _this.tags_array.push(element);
                        }));
                }
                // ------------------------------Auticomplete Functions----------------------------------
                this.filteredOptions = this.myControl.valueChanges.pipe(operators.startWith(''), operators.map(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) { return _this._filter(value); })));
                // ------------------------------------------------------------------------------------------
            };
        // ------------------------------------_Filter FUnction----------------------------------
        // ------------------------------------_Filter FUnction----------------------------------
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype._filter =
            // ------------------------------------_Filter FUnction----------------------------------
            /**
             * @private
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var filterValue = value.toLowerCase();
                return this.options.filter(( /**
                 * @param {?} option
                 * @return {?}
                 */function (option) { return option.toLowerCase().indexOf(filterValue) === 0; }));
            };
        // --------------------------------------------------------------------------------------------
        // ------------------------------------MODAL Function--------------------------------------------
        // --------------------------------------------------------------------------------------------
        // ------------------------------------MODAL Function--------------------------------------------
        /**
         * @param {?} x
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.openDialog =
            // --------------------------------------------------------------------------------------------
            // ------------------------------------MODAL Function--------------------------------------------
            /**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                this.dialogRef = this.dialog.open(Modal, {
                    width: '45%',
                    height: '500px',
                    data: { msg: x }
                });
                // this.sanitizer.bypassSecurityTrustResourceUrl
                this.dialogRef.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                }));
            };
        // ----------------------------------------------------------------------------------------------
        // ----------------------------Ediatble material Form Array-------------------
        // ----------------------------------------------------------------------------------------------
        // ----------------------------Ediatble material Form Array-------------------
        /**
         * @param {?} index
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.trackByFn =
            // ----------------------------------------------------------------------------------------------
            // ----------------------------Ediatble material Form Array-------------------
            /**
             * @param {?} index
             * @return {?}
             */
            function (index) {
                return index;
            };
        // -----------------------------------------------------------------------------
        // ----------------------------------Add Credential Fucntions-----------------
        // -----------------------------------------------------------------------------
        // ----------------------------------Add Credential Fucntions-----------------
        /**
         * @param {?} val
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.addYoutubeVideo =
            // -----------------------------------------------------------------------------
            // ----------------------------------Add Credential Fucntions-----------------
            /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                /** @type {?} */
                var creds = ( /** @type {?} */(this.blogManagementForm.controls.credentials));
                creds.push(this.formBuilder.group({
                    video_url: [val]
                }));
            };
        // ---------------------------------------------------------------------------
        // ---------------------------------Delete Credetial Fucntions----------------
        // ---------------------------------------------------------------------------
        // ---------------------------------Delete Credetial Fucntions----------------
        /**
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.deleteCreds =
            // ---------------------------------------------------------------------------
            // ---------------------------------Delete Credetial Fucntions----------------
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var creds = ( /** @type {?} */(this.blogManagementForm.controls.credentials));
                creds.removeAt(1);
            };
        // ----------------------------------------------------------------------------
        // ----------------------------------Get Blog Category Function-------------------
        // ----------------------------------------------------------------------------
        // ----------------------------------Get Blog Category Function-------------------
        /**
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.getBlogCategory =
            // ----------------------------------------------------------------------------
            // ----------------------------------Get Blog Category Function-------------------
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                /** @type {?} */
                var data;
                data = {
                    'source': 'blog_category'
                };
                this.apiservice.getData(data).subscribe(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) {
                    /** @type {?} */
                    var result;
                    result = response;
                    result = response;
                    _this.blogCategoryArray = result.res;
                }));
            };
        // ----------------------------------------------------------------------------------
        // ----------------------------------TAGS view Function-------------------
        // ----------------------------------------------------------------------------------
        // ----------------------------------TAGS view Function-------------------
        /**
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.getTagsCount =
            // ----------------------------------------------------------------------------------
            // ----------------------------------TAGS view Function-------------------
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                /** @type {?} */
                var data;
                data = {
                    'source': 'tags_view'
                };
                this.apiservice.getData(data).subscribe(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) {
                    /** @type {?} */
                    var result;
                    result = response;
                    if (result != null && result.res != null && result.res[0] != null)
                        _this.options = result.res[0].tags;
                }));
            };
        Object.defineProperty(AddeditBlogmanagementComponent.prototype, "singleData", {
            // ----------------------------------------------------------------------------------
            //  -----------------------------EDIT RESOLVE FUNCTION------------------------------
            set: 
            // ----------------------------------------------------------------------------------
            //  -----------------------------EDIT RESOLVE FUNCTION------------------------------
            /**
             * @param {?} editDatavals
             * @return {?}
             */
            function (editDatavals) {
                this.setData = editDatavals;
                console.log("Library te", this.setData);
            },
            enumerable: true,
            configurable: true
        });
        // -----------------------------------------------------------------------------------
        // ---------------------------------SUBMIT----------------------------------------
        // -----------------------------------------------------------------------------------
        // ---------------------------------SUBMIT----------------------------------------
        /**
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.onSubmit =
            // -----------------------------------------------------------------------------------
            // ---------------------------------SUBMIT----------------------------------------
            /**
             * @return {?}
             */
            function () {
                var _this = this;
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
                    this.apiservice.addData(data).subscribe(( /**
                     * @param {?} response
                     * @return {?}
                     */function (response) {
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            _this.router.navigateByUrl('/' + _this.listUrl);
                        }), 3000);
                    }));
                }
            };
        Object.defineProperty(AddeditBlogmanagementComponent.prototype, "onSignUpValidate", {
            // -----------------------------------------------------------------------------------
            get: 
            // -----------------------------------------------------------------------------------
            /**
             * @return {?}
             */
            function () {
                return this.blogManagementForm.controls;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} val
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.inputBlur = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.blogManagementForm.controls[val].markAsUntouched();
            };
        // -------------------------------Select Tags AutoComplete Field-----------------------
        // -------------------------------Select Tags AutoComplete Field-----------------------
        /**
         * @param {?} event
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.showval =
            // -------------------------------Select Tags AutoComplete Field-----------------------
            /**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event.keyCode == 13) {
                    this.tags_array.push(event.target.value);
                    this.blogManagementForm.controls['tags'].patchValue("");
                    return;
                }
            };
        // ------------------------------------------------------------------------------------
        // ---------------------------------------VIDEO URL PREVIEW-----------------------------
        // ------------------------------------------------------------------------------------
        // ---------------------------------------VIDEO URL PREVIEW-----------------------------
        /**
         * @param {?} video_index
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.preview_video =
            // ------------------------------------------------------------------------------------
            // ---------------------------------------VIDEO URL PREVIEW-----------------------------
            /**
             * @param {?} video_index
             * @return {?}
             */
            function (video_index) {
                this.openDialog(this.blogManagementForm.value.credentials[video_index].video_url);
            };
        // -------------------------------------------------------------------------------------
        // --------------------------------------------CLEAR TAGS---------------------------------
        // -------------------------------------------------------------------------------------
        // --------------------------------------------CLEAR TAGS---------------------------------
        /**
         * @param {?} index
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.clearTags =
            // -------------------------------------------------------------------------------------
            // --------------------------------------------CLEAR TAGS---------------------------------
            /**
             * @param {?} index
             * @return {?}
             */
            function (index) {
                this.tags_array.splice(index, 1);
            };
        // -------------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------------
        /**
         * @return {?}
         */
        AddeditBlogmanagementComponent.prototype.openSnackBar =
            // -------------------------------------------------------------------------------------
            /**
             * @return {?}
             */
            function () {
                this.snackBar.openFromComponent(YoutubeComponent, {
                    // duration: 1500,
                    panelClass: ['snackbar-color']
                });
            };
        AddeditBlogmanagementComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-addedit-blogmanagement',
                        template: "<mat-card>\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n        <h2 class=\"headerSpan\">{{headerText}}</h2>\n    </mat-toolbar>\n\n\n\n    <span class=\"formspan\">\n        <mat-card-content class=\"example-container\">\n            <form [formGroup]=\"blogManagementForm\">\n                <!-- ----------------------------Blog title---------------------------- -->\n                <mat-form-field>\n                    <input matInput placeholder=\"Blog title\" formControlName=\"blogtitle\"\n                        (ngClass)=\"{'is-invalid':isSubmitted && onSignUpValidate.blogtitle.errors}\"\n                        (blur)=\"inputBlur('blogtitle')\">\n                    <mat-error *ngIf=\"onSignUpValidate.blogtitle.errors && onSignUpValidate.blogtitle.errors.required\">\n                        Blog title cannot be blank</mat-error>\n                </mat-form-field><br>\n                <!-- ------------------------------------------------------------------ -->\n\n\n                <!-- -------------------------Blog Category---------------------------- -->\n                <mat-form-field>\n                    <mat-label>Blog Category</mat-label>\n                    <select matNativeControl formControlName=\"blogcat\"\n                        (ngClass)=\"{'is-invalid':isSubmitted && onSignUpValidate.blogcat.errors}\"\n                        (blur)=\"inputBlur('blogcat')\">\n                        <option *ngFor=\"let item of blogCategoryArray\" [value]=\"item._id\">{{ item.title}}</option>\n                    </select>\n                    <mat-error *ngIf=\"onSignUpValidate.blogcat.errors && onSignUpValidate.blogcat.errors.required\">Blog\n                        Category cannot be blank</mat-error>\n                </mat-form-field><br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n\n                <!-- ------------------------------------Blog Content------------------ -->\n\n                <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"blogcontent\"\n                    (ngClass)=\"{'is-invalid':isSubmitted && onSignUpValidate.blogcontent.errors}\"></ckeditor>\n                <mat-error\n                    *ngIf=\"onSignUpValidate.blogcontent.errors && onSignUpValidate.blogcontent.errors.required && onSignUpValidate.blogcontent.touched\">\n                    Blog Content cannot be blank</mat-error><br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n\n\n                <!-- -----------------------------------Priority------------------------ -->\n                <mat-form-field>\n                    <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\"\n                        (ngClass)=\"{'is-invalid':isSubmitted && onSignUpValidate.priority.errors}\"\n                        (blur)=\"inputBlur('priority')\">\n                    <mat-error *ngIf=\"onSignUpValidate.priority.errors && onSignUpValidate.priority.errors.required\">\n                        Priority cannot be blank</mat-error>\n                </mat-form-field><br>\n                <!-- ------------------------------------------------------------------- -->\n\n\n\n                <!-- ----------------------------------Status---------------------------- -->\n                <mat-checkbox formControlName=\"status\">Active</mat-checkbox><br>\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n\n\n                <!-- --------------------------------Meta title-------------------------  -->\n                <mat-form-field>\n                    <input matInput placeholder=\"Meta title\" formControlName=\"metatitle\"\n                        (ngClass)=\"{'is-invalid':isSubmitted && onSignUpValidate.metatitle.errors}\"\n                        (blur)=\"inputBlur('metatitle')\">\n                    <mat-error *ngIf=\"onSignUpValidate.metatitle.errors && onSignUpValidate.metatitle.errors.required\">\n                        Meta title cannot be blank</mat-error>\n                </mat-form-field>\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n                <!-- ----------------------------------Meta Description------------------ -->\n                <mat-form-field>\n                    <textarea matInput placeholder=\"Meta Description\" formControlName=\"metadesc\"\n                        (ngClass)=\"{'is-invalid':isSubmitted && onSignUpValidate.metadesc.errors}\"\n                        (blur)=\"inputBlur('metadesc')\"></textarea>\n                    <mat-error *ngIf=\"onSignUpValidate.metadesc.errors && onSignUpValidate.metadesc.errors.required\">\n                        Meta description cannot be blank</mat-error>\n                </mat-form-field><br>\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n                <!-- --------------------------------------Video URL--------------------- -->\n                <mat-label>Embed Video URL:</mat-label>\n                <div formArrayName=\"credentials\"\n                    *ngFor=\"let creds of blogManagementForm.controls.credentials?.value; let i = index; trackBy: trackByFn\">\n                    <ng-container [formGroupName]=\"i\">\n\n                        <mat-form-field class=\"video_embed\">\n                            <input type=\"text\" matInput formControlName=\"video_url\">\n                            <span matPrefix>{{ video_prefix }}</span>\n                           \n                            <mat-icon matSuffix class=\"clickable\" (click)=\"preview_video(i)\">remove_red_eye</mat-icon>\n                            <i style=\"position: absolute; cursor: pointer;                           right: 4px;\n                            bottom: 7px;\" class=\"material-icons\" (click)=\"openSnackBar()\">\n                                contact_support\n                            </i>\n                        </mat-form-field>\n                       \n                        <button type=\"button\" (click)=\"addYoutubeVideo('')\">\n                            <mat-icon matSuffix>add_box</mat-icon>\n                        </button>\n                        <span *ngIf=\"i!=0\"><button type=\"button\" (click)=\"deleteCreds()\">\n                                <mat-icon matSuffix>delete</mat-icon>\n                            </button></span>\n                    </ng-container>\n                </div><br>\n                <!-- ------------------------------------------------------------------- -->\n\n\n                <!-- -----------------------------Multi Tags---------------------------- -->\n                <div>\n                    <mat-label>Tags:</mat-label>\n                    <mat-form-field class=\"example-full-width\">\n                        <input type=\"text\" placeholder=\"Tag something\" formControlName=\"tags\" matInput\n                            [formControl]=\"myControl\" [matAutocomplete]=\"auto\" (keyup)=\"showval($event)\">\n\n                        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                                {{option}}\n                            </mat-option>\n                        </mat-autocomplete>\n\n                    </mat-form-field>\n                    <div>\n\n                        <mat-chip-list class=\"mat_chip\">\n                            <!-- <li *ngFor=\"let item of tags_array;let j = index\">{{ item }}<mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon></li> -->\n                            <mat-chip color=\"primary\" selected *ngFor=\"let item of tags_array;let j = index\">{{ item }}\n                                <mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon>\n                            </mat-chip>\n                        </mat-chip-list>\n\n                    </div>\n                </div>\n                <!-- ----------------------------------------------------------------- -->\n\n\n                <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"button\"\n                    (click)=\"onSubmit()\">{{buttonText}}</button>\n\n            </form>\n        </mat-card-content>\n    </span>\n</mat-card>",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.clickable{cursor:pointer}.mat_chip{padding:10px}.video_embed{position:relative}.video_embed .link_action{position:absolute;right:20px}.snackbar-color{background:#f01d40}.log_image{width:100%;display:block}.log_image img{max-width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        AddeditBlogmanagementComponent.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: ApiService },
                { type: router.ActivatedRoute },
                { type: router.Router },
                { type: forms.FormBuilder },
                { type: material.MatDialog },
                { type: material.MatSnackBar }
            ];
        };
        AddeditBlogmanagementComponent.propDecorators = {
            config: [{ type: i0.Input }],
            serverUrl: [{ type: i0.Input }],
            getDataEndpoint: [{ type: i0.Input }],
            addEndpoint: [{ type: i0.Input }],
            listRoute: [{ type: i0.Input }],
            singleData: [{ type: i0.Input }]
        };
        return AddeditBlogmanagementComponent;
    }());
    // ------------------------------------Modal Component Works------------------------------
    var Modal = /** @class */ (function () {
        function Modal(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.videoid = '';
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
                        template: "<h1 mat-dialog-title>YOUTUBE VIDEO PREVIEW</h1>\n<div mat-dialog-content>\n \n   <p>https://www.youtube.com/embed/{{ (data.msg) }}</p> \n  \n   <lib-youtubeplayer [videoid]=\"data.msg\"></lib-youtubeplayer>\n\n</div>\n\n\n\n\n "
                    }] }
        ];
        /** @nocollapse */
        Modal.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        return Modal;
    }());
    // ---------------------------------------------------------------------------------------
    var YoutubeComponent = /** @class */ (function () {
        function YoutubeComponent() {
        }
        YoutubeComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "<span class=\"log_image\">\n    <img src=\"/assets/images/youtube-link.jpg\">\n</span>",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.clickable{cursor:pointer}.mat_chip{padding:10px}.video_embed{position:relative}.video_embed .link_action{position:absolute;right:20px}.snackbar-color{background:#f01d40}.log_image{width:100%;display:block}.log_image img{max-width:100%}"]
                    }] }
        ];
        return YoutubeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var YoutubeplayerComponent = /** @class */ (function () {
        function YoutubeplayerComponent(sanitizer) {
            this.sanitizer = sanitizer;
        }
        Object.defineProperty(YoutubeplayerComponent.prototype, "videoid", {
            set: /**
             * @param {?} id
             * @return {?}
             */ function (id) {
                this.id = (id) || '<no name set>';
                this.id = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        YoutubeplayerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        YoutubeplayerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-youtubeplayer',
                        template: "\n<iframe width=\"560\" height=\"300\" [src]=\"id\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        YoutubeplayerComponent.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        YoutubeplayerComponent.propDecorators = {
            videoid: [{ type: i0.Input }]
        };
        return YoutubeplayerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: 'lib-listing-blogmanagementlib',
                        template: "\n<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\" >\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"blogListingConfig.datasource !=null && blogListingConfig.datasource.length > 0\"\n      [datasource]=\"blogListingConfig.datasource\" [skip]=\"blogListingConfig.listArray_skip\"\n      [modify_header_array]=\"blogListingConfig.listArray_modify_header\" [sourcedata]=\"blogListingConfig.tableName\"\n      [statusarr]=\"blogListingConfig.statusarr\" [jwttoken]=\"blogListingConfig.jwtToken\"\n      [apiurl]=\"blogListingConfig.apiUrl\" [editroute]=\"blogListingConfig.editUrl\"\n      [deleteendpoint]=\"blogListingConfig.deleteEndPoint\"\n      [search_settings]=\"blogListingConfig.search_settings\"\n      [date_search_source]=\"blogListingConfig.tableName2\"  \n      [date_search_endpoint]=\"blogListingConfig.listEndPoint\" >\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <h2 *ngIf=\"blogListingConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                        styles: ["body{display:none!important}"]
                    }] }
        ];
        /** @nocollapse */
        ListingBlogmanagementlibComponent.ctorParameters = function () {
            return [
                { type: ApiService }
            ];
        };
        ListingBlogmanagementlibComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return ListingBlogmanagementlibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import { ListingBlogmanagementlibComponent } from './listing-blogmanagementlib/listing-blogmanagementlib.component';
    var BlogModule = /** @class */ (function () {
        function BlogModule() {
        }
        BlogModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            BlogComponent,
                            AddBlogComponent,
                            Dialogtest,
                            AddeditBlogmanagementComponent,
                            Modal,
                            YoutubeplayerComponent,
                            YoutubeComponent,
                            ListingBlogmanagementlibComponent
                        ],
                        imports: [
                            DemoMaterialModule,
                            router.RouterModule,
                            AppRoutingModule,
                            libListing.ListingModule,
                            i1.HttpClientModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            platformBrowser.BrowserModule,
                            ckeditor5Angular.CKEditorModule,
                            libListing.ListingModule
                        ],
                        exports: [BlogComponent, AddBlogComponent, AddeditBlogmanagementComponent, ListingBlogmanagementlibComponent],
                        providers: [ApiService],
                        entryComponents: [Dialogtest, Modal, YoutubeComponent],
                    },] }
        ];
        return BlogModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.BlogService = BlogService;
    exports.BlogComponent = BlogComponent;
    exports.BlogModule = BlogModule;
    exports.ɵb = AddBlogComponent;
    exports.ɵc = Dialogtest;
    exports.ɵd = AddeditBlogmanagementComponent;
    exports.ɵe = Modal;
    exports.ɵf = YoutubeComponent;
    exports.ɵa = ApiService;
    exports.ɵj = AppRoutingModule;
    exports.ɵh = ListingBlogmanagementlibComponent;
    exports.ɵi = DemoMaterialModule;
    exports.ɵg = YoutubeplayerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=blog.umd.js.map