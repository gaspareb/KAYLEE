import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  loggedInStatus = false;

  getUserDetails(email, password) {
    return this.http.post<any>('http://localhost:3000/auth', { email, password});
  }
}
