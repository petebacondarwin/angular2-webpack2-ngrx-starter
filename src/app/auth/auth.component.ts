import {Component} from '@angular/core';
import {AuthState, AuthSelectors, AuthActions} from './auth.store';
import {CurrentUserComponent} from './current-user.component';
import {LoginButtonsComponent} from './login-buttons.component';

@Component({
  selector: 'app-auth-status',
  template: `
  <app-current-user [userInfo]="selectors.userInfo$ | async"></app-current-user>
  <app-login-buttons [authProviderConfigs]="selectors.authProviderConfigs$ | async"
                     [isLoggedIn]="selectors.isLoggedIn$ | async"
                     (logout)="actions.logout()"
                     (login)="actions.login($event)"></app-login-buttons>
  `,
  directives: [
    CurrentUserComponent,
    LoginButtonsComponent
  ]
})
export class AuthStatusComponent {
  constructor(public auth$: AuthState, public actions: AuthActions, public selectors: AuthSelectors) {}
}