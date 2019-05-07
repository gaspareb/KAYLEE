import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  themessage: string;
  success: boolean;
  error: boolean;

  constructor(private formBuilder: FormBuilder, private Auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email1: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }
  loginUser(event) {
    if (this.loginForm.valid) {
      this.error = false;
      this.success = false;
      event.preventDefault();
      const target = event.target;
      this.Auth.getUserDetails(target.email1.value, target.password.value)
              .subscribe( data => {
                if (data.success === true) {
                  this.router.navigate(['add']);
                  this.Auth.loggedInStatus = true;
                } else {
                  this.Auth.loggedInStatus = false;
                  this.error = true;
                  this.success = false;
                  this.themessage = data.message;
                }
              },
      err => this._handleSubmitSuccess(err));
    }
  }
  private _handleSubmitSuccess(err) {
    this.error = true;
    this.success = false;
    this.themessage = err.error.message;
  }

  get f() { return this.loginForm.controls; }
}
