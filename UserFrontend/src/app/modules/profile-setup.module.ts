import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileSetupComponent} from "../components/profile-setup/profile-setup.component";

@NgModule({
  declarations: [
    ProfileSetupComponent
  ],
  exports: [
    ProfileSetupComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ProfileSetupModule { }
