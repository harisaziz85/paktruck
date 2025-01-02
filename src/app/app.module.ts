import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { AppDownloadComponent } from './common/app-download/app-download.component';
import { NewsletterComponent } from './common/newsletter/newsletter.component';
import { FormsModule } from '@angular/forms';
import { ShopsindividualpopupComponent } from './common/shopsindividualpopup/shopsindividualpopup.component';
import { TopbarComponent } from './common/topbar/topbar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AppDownloadComponent,
    NewsletterComponent,
    ShopsindividualpopupComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
