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
/**End Backend Routing**/

const routes: Routes = [
  
/**Frontend Routing**/   
{path: '',component:LoginComponent},
{path: 'forget-password', component:ForgetPasswordComponent},
{path: 'reset-password', component:ResetPasswordComponent},
{path: 'sign-up', component:SignUpComponent},
{path: 'header', component:HeaderComponent},
{path: 'footer', component:FooterComponent},
{path: 'contactus', component:ContactusComponent},
{path: 'home', component:HomeComponent}, 
/**End Frontend Routing**/

  /**Backend Routing**/
  {path: 'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},       // Useing for canActive
  {path: 'bk-header', component:BkHeaderComponent},
  {path: 'bk-footer', component:BkFooterComponent},
  {path: 'bk-leftdiv', component:BkLeftdivComponent},
  {path: 'maindashboard', component:MaindashboardComponent},
  {path: 'addedit-testimonial', component:AddeditTestimonialComponent},
  {path: 'testimonial-listing', component:ListingTestimonialComponent},
  {path: 'service-listing', component:ListingServiceComponent},
  {path: 'addedit-service', component:AddeditServiceComponent},
  /**End Backend Routing**/






{ path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
