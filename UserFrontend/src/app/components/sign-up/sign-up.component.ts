import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../../services/token-storage.service";
import {AuthenticationService} from "../../services/Authentication.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginRequest} from "../../models/loginRequest";
import {RegisterRequest} from "../../models/registerRequest";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
    cPassword: [null, Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private tokenStorage: TokenStorageService,
              private authService: AuthenticationService, private router: Router, private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    if(this.checkPassword(this.form.value.password, this.form.value.cPassword)){
      this.register(this.form.value.email, this.form.value.password, this.form.value.cPassword);
    }
    else{
      this.snackbar.open("passwords must be the same", "", {duration: 3000});
    }
  }

  private checkPassword(p1:string, p2:string){
    return p1 == p2;
  }

  private register(email:string, p1:string, p2:string): void{
    let registerRequest: RegisterRequest = {
      email: email,
      password: p1,
      confirmPassword: p2
    };

    this.authService.signUp(registerRequest).pipe()
      .subscribe({
        next: res => {
          if(res == true){
            this.router.navigateByUrl('/sign-in')
            this.snackbar.open("Registered successfully.", "", {
              duration: 3000
            });
          }
        }
      });
  }
}
