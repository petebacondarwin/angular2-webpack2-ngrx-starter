import {Component} from '@angular/core';
import {AuthState, AuthSelectors, AuthActions} from './auth.store';

@Component({
  selector: 'app-auth-status',
  template: `
  <div *ngIf="selectors.isLoggedIn$ | async">
    Logged In as {{(selectors.userInfo$ | async)?.displayName}}
    <button (click)="actions.logout()">Logout</button>
  </div>
  <div *ngIf="!(selectors.isLoggedIn$ | async)">
    <button (click)="actions.loginViaGoogle()">Log In via Google</button>
    <button (click)="actions.loginViaTwitter()">Log In via Twitter</button>
    <button (click)="actions.loginViaFacebook()">Log In via Facebook</button>
  </div>
  `
})
export class AuthStatusComponent {
  constructor(public auth$: AuthState, public actions: AuthActions, public selectors: AuthSelectors) {}
}