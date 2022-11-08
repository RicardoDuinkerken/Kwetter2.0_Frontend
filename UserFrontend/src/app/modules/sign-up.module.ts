import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignUpComponent} from "../components/sign-up/sign-up.component";

@NgModule({
  declarations: [
    SignUpComponent
  ],
  exports: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SignUpModule { }
