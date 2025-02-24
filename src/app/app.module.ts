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
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './core/helpers/jwt.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AllshopsComponent } from './allshops/allshops.component';
// import { SparepartsdetailsComponent } from './sparepartsdetails/sparepartsdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AppDownloadComponent,
    NewsletterComponent,
    ShopsindividualpopupComponent,
    TopbarComponent,
    AllshopsComponent,
    // SparepartsdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
    

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
