import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/backend/login/login.component';
import { AuthGuard } from './auth.guard';

/**Frontend Routing**/

import { ForgetPasswordComponent } from './component/backend/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/backend/reset-password/reset-password.component';
import { SignUpComponent } from './component/backend/sign-up/sign-up.component';


/**End Frontend Routing**/

/**Backend Routing**/
/**image gallery route start here**/
import { AddeditImageComponent } from './component/backend/manage-website/ImageGallery/ImageManagement/addedit-image/addedit-image.component';
import { ListImagesComponent } from './component/backend/manage-website/ImageGallery/ImageManagement/list-images/list-images.component';
import { AddeditImageCategoryComponent} from './component/backend/manage-website/ImageGallery/categoryManagement/addedit-image-category/addedit-image-category.component';
import { ListingCategoryComponent} from './component/backend/manage-website/ImageGallery/categoryManagement/listing-category/listing-category.component';
/**image gallery route end here**/
/**video library route start here**/
import { ListVideosComponent } from './component/backend/manage-website/video-management/list-videos/list-videos.component';
import { VideoCategoryManagementComponent } from './component/backend/manage-website/video-management/video-category-management/video-category-management.component';
import { AddEditVideosComponent } from './component/backend/manage-website/video-management/video-library-management/add-edit-videos/add-edit-videos.component';
import { ListVideoManagementComponent }from './component/backend/manage-website/video-management/video-library-management/list-video-management/list-video-management.component';
/**video library route end here**/
import { DashboardComponent } from './component/backend/dashboard/dashboard.component';

import { ManageCommissionComponent } from './component/backend/manage-website/manage-commission/manage-commission.component';
import { NewsletterlistsComponent } from './component/backend/manage-website/newsletterlists/newsletterlists.component';

import { CustomerListComponent } from './component/backend/user/customer-list/customer-list.component';

import { MaindashboardComponent } from './component/backend/maindashboard/maindashboard.component';

import { AddeditServiceComponent } from './component/backend/manage-website/ServiceApp/addedit-service/addedit-service.component';

import { ListingServiceComponent } from './component/backend/manage-website/ServiceApp/listing-service/listing-service.component';

import { UserManagementComponent } from './component/backend/user-management/user-management.component';
import { ResolveService } from './services/resolve.service';
import { BlogManagementComponent } from './component/backend/manage-website/blog-management/blog-management.component';


import { AffiliateDashboardComponent } from './component/backend/affiliate-dashboard/affiliate-dashboard.component';


// import { TestimonialListsAdminComponent } from './component/backend/testimonial-lists-admin/testimonial-lists-admin.component';

import { ListingTestimonialComponent } from './component/backend/manage-website/TestimonialApp/listing-testimonial/listing-testimonial.component';
import { AddeditTestimonialComponent } from './component/backend/manage-website/TestimonialApp/addedit-testimonial/addedit-testimonial.component';

import { BookAnAppointmentComponent } from './component/backend/book-an-appointment/book-an-appointment.component';
import { MyAppointmentComponent } from './component/backend/calendar-manager/my-appointment/my-appointment.component';


import { ListingAffiliateComponent } from './component/backend/user/affiliate/listing-affiliate/listing-affiliate.component';
import { SocialAdvoComponent } from './component/backend/manage-website/social-advo/social-advo.component';
import { ManageAvailabilityComponent } from './component/backend/calendar-manager/manage-availability/manage-availability.component';
import { CommissionReportComponent } from './component/backend/report/commission-report/commission-report.component';
import { BookingReportComponent } from './component/backend/report/booking-report/booking-report.component';

import { BookedEventsComponent } from './component/backend/booked-events/booked-events.component';
import { PastEventUserComponent } from './component/backend/past-event-user/past-event-user.component';
import { UpcomingEventUserComponent } from './component/backend/upcoming-event-user/upcoming-event-user.component';
import { MyCustomersAffiliateComponent } from './component/backend/my-customers-affiliate/my-customers-affiliate.component';

import { AddEditBlogcatComponent } from './component/backend/manage-website/blog-management/add-edit-blogcat/add-edit-blogcat.component';
import { ListingBlogcatComponent } from './component/backend/manage-website/blog-management/listing-blogcat/listing-blogcat.component';
import { AddEditBlogsComponent } from './component/backend/manage-website/blog-management/add-edit-blogs/add-edit-blogs.component';
import { ListingBlogsComponent } from './component/backend/manage-website/blog-management/listing-blogs/listing-blogs.component';

import { ManageEventListingComponent } from './component/backend/events/manage-event-listing/manage-event-listing.component';
import { AddEditManageEventComponent } from './component/backend/events/add-edit-manage-event/add-edit-manage-event.component';


import { AddEditNewsletterComponent } from './component/backend/manage-website/newsletterlists/add-edit-newsletter/add-edit-newsletter.component';

import { from } from 'rxjs';
import { AddEditSubscriberComponent } from './component/backend/manage-website/newsletterlists/add-edit-subscriber/add-edit-subscriber.component';
import { AddEditSubscriberGroupComponent } from './component/backend/manage-website/newsletterlists/add-edit-subscriber-group/add-edit-subscriber-group.component';
 
 import { AddEditTestemailComponent } from './component/backend/manage-website/newsletterlists/add-edit-testemail/add-edit-testemail.component';
import {HomeEventComponent} from "./component/backend/events/home-event/home-event.component";

import { ListingNewsletterComponent } from './component/backend/manage-website/newsletterlists/listing-newsletter/listing-newsletter.component';

import { LisitngTestemailappComponent } from './component/backend/manage-website/newsletterlists/lisitng-testemailapp/lisitng-testemailapp.component';
import { ListingSenderappComponent } from './component/backend/manage-website/newsletterlists/listing-senderapp/listing-senderapp.component';
import { ListingSubscriptionComponent } from './component/backend/manage-website/newsletterlists/listing-subscription/listing-subscription.component';
import { ListingSubcategoryComponent } from './component/backend/manage-website/newsletterlists/listing-subcategory/listing-subcategory.component';
 
import { AddEditSenderappComponent } from './component/backend/manage-website/newsletterlists/add-edit-senderapp/add-edit-senderapp.component';
import { AddAffiliateComponent } from './component/backend/user/add-affiliate/add-affiliate.component';
import { AddCustomerComponent } from './component/backend/user/add-customer/add-customer.component';
import { MiscellaneousComponent } from './component/backend/manage-website/miscellaneous/miscellaneouslists/miscellaneous.component';
 //account-settings
 import { AccountSettingsComponent } from './component/backend/account-settings/account-settings.component';





/**End Backend Routing**/

const routes: Routes = [
  //account-settings route
{
   path:'account-settings',
   component : AccountSettingsComponent
},
/**Image Gallery start here**/
{
  path : 'image-gallery/category-management/add',
  component : AddeditImageCategoryComponent
},
{
  path : 'image-gallery/category-management/edit/:_id',
  component : AddeditImageCategoryComponent,
  resolve : {ImageData : ResolveService },
  data : { requestcondition : { source : 'imageGallery_category',condition : {}}, endpoint :'datalist'},
},
{
  path : 'image-gallery/category-management/list',
  component : ListingCategoryComponent,
  resolve:{ ImageData : ResolveService},
  data:{ requestcondition : {source:'imageGallery_category_view',condition:{} },endpoint:'datalist'}
},
{
  path : 'image-gallery/add',
  component : AddeditImageComponent
 },
 {
  path : 'image-gallery/edit/:_id',
  component : AddeditImageComponent,
  resolve: { ImageData : ResolveService},
  data :{ requestcondition : {source :'imageGallery_management',condition:{}},endpoint :'datalist'}
 },
{
  path : 'image-gallery/list',
  component :ListImagesComponent,
  resolve: { ImageData : ResolveService},
  data :{ requestcondition : {source :'imageGallery_management_view',condition:{}},endpoint :'datalist'}
},
/**Image Gallery end here**/
/** Video category Library start Route here**/
{ 
  path:'video-category/list',
  component: ListVideosComponent,
  resolve:{ videoData : ResolveService},
  data:{ requestcondition : {source:'video_category_view',condition:{} },endpoint:'datalist'}
  
},
{ 
  path:'video-category/add',
  component: VideoCategoryManagementComponent,
  
},
{ 

  path:'video-category/edit/:_id',
  component: VideoCategoryManagementComponent,
  resolve:{ videoData : ResolveService},
  data:{ requestcondition : {source:'video_category',condition:{} },endpoint:'datalist'}
},

/** Video Library End Route here**/
/** Video Library management start here**/
{ 
  path:'video-library-management/add',
  component: AddEditVideosComponent
  
},

 { 
  path:'video-library-management/edit/:_id',
  component: AddEditVideosComponent,
  resolve : {videodata : ResolveService },
  data : { requestcondition : {source : 'video_management', condition : {} },endpoint :'datalist'}
  
},
{ 
  path:'video-library-management/list',
  component: ListVideoManagementComponent,
  resolve:{ videoData : ResolveService },
  data : {requestcondition : {source :'video_management_view',condition : {} }, endpoint : 'datalist'}
},
  /**Frontend Routing**/
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'sign-up', component: SignUpComponent },
  /**End Frontend Routing**/
  /**Backend Routing**/
  {
    path : 'imagegallery/add',component:AddeditImageComponent
  },

  {
    path : 'imagegallery/edit/:_id',component:AddeditImageComponent,
    canActivate:[AuthGuard],
    resolve:{ImageData:ResolveService},
    data:{
      requestcondition:{
        source:'imageGallery_management',
        condition:{}
      },
      endpoint:'datalist'
    },
  },


  {
    path : 'imagegallery/list',component:ListImagesComponent,
    canActivate:[AuthGuard],
    resolve:{ImageList:ResolveService},
    data:{
      requestcondition:{
        source:'imageGallery_management_view',
        condition:{}
      },
      endpoint:'datalist'
    },
  },

  {
    path : 'imagecategory/add',component:AddeditImageCategoryComponent
  },

  
  {
    path : 'imagecategory/edit/:_id',component:AddeditImageCategoryComponent,
    canActivate:[AuthGuard],
    resolve:{ImageData:ResolveService},
    data:{
      requestcondition:{
        source:'imageGallery_category',
        condition:{}
      },
      endpoint:'datalist'
    },
  },

  {
    path : 'imagecategory/list',component:ListingCategoryComponent,
    canActivate:[AuthGuard],
    resolve:{ImageCatList:ResolveService},
    data:{
      requestcondition:{
        source:'imageGallery_category_view',
        condition:{}
      },
      endpoint:'datalist'
    },
  },

  // {path: 'customer-dashboard', component:DashboardComponent, canActivate:[AuthGuard]},       // Useing for canActive
  { path: 'customer-dashboard', component: DashboardComponent },
  { path: 'admin-dashboard', component: MaindashboardComponent,

    canActivate:[AuthGuard],
    resolve:{eventList:ResolveService},
    data:{
      requestcondition:{
        source:'events_view',
        condition:{},"limit":50
      },
      endpoint:'datalist'

    },

  },


  { path: 'service/add', component: AddeditServiceComponent },
  {
    path: 'service/list',
    component: ListingServiceComponent,
    resolve: { serviceList: ResolveService },
    data: { requestcondition: { source: 'service_view', condition: {} }, endpoint: 'datalist' }
  },

  {
    path: 'service/edit/:_id', component: AddeditServiceComponent, resolve: { serviceData: ResolveService },
    data: { requestcondition: { source: 'service', condition: {} }, endpoint: 'datalist' }
  },

 

  { path: 'manage-commission', component: ManageCommissionComponent },
  { path: 'manage-availability', component: ManageAvailabilityComponent },
  { path: 'social-advo-admin', component: SocialAdvoComponent },
  { path: 'my-appointment-admin', component: MyAppointmentComponent },
  { path: 'commission-report', component: CommissionReportComponent },
  // { path: 'testimonial-lists-admin', component: ListingTestimonialComponent },
  { path: 'customer-list-admin', component: CustomerListComponent },

  { path: 'testimonial/add', component: AddeditTestimonialComponent },
  {
    path: 'testimonial/edit/:_id', component: AddeditTestimonialComponent, resolve: { testimonialData: ResolveService },
    data: { requestcondition: { source: 'testimonial', condition: {} }, endpoint: 'datalist' }
  },
  {
    path: 'testimonial/list', component: ListingTestimonialComponent, resolve: { testimonialList: ResolveService },
    data: { requestcondition: { source: 'testimonial_backend_list_view', condition: {} }, endpoint: 'datalist' }
  },

  { path: 'booking-report', component: BookingReportComponent },
  

  { path: 'affiliate-admin', component: ListingAffiliateComponent,resolve:{affiliateList:ResolveService},data:{
    requestcondition:{
      source:'users_view',
      condition:{}
    },
    endpoint:'datalist'

  }, 
},

  // ___________________manage event backend__________________//


  //________________Manage event____________//


  { path: 'admineventlist',
    component: HomeEventComponent,
    canActivate:[AuthGuard],
    resolve:{eventList:ResolveService},
    data:{
      requestcondition:{
        source:'events_view',
        condition:{},"limit":50
      },
      endpoint:'datalist'

    },


  },



  { path: 'manage-event/add', component: AddEditManageEventComponent },

  { path: 'manage-event-listing', 
  component: ManageEventListingComponent,
  canActivate:[AuthGuard],
  resolve:{eventList:ResolveService},
  data:{
    requestcondition:{
      source:'events_view',
      condition:{}
    },
    endpoint:'datalist'

  },


  },

  //________________Manage Workshop____________//






{ path: 'manage-event/edit/:_id', component: AddEditManageEventComponent,
canActivate:[AuthGuard],
resolve:{eventList:ResolveService},
data:{
  requestcondition:{
    source:'event',
    condition:{}
  },
  endpoint:'datalist'

},
},

  


  //________________Manage Speaker Engagement____________//


  //_____________________Newsletter/subscriber/sender/testemail____________//



  // ___________________Newsletter MANAGEMENT_________________
  // =======================================================

  {
    path: 'newsletter-list', component: NewsletterlistsComponent, canActivate: [AuthGuard],
    resolve: { newsData: ResolveService },
    data: {
      requestcondition: {
        source: 'newsletters_view',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },


  // _____________________newsletter________________
  { path: 'newsletter/add', component: AddEditNewsletterComponent },

  {
    path: 'newsletter/list',
    component: ListingNewsletterComponent
  },
  {
    path: 'newsletter/edit/:_id',
    component: AddEditNewsletterComponent, resolve: { newsData: ResolveService },
    data: { requestcondition: { source: 'senders', condition: {} }, endpoint: 'datalist' }
  },
  // -----------------------------------------------


  
  // _____________________Subscriber________________
  { path: 'subscriber/add', component: AddEditSubscriberComponent },

  {
    path: 'newsletter-list',
    component: ListingSubscriptionComponent 
  },
  {
    path: 'subscriber/add-group/edit/:_id',
    component: AddEditSubscriberComponent
  },
  // -----------------------------------------------
  // -------------------------------------------



    // _____________________Subscriber GROUP________________
    { path: 'subscriber-group/add', component: AddEditSubscriberGroupComponent },

    {
      path: 'newsletter-list',
      component: ListingSubcategoryComponent 
    },
    {
      path: 'subscriber-group/edit/:_id',
      component: AddEditSubscriberGroupComponent
    },
    // -----------------------------------------------
    // -------------------------------------------
  


  // ________________________test email _____________________
  { path: 'test/add', component: AddEditTestemailComponent },
  {
    path: 'newsletter-list',
    component: LisitngTestemailappComponent 
  
  },
  {
    path: 'test/edit/:_id',
    component: AddEditTestemailComponent
    
  
    
  },
  
    // ________________________sender's list_____________________
    { path: 'sender/add', component: AddEditSenderappComponent },
    {
      path: 'newsletter-list',
      component: ListingSenderappComponent 
    },

    {
      path: 'sender/edit/:_id',
      component: AddEditSenderappComponent
      
    
      
    },
    

  // ___________________BLOG MANAGEMENT_________________
  // =======================================================

  {
    path: 'blog-management', component: BlogManagementComponent, canActivate: [AuthGuard],
    resolve: { blogsList: ResolveService },
    data: {
      requestcondition: {
        source: 'blogs_view',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },


  // _____________________BLOG CATEGORY________________
  { path: 'blog-category/add', component: AddEditBlogcatComponent },

  {
    path: 'blog-category/list',
    component: ListingBlogcatComponent,
    resolve: { blogCatList: ResolveService },
    data: {
      requestcondition: {
        source: 'blog_category_view',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },
  {
    path: 'blog-category/edit/:_id',
    component: AddEditBlogcatComponent,

    resolve: { blogCatList: ResolveService },
    data: {
      requestcondition: {
        source: 'blog_category_view',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },
  // -----------------------------------------------


  // ______________________BLOGS_________________
  // / ________________BLOGS______________


  { path: 'blogs/add', component: AddEditBlogsComponent },

  {
    path: 'blogs/list',
    component: ListingBlogsComponent
  },
  {
    path: 'blogs/edit/:_id',
    component: AddEditBlogsComponent,

    resolve: { blogsData: ResolveService },
    data: {
      requestcondition: {
        source: 'blogs',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },
  // -------------------------------------------




  /**************** User Management *****************/
  {
    path: 'user-management', component: UserManagementComponent, resolve: { serviceList: ResolveService },
    data: { requestcondition: { source: 'user', condition: {} }, endpoint: 'datalist' }
  },

  { path: 'my-appointment-user', component: MyAppointmentComponent },
  { path: 'book-an-appointment-user', component: BookAnAppointmentComponent },
  { path: 'booked-events', component: BookedEventsComponent },
  { path: 'events', component: UpcomingEventUserComponent },

  { path: 'past-event-user', component: PastEventUserComponent },
  { path: 'upcoming-event-user', component: UpcomingEventUserComponent },

  /**************** Affiliate Management *****************/
  { path: 'affiliate-dashboard', component: AffiliateDashboardComponent },
  { path: 'social-advo-affiliate', component: SocialAdvoComponent },
  { path: 'manage-commission-affiliate', component: CommissionReportComponent },
  { path: 'my-customers', component: MyCustomersAffiliateComponent },


  { path: 'affiliate/add', component: AddAffiliateComponent },
  { path: 'affiliate/edit/:_id', component: AddAffiliateComponent,
        canActivate:[AuthGuard],
        resolve:{affiliateList:ResolveService},
        data:{
          requestcondition:{
            source:'users',
            condition:{}
          },
          endpoint:'datalist'

  },
  },
  { path: 'customer/add', component: AddCustomerComponent, },
  { path: 'customer/edit/:_id', component: AddCustomerComponent },


  {path: 'miscellaneous', component: MiscellaneousComponent},

  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
