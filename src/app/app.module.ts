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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstituteConfirmationComponent } from './template-component/institute-confirmation/institute-confirmation.component';
import { MyInstitutesComponent } from './template-component/my-institutes/my-institutes.component';
import { MyActivitiesComponent } from './template-component/my-activities/my-activities.component';
import { MyAlertsComponent } from './template-component/my-alerts/my-alerts.component';
import { ExpertCounsellingComponent } from './template-component/expert-counselling/expert-counselling.component';
import { InfinityComponent } from './template-component/infinity/infinity.component';
import { TncComponent } from './template-component/tnc/tnc.component';
import { MediaComponent } from './template-component/media/media.component';
import { EventsComponent } from './template-component/events/events.component';
import { FycComponent } from './template-component/fyc/fyc.component';
import { FyiComponent } from './template-component/fyi/fyi.component';
import { FindExamComponent } from './template-component/find-exam/find-exam.component';
import { ExploreExamsComponent } from './template-component/explore-exams/explore-exams.component';
import { AbroadComponent } from './template-component/abroad/abroad.component';
import { CountryInfoComponent } from './template-component/country-info/country-info.component';
import { PanelDiscussionComponent } from './template-component/panel-discussion/panel-discussion.component';
import { NotificationComponent } from './template-component/notification/notification.component';
import { EduAssistanceComponent } from './template-component/edu-assistance/edu-assistance.component';
import { ScholarshipsComponent } from './template-component/scholarships/scholarships.component';
import { StudentSubscriptionComponent } from './template-component/student-subscription/student-subscription.component';
import { InstituteListComponent } from './template-component/institute-list/institute-list.component';
import { InstituteDetailsComponent } from './template-component/institute-details/institute-details.component';
import { ReferearnComponent } from './template-component/referearn/referearn.component';
import { ProfileComponent } from './template-component/profile/profile.component';
import { AbroadInsListComponent } from './template-component/abroad-ins-list/abroad-ins-list.component';
import { CompareComponent } from './template-component/compare/compare.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';



import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';

import { DatePipe } from '@angular/common';


import { StorageServiceModule } from 'ngx-webstorage-service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerComponent } from './template-component/spinner/spinner.component';
import { SpinnerService } from './all-services/spinner.service';
import { InterceptorService } from './all-services/interceptor.service';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { SearchComponent } from './template-component/search/search.component';






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
    MyAlertsComponent,
    ExpertCounsellingComponent,
    InfinityComponent,
    TncComponent,
    MediaComponent,
    EventsComponent,
    FycComponent,
    FyiComponent,
    FindExamComponent,
    ExploreExamsComponent,
    AbroadComponent,
    CountryInfoComponent,
    PanelDiscussionComponent,
    NotificationComponent,
    EduAssistanceComponent,
    ScholarshipsComponent,
    StudentSubscriptionComponent,
    InstituteListComponent,
    InstituteDetailsComponent,
    InstituteConfirmationComponent,
    ReferearnComponent,
    ProfileComponent,
    AbroadInsListComponent,
    CompareComponent,
    SpinnerComponent,
    SearchComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatExpansionModule,
    StorageServiceModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    SocialLoginModule,
    MatInputModule
  ],
  providers: [
    DatePipe,
    {provide : HTTP_INTERCEPTORS, useClass : InterceptorService, multi : true},
    {provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '727015507423-0qoop0c0r2dkocomrkc74n7r1l445e1s.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('248247087191583')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
