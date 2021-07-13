import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsBeforeLoginComponent } from './template-component/about-us-before-login/about-us-before-login.component';
import { AbroadComponent } from './template-component/abroad/abroad.component';
import { ConfirmUserComponent } from './template-component/confirm-user/confirm-user.component';
import { CountryInfoComponent } from './template-component/country-info/country-info.component';
import { EduAssistanceComponent } from './template-component/edu-assistance/edu-assistance.component';
import { EventsComponent } from './template-component/events/events.component';
import { ExpertCounsellingComponent } from './template-component/expert-counselling/expert-counselling.component';
import { ExploreExamsComponent } from './template-component/explore-exams/explore-exams.component';
import { FindExamComponent } from './template-component/find-exam/find-exam.component';
import { ForgotPassComponent } from './template-component/forgot-pass/forgot-pass.component';
import { FycComponent } from './template-component/fyc/fyc.component';
import { FyiComponent } from './template-component/fyi/fyi.component';
import { HomeComponent } from './template-component/home/home.component';
import { InfinityComponent } from './template-component/infinity/infinity.component';
import { LoginComponent } from './template-component/login/login.component';
import { MediaComponent } from './template-component/media/media.component';
import { MyActivitiesComponent } from './template-component/my-activities/my-activities.component';
import { MyAlertsComponent } from './template-component/my-alerts/my-alerts.component';
import { MyInstitutesComponent } from './template-component/my-institutes/my-institutes.component';
import { NotificationComponent } from './template-component/notification/notification.component';
import { PanelDiscussionComponent } from './template-component/panel-discussion/panel-discussion.component';
import { ScholarshipsComponent } from './template-component/scholarships/scholarships.component';
import { SignUpComponent } from './template-component/sign-up/sign-up.component';
import { TncComponent } from './template-component/tnc/tnc.component';


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
  { path: 'expert-counselling', component: ExpertCounsellingComponent },
  { path: 'infinity', component: InfinityComponent },
  { path: 'tnc', component: TncComponent },
  { path: 'media', component: MediaComponent },
  { path: 'events', component: EventsComponent },
  { path: 'fyc', component: FycComponent },
  { path: 'fyc/fyi', component: FyiComponent },
  { path: 'find-exam', component: FindExamComponent },
  { path: 'explore-exam', component: ExploreExamsComponent },
  { path: 'abroad', component: AbroadComponent },
  { path: 'country-info', component: CountryInfoComponent },
  { path: 'panel-discussion', component: PanelDiscussionComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'edu-assistance', component: EduAssistanceComponent },
  { path: 'scholarships', component: ScholarshipsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
