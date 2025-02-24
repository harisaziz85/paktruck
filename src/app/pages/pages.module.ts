import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PagesRoutingModule } from './pages-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SparePartsComponent } from './spare-parts/spare-parts.component';
import { UsedTrucksComponent } from './used-trucks/used-trucks.component';
import { ShopsComponent } from './shops/shops.component';
import { ShopsadsComponent } from './shopsads/shopsads.component';
import { MachineryusedpartsComponent } from './component/machineryusedparts/machineryusedparts.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { TrckforsaleComponent } from './trckforsale/trckforsale.component';
import { MakesmodelsComponent } from './component/makesmodels/makesmodels.component';
import { AutostorenavsandtabsComponent } from './component/autostorenavsandtabs/autostorenavsandtabs.component';
import { CitiescategorynavandtabsComponent } from './component/citiescategorynavandtabs/citiescategorynavandtabs.component';
import { YoutubeComponent } from './component/youtube/youtube.component';
import { FacebookComponent } from './component/facebook/facebook.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { AllblogsComponent } from './allblogs/allblogs.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { ShopsindividualpopupComponent } from '../common/shopsindividualpopup/shopsindividualpopup.component';
import { VideosComponent } from './videos/videos.component';
import { FeaturedvideosComponent } from './component/featuredvideos/featuredvideos.component';
import { TipsandadviceComponent } from './component/tipsandadvice/tipsandadvice.component';
import { OpinionsComponent } from './component/opinions/opinions.component';
import { MinitruckcategoreyComponent } from './component/minitruckcategorey/minitruckcategorey.component';
import { EarthmovigmachineryComponent } from './component/earthmovigmachinery/earthmovigmachinery.component';
import { BrandsComponent } from './component/brands/brands.component';
import { OurvideosComponent } from './component/ourvideos/ourvideos.component';
import { PaktruckmanageComponent } from './component/paktruckmanage/paktruckmanage.component';
import { FeaturedtrucksforsaleComponent } from './component/featuredtrucksforsale/featuredtrucksforsale.component';
import { FeaturedbusesforsaleComponent } from './component/featuredbusesforsale/featuredbusesforsale.component';
import { NewsreviewsnavstabsComponent } from './component/newsreviewsnavstabs/newsreviewsnavstabs.component';
import { SparepartscomponComponent } from './component/sparepartscompon/sparepartscompon.component';
import { PaktruckshowroomsComponent } from './paktruckshowrooms/paktruckshowrooms.component';
import { BlogdetailspageComponent } from './blogdetailspage/blogdetailspage.component';
import { CommentsComponent } from './component/comments/comments.component';
import { FilterpageComponent } from './filterpage/filterpage.component';
import { FiltercomponentComponent } from './component/filtercomponent/filtercomponent.component';
import { BrowsecategoreyComponent } from './component/browsecategorey/browsecategorey.component';
import { UsedbussesforsaleComponent } from './component/usedbussesforsale/usedbussesforsale.component';
import { PaktruckvideosComponent } from './component/paktruckvideos/paktruckvideos.component';
import { BlogsnewsComponent } from './component/blogsnews/blogsnews.component';
import { TestingComponent } from './testing/testing.component';
import { AgricultureMachineryComponent } from './agriculture-machinery/agriculture-machinery.component';
import { AgriculturemachineryComponent } from './component/agriculturemachinery/agriculturemachinery.component';
import { CargolandingtruckComponent } from './component/cargolandingtruck/cargolandingtruck.component';
import { DumpertruckComponent } from './component/dumpertruck/dumpertruck.component';
import { FlattruckComponent } from './component/flattruck/flattruck.component';
import { TrailertruckComponent } from './component/trailertruck/trailertruck.component';
import { TankertruckComponent } from './component/tankertruck/tankertruck.component';
import { ContainercarriertruckComponent } from './component/containercarriertruck/containercarriertruck.component';
import { FreezertruckComponent } from './component/freezertruck/freezertruck.component';
import { BoxtruckComponent } from './component/boxtruck/boxtruck.component';
import { DumptruckComponent } from './component/dumptruck/dumptruck.component';
import { ExcavatoroperatorComponent } from './component/excavatoroperator/excavatoroperator.component';
import { LoaderoperatorComponent } from './component/loaderoperator/loaderoperator.component';
import { RollermachineComponent } from './component/rollermachine/rollermachine.component';
import { GradermachineComponent } from './component/gradermachine/gradermachine.component';
import { CranemachineComponent } from './component/cranemachine/cranemachine.component';
import { WheeltractoeComponent } from './component/wheeltractoe/wheeltractoe.component';
import { RoadcutterComponent } from './component/roadcutter/roadcutter.component';
import { DrillingmachineComponent } from './component/drillingmachine/drillingmachine.component';
import { TractormachineComponent } from './component/tractormachine/tractormachine.component';
import { ForlliftoperatorComponent } from './component/forlliftoperator/forlliftoperator.component';
import { TractorsComponent } from './component/tractors/tractors.component';
import { ThreshersComponent } from './component/threshers/threshers.component';
import { HarvestersComponent } from './component/harvesters/harvesters.component';
import { SeedersComponent } from './component/seeders/seeders.component';
import { PlowsComponent } from './component/plows/plows.component';
import { CompactormachineComponent } from './component/compactormachine/compactormachine.component';
// import { SparepartsComponent } from './spareparts/spareparts.component';

@NgModule({
  declarations: [
    HomepageComponent,
    ContactUsComponent,
    SparePartsComponent,
    UsedTrucksComponent,
    ShopsComponent,
    ShopsadsComponent,
    MachineryusedpartsComponent,
    SidebarComponent,
    TrckforsaleComponent,
    MakesmodelsComponent,
    AutostorenavsandtabsComponent,
    CitiescategorynavandtabsComponent,
    YoutubeComponent,
    FacebookComponent,
    BlogsComponent,
    AllblogsComponent,
    DetailpageComponent,
    VideosComponent,
    FeaturedvideosComponent,
    TipsandadviceComponent,
    OpinionsComponent,
    MinitruckcategoreyComponent,
    EarthmovigmachineryComponent,
    BrandsComponent,
    OurvideosComponent,
    PaktruckmanageComponent,
    FeaturedtrucksforsaleComponent,
    FeaturedbusesforsaleComponent,
    NewsreviewsnavstabsComponent,
    SparepartscomponComponent,
    PaktruckshowroomsComponent,
    BlogdetailspageComponent,
    CommentsComponent,
    FilterpageComponent,
    FiltercomponentComponent,
    BrowsecategoreyComponent,
    UsedbussesforsaleComponent,
    PaktruckvideosComponent,
    BlogsnewsComponent,
    TestingComponent,
    AgricultureMachineryComponent,
    AgriculturemachineryComponent,
    CargolandingtruckComponent,
    DumpertruckComponent,
    FlattruckComponent,
    TrailertruckComponent,
    TankertruckComponent,
    ContainercarriertruckComponent,
    FreezertruckComponent,
    BoxtruckComponent,
    DumptruckComponent,
    ExcavatoroperatorComponent,
    LoaderoperatorComponent,
    RollermachineComponent,
    GradermachineComponent,
    CranemachineComponent,
    WheeltractoeComponent,
    RoadcutterComponent,
    DrillingmachineComponent,
    TractormachineComponent,
    ForlliftoperatorComponent,
    TractorsComponent,
    ThreshersComponent,
    HarvestersComponent,
    SeedersComponent,
    PlowsComponent,
    CompactormachineComponent,
    // SparepartsComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    CarouselModule
  ]
})
export class PagesModule { }
