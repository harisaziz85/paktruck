import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { AdsuploadRoutingModule } from './adsupload-routing.module';
import { SparepartsuploadComponent } from './sparepartsupload/sparepartsupload.component';
import { SelltruckformComponent } from './selltruckform/selltruckform.component';
import { AddphonevarificationComponent } from './addphonevarification/addphonevarification.component';
import { AddsuploadsccessComponent } from './addsuploadsccess/addsuploadsccess.component';
import { AdviewComponent } from './adview/adview.component';


@NgModule({
  declarations: [
  
    SparepartsuploadComponent,
       SelltruckformComponent,
       AddphonevarificationComponent,
       AddsuploadsccessComponent,
       AdviewComponent
  ],
  imports: [
    CommonModule,
    AdsuploadRoutingModule,
    FormsModule
  ]
})
export class AdsuploadModule { }
