import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {path:'',component:ListComponent, data:{'title':'Users List'}},
  {path:'list',component:ListComponent, data:{'title':'Users List'}},
  {path:'add',component:AddComponent, data:{'title':'Add User'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
