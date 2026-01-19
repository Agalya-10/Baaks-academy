import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HeadbarComponent } from '../headbar/headbar.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    DashboardComponent,
    HeadbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule
  ]
})
export class AdminModule { }
