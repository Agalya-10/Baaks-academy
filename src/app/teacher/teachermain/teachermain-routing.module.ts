import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachermainComponent } from './teachermain.component';
import { TeacherdashboardComponent } from '../teacherdashboard/teacherdashboard.component';

const routes: Routes = [{ path: '', component: TeachermainComponent,
  children:[{path:'',component:TeacherdashboardComponent}]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachermainRoutingModule { }
