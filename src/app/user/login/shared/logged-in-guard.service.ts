import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class LoggedInGuardService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }
  /**
   * CanActivate method is responsible for guarding the authorized Url
   * @param
   * @returns  boolean
   *
   */
  canActivate(): boolean {
    if (this.authService.isLoggedIn()) { return true; }
    this.router.navigate(['/login']);
    return false;
    // return this.authService.isLoggedIn();
  }

}
