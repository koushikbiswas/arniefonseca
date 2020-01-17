import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/frontend/login/login.component';
import { AuthGuard } from './auth.guard';

/**Frontend Routing**/
import { HomeComponent } from './component/frontend/home/home.component';
import { ContactusComponent } from './component/frontend/contactus/contactus.component';
import { ForgetPasswordComponent } from './component/frontend/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/frontend/reset-password/reset-password.component';
import { SignUpComponent } from './component/frontend/sign-up/sign-up.component';
import { ServiceComponent } from './component/frontend/service/service.component';
import { ServicelistComponent } from './component/frontend/services/servicelist/servicelist.component';
import { BlogComponent } from './component/frontend/blog/blog.component';
import { BloglistComponent } from './component/frontend/bloglist/bloglist.component';
import { BlogdetailComponent } from './component/frontend/blogdetail/blogdetail.component';
import { AboutusComponent } from './component/frontend/aboutus/aboutus.component';


import { TesimonialComponent } from './component/frontend/tesimonial/tesimonial.component';
import { TesimoniallistComponent } from './component/frontend/tesimoniallist/tesimoniallist.component';


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


import { WorkshopDetailComponent } from './component/frontend/events/workshop-detail/workshop-detail.component';
import { SeminarsDetailComponent } from './component/frontend/events/seminars-detail/seminars-detail.component';
import { SpeakerEngagementsDetailComponent } from './component/frontend/events/speaker-engagements-detail/speaker-engagements-detail.component';

import { BioComponent } from './component/frontend/bio/bio.component';

/**End Frontend Routing**/

/**Backend Routing**/
/**image gallery route start here**/
import { AddeditImageComponent } from './../app/component/backend/ImageGallery/ImageManagement/addedit-image/addedit-image.component';
import { ListImagesComponent } from './../app/component/backend/ImageGallery/ImageManagement/list-images/list-images.component';
import { AddeditImageCategoryComponent} from '../app/component/backend/ImageGallery/categoryManagement/addedit-image-category/addedit-image-category.component';
import { ListingCategoryComponent} from '../app/component/backend/ImageGallery/categoryManagement/listing-category/listing-category.component';
/**image gallery route end here**/
/**video library route start here**/
import { ListVideosComponent } from '../app/component/backend/video-management/list-videos/list-videos.component';
import { VideoCategoryManagementComponent } from '../app/component/backend/video-management/video-category-management/video-category-management.component';
import { AddEditVideosComponent } from '../app/component/backend/video-management/video-library-management/add-edit-videos/add-edit-videos.component';
import { ListVideoManagementComponent }from '../app/component/backend/video-management/video-library-management/list-video-management/list-video-management.component';
/**video library route end here**/
import { DashboardComponent } from './component/backend/dashboard/dashboard.component';
import { BkLeftdivComponent } from './layout/bk-leftdiv/bk-leftdiv.component';

import { ManageCommissionComponent } from './component/backend/manage-commission/manage-commission.component';
import { NewsletterlistsComponent } from './component/backend/newsletterlists/newsletterlists.component';

import { CustomerListComponent } from './component/backend/customer-list/customer-list.component';

import { MaindashboardComponent } from './component/backend/maindashboard/maindashboard.component';

import { AddeditServiceComponent } from './component/backend/ServiceApp/addedit-service/addedit-service.component';

import { ListingServiceComponent } from './component/backend/ServiceApp/listing-service/listing-service.component';

import { UserManagementComponent } from './component/backend/user-management/user-management.component';
import { ResolveService } from './services/resolve.service';
import { BlogManagementComponent } from './component/backend/blog-management/blog-management.component';


import { AffiliateDashboardComponent } from './component/backend/affiliate-dashboard/affiliate-dashboard.component';


// import { TestimonialListsAdminComponent } from './component/backend/testimonial-lists-admin/testimonial-lists-admin.component';

import { ListingTestimonialComponent } from './component/backend/TestimonialApp/listing-testimonial/listing-testimonial.component';
import { AddeditTestimonialComponent } from './component/backend/TestimonialApp/addedit-testimonial/addedit-testimonial.component';

import { BookAnAppointmentComponent } from './component/backend/book-an-appointment/book-an-appointment.component';
import { MyAppointmentComponent } from './component/backend/my-appointment/my-appointment.component';


import { SocialAdvoComponent } from './component/backend/social-advo/social-advo.component';
import { ManageAvailabilityComponent } from './component/backend/manage-availability/manage-availability.component';
import { CommissionReportComponent } from './component/backend/commission-report/commission-report.component';
import { BookingReportComponent } from './component/backend/booking-report/booking-report.component';
import { AffiliateComponent } from './component/backend/affiliate/affiliate.component';
import { BookedEventsComponent } from './component/backend/booked-events/booked-events.component';
import { PastEventUserComponent } from './component/backend/past-event-user/past-event-user.component';
import { UpcomingEventUserComponent } from './component/backend/upcoming-event-user/upcoming-event-user.component';
import { MyCustomersAffiliateComponent } from './component/backend/my-customers-affiliate/my-customers-affiliate.component';

import { AddEditBlogcatComponent } from './component/backend/blog-management/add-edit-blogcat/add-edit-blogcat.component';
import { ListingBlogcatComponent } from './component/backend/blog-management/listing-blogcat/listing-blogcat.component';
import { AddEditBlogsComponent } from './component/backend/blog-management/add-edit-blogs/add-edit-blogs.component';
import { ListingBlogsComponent } from './component/backend/blog-management/listing-blogs/listing-blogs.component';

import { ManageEventListingComponent } from './component/backend/events/manage-event-listing/manage-event-listing.component';
import { AddEditManageEventComponent } from './component/backend/events/add-edit-manage-event/add-edit-manage-event.component';


import { AddEditNewsletterComponent } from './component/backend/newsletterlists/add-edit-newsletter/add-edit-newsletter.component';

import { from } from 'rxjs';
import { AddEditSubscriberComponent } from './component/backend/newsletterlists/add-edit-subscriber/add-edit-subscriber.component';
import { AddEditSubscriberGroupComponent } from './component/backend/newsletterlists/add-edit-subscriber-group/add-edit-subscriber-group.component';
 
 import { AddEditTestemailComponent } from './component/backend/newsletterlists/add-edit-testemail/add-edit-testemail.component';
import {HomeEventComponent} from "./component/backend/events/home-event/home-event.component";

import { ListingNewsletterComponent } from './component/backend/newsletterlists/listing-newsletter/listing-newsletter.component';

import { LisitngTestemailappComponent } from './component/backend/newsletterlists/lisitng-testemailapp/lisitng-testemailapp.component';
import { ListingSenderappComponent } from './component/backend/newsletterlists/listing-senderapp/listing-senderapp.component';
import { ListingSubscriptionComponent } from './component/backend/newsletterlists/listing-subscription/listing-subscription.component';
import { ListingSubcategoryComponent } from './component/backend/newsletterlists/listing-subcategory/listing-subcategory.component';
 
import { AddEditSenderappComponent } from './component/backend/newsletterlists/add-edit-senderapp/add-edit-senderapp.component';






/**End Backend Routing**/

const routes: Routes = [
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
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactusComponent },
  
  {
    path: 'servicehome',
    component: ServiceComponent,
    resolve: { serviceListData: ResolveService },
    data: { requestcondition: { source: 'service', condition: {} }, endpoint: 'datalist' }
  },
  {
    path: "testimonialhome",
    component: TesimonialComponent,
    resolve: { testimonialListData: ResolveService },
    data: {
      requestcondition: { source: "testimonal", condition: {} },
      endpoint: "datalistwithouttoken"
    }
  },

  //  static path
  {
    path: 'ourservices', component: ServicelistComponent,
    resolve: {
      serviceList: ResolveService
    },
    data:
    {
      requestcondition:
      {
        source: 'service_view', condition: {}
      }, endpoint: 'datalistwithouttoken'
    }
  },





  { path: 'bloghome', component: BlogComponent },

  {
    path: 'blog', component: BloglistComponent, resolve: { blogCatList: ResolveService },
    data: { requestcondition: { condition: { "limit": 4, "skip": 1 } }, endpoint: 'blogdata' }
  },

  {
    path: 'blogdetail/:_id', component: BlogdetailComponent,
    resolve: {
      blogCatList: ResolveService
    },
    data:
    {
      requestcondition:
      {
        source: 'blogs_view', condition: {}
      }, endpoint: 'datalistwithouttoken'
    }
  },

  //  static path
  {
    path: "testimonial", component: TesimoniallistComponent,
    resolve: { testimonialListData: ResolveService },
    data: {
      requestcondition: { source: "testimonial_view", condition: {} },
      endpoint: "datalistwithouttoken"
    }
  },

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
        condition:{}
      },
      endpoint:'datalist'

    },

  },






  { path: 'bk-leftdiv', component: BkLeftdivComponent },

  // {
  //   path: 'service-listing', component: ListingServiceComponent, resolve: { serviceList: ResolveService },
  //   data: { requestcondition: { source: 'service', condition: {} }, endpoint: 'datalist' }
  // },

  {
    path: 'service',
    component: ServiceComponent,
    resolve: { serviceList: ResolveService },
    data: { requestcondition: { source: 'service_view', condition: {} }, endpoint: 'datalist' }
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

  { path: 'workshop-detail', component: WorkshopDetailComponent },
  { path: 'seminars-detail', component: SeminarsDetailComponent },
  { path: 'speaker-engagements-detail', component: SpeakerEngagementsDetailComponent },

  { path: 'testimonial/add', component: AddeditTestimonialComponent },
  {
    path: 'testimonial/edit/:_id', component: AddeditTestimonialComponent, resolve: { testimonialData: ResolveService },
    data: { requestcondition: { source: 'testimonial', condition: {} }, endpoint: 'datalist' }
  },
  {
    path: 'testimonial/list', component: ListingTestimonialComponent, resolve: { testimonialList: ResolveService },
    data: { requestcondition: { source: 'testimonial_view', condition: {} }, endpoint: 'datalist' }
  },

  { path: 'employee-training', component: EmployeeTrainingComponent },
  { path: 'couples-counseling', component: CouplesCounselingComponent },
  { path: 'personal-development-coaching', component: PersonalDevelopmentCoachingComponent },
  { path: 'high-performance-coaching', component: HighPerformanceCoachingComponent },
  { path: 'special-programs-for-young-men', component: SpecialProgramsForYoungMenComponent },
  { path: 'image-gallery', component: ImageGalleryComponent },
  { path: 'video-gallery', component: VideoGalleryComponent },
  { path: 'team', component: TeamComponent },
  { path: 'booking-report', component: BookingReportComponent },
  { path: 'bio', component: BioComponent },

  

// ___________________event frontend__________________//

  { path: 'seminars', component: SeminarsComponent,
    resolve: { seminarsListData: ResolveService },
    data: {
      requestcondition: { source: "events_view", condition: {type:"seminars"} },
      endpoint: "datalistwithouttoken"
    }
  },
  { path: 'workshops', component: WorkshopsComponent,
    resolve: { workshopsListData: ResolveService },
    data: {
      requestcondition: { source: "events_view", condition: {type:"workshops"} },
      endpoint: "datalistwithouttoken"
    }
  },
  { path: 'speaker-engagements', component: SpeakerEngagementsComponent,
    resolve: { speakerEngagementsListData: ResolveService },
    data: {
      requestcondition: { source: "events_view", condition: {type:"speaker_engagement"} },
      endpoint: "datalistwithouttoken"
    }
  },

  { path: 'seminars-detail/:_id', component: SeminarsDetailComponent,
    resolve: { seminarsDetailData: ResolveService },
    data: {
      requestcondition: { source: "events_view", condition: {type:"seminars"} },
      endpoint: "datalistwithouttoken"
    }
  },
  { path: 'workshop-detail/:_id', component: WorkshopDetailComponent,
    resolve: { workshopsDetailData: ResolveService },
    data: {
      requestcondition: { source: "events_view", condition: {type:"workshops"} },
      endpoint: "datalistwithouttoken"
    }
  },
  
 

  { path: 'speaker-engagements-detail/:_id', component: SpeakerEngagementsDetailComponent,
  resolve: { speakerengagementsDetailData: ResolveService },
  data: {
    requestcondition: { source: "events_view", condition: {type:"speaker_engagement"} },
    endpoint: "datalistwithouttoken"
  }
},
  
// ___________________ end event frontend__________________//


  { path: 'affiliate-admin', component: AffiliateComponent },

  // ___________________manage event backend__________________//


  //________________Manage event____________//


  { path: 'admineventlist',
    component: HomeEventComponent,
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




  //________________Manage Workshop____________//
},





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
    component: AddEditNewsletterComponent
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
    // {
    //   path: 'sender/edit/:_id',
    //   component: AddEditSenderappComponent,
    //   canActivate:[AuthGuard],
    //   resolve:{eventList:ResolveService},
    //   data:{
    //     requestcondition:{
    //       source:'senders',
    //       condition:{}
    //     },
    //     endpoint:'datalist'
    //   }
     
    // },

  // { path: 'subscriber-group/add', component: AddEditSubscriberGroupComponent },
  

 

  // {
  //   path: 'newsletter-list',
  //   component: NewsletterlistsComponent,

  //   resolve: { subscriptionListData: ResolveService },
  //   data: {
  //     requestcondition: {
  //       source: 'subscriptiongroupadd',
  //       condition: {}
  //     },
  //     endpoint: 'datalist'
  //   },
  // },



 

  // {
  //   path: 'subscriber-group/edit/:_id',
  //   component: AddEditSubscriberGroupComponent,

  //   resolve: { subscriptiongroupData: ResolveService },
  //   data: {
  //     requestcondition: {
  //       source: 'subscriptiongroupadd',
  //       condition: {}
  //     },
  //     endpoint: 'datalist'
  //   },
  // },





  // { path: 'newsletter/add', component: AddEditNewsletterComponent },
  // {
  //   path: 'newsletter/edit/:_id',
  //   component: AddEditNewsletterComponent,

  //   resolve: { newsLetterData: ResolveService },
  //   data: {
  //     requestcondition: {
  //       source: 'newsLetterAdd',
  //       condition: {}
  //     },
  //     endpoint: 'datalist'
  //   },
  // },



  
  // { path: 'subscriber/add', component: AddEditSubscriberComponent },

  // {
  //   path: 'subscriber/edit/:_id',
  //   component: AddEditSubscriberComponent,

  //   resolve: { subscriberList: ResolveService },
  //   data: {
  //     requestcondition: {
  //       source: 'newsLetterSubscriber',
  //       condition: {}
  //     },
  //     endpoint: 'datalist'
  //   },
  // },

 

  // { path: 'sender/add', component: AddEditSendersComponent },

  // {
  //   path: 'sender/edit/:_id',
  //   component: AddEditSendersComponent,

  //   resolve: { senderList: ResolveService },
  //   data: {
  //     requestcondition: {
  //       source: 'newsletterSender',
  //       condition: {}
  //     },
  //     endpoint: 'datalist'
  //   },
  // },

  // { path: 'testemail/add', component: AddEditTestemailComponent },

  // {
  //   path: 'testemail/edit/:_id',
  //   component: AddEditTestemailComponent,

  //   resolve: { senderList: ResolveService },
  //   data: {
  //     requestcondition: {
  //       source: 'testEmail',
  //       condition: {}
  //     },
  //     endpoint: 'datalist'
  //   },
  // },


  //____________end event routing______________//

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

  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
