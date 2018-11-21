import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TutorsComponent } from './main-page/tutors/tutors.component';
import { ServicesTutorsComponent } from './main-page/services-tutors/services-tutors.component';
import { ReviewsComponent } from './main-page/reviews/reviews.component';
import { ContactsComponent } from './main-page/contacts/contacts.component';
import { JobsComponent } from './main-page/jobs/jobs.component';
import { AboutComponent } from './main-page/about/about.component';
import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationComponent,
    MainPageComponent,
    TutorsComponent,
    ServicesTutorsComponent,
    ReviewsComponent,
    ContactsComponent,
    JobsComponent,
    AboutComponent,
    UserComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
