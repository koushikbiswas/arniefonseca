/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContactusComponent } from './contactus.component';
import { DemoMaterialModule } from './material-module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './api.service';
// import { AgmCoreModule} from '@agm/core';
import { ListingModule } from 'listing-angular7';
import { ContactusListingComponent } from './contactus-listing/contactus-listing.component';
import { LoadingComponent } from './loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
export class ContactusModule {
}
ContactusModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ContactusComponent, ContactusListingComponent, LoadingComponent],
                imports: [
                    DemoMaterialModule,
                    BrowserAnimationsModule,
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ListingModule,
                    HttpClientModule,
                ],
                exports: [ContactusComponent, ContactusListingComponent],
                providers: [ApiService, LoadingComponent, CookieService],
                bootstrap: [],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                entryComponents: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbnRhY3R1cy8iLCJzb3VyY2VzIjpbImxpYi9jb250YWN0dXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSx5QkFBeUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU0sRUFBQyxhQUFhLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQTJCaEQsTUFBTSxPQUFPLGVBQWU7OztZQXhCM0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLGdCQUFnQixDQUFDO2dCQUMvRSxPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCO29CQUNsQix1QkFBdUI7b0JBQ3ZCLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGFBQWE7b0JBQ2IsZ0JBQWdCO2lCQVFqQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSx5QkFBeUIsQ0FBQztnQkFDeEQsU0FBUyxFQUFFLENBQUMsVUFBVSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsQ0FBQztnQkFDeEQsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ2pDLGVBQWUsRUFBQyxFQUFFO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRhY3R1c0NvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdHVzLmNvbXBvbmVudCc7XG5pbXBvcnQge0RlbW9NYXRlcmlhbE1vZHVsZX0gZnJvbSAnLi9tYXRlcmlhbC1tb2R1bGUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Jyb3dzZXJBbmltYXRpb25zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgQWdtQ29yZU1vZHVsZX0gZnJvbSAnQGFnbS9jb3JlJztcbmltcG9ydCB7IExpc3RpbmdNb2R1bGUgfSBmcm9tICdsaXN0aW5nLWFuZ3VsYXI3JztcbmltcG9ydCB7IENvbnRhY3R1c0xpc3RpbmdDb21wb25lbnR9IGZyb20gJy4vY29udGFjdHVzLWxpc3RpbmcvY29udGFjdHVzLWxpc3RpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydHtDb29raWVTZXJ2aWNlfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NvbnRhY3R1c0NvbXBvbmVudCwgQ29udGFjdHVzTGlzdGluZ0NvbXBvbmVudCwgTG9hZGluZ0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTGlzdGluZ01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAvKiAgQWdtQ29yZU1vZHVsZS5mb3JSb290KHtcbiAgICAgIGFwaUtleTogJ0FJemFTeUJsT2h6MTlnLVhXTVdoTHBmY3hUdklGeFgzRU1ZLVU0WSdcbiAgICAgIC8hKiBhcGlLZXkgaXMgcmVxdWlyZWQsIHVubGVzcyB5b3UgYXJlIGFcbiAgICAgIHByZW1pdW0gY3VzdG9tZXIsIGluIHdoaWNoIGNhc2UgeW91IGNhblxuICAgICAgdXNlIGNsaWVudElkXG4gICAgICAqIS9cbiAgICB9KSovXG4gIF0sXG4gIGV4cG9ydHM6IFtDb250YWN0dXNDb21wb25lbnQsIENvbnRhY3R1c0xpc3RpbmdDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlLCBMb2FkaW5nQ29tcG9uZW50LCBDb29raWVTZXJ2aWNlXSxcbiAgYm9vdHN0cmFwOiBbXSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxuICBlbnRyeUNvbXBvbmVudHM6W11cbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdHVzTW9kdWxlIHsgfVxuXG4iXX0=