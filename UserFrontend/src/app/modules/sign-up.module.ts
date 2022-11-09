import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {SignUpComponent} from "../components/sign-up/sign-up.component";
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    SignUpComponent
  ],
  exports: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
  ]
})
export class SignUpModule { }
