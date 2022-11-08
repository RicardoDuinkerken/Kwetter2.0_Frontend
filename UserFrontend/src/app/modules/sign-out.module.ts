import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {SignOutComponent} from "../components/sign-out/sign-out.component";

@NgModule({
  declarations: [
    SignOutComponent
  ],
  exports: [
    SignOutComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
  ]
})
export class SignOutModule { }
