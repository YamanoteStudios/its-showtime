import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin.component';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninForm } from 'src/app/core/forms/signin-form';
import { AuthService } from 'src/app/auth/auth.service';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    SigninForm,
    AuthService
  ]
})
export class SigninModule { }
