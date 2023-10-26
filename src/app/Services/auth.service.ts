import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment'
import { UserForLogin, UserForRegister } from '../Model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl=environment.baseUrl;

  constructor(private http: HttpClient) { }

  authUser(user:UserForLogin): Observable<UserForLogin>{
    return this.http.post<UserForLogin>(this.baseUrl + '/Account/Login',user);
    
  }

  registerUser(user: UserForRegister) {
    return this.http.post(this.baseUrl + '/Account/Register', user);
}
}
