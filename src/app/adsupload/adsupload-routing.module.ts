import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SparepartsuploadComponent } from './sparepartsupload/sparepartsupload.component';
import { SelltruckformComponent } from './selltruckform/selltruckform.component';
import { AddphonevarificationComponent } from './addphonevarification/addphonevarification.component';
import { AddsuploadsccessComponent } from './addsuploadsccess/addsuploadsccess.component';
import { AdviewComponent } from './adview/adview.component';

const routes: Routes = [
  {path:'spare-parts-upload', component:SparepartsuploadComponent},
  {path:'sell-truck-form', component:SelltruckformComponent},
  {path:'phone-varification', component:AddphonevarificationComponent},
  {path:'upload-success', component:AddsuploadsccessComponent},
  {path:'view-ad', component:AdviewComponent},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsuploadRoutingModule { }
