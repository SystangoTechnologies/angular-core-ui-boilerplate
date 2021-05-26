import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '../../containers';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { AuthGuard } from '../../guard/auth.guard';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {path:'',component:PagesComponent,children:[
    {path:'',component:DashbaordComponent, data:{'title':'Home Page'}},
    {path:'users',loadChildren:()=>import("./users/users.module").then((m)=>m.UsersModule),data:{'title':'Users'}}
  ],canActivateChild:[AuthGuard],data:{'title':'Home'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
