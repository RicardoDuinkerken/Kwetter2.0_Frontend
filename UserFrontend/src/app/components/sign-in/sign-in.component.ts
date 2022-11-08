import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
  isLoginFailed = false;

  constructor(private formBuilder: FormBuilder, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void{

    //login auth service stuff
    console.log(this.form.value.email + " " + this.form.value.password);
  }

  reloadPage(): void {
    window.location.reload();
  }

}
