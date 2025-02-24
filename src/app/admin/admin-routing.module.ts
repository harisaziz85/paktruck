import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { TotalusersComponent } from './totalusers/totalusers.component';
import { ActiveusersComponent } from './activeusers/activeusers.component';
import { ShopusersComponent } from './shopusers/shopusers.component';
import { TotlaAdsComponent } from './totla-ads/totla-ads.component';
import { RegisteredshopsComponent } from './registeredshops/registeredshops.component';

const routes: Routes = [
  {path:'admin',component:AdmindashboardComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'total-users',component:TotalusersComponent},
  {path:'active-users',component:ActiveusersComponent},
  {path:'shop-users',component:ShopusersComponent},
  {path:'total-ads',component:TotlaAdsComponent},
  {path:'registered-shops',component:RegisteredshopsComponent},





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
