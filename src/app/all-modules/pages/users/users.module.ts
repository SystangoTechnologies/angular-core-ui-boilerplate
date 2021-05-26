import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class UsersModule { }
