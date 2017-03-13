import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {User} from "../model/user.model";
import {AuthService} from "./shared/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //this.message = 'Incorrect credentials.';
  loginForm: FormGroup;
  userModel: User;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    //console.log("loaded");
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

   signin(value: any) {
    // this.userModel.setEmail(value.email);
    // this.userModel.setPassword(value.password);
    //this.router.navigate(['/project']);
    if (!this.authService.login(value.email, value.password)) {
      //this.message = 'Incorrect credentials.';
      setTimeout(function () {
        this.message = '';
      }.bind(this), 2500);
    }
    return false;
  }

  // forgotPassword():boolean {
  //   this.router.navigateByUrl('/forgetpass');
  //   return false;
  // }

}

