import {Component} from '@angular/core';
import {AuthState, selectIsLoggedIn, selectUserInfo, AuthActions} from './auth.store';

@Component({
  selector: 'app-auth-status',
  template: `
  <div *ngIf="isLoggedIn$ | async">Logged In as {{(userInfo$ | async)?.displayName}} <button (click)="actions.logout()">Logout</button></div>
  <div *ngIf="!(isLoggedIn$ | async)">
    <button (click)="actions.loginViaGoogle()">Log In via Google</button>
    <button (click)="actions.loginViaTwitter()">Log In via Twitter</button>
    <button (click)="actions.loginViaFacebook()">Log In via Facebook</button>
  </div>
  `
})
export class AuthStatusComponent {
  isLoggedIn$ = selectIsLoggedIn(this.auth$);
  userInfo$ = selectUserInfo(this.auth$);
  constructor(public auth$: AuthState, public actions: AuthActions) {}
}