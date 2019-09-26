import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/frontend/login/login.component';
import { AuthGuard } from './auth.guard';

/**Frontend Routing**/
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './component/frontend/home/home.component';
import { ContactusComponent } from './component/frontend/contactus/contactus.component';
import { ForgetPasswordComponent } from './component/frontend/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/frontend/reset-password/reset-password.component';
import { SignUpComponent } from './component/frontend/sign-up/sign-up.component';
/**End Frontend Routing**/

/**Backend Routing**/
import { DashboardComponent } from './component/backend/dashboard/dashboard.component';
import { BkHeaderComponent } from './layout/bk-header/bk-header.component';
import { BkFooterComponent } from './layout/bk-footer/bk-footer.component';
import { BkLeftdivComponent } from './layout/bk-leftdiv/bk-leftdiv.component';
import { MaindashboardComponent } from './component/backend/maindashboard/maindashboard.component';
import { AddeditServiceComponent } from './component/backend/ServiceApp/addedit-service/addedit-service.component';
import { ListingServiceComponent } from './component/backend/ServiceApp/listing-service/listing-service.component';
import { ListingTestimonialComponent } from './component/backend/TestimonialApp/listing-testimonial/listing-testimonial.component';
import { AddeditTestimonialComponent } from './component/backend/TestimonialApp/addedit-testimonial/addedit-testimonial.component';
import { ResolveService } from './resolve.service';
import { TesimonialComponent } from './component/frontend/tesimonial/tesimonial.component';
import { TesimoniallistComponent } from './component/frontend/tesimoniallist/tesimoniallist.component';
import { ServiceComponent } from './component/frontend/service/service.component';
import { ServicelistComponent } from './component/frontend/servicelist/servicelist.component';
import { BlogComponent } from './component/frontend/blog/blog.component';
import { BloglistComponent } from './component/frontend/bloglist/bloglist.component';
import { BlogdetailComponent } from './component/frontend/blogdetail/blogdetail.component';
import { UserManagementComponent } from './component/backend/user-management/user-management.component';
/**End Backend Routing**/

const routes: Routes = [
  
/**Frontend Routing**/   
{path: '',component:LoginComponent},
{path: 'forget-password', component:ForgetPasswordComponent},
{path: 'reset-password', component:ResetPasswordComponent},
{path: 'sign-up', component:SignUpComponent},
{path: 'header', component:HeaderComponent},
{path: 'footer', component:FooterComponent},
{path: 'home', component:HomeComponent}, 
{path: 'contactus', component:ContactusComponent},
{
  path: "testimonial",
  component: TesimonialComponent,
  resolve: { testimonialListData: ResolveService },
  data: {
    requestcondition: { source: "testimonals", condition: {} },
    endpoint: "datalist"
  }
},

{
  path: "testimoniallist",
  component: TesimoniallistComponent,
  resolve: { testimonialListData: ResolveService },
  data: {
    requestcondition: { source: "testimonals", condition: {} },
    endpoint: "datalist"
  }
},
{path:'service',
    component: ServiceComponent,
    resolve: { serviceListData: ResolveService },
    data: { requestcondition: { source: 'service', condition: {} }, endpoint: 'datalist'}
},
{path:'servicelist',
    component: ServicelistComponent,
    resolve: { serviceListData: ResolveService },
    data: { requestcondition: { source: 'service', condition: {} }, endpoint: 'datalist'}
},
{path: 'blog', component:BlogComponent},
{path: 'bloglist', component:BloglistComponent},
{path: 'blogdetail', component:BlogdetailComponent},

/**End Frontend Routing**/

  /**Backend Routing**/
  {path: 'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},       // Useing for canActive
  {path: 'bk-header', component:BkHeaderComponent},
  {path: 'bk-footer', component:BkFooterComponent},
  {path: 'bk-leftdiv', component:BkLeftdivComponent},
  {path: 'maindashboard', component:MaindashboardComponent},
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

  
  /**End Backend Routing**/






{ path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
