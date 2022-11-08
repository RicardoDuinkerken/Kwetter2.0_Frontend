import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {HomeModule} from "./modules/home.module";
import {SideNavbarModule} from "./modules/side-navbar.module";
import {SignInModule} from "./modules/sign-in.module";
import {SignUpModule} from "./modules/sign-up.module";
import {ProfileSetupModule} from "./modules/profile-setup.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    NoopAnimationsModule,

    HomeModule,
    SignInModule,
    SignUpModule,
    ProfileSetupModule,
    SideNavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
