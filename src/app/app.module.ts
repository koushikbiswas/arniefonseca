import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DemoMaterialModule} from "../material-module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { LoginComponent } from './login/login.component';
import { ContactusModule } from 'contactus';
import { LoginModule } from 'login';
import { CookieService } from 'ngx-cookie-service';
import { MetaModule } from '@ngx-meta/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactusComponent } from './contactus/contactus.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

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
    FooterComponent
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
    ContactusModule,
    HttpClientModule,
    AppRoutingModule,MetaModule.forRoot(), BrowserAnimationsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
