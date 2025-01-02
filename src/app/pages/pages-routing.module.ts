import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SparePartsComponent } from './spare-parts/spare-parts.component';
import { UsedTrucksComponent } from './used-trucks/used-trucks.component';
import { ShopsComponent } from './shops/shops.component';
import { ShopsadsComponent } from './shopsads/shopsads.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { TrckforsaleComponent } from './trckforsale/trckforsale.component';
import { AllblogsComponent } from './allblogs/allblogs.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { VideosComponent } from './videos/videos.component';
import { PaktruckshowroomsComponent } from './paktruckshowrooms/paktruckshowrooms.component';
import { BlogdetailspageComponent } from './blogdetailspage/blogdetailspage.component';
import { FilterpageComponent } from './filterpage/filterpage.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'spare-parts',component:SparePartsComponent},
  {path:'used-trucks',component:UsedTrucksComponent},
  {path:'shops',component:ShopsComponent},
  {path:'shops-ads',component:ShopsadsComponent},
  {path:'usedtruck-for-sale',component:TrckforsaleComponent},
  {path:'all-blogs', component: AllblogsComponent},
  {path:'detail-page', component:DetailpageComponent},
  {path:'blog-detail-page', component:BlogdetailspageComponent},
  {path:'videos', component:VideosComponent},
  {path:'filterpage',component:FilterpageComponent},
  {path:'showrooms',component:PaktruckshowroomsComponent},







];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
