/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NewsTitleComponent, modalData } from './news-title.component';
import { DemoMaterialModule } from './material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { ListingNewsletterComponent } from './Components/listing-newsletter/listing-newsletter.component';
import { ListingModule } from 'listing-angular7';
import { AddEditSubcategoryComponent, Modal } from './Components/subscriptioncategory/add-edit-subcategory/add-edit-subcategory.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListingSubcategoryComponent } from './Components/subscriptioncategory/listing-subcategory/listing-subcategory.component';
import { AddEditSubscriptiongroupComponent, Modal2 } from './Components/add-edit-subscriptiongroup/add-edit-subscriptiongroup.component';
import { AddEditNewsletterlibComponent } from './Components/newsletter/add-edit-newsletterlib/add-edit-newsletterlib.component';
import { ListingNewsletterlibComponent } from './Components/newsletter/listing-newsletterlib/listing-newsletterlib.component';
import { AddEditSenderComponent, Modal3 } from './Components/senderslist/add-edit-sender/add-edit-sender.component';
import { ListingSenderComponent } from './Components/senderslist/listing-sender/listing-sender.component';
import { AddEditTestemaillibComponent, Modal4 } from './Components/testemails/add-edit-testemaillib/add-edit-testemaillib.component';
import { ListingTestemaillibComponent } from './Components/testemails/listing-testemaillib/listing-testemaillib.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DatePipe } from '@angular/common';
export class NewsTitleModule {
}
NewsTitleModule.decorators = [
    { type: NgModule, args: [{
                declarations: [Modal4, Modal2, Modal, NewsTitleComponent, modalData, ListingNewsletterComponent,
                    AddEditSubcategoryComponent, ListingSubcategoryComponent, AddEditSubscriptiongroupComponent,
                    AddEditNewsletterlibComponent, ListingNewsletterlibComponent, AddEditSenderComponent,
                    ListingSenderComponent, Modal3, AddEditTestemaillibComponent, ListingTestemaillibComponent,
                ],
                imports: [
                    DemoMaterialModule,
                    ReactiveFormsModule, FormsModule,
                    BrowserAnimationsModule,
                    CommonModule,
                    ListingModule,
                    RouterModule,
                    HttpClientModule,
                    AmazingTimePickerModule,
                    CKEditorModule,
                ],
                exports: [AddEditSenderComponent, AddEditNewsletterlibComponent, AddEditSubscriptiongroupComponent,
                    Modal, NewsTitleComponent, ListingNewsletterComponent, AddEditSubcategoryComponent,
                    ListingSubcategoryComponent, AddEditTestemaillibComponent, ListingTestemaillibComponent, ListingNewsletterlibComponent,
                    ListingSenderComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                providers: [ApiService, DatePipe],
                entryComponents: [Modal4, Modal3, NewsTitleComponent, modalData, Modal, Modal2]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy10aXRsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL25ld3MtdGl0bGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDMUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSwyQkFBMkIsRUFBQyxLQUFLLEVBQUUsTUFBTSx1RkFBdUYsQ0FBQztBQUMxSSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDbEksT0FBTyxFQUFFLGlDQUFpQyxFQUFDLE1BQU0sRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQ3hJLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQ2hJLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQzlILE9BQU8sRUFBRSxzQkFBc0IsRUFBRyxNQUFNLEVBQUMsTUFBTSxvRUFBb0UsQ0FBQztBQUNwSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUMxRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUMsTUFBTSxFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDcEksT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDM0gsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQTZCMUMsTUFBTSxPQUFPLGVBQWU7OztZQTFCM0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLGtCQUFrQixFQUFFLFNBQVMsRUFBRSwwQkFBMEI7b0JBQzFGLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFLGlDQUFpQztvQkFDM0YsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsc0JBQXNCO29CQUNwRixzQkFBc0IsRUFBQyxNQUFNLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCO2lCQUN4RjtnQkFDSCxPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCO29CQUNsQixtQkFBbUIsRUFBQyxXQUFXO29CQUMvQix1QkFBdUI7b0JBQ3ZCLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsdUJBQXVCO29CQUN2QixjQUFjO2lCQUVmO2dCQUNELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFDLDZCQUE2QixFQUFDLGlDQUFpQztvQkFDOUYsS0FBSyxFQUFDLGtCQUFrQixFQUFDLDBCQUEwQixFQUFDLDJCQUEyQjtvQkFDL0UsMkJBQTJCLEVBQUMsNEJBQTRCLEVBQUMsNEJBQTRCLEVBQUMsNkJBQTZCO29CQUNuSCxzQkFBc0IsQ0FBQztnQkFDekIsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ2pDLFNBQVMsRUFBRSxDQUFDLFVBQVUsRUFBQyxRQUFRLENBQUM7Z0JBQ2hDLGVBQWUsRUFBQyxDQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsa0JBQWtCLEVBQUUsU0FBUyxFQUFDLEtBQUssRUFBQyxNQUFNLENBQUM7YUFDM0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmV3c1RpdGxlQ29tcG9uZW50LCBtb2RhbERhdGEgfSBmcm9tICcuL25ld3MtdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IERlbW9NYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwtbW9kdWxlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IExpc3RpbmdOZXdzbGV0dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL2xpc3RpbmctbmV3c2xldHRlci9saXN0aW5nLW5ld3NsZXR0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RpbmdNb2R1bGUgfSBmcm9tICdsaXN0aW5nLWFuZ3VsYXI3JztcbmltcG9ydCB7IEFkZEVkaXRTdWJjYXRlZ29yeUNvbXBvbmVudCxNb2RhbCB9IGZyb20gJy4vQ29tcG9uZW50cy9zdWJzY3JpcHRpb25jYXRlZ29yeS9hZGQtZWRpdC1zdWJjYXRlZ29yeS9hZGQtZWRpdC1zdWJjYXRlZ29yeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBMaXN0aW5nU3ViY2F0ZWdvcnlDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvc3Vic2NyaXB0aW9uY2F0ZWdvcnkvbGlzdGluZy1zdWJjYXRlZ29yeS9saXN0aW5nLXN1YmNhdGVnb3J5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRFZGl0U3Vic2NyaXB0aW9uZ3JvdXBDb21wb25lbnQsTW9kYWwyIH0gZnJvbSAnLi9Db21wb25lbnRzL2FkZC1lZGl0LXN1YnNjcmlwdGlvbmdyb3VwL2FkZC1lZGl0LXN1YnNjcmlwdGlvbmdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRFZGl0TmV3c2xldHRlcmxpYkNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9uZXdzbGV0dGVyL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIvYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdGluZ05ld3NsZXR0ZXJsaWJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvbmV3c2xldHRlci9saXN0aW5nLW5ld3NsZXR0ZXJsaWIvbGlzdGluZy1uZXdzbGV0dGVybGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRFZGl0U2VuZGVyQ29tcG9uZW50ICwgTW9kYWwzfSBmcm9tICcuL0NvbXBvbmVudHMvc2VuZGVyc2xpc3QvYWRkLWVkaXQtc2VuZGVyL2FkZC1lZGl0LXNlbmRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdGluZ1NlbmRlckNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9zZW5kZXJzbGlzdC9saXN0aW5nLXNlbmRlci9saXN0aW5nLXNlbmRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkRWRpdFRlc3RlbWFpbGxpYkNvbXBvbmVudCxNb2RhbDQgfSBmcm9tICcuL0NvbXBvbmVudHMvdGVzdGVtYWlscy9hZGQtZWRpdC10ZXN0ZW1haWxsaWIvYWRkLWVkaXQtdGVzdGVtYWlsbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0aW5nVGVzdGVtYWlsbGliQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL3Rlc3RlbWFpbHMvbGlzdGluZy10ZXN0ZW1haWxsaWIvbGlzdGluZy10ZXN0ZW1haWxsaWIuY29tcG9uZW50JztcbmltcG9ydCB7IEFtYXppbmdUaW1lUGlja2VyTW9kdWxlIH0gZnJvbSAnYW1hemluZy10aW1lLXBpY2tlcic7XG5pbXBvcnQgeyBDS0VkaXRvck1vZHVsZSB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYW5ndWxhcic7XG5pbXBvcnQgeyBEYXRlUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNb2RhbDQsTW9kYWwyLE1vZGFsLE5ld3NUaXRsZUNvbXBvbmVudCwgbW9kYWxEYXRhLCBMaXN0aW5nTmV3c2xldHRlckNvbXBvbmVudCwgXG4gICAgQWRkRWRpdFN1YmNhdGVnb3J5Q29tcG9uZW50LCBMaXN0aW5nU3ViY2F0ZWdvcnlDb21wb25lbnQsIEFkZEVkaXRTdWJzY3JpcHRpb25ncm91cENvbXBvbmVudCwgXG4gICAgQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQsIExpc3RpbmdOZXdzbGV0dGVybGliQ29tcG9uZW50LCBBZGRFZGl0U2VuZGVyQ29tcG9uZW50LCBcbiAgICBMaXN0aW5nU2VuZGVyQ29tcG9uZW50LE1vZGFsMywgQWRkRWRpdFRlc3RlbWFpbGxpYkNvbXBvbmVudCwgTGlzdGluZ1Rlc3RlbWFpbGxpYkNvbXBvbmVudCxcbiAgICBdLFxuICBpbXBvcnRzOiBbXG4gICAgRGVtb01hdGVyaWFsTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsRm9ybXNNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIExpc3RpbmdNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQW1hemluZ1RpbWVQaWNrZXJNb2R1bGUsXG4gICAgQ0tFZGl0b3JNb2R1bGUsXG4gICAgXG4gIF0sXG4gIGV4cG9ydHM6IFtBZGRFZGl0U2VuZGVyQ29tcG9uZW50LEFkZEVkaXROZXdzbGV0dGVybGliQ29tcG9uZW50LEFkZEVkaXRTdWJzY3JpcHRpb25ncm91cENvbXBvbmVudCxcbiAgICBNb2RhbCxOZXdzVGl0bGVDb21wb25lbnQsTGlzdGluZ05ld3NsZXR0ZXJDb21wb25lbnQsQWRkRWRpdFN1YmNhdGVnb3J5Q29tcG9uZW50LFxuICAgIExpc3RpbmdTdWJjYXRlZ29yeUNvbXBvbmVudCxBZGRFZGl0VGVzdGVtYWlsbGliQ29tcG9uZW50LExpc3RpbmdUZXN0ZW1haWxsaWJDb21wb25lbnQsTGlzdGluZ05ld3NsZXR0ZXJsaWJDb21wb25lbnQsXG4gICAgTGlzdGluZ1NlbmRlckNvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcbiAgcHJvdmlkZXJzOiBbQXBpU2VydmljZSxEYXRlUGlwZV0sXG4gIGVudHJ5Q29tcG9uZW50czpbTW9kYWw0LE1vZGFsMyxOZXdzVGl0bGVDb21wb25lbnQsIG1vZGFsRGF0YSxNb2RhbCxNb2RhbDJdXG59KVxuZXhwb3J0IGNsYXNzIE5ld3NUaXRsZU1vZHVsZSB7IH1cblxuXG5cbiJdfQ==