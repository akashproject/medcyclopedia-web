import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './template-component/home/home.component';
import { LoginComponent } from './template-component/login/login.component';
import { SignUpComponent } from './template-component/sign-up/sign-up.component';
import { ForgotPassComponent } from './template-component/forgot-pass/forgot-pass.component';
import { ConfirmUserComponent } from './template-component/confirm-user/confirm-user.component';
import { BeforeLoginSliderComponent } from './shared/before-login-slider/before-login-slider.component';
import { AboutUsBeforeLoginComponent } from './template-component/about-us-before-login/about-us-before-login.component';
import { SiteHeaderComponent } from './shared/site-header/site-header.component';
import { SiteBannerComponent } from './shared/site-banner/site-banner.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { MatIconModule } from '@angular/material/icon';
import { MyInstitutesComponent } from './template-component/my-institutes/my-institutes.component';
import { MyActivitiesComponent } from './template-component/my-activities/my-activities.component';
import { MyAlertsComponent } from './template-component/my-alerts/my-alerts.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPassComponent,
    ConfirmUserComponent,
    BeforeLoginSliderComponent,
    AboutUsBeforeLoginComponent,
    SiteHeaderComponent,
    SiteBannerComponent,
    MyInstitutesComponent,
    MyActivitiesComponent,
    MyAlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
