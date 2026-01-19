import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachermainRoutingModule } from './teachermain-routing.module';
import { TeachermainComponent } from './teachermain.component';
import { TeacherfooterComponent } from '../teacherfooter/teacherfooter.component';
import { TeacherheaderComponent } from '../teacherheader/teacherheader.component';
import { TeachersidebarComponent } from '../teachersidebar/teachersidebar.component';


@NgModule({
  declarations: [
    TeachermainComponent,
    TeacherfooterComponent,
    TeacherheaderComponent,
    TeachersidebarComponent
  ],
  imports: [
    CommonModule,
    TeachermainRoutingModule
  ]
})
export class TeachermainModule { }
