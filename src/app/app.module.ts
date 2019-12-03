import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms'

import { DemoMaterialModule } from "../material-module";
import { DragScrollModule } from 'ngx-drag-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { LoginComponent } from './component/frontend/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { MetaModule } from '@ngx-meta/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.guard';
import { ApiService } from './api.service';
import {ListingModule} from 'listing-angular7';

import {MatIconModule} from '@angular/material/icon';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { OwlModule } from 'ngx-owl-carousel';
import { AmazingTimePickerModule } from 'amazing-time-picker'; // this line you need



/**Frontend Component**/

import { HeaderComponent, comingSoonDialog } from './layout/header/header.component';
import { FooterComponent, DialogTermsDialog, DialogPrivacyDialog, NewslatterDialogComponent, NewslattersuccessDialogComponent} from './layout/footer/footer.component';
import { HomeComponent } from './component/frontend/home/home.component';
import { ContactusComponent } from './component/frontend/contactus/contactus.component';
import { ForgetPasswordComponent } from './component/frontend/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/frontend/reset-password/reset-password.component';
import { SignUpComponent } from './component/frontend/sign-up/sign-up.component';

import { BlogComponent } from './component/frontend/blog/blog.component';
import { BloglistComponent,  CommonVideoModalComponent} from './component/frontend/bloglist/bloglist.component';
import { BlogdetailComponent, VideoModalComponent } from './component/frontend/blogdetail/blogdetail.component';

import { AboutusComponent } from './component/frontend/aboutus/aboutus.component';

import { ServiceComponent } from './component/frontend/service/service.component';
import { ServicelistComponent } from './component/frontend/services/servicelist/servicelist.component';
import { TesimonialComponent } from './component/frontend/tesimonial/tesimonial.component';
import { TesimoniallistComponent, CommonTestimonialVideoModalComponent } from './component/frontend/tesimoniallist/tesimoniallist.component';
import { EmployeeTrainingComponent } from './component/frontend/services/employee-training/employee-training.component';
import { CouplesCounselingComponent } from './component/frontend/services/couples-counseling/couples-counseling.component';
import { PersonalDevelopmentCoachingComponent } from './component/frontend/services/personal-development-coaching/personal-development-coaching.component';
import { HighPerformanceCoachingComponent } from './component/frontend/services/high-performance-coaching/high-performance-coaching.component';
import { SpecialProgramsForYoungMenComponent } from './component/frontend/services/special-programs-for-young-men/special-programs-for-young-men.component';
import { ImageGalleryComponent } from './component/frontend/gallery/image-gallery/image-gallery.component';
import { VideoGalleryComponent } from './component/frontend/gallery/video-gallery/video-gallery.component';
import { TeamComponent } from './component/frontend/team/team.component';
import { SeminarsComponent } from './component/frontend/events/seminars/seminars.component';
import { WorkshopsComponent } from './component/frontend/events/workshops/workshops.component';
import { SpeakerEngagementsComponent } from './component/frontend/events/speaker-engagements/speaker-engagements.component';
import { BioComponent } from './component/frontend/bio/bio.component';

/**End Frontend Component**/


/**Backend Component**/
import { SidenavService } from './../app/services/sidenav.service';
import { DashboardComponent } from './component/backend/dashboard/dashboard.component';
import { BkHeaderComponent } from './layout/bk-header/bk-header.component';
import { BkFooterComponent } from './layout/bk-footer/bk-footer.component';
import { ManageCommissionComponent } from './component/backend/manage-commission/manage-commission.component';
import { NewsletterlistsComponent } from './component/backend/newsletterlists/newsletterlists.component';
import { CustomerListComponent } from './component/backend/customer-list/customer-list.component';
import { AddeditServiceComponent } from './component/backend/ServiceApp/addedit-service/addedit-service.component';
import { ListingServiceComponent } from './component/backend/ServiceApp/listing-service/listing-service.component';

import { BkLeftdivComponent } from './layout/bk-leftdiv/bk-leftdiv.component';
import { MaindashboardComponent } from './component/backend/maindashboard/maindashboard.component';
import { UserManagementComponent } from './component/backend/user-management/user-management.component';

import { ListingTestimonialComponent } from './component/backend/TestimonialApp/listing-testimonial/listing-testimonial.component';
import { AddeditTestimonialComponent } from './component/backend/TestimonialApp/addedit-testimonial/addedit-testimonial.component';
import { BlogManagementComponent } from './component/backend/blog-management/blog-management.component';
import { AffiliateDashboardComponent } from './component/backend/affiliate-dashboard/affiliate-dashboard.component';
import { BookAnAppointmentComponent } from './component/backend/book-an-appointment/book-an-appointment.component';
import { MyAppointmentComponent } from './component/backend/my-appointment/my-appointment.component';
import { ManageAvailabilityComponent } from './component/backend/manage-availability/manage-availability.component';
import { SocialAdvoComponent } from './component/backend/social-advo/social-advo.component';
import { CommissionReportComponent } from './component/backend/commission-report/commission-report.component';
import { BookingReportComponent } from './component/backend/booking-report/booking-report.component';
import { AffiliateComponent } from './component/backend/affiliate/affiliate.component';
import { GalleryAdminComponent } from './component/backend/gallery-admin/gallery-admin.component';
import { BookedEventsComponent } from './component/backend/booked-events/booked-events.component';
import { PastEventUserComponent } from './component/backend/past-event-user/past-event-user.component';
import { UpcomingEventUserComponent } from './component/backend/upcoming-event-user/upcoming-event-user.component';
import { MyCustomersAffiliateComponent } from './component/backend/my-customers-affiliate/my-customers-affiliate.component';

import { AddEditBlogcatComponent } from './component/backend/blog-management/add-edit-blogcat/add-edit-blogcat.component';
import { ListingBlogcatComponent } from './component/backend/blog-management/listing-blogcat/listing-blogcat.component';
import { AddEditBlogsComponent } from './component/backend/blog-management/add-edit-blogs/add-edit-blogs.component';
import { ListingBlogsComponent } from './component/backend/blog-management/listing-blogs/listing-blogs.component';

import { ManageEventListingComponent} from './component/backend/events/manage-event-listing/manage-event-listing.component';
import { AddEditManageEventComponent, EventModal } from './component/backend/events/add-edit-manage-event/add-edit-manage-event.component';


import { WorkshopDetailComponent } from './component/frontend/events/workshop-detail/workshop-detail.component';
import { SeminarsDetailComponent } from './component/frontend/events/seminars-detail/seminars-detail.component';
import { SpeakerEngagementsDetailComponent } from './component/frontend/events/speaker-engagements-detail/speaker-engagements-detail.component';

import { AddEditNewsletterComponent } from './component/backend/newsletterlists/add-edit-newsletter/add-edit-newsletter.component';


import { AddEditSubscriberComponent } from './component/backend/newsletterlists/add-edit-subscriber/add-edit-subscriber.component';
import { AddEditSubscriberGroupComponent } from './component/backend/newsletterlists/add-edit-subscriber-group/add-edit-subscriber-group.component';
import { AddEditSendersComponent } from './component/backend/newsletterlists/add-edit-senders/add-edit-senders.component';
import { AddEditTestemailComponent } from './component/backend/newsletterlists/add-edit-testemail/add-edit-testemail.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { ContactusModule } from 'contactus';
import { NewsTitleModule } from 'news-title-lib-influxiq';
import { ServicelibModule } from 'service-lib-influxiq';
import { TestimonialModule } from 'testimonial-lib-influxiq';
import { FileUploadModule } from 'file-upload-lib-influxiq';
import { LoginModule } from 'login-lib-influxiq';
import { BlogModule } from 'blog-lib-influxiq';

/**End Backend Component** */


@NgModule({
  declarations: [

    AppComponent,
    LoginComponent,
    ContactusComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    SignUpComponent,
    DashboardComponent,
    HeaderComponent,
    comingSoonDialog,
    FooterComponent,
    DialogPrivacyDialog,
    DialogTermsDialog,
    HomeComponent,
    BkHeaderComponent,
    BkFooterComponent,
    AddeditServiceComponent,
    ListingServiceComponent,
    BkLeftdivComponent,
    MaindashboardComponent,
    BlogComponent,
    BloglistComponent,
    BlogdetailComponent,
    UserManagementComponent,
    AboutusComponent,
    BlogManagementComponent,
    ServiceComponent,
    ServicelistComponent,
    AffiliateDashboardComponent,
    TesimonialComponent,
    TesimoniallistComponent,    
    // TestimonialListsAdminComponent,
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
    EmployeeTrainingComponent,    
    CouplesCounselingComponent, 
    PersonalDevelopmentCoachingComponent, 
    HighPerformanceCoachingComponent, 
    SpecialProgramsForYoungMenComponent, 
    ImageGalleryComponent, 
    VideoGalleryComponent,
    TeamComponent, 
    BookingReportComponent, 
    SeminarsComponent, 
    WorkshopsComponent, 
    SpeakerEngagementsComponent, 
    AffiliateComponent, 
    GalleryAdminComponent, 
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
    NewslatterDialogComponent,

    NewslattersuccessDialogComponent,

    
    WorkshopDetailComponent,
    SeminarsDetailComponent,
    SpeakerEngagementsDetailComponent,
    AddEditNewsletterComponent,
    
    AddEditSubscriberComponent,
    AddEditSubscriberGroupComponent,
    AddEditSendersComponent,
    AddEditTestemailComponent,
    CommonVideoModalComponent,
    CommonTestimonialVideoModalComponent,
    VideoModalComponent,
    EventModal,
    BioComponent
    

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
    MatCarouselModule.forRoot(),
    OwlModule,
    FormsModule,
    ReactiveFormsModule,
    NewsTitleModule
  ],
  providers: [CookieService, AuthGuard, ApiService, SidenavService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  entryComponents: [comingSoonDialog, DialogPrivacyDialog, DialogTermsDialog,CommonVideoModalComponent, NewslatterDialogComponent,VideoModalComponent, NewslattersuccessDialogComponent, CommonTestimonialVideoModalComponent,EventModal]
})
export class AppModule { }
