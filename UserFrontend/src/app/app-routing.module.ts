import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {SignOutComponent} from "./components/sign-out/sign-out.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";

const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-out', component: SignOutComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  {path: '**', redirectTo: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

