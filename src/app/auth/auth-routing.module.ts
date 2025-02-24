import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { LoginPhoneComponent } from './login-phone/login-phone.component';
import { MobileVarificationComponent } from './mobile-varification/mobile-varification.component';
import { ForgetCodeVarificationComponent } from './forget-code-varification/forget-code-varification.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { ShopindividualvarificationComponent } from './shopindividualvarification/shopindividualvarification.component';
import { IndividualVarificatiionComponent } from './individual-varificatiion/individual-varificatiion.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'forget-password',component:ForgetPassComponent},
  {path:'phone-login',component:LoginPhoneComponent},
  {path:'mobile-code-varification',component:MobileVarificationComponent},
  {path:'forget-password-varification',component:ForgetCodeVarificationComponent},
  {path:"new-password" ,component:NewpasswordComponent},
  {path:"shop-varification" ,component:ShopindividualvarificationComponent},
  {path:"individual-varification" ,component:IndividualVarificatiionComponent},








];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
