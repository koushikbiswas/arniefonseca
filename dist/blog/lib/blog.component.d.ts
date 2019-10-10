import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';
export declare class BlogComponent implements OnInit {
    router: Router;
    apiService: ApiService;
    activeroute: ActivatedRoute;
    /**blog variables declaration**/
    addMemberviaUrl: any;
    ResolveLIstData: any;
    editRouteUrl: any;
    Blogtablename: any;
    deleteRouteUrl: any;
    addupdateRouteUrl: any;
    serverUrlData: any;
    getDataEndpointData: any;
    getDataSourceData: any;
    addEndpointData: any;
    apiUrlviaApp: any;
    tokenViapp: any;
    /**lib-listing start here**/
    blogDataarray: any;
    Bloglist_skip: any;
    Bloglist_modify_header: any;
    status: any;
    /**lib-listing end here**/
    BlogapiUrl: any;
    BlogToken: any;
    addTeammember: any;
    Blogtable: any;
    editblog: any;
    AddEditBlog: any;
    deleteBlog: any;
    getDataEndpoint: any;
    getDataSource: any;
    serverUrl: any;
    addEndpoint: any;
    listResolve: any;
    constructor(router: Router, apiService: ApiService, activeroute: ActivatedRoute);
    ngOnInit(): void;
    /***getting all the blog data function start here**/
    getData(): void;
    /**function end here**/
    addButton(): void;
}
