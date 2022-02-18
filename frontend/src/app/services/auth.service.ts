import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';



const authUrl = 'http://localhost:5000/auth'

@Injectable({
  providedIn: 'root', 
})
export class AuthService {
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  postUserData(userData: any) {
    return this.http.post(`${authUrl}/register`, userData, {
      withCredentials: true,
    });
  }

  login(userData: any) {
    return this.http.post(`${authUrl}/login`, userData, {
      withCredentials: true,
    });
  }

}
