import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';
import { SignupComponent } from '../login/signup/signup.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { StudentmainComponent } from '../student/studentmain/studentmain.component';
import { TeachermainComponent } from '../teacher/teachermain/teachermain.component';
import { AdminModule } from '../admin/admin/admin.module';
import { SigninComponent } from '../login/signin/signin.component';

const routes: Routes = [{ path: '', component: MasterComponent,
  children:[{path:'',component:SigninComponent},
    {path:'signup',component:SignupComponent},
    {path: 'admin',loadChildren: () =>import('../admin/admin/admin.module').then(m => m.AdminModule)},
    {path:'student',loadChildren:()=>import('../student/studentmain/studentmain.module').then(m=>m.StudentmainModule)},
    {path:'teacher',loadChildren:()=>import('../teacher/teachermain/teachermain.module').then(m=>m.TeachermainModule)}
  ]
 }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
