import {Injectable} from '@angular/core';
import {Router} from '@angular/router'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

/**
 * This Service is used for authentication purpose
 * It is used in Login Component
 *
 *
 */
@Injectable()
export class AuthService {
  isLogged: boolean = false;
  constructor(public router: Router) {
  }
  /**
 * Login method checking from database and return token saving in the localstorage
 * @param   username string , password string
 * @returns  boolean, in future it will return token
 *
 */
  login(email: string, password: string): boolean {
    if (email === 'a' && password === 'a') {
      localStorage.setItem('email', email);
      // Observable.of(true).delay(1000).do(val => this.isLogged = true);
      this.isLogged = true;
      this.router.navigate(['/home']);

      return true;
    }

    return false;
  }
  /**
   * Logout method removing token from the localstorage
   * @param
   * @returns
   *
   */
  logout(): any {
    localStorage.removeItem('email');
    this.isLogged = false;
    this.router.navigateByUrl('');

  }
  /**
 * GetUser method to get the the current user
 * @param
 * @returns  boolean
 *
 */

  getUser(): any {
    return localStorage.getItem('email');
  }
  /**
   * IsLoggedIn method for cheching if the user is logged in or not
   * @param
   * @returns  boolean
   *
   */
  isLoggedIn(): boolean {

    return this.getUser() !== null;
  }
}

// export var AUTH_PROVIDERS: Array<any> = [
//   provide(AuthService, { useClass: AuthService })
// ];
