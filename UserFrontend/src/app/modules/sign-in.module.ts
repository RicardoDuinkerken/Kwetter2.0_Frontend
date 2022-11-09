import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from "../components/sign-in/sign-in.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {AppRoutingModule} from "../app-routing.module";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    SignInComponent
  ],
  exports: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatButtonModule,
  ]
})
export class SignInModule { }
