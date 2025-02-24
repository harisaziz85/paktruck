import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { AdsuploadRoutingModule } from './adsupload-routing.module';
import { SparepartsuploadComponent } from './sparepartsupload/sparepartsupload.component';
import { SelltruckformComponent } from './selltruckform/selltruckform.component';
import { AddphonevarificationComponent } from './addphonevarification/addphonevarification.component';
import { AddsuploadsccessComponent } from './addsuploadsccess/addsuploadsccess.component';
import { AdviewComponent } from './adview/adview.component';
import { VehicleAdUloadComponent } from './vehicle-ad-uload/vehicle-ad-uload.component';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  
    SparepartsuploadComponent,
       SelltruckformComponent,
       AddphonevarificationComponent,
       AddsuploadsccessComponent,
       AdviewComponent,
       VehicleAdUloadComponent
  ],
  imports: [
    CommonModule,
    AdsuploadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdsuploadModule { }
