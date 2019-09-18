import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'forget-password', component:ForgetPasswordComponent},
  {path: 'reset-password', component:ResetPasswordComponent},
  {path: 'sign-up', component:SignUpComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'footer', component:FooterComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
