import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsBeforeLoginComponent } from './template-component/about-us-before-login/about-us-before-login.component';
import { ConfirmUserComponent } from './template-component/confirm-user/confirm-user.component';
import { ForgotPassComponent } from './template-component/forgot-pass/forgot-pass.component';
import { HomeComponent } from './template-component/home/home.component';
import { LoginComponent } from './template-component/login/login.component';
import { MyActivitiesComponent } from './template-component/my-activities/my-activities.component';
import { MyAlertsComponent } from './template-component/my-alerts/my-alerts.component';
import { MyInstitutesComponent } from './template-component/my-institutes/my-institutes.component';
import { SignUpComponent } from './template-component/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-pass', component: ForgotPassComponent },
  { path: 'confirm-user', component: ConfirmUserComponent },
  { path: 'aboutus', component: AboutUsBeforeLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'my-institutes', component: MyInstitutesComponent },
  { path: 'my-activities', component: MyActivitiesComponent },
  { path: 'my-alerts', component: MyAlertsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
