import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { MyadsComponent } from './myads/myads.component';
import { SaveadsComponent } from './saveads/saveads.component';
import { MyalertsComponent } from './myalerts/myalerts.component';
import { VarificationComponent } from './varification/varification.component';
import { ChatComponent } from './chat/chat.component';
import { ShowroomprofileComponent } from './showroomprofile/showroomprofile.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'myads', component: MyadsComponent },
  { path: 'savedads', component: SaveadsComponent },
  { path: 'myalerts', component: MyalertsComponent },
  { path: 'varification', component: VarificationComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'showroom-profile', component: ShowroomprofileComponent },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
