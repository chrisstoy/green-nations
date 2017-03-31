import { Observable } from 'rxjs/Observable';

export abstract class UserApi {
  userName: string;
  signIn: (username: string, password: string, rememberMe: boolean) => Observable<any>;
  signOut: () => Observable<any>;
  // changePassword
}
