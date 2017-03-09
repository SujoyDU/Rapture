// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {User} from "../model/user.model";
import {AuthService} from "./shared/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  message = '';
  loginForm: FormGroup;
  userModel: User;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    this.userModel = new User('', '');
  }


  ngOnInit() {
    //console.log("loaded");
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  // signin(value: any) {
  //   this.userModel.setEmail(value.email);
  //   this.userModel.setPassword(value.password);
  //   //this.router.navigate(['/project']);
  //   if (!this.authService.login(value.email, value.password)) {
  //     this.message = 'Incorrect credentials.';
  //     setTimeout(function () {
  //       this.message = '';
  //     }.bind(this), 2500);
  //   }
  //   return false;
  // }
  //
  // forgotPassword():boolean {
  //   this.router.navigateByUrl('/forgetpass');
  //   return false;
  // }
  // logout(): boolean {
  //   this.authService.logout();
  //   this.router.navigateByUrl('/login');
  //   return false;
  // }

}
