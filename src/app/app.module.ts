import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormTest1Component } from './form-test1/form-test1.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginVerifyComponent } from './login-verify/login-verify.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { CardpaymentComponent } from './cardpayment/cardpayment.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTest1Component,
    LoginComponent,
    LoginVerifyComponent,
    ChangepasswordComponent,
    ResetpasswordComponent,
    CardpaymentComponent,
    UserinfoComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
