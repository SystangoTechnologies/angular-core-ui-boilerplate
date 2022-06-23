import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import 3rd party components
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// import components
import { CommonModalComponent } from './components';

const comp = [CommonModalComponent];
@NgModule({
  declarations: [...comp],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    ChartsModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
            FormsModule,ReactiveFormsModule,
            TabsModule,
            BsDropdownModule,
            PerfectScrollbarModule,
            ChartsModule,
            HttpClientModule,
            PaginationModule,
            CollapseModule,
            TooltipModule,
            ModalModule,
  ...comp],
})
export class SharedModule { }
