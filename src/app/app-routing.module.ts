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
import { ServicelistComponent } from './component/frontend/servicelist/servicelist.component';
import { BlogComponent } from './component/frontend/blog/blog.component';
import { BloglistComponent } from './component/frontend/bloglist/bloglist.component';
import { BlogdetailComponent } from './component/frontend/blogdetail/blogdetail.component';
import { AboutusComponent } from './component/frontend/aboutus/aboutus.component';


import { TesimonialComponent } from './component/frontend/tesimonial/tesimonial.component';
import { TesimoniallistComponent } from './component/frontend/tesimoniallist/tesimoniallist.component';


import { EmployeeTrainingComponent } from './component/frontend/employee-training/employee-training.component';
import { CouplesCounselingComponent } from './component/frontend/couples-counseling/couples-counseling.component';
import { PersonalDevelopmentCoachingComponent } from './component/frontend/personal-development-coaching/personal-development-coaching.component';
import { HighPerformanceCoachingComponent } from './component/frontend/high-performance-coaching/high-performance-coaching.component';
import { SpecialProgramsForYoungMenComponent } from './component/frontend/special-programs-for-young-men/special-programs-for-young-men.component';
import { ImageGalleryComponent } from './component/frontend/image-gallery/image-gallery.component';
import { VideoGalleryComponent } from './component/frontend/video-gallery/video-gallery.component';
import { TeamComponent } from './component/frontend/team/team.component';

/**End Frontend Routing**/

/**Backend Routing**/
import { DashboardComponent } from './component/backend/dashboard/dashboard.component';
import { BkLeftdivComponent } from './layout/bk-leftdiv/bk-leftdiv.component';

import { ManageCommissionComponent } from './component/backend/manage-commission/manage-commission.component';
import { NewsletterlistsComponent } from './component/backend/newsletterlists/newsletterlists.component';

import { CustomerListComponent } from './component/backend/customer-list/customer-list.component';

import { MaindashboardComponent } from './component/backend/maindashboard/maindashboard.component';

import { AddeditServiceComponent } from './component/backend/ServiceApp/addedit-service/addedit-service.component';
import { ListingServiceComponent } from './component/backend/ServiceApp/listing-service/listing-service.component';

import { UserManagementComponent } from './component/backend/user-management/user-management.component';
import { ResolveService } from './resolve.service';
import { BlogManagementComponent } from './component/backend/blog-management/blog-management.component';


import { AffiliateDashboardComponent } from './component/backend/affiliate-dashboard/affiliate-dashboard.component';


import { TestimonialListsAdminComponent } from './component/backend/testimonial-lists-admin/testimonial-lists-admin.component';

import { ListingTestimonialComponent } from './component/backend/TestimonialApp/listing-testimonial/listing-testimonial.component';
import { AddeditTestimonialComponent } from './component/backend/TestimonialApp/addedit-testimonial/addedit-testimonial.component';

import { BookAnAppointmentComponent } from './component/backend/book-an-appointment/book-an-appointment.component';
import { MyAppointmentComponent } from './component/backend/my-appointment/my-appointment.component';


import { SocialAdvoComponent } from './component/backend/social-advo/social-advo.component';
import { ManageAvailabilityComponent } from './component/backend/manage-availability/manage-availability.component';
import { CommissionReportComponent } from './component/backend/commission-report/commission-report.component';
import { BookingReportComponent } from './component/backend/booking-report/booking-report.component';
 

import { from } from 'rxjs';
/**End Backend Routing**/

const routes: Routes = [

  /**Frontend Routing**/
  { path: '', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'sign-up', component: SignUpComponent },
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
      requestcondition: { source: "testimonals", condition: {} },
      endpoint: "datalist"
    }
  },
  
  //  static path
  {
    path: 'ourservices', component: ServicelistComponent
  },
  { path: 'bloghome', component: BlogComponent, resolve: { serviceListData: ResolveService }, data: { requestcondition: { source: 'blogs', condition: {} }, endpoint: 'datalist' } },
  { path: 'blog', component: BloglistComponent },
  { path: 'blogdetail', component: BlogdetailComponent },
  
  //  static path
  {
    path: "testimonial",  component: TesimoniallistComponent
  },

  /**End Frontend Routing**/
  /**Backend Routing**/
  // {path: 'customer-dashboard', component:DashboardComponent, canActivate:[AuthGuard]},       // Useing for canActive
  { path: 'customer-dashboard', component: DashboardComponent },
  { path: 'admin-dashboard', component: MaindashboardComponent },
  { path: 'bk-leftdiv', component: BkLeftdivComponent },
  {
    path: 'service-listing', component: ListingServiceComponent, resolve: { serviceList: ResolveService },
    data: { requestcondition: { source: 'services_view', condition: {} }, endpoint: 'datalist' }
  },
  { path: 'service/add', component: AddeditServiceComponent },
  {
    path: 'service/edit/:_id', component: AddeditServiceComponent, resolve: { serviceList: ResolveService },
    data: { requestcondition: { source: 'services', condition: {} }, endpoint: 'datalist' }
  },
  { path: 'blog-management', component: BlogManagementComponent },
  { path: 'newsletter-list', component: NewsletterlistsComponent },
  { path: 'manage-commission', component: ManageCommissionComponent },
  { path: 'manage-availability', component: ManageAvailabilityComponent },
  { path: 'social-advo-admin', component: SocialAdvoComponent },  
  { path: 'my-appointment-admin', component: MyAppointmentComponent },
  { path: 'commission-report', component: CommissionReportComponent },  
  { path: 'testimonial-lists-admin', component: TestimonialListsAdminComponent },
  { path: 'customer-list-admin', component: CustomerListComponent },
  { path: 'testimonial/add', component: AddeditTestimonialComponent },
  {
    path: 'testimonial/edit/:_id', component: AddeditTestimonialComponent, resolve: { testimonialData: ResolveService },
    data: { requestcondition: { source: 'testimonial', condition: {} }, endpoint: 'datalist' }
  },
  {
    path: 'testimonial-listing', component: ListingTestimonialComponent, resolve: { testimonialList: ResolveService },
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

  /**************** User Management *****************/
  {
    path: 'user-management', component: UserManagementComponent, resolve: { serviceList: ResolveService },
    data: { requestcondition: { source: 'user', condition: {} }, endpoint: 'datalist' }
  },
  
  { path: 'my-appointment-user', component: MyAppointmentComponent },
  { path: 'book-an-appointment-user', component: BookAnAppointmentComponent },
  
  /**************** Affiliate Management *****************/
  { path: 'affiliate-dashboard', component: AffiliateDashboardComponent },
  { path: 'social-advo-affiliate', component: SocialAdvoComponent }, 
  { path: 'manage-commission-affiliate', component: CommissionReportComponent }, 

  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
