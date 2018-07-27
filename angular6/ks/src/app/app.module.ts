import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { KsComponent } from './ks/ks.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    KsComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot() ,
    RouterModule.forRoot([
      {
         path: 'new-cmp',
         component: KsComponent
      }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
