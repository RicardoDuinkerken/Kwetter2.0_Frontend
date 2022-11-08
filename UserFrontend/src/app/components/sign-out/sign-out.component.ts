import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthenticationService} from "../../services/Authentication.service";

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService, private authService: AuthenticationService,
              private router: Router, private snackbar: MatSnackBar){
  }

  ngOnInit(): void {
    this.logOut();
  }

  logOut(){
    this.setLoggedIn(false);
    this.tokenStorage.signOut();
    this.router.navigateByUrl('/sign-in');
    this.snackbar.open("Logged out successfully.", "", {
      duration: 3000
    });
  }

  private setLoggedIn(loggedIn:boolean){
    setTimeout(() => {
      this.authService.isLoggedin = loggedIn;
    },0)
  }

}
