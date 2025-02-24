import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginPhoneComponent } from './login-phone/login-phone.component';
import { MobileVarificationComponent } from './mobile-varification/mobile-varification.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { ForgetCodeVarificationComponent } from './forget-code-varification/forget-code-varification.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { ShopindividualvarificationComponent } from './shopindividualvarification/shopindividualvarification.component';
import { IndividualVarificatiionComponent } from './individual-varificatiion/individual-varificatiion.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LoginPhoneComponent,
    MobileVarificationComponent,
    ForgetPassComponent,
    ForgetCodeVarificationComponent,
    NewpasswordComponent,
    ShopindividualvarificationComponent,
    IndividualVarificatiionComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
