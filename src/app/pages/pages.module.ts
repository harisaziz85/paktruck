import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
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
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
