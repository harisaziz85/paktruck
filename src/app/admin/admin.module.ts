import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { TotalusersComponent } from './totalusers/totalusers.component';
import { AdmincardsComponent } from './component/admincards/admincards.component';
import { ActiveusersComponent } from './activeusers/activeusers.component';
import { ShopusersComponent } from './shopusers/shopusers.component';
import { TotlaAdsComponent } from './totla-ads/totla-ads.component';
import { RegisteredshopsComponent } from './registeredshops/registeredshops.component';


@NgModule({
  declarations: [
    SidebarComponent,
    AdmindashboardComponent,
    TopbarComponent,
    AdminLoginComponent,
    TotalusersComponent,
    AdmincardsComponent,
    ActiveusersComponent,
    ShopusersComponent,
    TotlaAdsComponent,
    RegisteredshopsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
