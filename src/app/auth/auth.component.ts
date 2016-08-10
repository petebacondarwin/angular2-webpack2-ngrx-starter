import {Component} from '@angular/core';
import {AuthState, AuthSelectors, AuthActions} from './auth.store';

@Component({
  selector: 'app-auth-status',
  template: `
  <app-current-user [user]="selectors.userInfo$ | async"></app-current-user>
  <app-login-buttons [authProviderConfigs]="selectors.authProviderConfigs$ | async"
                     [isLoggedIn]="selectors.isLoggedIn$ | async"
                     (logout)="actions.logout()"
                     (login)="actions.login($event)"></app-login-buttons>
  `
})
export class AuthStatusComponent {
  constructor(public auth$: AuthState, public actions: AuthActions, public selectors: AuthSelectors) {
    console.log(this.selectors);
  }
}