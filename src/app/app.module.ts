import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms'
import { DemoMaterialModule } from "../material-module";
import { DragScrollModule } from 'ngx-drag-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { LoginComponent } from './component/backend/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { MetaModule } from '@ngx-meta/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.guard';
import { ApiService } from './api.service';
import {ListingModule} from 'listing-angular7';
import {MatIconModule} from '@angular/material/icon';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { OwlModule } from 'ngx-owl-carousel';
import { AmazingTimePickerModule } from 'amazing-time-picker'; // this line you need
/**Frontend Component**/
import { ForgetPasswordComponent } from './component/backend/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/backend/reset-password/reset-password.component';
import { SignUpComponent } from './component/backend/sign-up/sign-up.component';

/**End Frontend Component**/
/**Backend Component**/
import { ImageGalleryModule } from 'image-gallery-lib-influxiq';
import { AddeditImageComponent } from './component/backend/manage-website/ImageGallery/ImageManagement/addedit-image/addedit-image.component';
import { ListImagesComponent } from './component/backend/manage-website/ImageGallery/ImageManagement/list-images/list-images.component';
import { AddeditImageCategoryComponent} from './component/backend/manage-website/ImageGallery/categoryManagement/addedit-image-category/addedit-image-category.component';
import { ListingCategoryComponent} from './component/backend/manage-website/ImageGallery/categoryManagement/listing-category/listing-category.component';
/**video library route start here**/
import { VideoModule } from 'video-lib-influxiq';
import { ListVideosComponent } from './component/backend/manage-website/video-management/list-videos/list-videos.component';
import { VideoCategoryManagementComponent } from './component/backend/manage-website/video-management/video-category-management/video-category-management.component';
import { AddEditVideosComponent } from './component/backend/manage-website/video-management/video-library-management/add-edit-videos/add-edit-videos.component';
import { ListVideoManagementComponent }from './component/backend/manage-website/video-management/video-library-management/list-video-management/list-video-management.component';
/**video library route end here**/
import { SidenavService } from './../app/services/sidenav.service';
import { DashboardComponent } from './component/backend/dashboard/dashboard.component';
import { BkHeaderComponent } from './layout/bk-header/bk-header.component';
import { BkFooterComponent } from './layout/bk-footer/bk-footer.component';
import { ManageCommissionComponent } from './component/backend/manage-website/manage-commission/manage-commission.component';
import { NewsletterlistsComponent } from './component/backend/manage-website/newsletterlists/newsletterlists.component';
import { CustomerListComponent } from './component/backend/user/customer-list/customer-list.component';
import { AddeditServiceComponent } from './component/backend/manage-website/ServiceApp/addedit-service/addedit-service.component';
import { ListingServiceComponent } from './component/backend/manage-website/ServiceApp/listing-service/listing-service.component';
import { MaindashboardComponent } from './component/backend/maindashboard/maindashboard.component';
import { UserManagementComponent } from './component/backend/user-management/user-management.component';
import { ListingTestimonialComponent } from './component/backend/manage-website/TestimonialApp/listing-testimonial/listing-testimonial.component';
import { AddeditTestimonialComponent } from './component/backend/manage-website/TestimonialApp/addedit-testimonial/addedit-testimonial.component';
import { BlogManagementComponent } from './component/backend/manage-website/blog-management/blog-management.component';
import { AffiliateDashboardComponent } from './component/backend/affiliate-dashboard/affiliate-dashboard.component';
import { BookAnAppointmentComponent } from './component/backend/book-an-appointment/book-an-appointment.component';
import { MyAppointmentComponent } from './component/backend/calendar-manager/my-appointment/my-appointment.component';
import { ManageAvailabilityComponent } from './component/backend/calendar-manager/manage-availability/manage-availability.component';
import { SocialAdvoComponent } from './component/backend/manage-website/social-advo/social-advo.component';
import { CommissionReportComponent } from './component/backend/report/commission-report/commission-report.component';
import { BookingReportComponent } from './component/backend/report/booking-report/booking-report.component';
import { ListingAffiliateComponent } from './component/backend/user/affiliate/listing-affiliate/listing-affiliate.component';
// import { GalleryAdminComponent } from './component/backend/gallery-admin/gallery-admin.component';
import { BookedEventsComponent } from './component/backend/booked-events/booked-events.component';
import { PastEventUserComponent } from './component/backend/past-event-user/past-event-user.component';
import { UpcomingEventUserComponent } from './component/backend/upcoming-event-user/upcoming-event-user.component';
import { MyCustomersAffiliateComponent } from './component/backend/my-customers-affiliate/my-customers-affiliate.component';
import { AddEditBlogcatComponent } from './component/backend/manage-website/blog-management/add-edit-blogcat/add-edit-blogcat.component';
import { ListingBlogcatComponent } from './component/backend/manage-website/blog-management/listing-blogcat/listing-blogcat.component';
import { AddEditBlogsComponent } from './component/backend/manage-website/blog-management/add-edit-blogs/add-edit-blogs.component';
import { ListingBlogsComponent } from './component/backend/manage-website/blog-management/listing-blogs/listing-blogs.component';
import { ManageEventListingComponent} from './component/backend/events/manage-event-listing/manage-event-listing.component';
import { AddEditManageEventComponent, EventModal } from './component/backend/events/add-edit-manage-event/add-edit-manage-event.component';
import { AddEditNewsletterComponent } from './component/backend/manage-website/newsletterlists/add-edit-newsletter/add-edit-newsletter.component';
import { AddEditSubscriberComponent } from './component/backend/manage-website/newsletterlists/add-edit-subscriber/add-edit-subscriber.component';
import { AddEditSubscriberGroupComponent } from './component/backend/manage-website/newsletterlists/add-edit-subscriber-group/add-edit-subscriber-group.component';
import { AddEditTestemailComponent } from './component/backend/manage-website/newsletterlists/add-edit-testemail/add-edit-testemail.component';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import {DatePipe} from '@angular/common';
import { HomeEventComponent } from './component/backend/events/home-event/home-event.component';
import { NewsTitleModule } from 'news-title-lib-influxiq';
import { ServicelibModule } from 'service-lib-influxiq';
import { TestimonialModule } from 'testimonial-lib-influxiq';
import { FileUploadModule } from 'file-upload-lib-influxiq';
import { LoginModule } from 'login-lib-influxiq';
import { BlogModule } from 'blog-lib-influxiq';
import { ContactusModule } from 'contactus-lib-influxiq';
 
 
import { ListingNewsletterComponent } from './component/backend/manage-website/newsletterlists/listing-newsletter/listing-newsletter.component';
import { LisitngTestemailappComponent } from './component/backend/manage-website/newsletterlists/lisitng-testemailapp/lisitng-testemailapp.component';
import { ListingSenderappComponent } from './component/backend/manage-website/newsletterlists/listing-senderapp/listing-senderapp.component';
import { ListingSubscriptionComponent } from './component/backend/manage-website/newsletterlists/listing-subscription/listing-subscription.component';
import { ListingSubcategoryComponent } from './component/backend/manage-website/newsletterlists/listing-subcategory/listing-subcategory.component';
import { AddEditSenderappComponent } from './component/backend/manage-website/newsletterlists/add-edit-senderapp/add-edit-senderapp.component';
/**End Backend Component** */

import { HttpLoaderComponent } from './http-loader/http-loader.component';
import { HttpLoaderService } from './http-loader.service';
import { LoaderInterceptor } from './loader.interceptor';
import { AddCustomerComponent } from './component/backend/user/add-customer/add-customer.component';
import { AddAffiliateComponent, AffiliateModal } from './component/backend/user/add-affiliate/add-affiliate.component';


import { CKEditorModule } from 'ngx-ckeditor';
import { MiscellaneousComponent } from './component/backend/manage-website/miscellaneous/miscellaneouslists/miscellaneous.component';
//account-settings
import { AccountSettingsComponent } from './component/backend/account-settings/account-settings.component';
import { CommonComponent } from './component/backend/common/common.component';
// import { DialogBoxComponent } from './common/dialog-box/dialog-box.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    SignUpComponent,
    DashboardComponent,
    BkHeaderComponent,
    BkFooterComponent,
    AddeditServiceComponent,
    ListingServiceComponent,
    MaindashboardComponent,
    UserManagementComponent,
    BlogManagementComponent,
    AffiliateDashboardComponent,
    ListingTestimonialComponent,
    AddeditTestimonialComponent,
    BookAnAppointmentComponent,
    MyAppointmentComponent,
    NewsletterlistsComponent,
    ManageCommissionComponent,    
    SocialAdvoComponent,   
    ManageAvailabilityComponent,
    CommissionReportComponent,
    CustomerListComponent,  
    BookingReportComponent, 
    ListingAffiliateComponent, 
    // GalleryAdminComponent, 
    BookedEventsComponent, 
    PastEventUserComponent, 
    UpcomingEventUserComponent, 
    MyCustomersAffiliateComponent,
    AddEditBlogcatComponent,
    ListingBlogcatComponent,
    AddEditBlogsComponent,
    ListingBlogsComponent,
    
    ManageEventListingComponent,
    AddEditManageEventComponent,
    
    AddEditNewsletterComponent,
    
    AddEditSubscriberComponent,
    AddEditSubscriberGroupComponent,
    AddEditTestemailComponent,
    EventModal,
    HomeEventComponent,
    ListingNewsletterComponent,
    LisitngTestemailappComponent,
    ListingSenderappComponent,
     
    ListingSubscriptionComponent,
     
    ListingSubcategoryComponent,
    AddEditSenderappComponent,
    AddeditImageComponent,
    ListImagesComponent,
    AddeditImageCategoryComponent,
    ListingCategoryComponent,
    
    ListVideosComponent,
    VideoCategoryManagementComponent,
    AddEditVideosComponent,
    ListVideoManagementComponent,
    HttpLoaderComponent,
    ListingAffiliateComponent,
    AddCustomerComponent,
    AddAffiliateComponent,
    AffiliateModal,
    MiscellaneousComponent,
    AccountSettingsComponent,
    CommonComponent
  ],
  imports: [
    AmazingTimePickerModule,   
    CKEditorModule,
    AngularFontAwesomeModule,
    DragScrollModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    DemoMaterialModule,
    CommonModule,
    NgxMaterialTimepickerModule, 
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    LoginModule,
    BlogModule,
    TestimonialModule,
    ServicelibModule,
    ContactusModule,
    FileUploadModule,
    HttpClientModule,
    AppRoutingModule,MetaModule.forRoot(), BrowserAnimationsModule,
    ListingModule,
    MatIconModule,
    OwlModule,
    FormsModule,
    ReactiveFormsModule,
    NewsTitleModule,
    ImageGalleryModule,
    VideoModule
  ],
  providers: [CookieService, AuthGuard, ApiService, SidenavService,DatePipe, HttpLoaderService, { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true, }],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  entryComponents: [EventModal,AffiliateModal,CommonComponent]
})
export class AppModule { }