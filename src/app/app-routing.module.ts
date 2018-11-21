import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {RegistrationComponent} from './registration/registration.component';
import {TutorsComponent} from './main-page/tutors/tutors.component';
import {ServicesTutorsComponent} from './main-page/services-tutors/services-tutors.component';
import {ReviewsComponent} from './main-page/reviews/reviews.component';
import {ContactsComponent} from './main-page/contacts/contacts.component';
import {JobsComponent} from './main-page/jobs/jobs.component';
import {AboutComponent} from './main-page/about/about.component';
import {UserComponent} from './user/user.component';
import {AuthGuard} from './guard/auth.guard';
import {MainComponent} from './main/main.component';


const routes: Routes = [
  {
    path: '', component: MainPageComponent, children: [
      {path: 'login', component: LoginPageComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: 'tutors', component: TutorsComponent},
      {path: 'services', component: ServicesTutorsComponent},
      {path: 'reviews', component: ReviewsComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'jobs', component: JobsComponent},
      {path: 'about', component: AboutComponent},
      {path: '/', component: MainComponent}
    ]
  },

  {
    path: 'user', component: UserComponent, canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
