import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {AuthenticationService} from "../../services/Authentication.service";

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  profilePicture: string = "./assets/img/default_duck_icon_white_bg.png";
  username: string = "John Doe";
  isLoggedIn = false;

  constructor(private tokenStorage: TokenStorageService, private authService: AuthenticationService) {
  }

  setDefaultPic() {
    this.profilePicture = "./assets/img/default_duck_icon_white_bg.png" ;
  }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(res => this.isLoggedIn = res);
  }
}
