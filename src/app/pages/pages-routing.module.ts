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
import { TractorsComponent } from './component/tractors/tractors.component';
import { ThreshersComponent } from './component/threshers/threshers.component';
import { HarvestersComponent } from './component/harvesters/harvesters.component';
import { SeedersComponent } from './component/seeders/seeders.component';
import { PlowsComponent } from './component/plows/plows.component';
import { ForlliftoperatorComponent } from './component/forlliftoperator/forlliftoperator.component';
import { DrillingmachineComponent } from './component/drillingmachine/drillingmachine.component';
import { RoadcutterComponent } from './component/roadcutter/roadcutter.component';
import { WheeltractoeComponent } from './component/wheeltractoe/wheeltractoe.component';
import { CranemachineComponent } from './component/cranemachine/cranemachine.component';
import { GradermachineComponent } from './component/gradermachine/gradermachine.component';
import { RollermachineComponent } from './component/rollermachine/rollermachine.component';
import { LoaderoperatorComponent } from './component/loaderoperator/loaderoperator.component';
import { ExcavatoroperatorComponent } from './component/excavatoroperator/excavatoroperator.component';
import { CompactormachineComponent } from './component/compactormachine/compactormachine.component';
import { CargolandingtruckComponent } from './component/cargolandingtruck/cargolandingtruck.component';
import { DumpertruckComponent } from './component/dumpertruck/dumpertruck.component';
import { FlattruckComponent } from './component/flattruck/flattruck.component';
import { TrailertruckComponent } from './component/trailertruck/trailertruck.component';
import { TankertruckComponent } from './component/tankertruck/tankertruck.component';
import { ContainercarriertruckComponent } from './component/containercarriertruck/containercarriertruck.component';
import { FreezertruckComponent } from './component/freezertruck/freezertruck.component';
import { BoxtruckComponent } from './component/boxtruck/boxtruck.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'spare-parts',component:SparePartsComponent},
  {path:'used-trucks',component:UsedTrucksComponent},
  {path:'shops',component:ShopsComponent},
  {path:'shops-ads',component:ShopsadsComponent},
  {path:'usedtruck-for-sale',component:TrckforsaleComponent},
  {path:'all-blogs', component: AllblogsComponent},
  { path: 'detail-page/:adId', component: DetailpageComponent },
  {path:'blog-detail-page', component:BlogdetailspageComponent},
  {path:'videos', component:VideosComponent},
  {path:'filterpage',component:FilterpageComponent},
  {path:'showrooms',component:PaktruckshowroomsComponent},
  {path:'tractor',component:TractorsComponent},
  {path:'threshers',component:ThreshersComponent},
  {path:'harvester',component:HarvestersComponent},
  {path:'seeders',component:SeedersComponent},
  {path:'threshers',component:ThreshersComponent},
  {path:'plows',component:PlowsComponent},
  {path:'Forkliftoperator',component:ForlliftoperatorComponent},
  {path:'drillingmachine',component:DrillingmachineComponent},
  {path:'roadcutter',component:RoadcutterComponent},
  {path:'wheeltractor',component:WheeltractoeComponent},
  {path:'crane-machine',component:CranemachineComponent},
  {path:'grader-machine',component:GradermachineComponent},
  {path:'roller-machine',component:RollermachineComponent},
  {path:'loader-operator',component:LoaderoperatorComponent},
  {path:'excavator-operator',component:ExcavatoroperatorComponent},
  {path:'compactor-machine',component:CompactormachineComponent},
  {path:'cargo-landing-truck',component:CargolandingtruckComponent},
  {path:'dumper',component:DumpertruckComponent},
  {path:'flatbed',component:FlattruckComponent},
  {path:'trailer',component:TrailertruckComponent},
  {path:'tanker',component:TankertruckComponent},
  {path:'container-carrier',component:ContainercarriertruckComponent},
  {path:'freezer',component:FreezertruckComponent},
  {path:'box',component:BoxtruckComponent},
  {path:'dumper',component:DumpertruckComponent},



  


















//  Compactor machine  loader operator Excavator operator


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
