import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';
import {LoginRequest} from "../models/loginRequest";
import {BehaviorSubject, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{
  private _isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  get isLoggedIn(){
    return this._isLoggedIn.asObservable();
  }

  set isLoggedin(loggedIn: boolean){
    this._isLoggedIn.next(loggedIn);
  }

  signIn(loginRequest: LoginRequest){
    return this.http.post(environment.authApi + '/login', loginRequest);
  }

  signUp(){

  }
}
