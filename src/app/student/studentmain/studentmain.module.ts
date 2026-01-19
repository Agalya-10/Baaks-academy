import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentmainRoutingModule } from './studentmain-routing.module';
import { StudentmainComponent } from './studentmain.component';
import { StudentsidebarComponent } from '../studentsidebar/studentsidebar.component';
import { StudentheaderComponent } from '../studentheader/studentheader.component';
import { StudentfooterComponent } from '../studentfooter/studentfooter.component';


@NgModule({
  declarations: [
    StudentmainComponent,
    StudentsidebarComponent,
    StudentheaderComponent,
    StudentfooterComponent
  ],
  imports: [
    CommonModule,
    StudentmainRoutingModule
  ]
})
export class StudentmainModule { }
