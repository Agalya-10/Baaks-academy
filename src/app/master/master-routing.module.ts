import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';
import { SignupComponent } from '../login/signup/signup.component';

const routes: Routes = [{ path: '', component: MasterComponent,
  children:[{path:'',component:SignupComponent}]
 }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
