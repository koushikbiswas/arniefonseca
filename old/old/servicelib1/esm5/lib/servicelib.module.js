/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ServicelibComponent } from './servicelib.component';
import { DemoMaterialModule } from './modules/material-module';
import { AddeditServiceComponent, Modal } from './Component/addedit-service/addedit-service.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ListingModule } from 'lib-listing';
var ServicelibModule = /** @class */ (function () {
    function ServicelibModule() {
    }
    ServicelibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ServicelibComponent, AddeditServiceComponent, Modal],
                    imports: [
                        DemoMaterialModule,
                        HttpClientModule,
                        RouterModule,
                        CKEditorModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CommonModule,
                        BrowserModule,
                        ListingModule
                    ],
                    exports: [ServicelibComponent, AddeditServiceComponent, Modal],
                    entryComponents: [Modal]
                },] }
    ];
    return ServicelibModule;
}());
export { ServicelibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXJ2aWNlbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VsaWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRyxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUM7SUFBQTtJQWdCZ0MsQ0FBQzs7Z0JBaEJoQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUMsdUJBQXVCLEVBQUMsS0FBSyxDQUFDO29CQUNqRSxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGFBQWE7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUMsdUJBQXVCLEVBQUMsS0FBSyxDQUFDO29CQUM1RCxlQUFlLEVBQUMsQ0FBQyxLQUFLLENBQUM7aUJBQ3hCOztJQUMrQix1QkFBQztDQUFBLEFBaEJqQyxJQWdCaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlcnZpY2VsaWJDb21wb25lbnQgfSBmcm9tICcuL3NlcnZpY2VsaWIuY29tcG9uZW50JztcbmltcG9ydCB7IERlbW9NYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9tYXRlcmlhbC1tb2R1bGUnO1xuaW1wb3J0IHsgQWRkZWRpdFNlcnZpY2VDb21wb25lbnQgLE1vZGFsfSBmcm9tICcuL0NvbXBvbmVudC9hZGRlZGl0LXNlcnZpY2UvYWRkZWRpdC1zZXJ2aWNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENLRWRpdG9yTW9kdWxlIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1hbmd1bGFyJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBMaXN0aW5nTW9kdWxlIH0gZnJvbSAnbGliLWxpc3RpbmcnO1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2VydmljZWxpYkNvbXBvbmVudCxBZGRlZGl0U2VydmljZUNvbXBvbmVudCxNb2RhbF0sXG4gIGltcG9ydHM6IFtcbiAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQ0tFZGl0b3JNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBMaXN0aW5nTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtTZXJ2aWNlbGliQ29tcG9uZW50LEFkZGVkaXRTZXJ2aWNlQ29tcG9uZW50LE1vZGFsXSxcbiAgZW50cnlDb21wb25lbnRzOltNb2RhbF1cbn0pXG5leHBvcnQgY2xhc3MgU2VydmljZWxpYk1vZHVsZSB7IH1cbiJdfQ==