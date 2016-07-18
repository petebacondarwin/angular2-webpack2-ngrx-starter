import {Component} from '@angular/core';
import {AuthState, selectIsLoggedIn, AuthActions} from './auth.store';

@Component({
  selector: 'app-auth-status',
  template: `
  <div *ngIf="isLoggedIn$ | async">Logged In</div>
  <button *ngIf="!(isLoggedIn$ | async)" (click)="actions.login()">Log In</button>
  `
})
export class AuthStatusComponent {
  isLoggedIn$ = selectIsLoggedIn(this.auth$);
  constructor(public auth$: AuthState, public actions: AuthActions) {}
}