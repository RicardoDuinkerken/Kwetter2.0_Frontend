import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginRequest} from "../../models/loginRequest";
import {AuthenticationService} from "../../services/Authentication.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {log} from "util";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    email: [null, Validators.required],
    password: [null, Validators.required]
  });
  isLoggedIn = false;

  constructor(private formBuilder: FormBuilder, private tokenStorage: TokenStorageService,
              private authService: AuthenticationService, private router: Router, private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void{
    let loginRequest: LoginRequest = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.authService.signIn(loginRequest).pipe()
      .subscribe({
        next: res =>{ this.tokenStorage.saveToken(res.toString());
          this.authService.isLoggedin = true;
          this.router.navigateByUrl('/index')
          this.snackbar.open("Logged in successfully.", "", {
            duration: 3000
          });
        },
        error: e => {
          console.log(e);
        }
      });
  }
}
