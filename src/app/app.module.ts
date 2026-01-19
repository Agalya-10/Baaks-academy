import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherdashboardComponent } from './teacher/teacherdashboard/teacherdashboard.component';
import { StudentdashboardComponent } from './student/studentdashboard/studentdashboard.component';
import { SigninComponent } from './login/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherdashboardComponent,
    StudentdashboardComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
