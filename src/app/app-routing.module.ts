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
import { TesimonialComponent } from './component/frontend/tesimonial/tesimonial.component';
import { TesimoniallistComponent } from './component/frontend/tesimoniallist/tesimoniallist.component';
import { ServiceComponent } from './component/frontend/service/service.component';
import { ServicelistComponent } from './component/frontend/servicelist/servicelist.component';
import { BlogComponent } from './component/frontend/blog/blog.component';
import { BloglistComponent } from './component/frontend/bloglist/bloglist.component';
import { BlogdetailComponent } from './component/frontend/blogdetail/blogdetail.component';
import { AdvanceInventorySearchComponent } from './component/frontend/advance-inventory-search/advance-inventory-search.component';
import { BasicInventorySearchComponent } from './component/frontend/basic-inventory-search/basic-inventory-search.component';
import { PreOwnedComponent } from './component/frontend/pre-owned/pre-owned.component';
import { AboutusComponent } from './component/frontend/aboutus/aboutus.component';
/**End Frontend Routing**/

/**Backend Routing**/
import { DashboardComponent } from './component/backend/dashboard/dashboard.component';
import { BkLeftdivComponent } from './layout/bk-leftdiv/bk-leftdiv.component';

import { MaindashboardComponent } from './component/backend/maindashboard/maindashboard.component';
import { AddeditServiceComponent } from './component/backend/ServiceApp/addedit-service/addedit-service.component';
import { ListingServiceComponent } from './component/backend/ServiceApp/listing-service/listing-service.component';
import { ListingTestimonialComponent } from './component/backend/TestimonialApp/listing-testimonial/listing-testimonial.component';
import { AddeditTestimonialComponent } from './component/backend/TestimonialApp/addedit-testimonial/addedit-testimonial.component';
import { UserManagementComponent } from './component/backend/user-management/user-management.component';
import { ContactUsDashboardComponent } from './component/backend/contact-us-dashboard/contact-us-dashboard.component';

import { RepdashboardComponent } from './component/backend/repdashboard/repdashboard.component';

import { ResolveService } from './resolve.service';
/**End Backend Routing**/

const routes: Routes = [
  
/**Frontend Routing**/   
{path: '',component:LoginComponent},
{path: 'forget-password', component:ForgetPasswordComponent},
{path: 'reset-password', component:ResetPasswordComponent},
{path: 'sign-up', component:SignUpComponent},
{path: 'home', component:HomeComponent}, 
{path: 'contactus', component:ContactusComponent},
{
  path: "testimonialhome",
  component: TesimonialComponent,
  resolve: { testimonialListData: ResolveService },
  data: {
    requestcondition: { source: "testimonals", condition: {} },
    endpoint: "datalist"
  }
},

{
  path: "testimonial",
  component: TesimoniallistComponent,
  resolve: { testimonialListData: ResolveService },
  data: {
    requestcondition: { source: "testimonals", condition: {} },
    endpoint: "datalist"
  }
},
{path:'servicehome',
    component: ServiceComponent,
    resolve: { serviceListData: ResolveService },
    data: { requestcondition: { source: 'service', condition: {} }, endpoint: 'datalist'}
},
{path:'service',
    component: ServicelistComponent,
    resolve: { serviceListData: ResolveService },
    data: { requestcondition: { source: 'service', condition: {} }, endpoint: 'datalist'}
},
{path: 'bloghome', component:BlogComponent, resolve: {serviceListData: ResolveService}, data: { requestcondition: { source: 'blogs', condition: {} }, endpoint: 'datalist'}},
{path: 'blog', component:BloglistComponent},
{path: 'blogdetail', component:BlogdetailComponent},
{path: 'advance-inventory-search', component:AdvanceInventorySearchComponent},
{path: 'basic-inventory-search', component:BasicInventorySearchComponent},
{path: 'pre-owned', component:PreOwnedComponent},
{path: 'aboutus', component:AboutusComponent},

/**End Frontend Routing**/

  /**Backend Routing**/
  {path: 'customer-dashboard', component:DashboardComponent, canActivate:[AuthGuard]},       // Useing for canActive
  {path: 'admin-dashboard', component:MaindashboardComponent},

  {path: 'bk-leftdiv', component:BkLeftdivComponent},

  {path: 'testimonial/add', component:AddeditTestimonialComponent},
  {path: 'testimonial/edit/:_id', component:AddeditTestimonialComponent, resolve: { testimonialData: ResolveService },
  data: { requestcondition: { source: 'testimonial', condition: {} }, endpoint: 'datalist'}},
  {path: 'testimonial-listing', component:ListingTestimonialComponent,resolve: { testimonialList: ResolveService },
  data: { requestcondition: { source: 'testimonial_view', condition: {} }, endpoint: 'datalist'}},
  {path: 'service-listing', component:ListingServiceComponent,resolve: { serviceList: ResolveService },
  data: { requestcondition: { source: 'services_view', condition: {} }, endpoint: 'datalist'}},
  {path: 'service/add', component:AddeditServiceComponent},
  { path:'service/edit/:_id', component:AddeditServiceComponent,  resolve: { serviceList: ResolveService },
  data: { requestcondition: { source: 'services', condition: {} }, endpoint: 'datalist'}},

  /**************** User Management *****************/ 
  { path:'user-management', component:UserManagementComponent,  resolve: { serviceList: ResolveService },
  data: { requestcondition: { source: 'user', condition: {} }, endpoint: 'datalist'}},

  { path:'contact-us-dashboard', component:ContactUsDashboardComponent,  resolve: { serviceList: ResolveService },
  data: { requestcondition: { source: 'contactusForm', condition: {} }, endpoint: 'datalist'}},
  
  /**************** Rep Management *****************/
  {path: 'rep-dashboard', component:RepdashboardComponent},

  /**End Backend Routing**/






{ path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
