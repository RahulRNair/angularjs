import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from './Dashboard/dashboard.component';
import {LoginComponent} from './Login/login.component';
import { AuthGuard } from './Auth/index';
import { AccountComponent } from './Account/account.component';

const routes: Routes = [
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'login',component:LoginComponent},    
    {path:'dashboard',component:DashboardComponent, canActivate: [AuthGuard]},
    {path:'account',component:AccountComponent, canActivate:[AuthGuard]}
]
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
export class AppRoutingModule {}