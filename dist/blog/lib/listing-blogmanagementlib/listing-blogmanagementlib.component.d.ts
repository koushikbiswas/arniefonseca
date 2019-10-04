import { OnInit } from '@angular/core';
import { ApiService } from '../api.service';
export declare class ListingBlogmanagementlibComponent implements OnInit {
    private apiService;
    blogData: any;
    blogListingConfig: any;
    loader: boolean;
    date_search_endpoint: any;
    date_search_source: any;
    config: any;
    constructor(apiService: ApiService);
    ngOnInit(): void;
}
