import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // name: string;
  loginModel: LoginModel;
  message = '';
  status = false;
  loginForm: FormGroup;
  submitted = false;

  constructor() { }
  ngOnInit(): void { }

  login() {
    if (this.status === false) {
      this.message = 'User ID or Password is not correct!!';
    }
  }
  onSubmit() { this.submitted = true; }

}

export interface LoginModel {
  id: string;
  password: string;
}
