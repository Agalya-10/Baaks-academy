import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentmainComponent } from './studentmain.component';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';
import { StudentdashboardComponent } from '../studentdashboard/studentdashboard.component';

const routes: Routes = [{ path: '', component: StudentmainComponent,
  children:[{path:'',component:StudentdashboardComponent}]

 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentmainRoutingModule { }
