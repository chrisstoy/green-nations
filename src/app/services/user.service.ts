import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import { UserApi } from '../../fw/users/user-api';

@Injectable()
export class UserService implements UserApi {

  isAuthenticated = true;
  userName: string;

  constructor(
    private router: Router,
  ) { }

  signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
    console.log(`UserService.signIn: ${username} ${password} ${rememberMe}`);
    this.isAuthenticated = true;
    this.userName = username;
    return Observable.of({}).delay(1000);
    //return Observable.of({}).delay(2000).flatMap(x => Observable.throw('Invalid User Name and/or Password'));
  }

  signOut() {
    this.userName = '';
    this.isAuthenticated = false;
    this.router.navigate(['/signin']);
    return Observable.of({}).delay(1000);
  }
}
