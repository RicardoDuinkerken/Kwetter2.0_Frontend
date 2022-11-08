import {NgModule} from '@angular/core';
import {AppRoutingModule} from "../app-routing.module";
import {CommonModule} from '@angular/common';
import {SideNavbarComponent} from "../components/side-navbar/side-navbar.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SideNavbarComponent
  ],
  exports: [
    SideNavbarComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    NoopAnimationsModule,
  ]
})
export class SideNavbarModule { }
