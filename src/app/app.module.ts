import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherdashboardComponent } from './teacher/teacherdashboard/teacherdashboard.component';
import { StudentdashboardComponent } from './student/studentdashboard/studentdashboard.component';
import { SigninComponent } from './login/signin/signin.component';
import { OtpComponent } from './login/otp/otp.component';
import { CreatepasswordComponent } from './login/createpassword/createpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherdashboardComponent,
    StudentdashboardComponent,
    SigninComponent,
    OtpComponent,
    CreatepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
