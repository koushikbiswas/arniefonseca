import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DemoMaterialModule} from "../material-module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { LoginComponent } from './component/frontend/login/login.component';
import { ContactusModule } from 'contactus';
import { LoginModule } from 'login';
import { CookieService } from 'ngx-cookie-service';
import { MetaModule } from '@ngx-meta/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.guard';
import { ApiService } from './api.service';
import { TestimonialModule } from 'testimonial';

/**Frontend Component**/

import { HeaderComponent } from './component/frontend/header/header.component';
import { FooterComponent } from './component/frontend/footer/footer.component';
import { HomeComponent } from './component/frontend/home/home.component';
import { ContactusComponent } from './component/frontend/contactus/contactus.component';
import { ForgetPasswordComponent } from './component/frontend/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/frontend/reset-password/reset-password.component';
import { SignUpComponent } from './component/frontend/sign-up/sign-up.component';

/**End Frontend Component**/


/**Backend Component**/
import { DashboardComponent } from './component/backend/dashboard/dashboard.component';
import { BkHeaderComponent } from './component/backend/bk-header/bk-header.component';
import { BkFooterComponent } from './component/backend/bk-footer/bk-footer.component';

import { AddeditServiceComponent } from './component/backend/ServiceApp/addedit-service/addedit-service.component';
import { ListingServiceComponent } from './component/backend/ServiceApp/listing-service/listing-service.component';
import { ListingTestimonialComponent } from './component/backend/TestimonialApp/listing-testimonial/listing-testimonial.component';
import { AddeditTestimonialComponent } from './component/backend/TestimonialApp/addedit-testimonial/addedit-testimonial.component';
import { ServicelibModule } from 'servicelib';
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
    FooterComponent,
    HomeComponent,
    BkHeaderComponent,
    BkFooterComponent,
    AddeditServiceComponent,
    ListingServiceComponent,
    ListingTestimonialComponent,
    AddeditTestimonialComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    DemoMaterialModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    LoginModule,
    TestimonialModule,
    ServicelibModule,
    ContactusModule,
    HttpClientModule,
    AppRoutingModule,MetaModule.forRoot(), BrowserAnimationsModule
  ],
  providers: [CookieService, AuthGuard, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
