import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  loggedInStatus = false;
  baseurl = 'https://www.superiortechnologysolutions.net:3000/';
   // baseurl: string = 'http://localhost:3000/';
  getUserDetails(email, password) {
    return this.http.post<any>(this.baseurl + 'auth', { email, password});
  }
}
