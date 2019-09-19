import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/frontend/login/login.component';
import { ContactusComponent } from './component/frontend/contactus/contactus.component';
import { ForgetPasswordComponent } from './component/frontend/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/frontend/reset-password/reset-password.component';
import { SignUpComponent } from './component/frontend/sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './component/frontend/header/header.component';
import { FooterComponent } from './component/frontend/footer/footer.component';
import { HomeComponent } from './component/frontend/home/home.component';

import { DashboardComponent } from './component/backend/dashboard/dashboard.component';
import { BkHeaderComponent } from './component/backend/bk-header/bk-header.component';
import { BkFooterComponent } from './component/backend/bk-footer/bk-footer.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  
  {path: 'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},       // Useing for canActive
  {path: 'bk-header', component:BkHeaderComponent},
  {path: 'bk-footer', component:BkFooterComponent},

  {path: 'forget-password', component:ForgetPasswordComponent},
  {path: 'reset-password', component:ResetPasswordComponent},
  {path: 'sign-up', component:SignUpComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'home', component:HomeComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
