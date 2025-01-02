import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { MyadsComponent } from './myads/myads.component';
import { ProfileComponent } from './component/profile/profile.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { SaveadsComponent } from './saveads/saveads.component';
import { MyalertsComponent } from './myalerts/myalerts.component';
import { VarificationComponent } from './varification/varification.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { ShowroomprofileComponent } from './showroomprofile/showroomprofile.component';


@NgModule({
  declarations: [
    EditprofileComponent,
    MyadsComponent,
    ProfileComponent,
    MenubarComponent,
    SaveadsComponent,
    MyalertsComponent,
    VarificationComponent,
    ChatComponent,
    ShowroomprofileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule
  ]
})
export class ProfileModule { }
