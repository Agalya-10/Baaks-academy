import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HeadbarComponent } from './admin/headbar/headbar.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { FooterComponent } from './admin/footer/footer.component';
=======
import { TeacherdashboardComponent } from './teacher/teacherdashboard/teacherdashboard.component';
import { StudentdashboardComponent } from './student/studentdashboard/studentdashboard.component';
>>>>>>> cc82a1c3796db6ee2b14cba3f0189024af2e7ee5
import { SigninComponent } from './login/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    DashboardComponent,
    HeadbarComponent,
    SidebarComponent,
    FooterComponent,
=======
    TeacherdashboardComponent,
    StudentdashboardComponent,
>>>>>>> cc82a1c3796db6ee2b14cba3f0189024af2e7ee5
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
