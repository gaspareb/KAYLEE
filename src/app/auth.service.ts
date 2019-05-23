import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  loggedInStatus = false;
// tslint:disable-next-line: no-inferrable-types
 baseurl: string = 'https://www.superiortechnologysolutions.net:3000/';
  // tslint:disable-next-line: no-inferrable-types
// baseurl: string = 'http://localhost:3000/';
  getUserDetails(email, password) {
    return this.http.post<any>(this.baseurl + 'auth', { email, password});
  }
}
